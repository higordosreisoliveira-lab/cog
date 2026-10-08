// Rotas da conta do cliente. Toda rota que mexe em dados usa SÓ a sessão para saber de quem é a conta:
// não existe id de usuário na URL, então ninguém consegue ler ou mudar a conta de outra pessoa.
import { CONFIG, type Currency } from '../src/config.js';
import { audit, one, run, tx } from './db.js';
import { hashPassword, newId, sha256, sixDigits, verifyPassword } from './crypto.js';
import { endAllSessions, endSession, limit, requireUser, startSession } from './auth.js';
import { HttpError, isEmail, readJson, str, type Ctx, type Router } from './http.js';
import { cleanLang, sendMail } from './mail.js';
import { verifyGoogleToken } from './google.js';
import { getIntegrations } from './settings.js';
import { certificateByToken, ensureCertToken, isCurrency, referralBalance, safeData, serializeAccount, subOf, userByEmail, userById, type UserRow } from './users.js';
import { claimPurchase, demoPurchase } from './connect.js';
import { ENV } from './env.js';

const MIN_PASSWORD = 8;
const LOCK_AFTER = 8;          // tentativas de senha erradas seguidas
const LOCK_MS = 15 * 60_000;    // bloqueio de 15 min

const me = (ctx: Ctx) => {
  const u = userById(requireUser(ctx));
  if (!u) { endSession(ctx, 'user'); throw new HttpError(401, 'unauthorized'); }
  return u;
};
const account = (u: UserRow) => ({ account: serializeAccount(userById(u.id) ?? u) });

function checkLock(u: UserRow | undefined) {
  if (u?.locked_until && u.locked_until > Date.now()) throw new HttpError(429, 'locked', { retryAfter: Math.ceil((u.locked_until - Date.now()) / 1000) });
}
function failedLogin(u: UserRow | undefined) {
  if (!u) return;
  const n = u.failed_logins + 1;
  run('UPDATE users SET failed_logins = ?, locked_until = ? WHERE id = ?', n >= LOCK_AFTER ? 0 : n, n >= LOCK_AFTER ? Date.now() + LOCK_MS : null, u.id);
}
const okLogin = (u: UserRow) => run('UPDATE users SET failed_logins = 0, locked_until = NULL WHERE id = ?', u.id);

export function userRoutes(r: Router) {
  // ---------- sessão ----------
  r.get('/api/me', (ctx) => {
    const id = requireUser(ctx);
    const u = userById(id);
    if (!u) throw new HttpError(401, 'unauthorized');
    return account(u);
  });

  r.post('/api/auth/login', async (ctx) => {
    const b = await readJson(ctx);
    const email = String(b.email ?? '').trim().toLowerCase();
    const password = typeof b.password === 'string' ? b.password.slice(0, 200) : '';
    limit(`login:ip:${ctx.ip}`, 20, 15 * 60_000);
    limit(`login:em:${email}`, 10, 15 * 60_000);
    if (!isEmail(email) || !password) throw new HttpError(400, 'invalid_input');
    const u = userByEmail(email);
    checkLock(u);
    const ok = await verifyPassword(password, u?.password_hash);
    if (!u || !ok) { failedLogin(u); throw new HttpError(401, 'wrong_credentials'); }
    okLogin(u);
    startSession(ctx, 'user', u.id);
    audit(u.email, 'login.password', null, null, ctx.ip);
    return account(u);
  });

  r.post('/api/auth/code', async (ctx) => {
    const b = await readJson(ctx);
    const email = String(b.email ?? '').trim().toLowerCase();
    if (!isEmail(email)) throw new HttpError(400, 'invalid_input');
    limit(`code:ip:${ctx.ip}`, 10, 15 * 60_000);
    limit(`code:em:${email}`, 4, 15 * 60_000);
    const u = userByEmail(email);
    // Mesma resposta com ou sem conta: não dá para descobrir quem é cliente.
    if (u) {
      const code = sixDigits();
      run('INSERT INTO login_codes (email, code_hash, expires_at, attempts, created_at) VALUES (?, ?, ?, 0, ?) ON CONFLICT(email) DO UPDATE SET code_hash = excluded.code_hash, expires_at = excluded.expires_at, attempts = 0, created_at = excluded.created_at',
        email, sha256(`${email}:${code}`), Date.now() + 10 * 60_000, Date.now());
      const sent = await sendMail('code', email, cleanLang(b.lang ?? u.lang), { highlight: code, name: u.name });
      if (!sent && !ENV.prod) return { ok: true, devCode: code };
    }
    return { ok: true };
  });

  r.post('/api/auth/verify', async (ctx) => {
    const b = await readJson(ctx);
    const email = String(b.email ?? '').trim().toLowerCase();
    const code = String(b.code ?? '').replace(/\D/g, '').slice(0, 6);
    limit(`verify:ip:${ctx.ip}`, 30, 15 * 60_000);
    const row = one<{ code_hash: string; expires_at: number; attempts: number }>('SELECT code_hash, expires_at, attempts FROM login_codes WHERE email = ?', email);
    if (!row || row.expires_at < Date.now() || row.attempts >= 5) throw new HttpError(401, 'wrong_code');
    if (sha256(`${email}:${code}`) !== row.code_hash) {
      run('UPDATE login_codes SET attempts = attempts + 1 WHERE email = ?', email);
      throw new HttpError(401, 'wrong_code');
    }
    run('DELETE FROM login_codes WHERE email = ?', email);
    const u = userByEmail(email);
    if (!u) throw new HttpError(401, 'wrong_code');
    okLogin(u);
    startSession(ctx, 'user', u.id);
    audit(u.email, 'login.code', null, null, ctx.ip);
    return account(u);
  });

  r.post('/api/auth/google', async (ctx) => {
    const b = await readJson(ctx, 8 * 1024);
    limit(`google:ip:${ctx.ip}`, 20, 15 * 60_000);
    const c = await verifyGoogleToken(String(b.credential ?? ''), getIntegrations().google.clientId);
    if (!c) throw new HttpError(401, 'invalid_token');
    // Entra na conta ligada a esse Google ou, sem ligação, na conta com o mesmo e-mail (o Google já confirmou o e-mail).
    const u = one<UserRow>('SELECT * FROM users WHERE google_sub = ?', c.sub) ?? userByEmail(c.email);
    if (!u) throw new HttpError(404, 'no_account');
    if (!u.google_sub) run('UPDATE users SET google_sub = ?, google_email = ? WHERE id = ?', c.sub, c.email.toLowerCase(), u.id);
    okLogin(u);
    startSession(ctx, 'user', u.id);
    audit(u.email, 'login.google', null, null, ctx.ip);
    return account(u);
  });

  r.post('/api/auth/logout', (ctx) => { endSession(ctx, 'user'); return { ok: true }; });

  // ---------- conta ----------
  r.patch('/api/me', async (ctx) => {
    const u = me(ctx);
    const b = await readJson(ctx);
    const name = str(b.name, 40);
    const lang = b.lang !== undefined ? cleanLang(b.lang) : u.lang;
    run('UPDATE users SET name = ?, lang = ?, updated_at = ? WHERE id = ?', name || u.name, lang, Date.now(), u.id);
    return account(u);
  });

  r.post('/api/me/password', async (ctx) => {
    const u = me(ctx);
    const b = await readJson(ctx);
    const next = typeof b.password === 'string' ? b.password : '';
    if (next.length < MIN_PASSWORD || next.length > 200) throw new HttpError(400, 'weak_password');
    limit(`pw:${u.id}`, 10, 15 * 60_000);
    run('UPDATE users SET password_hash = ?, updated_at = ? WHERE id = ?', await hashPassword(next), Date.now(), u.id);
    endAllSessions('user', u.id, ctx); // derruba as outras sessões
    audit(u.email, 'password.change', null, null, ctx.ip);
    return account(u);
  });

  r.post('/api/me/google', async (ctx) => {
    const u = me(ctx);
    const b = await readJson(ctx, 8 * 1024);
    const c = await verifyGoogleToken(String(b.credential ?? ''), getIntegrations().google.clientId);
    if (!c) throw new HttpError(401, 'invalid_token');
    const other = one<{ id: string }>('SELECT id FROM users WHERE google_sub = ? AND id != ?', c.sub, u.id);
    if (other) throw new HttpError(409, 'google_taken');
    run('UPDATE users SET google_sub = ?, google_email = ?, updated_at = ? WHERE id = ?', c.sub, c.email.toLowerCase(), Date.now(), u.id);
    return account(u);
  });

  r.delete('/api/me/google', (ctx) => {
    const u = me(ctx);
    run('UPDATE users SET google_sub = NULL, google_email = NULL, updated_at = ? WHERE id = ?', Date.now(), u.id);
    return account(u);
  });

  /** Progresso (resultado do QI, jogos, testes, cursos, dias de atividade). É dado da própria pessoa. */
  r.post('/api/me/progress', async (ctx) => {
    const u = me(ctx);
    const b = await readJson(ctx, 200 * 1024);
    const data = safeData(u.data);
    let iqScore = u.iq_score;
    for (const key of ['iq', 'games', 'tests', 'courses', 'activity'] as const) {
      if (!(key in b)) continue;
      const v = b[key];
      if (key === 'activity') { if (Array.isArray(v)) data.activity = v.filter((d) => typeof d === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(d)).slice(-400); continue; }
      if (v === null || typeof v === 'object') data[key] = v;
    }
    if (typeof b.iqScore === 'number' && Number.isFinite(b.iqScore)) iqScore = Math.round(Math.max(40, Math.min(160, b.iqScore)));
    const json = JSON.stringify(data);
    if (json.length > 500_000) throw new HttpError(413, 'body_too_large');
    run('UPDATE users SET data = ?, iq_score = ?, updated_at = ? WHERE id = ?', json, iqScore, Date.now(), u.id);
    if (data.iq) ensureCertToken(u.id);
    return { ok: true };
  });

  /**
   * Cancelamento: o Connect não tem API para cancelar assinatura (dinheiro só se mexe com sessão no
   * navegador do dono). Registramos o pedido, avisamos no admin, e o acesso segue até o fim do período.
   */
  r.post('/api/me/cancel', (ctx) => {
    const u = me(ctx);
    run('UPDATE subscriptions SET cancel_requested_at = COALESCE(cancel_requested_at, ?), canceled_at = COALESCE(canceled_at, ?), updated_at = ? WHERE user_id = ?', Date.now(), Date.now(), Date.now(), u.id);
    audit(u.email, 'subscription.cancel_request', null, null, ctx.ip);
    return account(u);
  });

  r.post('/api/me/resume', (ctx) => {
    const u = me(ctx);
    const s = subOf(u.id);
    if (s && s.state !== 'canceled') run('UPDATE subscriptions SET cancel_requested_at = NULL, canceled_at = NULL, updated_at = ? WHERE user_id = ?', Date.now(), u.id);
    audit(u.email, 'subscription.resume_request', null, null, ctx.ip);
    return account(u);
  });

  r.delete('/api/me', (ctx) => {
    const u = me(ctx);
    audit(u.email, 'account.delete', null, null, ctx.ip);
    tx(() => {
      run('DELETE FROM sessions WHERE kind = ? AND subject_id = ?', 'user', u.id);
      run('DELETE FROM users WHERE id = ?', u.id);
    });
    endSession(ctx, 'user');
    return { ok: true };
  });

  r.post('/api/me/payouts', async (ctx) => {
    const u = me(ctx);
    const b = await readJson(ctx);
    const method = b.method === 'pix' ? 'pix' : b.method === 'paypal' ? 'paypal' : '';
    const dest = str(b.dest, 120);
    const currency = (isCurrency(b.currency) ? b.currency : 'USD') as Currency;
    if (!method || !dest || (method === 'pix' && currency !== 'BRL')) throw new HttpError(400, 'invalid_input');
    limit(`payout:${u.id}`, 5, 3600_000);
    const { unpaid, balance, min } = referralBalance(u, currency);
    if (!unpaid || balance < min) throw new HttpError(400, 'below_minimum');
    run('INSERT INTO payouts (id, user_id, amount, currency, referrals, method, dest, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      newId(), u.id, balance, currency, unpaid, method, dest, 'requested', Date.now());
    audit(u.email, 'payout.request', null, { balance, currency }, ctx.ip);
    return account(u);
  });

  // ---------- compra ----------
  r.post('/api/purchase/claim', async (ctx) => {
    limit(`claim:ip:${ctx.ip}`, 40, 15 * 60_000);
    const b = await readJson(ctx, 120 * 1024);
    const res = await claimPurchase(ctx, b);
    if ('pending' in res) return res;
    startSession(ctx, 'user', res.userId);
    const u = userById(res.userId)!;
    return { ...account(u), claimToken: res.claimToken, devPassword: res.devPassword, appUrl: ENV.appUrl || null };
  });

  r.post('/api/purchase/demo', async (ctx) => {
    limit(`demo:ip:${ctx.ip}`, 20, 15 * 60_000);
    return demoPurchase(await readJson(ctx));
  });

  // ---------- funil (contagem anônima por dia) ----------
  const EVENTS = new Set(['ViewContent', 'StartTest', 'StartQuiz', 'CompleteTest', 'Lead', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'CarelessRestart', 'CarelessWarning']);
  r.post('/api/events', async (ctx) => {
    const b = await readJson(ctx, 1024);
    const name = String(b.name ?? '');
    if (!EVENTS.has(name)) return { ok: true };
    limit(`ev:${ctx.ip}:${name}`, 30, 3600_000);
    run('INSERT INTO events (day, name, count) VALUES (?, ?, 1) ON CONFLICT(day, name) DO UPDATE SET count = count + 1', new Date().toISOString().slice(0, 10), name);
    return { ok: true };
  });

  // Verificação pública de certificado (o QR code aponta para cá).
  r.get('/api/certificates/:token', (ctx) => {
    limit(`cert:${ctx.ip}`, 60, 15 * 60_000);
    const c = certificateByToken(ctx.params.token);
    if (!c) throw new HttpError(404, 'not_found');
    return { certificate: c };
  });

  // Configuração pública (sem segredo nenhum) para o site.
  r.get('/api/config', () => publicConfig());
}

export function publicConfig() {
  const i = getIntegrations();
  return {
    siteUrl: ENV.siteUrl || null,
    appUrl: ENV.appUrl || null,
    googleClientId: i.google.clientId || null,
    connect: i.connect.checkout ? { script: i.connect.script, api: i.connect.api, checkout: i.connect.checkout } : null,
    pixels: { meta: i.pixels.meta || null, tiktok: i.pixels.tiktok || null, clarity: i.pixels.clarity || null },
    supportEmail: i.support.email || CONFIG.supportEmail,
    demoPurchases: ENV.demoPurchases,
  };
}
