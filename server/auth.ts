// Sessões (cookie HttpOnly), limite de tentativas e proteção contra requisição forjada (CSRF).
import { ENV, hostOf } from './env.js';
import { one, run } from './db.js';
import { randomToken, sha256 } from './crypto.js';
import { HttpError, setCookie, type Ctx } from './http.js';

const DAY = 86400_000;
export const COOKIE = { user: 'cg_s', admin: 'cg_a' } as const;
const TTL = { user: 60 * DAY, admin: 12 * 3600_000 }; // admin: 12 h e precisa entrar de novo
const IDLE = { user: 60 * DAY, admin: 2 * 3600_000 }; // admin: 2 h parado derruba a sessão

type Kind = 'user' | 'admin';

export function startSession(ctx: Ctx, kind: Kind, subjectId: string) {
  const token = randomToken(32);
  const now = Date.now();
  run('INSERT INTO sessions (token_hash, kind, subject_id, created_at, expires_at, last_seen, ip, ua) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    sha256(token), kind, subjectId, now, now + TTL[kind], now, ctx.ip, String(ctx.req.headers['user-agent'] ?? '').slice(0, 200));
  setCookie(ctx.res, COOKIE[kind], token, {
    maxAge: TTL[kind] / 1000,
    secure: ENV.prod,
    // O do cliente vale no funil e no app (domínio do cookie); o do admin fica só no host do app.
    domain: kind === 'user' ? ENV.cookieDomain : undefined,
    sameSite: kind === 'admin' ? 'Strict' : 'Lax',
  });
}

export function sessionSubject(ctx: Ctx, kind: Kind): string | null {
  const token = ctx.cookies[COOKIE[kind]];
  if (!token || token.length > 100) return null;
  const s = one<{ subject_id: string; expires_at: number; last_seen: number }>(
    'SELECT subject_id, expires_at, last_seen FROM sessions WHERE token_hash = ? AND kind = ?', sha256(token), kind);
  const now = Date.now();
  if (!s || s.expires_at < now || now - s.last_seen > IDLE[kind]) return null;
  if (now - s.last_seen > 60_000) run('UPDATE sessions SET last_seen = ? WHERE token_hash = ?', now, sha256(token));
  return s.subject_id;
}

export function endSession(ctx: Ctx, kind: Kind) {
  const token = ctx.cookies[COOKIE[kind]];
  if (token) run('DELETE FROM sessions WHERE token_hash = ?', sha256(token));
  setCookie(ctx.res, COOKIE[kind], '', { maxAge: 0, secure: ENV.prod, domain: kind === 'user' ? ENV.cookieDomain : undefined, sameSite: kind === 'admin' ? 'Strict' : 'Lax' });
}

/** Derruba todas as sessões de alguém (troca de senha, exclusão, ação do admin). */
export const endAllSessions = (kind: Kind, subjectId: string, exceptCtx?: Ctx) => {
  const keep = exceptCtx?.cookies[COOKIE[kind]];
  if (keep) run('DELETE FROM sessions WHERE kind = ? AND subject_id = ? AND token_hash != ?', kind, subjectId, sha256(keep));
  else run('DELETE FROM sessions WHERE kind = ? AND subject_id = ?', kind, subjectId);
};

export function requireUser(ctx: Ctx): string {
  const id = sessionSubject(ctx, 'user');
  if (!id) throw new HttpError(401, 'unauthorized');
  return id;
}

export function requireAdmin(ctx: Ctx): string {
  const id = sessionSubject(ctx, 'admin');
  if (!id) throw new HttpError(401, 'unauthorized');
  // Admin só no endereço do app (quando os dois endereços estão configurados).
  if (ENV.appUrl && ctx.host !== hostOf(ENV.appUrl) && ENV.prod) throw new HttpError(404, 'not_found');
  return id;
}

// ---------- limite de tentativas (memória; um container só) ----------

const buckets = new Map<string, { n: number; reset: number }>();
export function limit(key: string, max: number, windowMs: number) {
  const now = Date.now();
  const b = buckets.get(key);
  if (!b || b.reset < now) { buckets.set(key, { n: 1, reset: now + windowMs }); return; }
  b.n++;
  if (b.n > max) throw new HttpError(429, 'too_many_requests', { retryAfter: Math.ceil((b.reset - now) / 1000) });
}
setInterval(() => { const now = Date.now(); for (const [k, b] of buckets) if (b.reset < now) buckets.delete(k); }, 60_000).unref();

// ---------- CSRF ----------

/**
 * Toda requisição que muda algo precisa do cabeçalho X-Requested-With (um site de fora não consegue
 * mandá-lo sem permissão de CORS, que não damos) e, se vier Origin, ela tem que ser um dos nossos
 * endereços. Junto com SameSite nos cookies, fecha a porta para requisição forjada.
 */
export function checkCsrf(ctx: Ctx) {
  if (ctx.req.headers['x-requested-with'] !== 'cognitivai') throw new HttpError(403, 'csrf');
  const origin = ctx.req.headers.origin;
  if (!origin) return;
  const allowed = new Set([ctx.host, hostOf(ENV.siteUrl), hostOf(ENV.appUrl)].filter(Boolean));
  if (!allowed.has(hostOf(origin))) throw new HttpError(403, 'csrf');
}
