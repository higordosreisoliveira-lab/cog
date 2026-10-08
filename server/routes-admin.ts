// Rotas do painel de administração. Todas exigem sessão de admin (cookie separado, só no host do app,
// 12 h de validade e 2 h sem uso derrubam a sessão). Toda ação fica registrada em "audit".
import { CONFIG } from '../src/config.js';
import { all, audit, one, run, tx } from './db.js';
import { decrypt, encrypt, hashPassword, newTotpSecret, verifyPassword, verifyTotp } from './crypto.js';
import { endAllSessions, endSession, limit, requireAdmin, startSession } from './auth.js';
import { HttpError, isEmail, readJson, str, type Ctx, type Router } from './http.js';
import { getIntegrations, maskedIntegrations, updateIntegrations } from './settings.js';
import { cleanLang, mailConfigured, sendMail } from './mail.js';
import { createUser, effectiveState, issuePassword, payoutsOf, referralRows, safeData, serializeAccount, subOf, userByEmail, userById, type UserRow } from './users.js';
import { recentWebhooks } from './connect.js';
import { ENV } from './env.js';

const DAY = 86400_000;
const LOCK_AFTER = 5, LOCK_MS = 30 * 60_000;

interface AdminRow { id: string; email: string; password_hash: string; totp_secret: string | null; failed_logins: number; locked_until: number | null; last_login_at: number | null }
const adminById = (id: string) => one<AdminRow>('SELECT * FROM admins WHERE id = ?', id);
const who = (ctx: Ctx) => { const a = adminById(requireAdmin(ctx)); if (!a) throw new HttpError(401, 'unauthorized'); return a; };

/** Linha resumida de cliente para a lista do admin (sem o resultado completo do teste). */
function customerSummary(u: UserRow) {
  const s = subOf(u.id);
  const data = safeData(u.data);
  return {
    id: u.id,
    email: u.email,
    name: u.name,
    lang: u.lang,
    createdAt: u.created_at,
    subscription: s ? { startedAt: s.started_at, trialEndsAt: s.trial_ends_at, accessUntil: s.access_until, canceledAt: s.canceled_at, cancelRequestedAt: s.cancel_requested_at, currency: s.currency, state: effectiveState(s), orderId: s.connect_order_id } : null,
    iqScore: u.iq_score,
    tests: Object.keys(data.tests ?? {}).length,
    refCode: u.ref_code,
    referredBy: u.referred_by,
    referrals: referralRows(u.ref_code).length,
    payouts: payoutsOf(u.id),
    hasPassword: !!u.password_hash,
    google: !!u.google_email,
  };
}

export function adminRoutes(r: Router) {
  // ---------- login ----------
  r.post('/api/admin/login', async (ctx) => {
    const b = await readJson(ctx);
    const email = String(b.email ?? '').trim().toLowerCase();
    const password = typeof b.password === 'string' ? b.password.slice(0, 200) : '';
    limit(`adm:ip:${ctx.ip}`, 10, 15 * 60_000);
    const a = one<AdminRow>('SELECT * FROM admins WHERE email = ?', email);
    if (a?.locked_until && a.locked_until > Date.now()) throw new HttpError(429, 'locked');
    const ok = await verifyPassword(password, a?.password_hash);
    if (!a || !ok) {
      if (a) { const n = a.failed_logins + 1; run('UPDATE admins SET failed_logins = ?, locked_until = ? WHERE id = ?', n >= LOCK_AFTER ? 0 : n, n >= LOCK_AFTER ? Date.now() + LOCK_MS : null, a.id); }
      audit(email || null, 'admin.login_failed', null, null, ctx.ip);
      throw new HttpError(401, 'wrong_credentials');
    }
    if (a.totp_secret) {
      const code = String(b.totp ?? '');
      if (!code) return { needTotp: true };
      if (!verifyTotp(decrypt(a.totp_secret), code)) { audit(a.email, 'admin.totp_failed', null, null, ctx.ip); throw new HttpError(401, 'wrong_totp'); }
    }
    run('UPDATE admins SET failed_logins = 0, locked_until = NULL, last_login_at = ? WHERE id = ?', Date.now(), a.id);
    startSession(ctx, 'admin', a.id);
    audit(a.email, 'admin.login', null, null, ctx.ip);
    return { ok: true, email: a.email, totp: !!a.totp_secret };
  });

  r.post('/api/admin/logout', (ctx) => { endSession(ctx, 'admin'); return { ok: true }; });
  r.get('/api/admin/me', (ctx) => { const a = who(ctx); return { email: a.email, totp: !!a.totp_secret }; });

  r.post('/api/admin/me/password', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx);
    if (!(await verifyPassword(String(b.current ?? ''), a.password_hash))) throw new HttpError(401, 'wrong_credentials');
    const next = String(b.password ?? '');
    if (next.length < 12) throw new HttpError(400, 'weak_password');
    run('UPDATE admins SET password_hash = ? WHERE id = ?', await hashPassword(next), a.id);
    endAllSessions('admin', a.id, ctx);
    audit(a.email, 'admin.password_change', null, null, ctx.ip);
    return { ok: true };
  });

  // Verificação em duas etapas (app autenticador: Google Authenticator, 1Password, Authy…)
  r.post('/api/admin/me/totp/setup', (ctx) => {
    const a = who(ctx);
    if (a.totp_secret) throw new HttpError(409, 'already_enabled');
    const secret = newTotpSecret();
    pendingTotp.set(a.id, { secret, at: Date.now() });
    return { secret, otpauth: `otpauth://totp/CognitivAI:${encodeURIComponent(a.email)}?secret=${secret}&issuer=CognitivAI` };
  });
  r.post('/api/admin/me/totp/enable', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx);
    const p = pendingTotp.get(a.id);
    if (!p || Date.now() - p.at > 15 * 60_000 || !verifyTotp(p.secret, String(b.code ?? ''))) throw new HttpError(400, 'wrong_totp');
    run('UPDATE admins SET totp_secret = ? WHERE id = ?', encrypt(p.secret), a.id);
    pendingTotp.delete(a.id);
    audit(a.email, 'admin.totp_enabled', null, null, ctx.ip);
    return { ok: true };
  });
  r.post('/api/admin/me/totp/disable', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx);
    if (!a.totp_secret || !verifyTotp(decrypt(a.totp_secret), String(b.code ?? ''))) throw new HttpError(400, 'wrong_totp');
    run('UPDATE admins SET totp_secret = NULL WHERE id = ?', a.id);
    audit(a.email, 'admin.totp_disabled', null, null, ctx.ip);
    return { ok: true };
  });

  // ---------- clientes ----------
  r.get('/api/admin/customers', (ctx) => {
    who(ctx);
    return { customers: all<UserRow>('SELECT * FROM users ORDER BY created_at DESC LIMIT 5000').map(customerSummary) };
  });

  // Liberar acesso manualmente (teste, cortesia, suporte): cria a conta se não existir, com acesso
  // ativo por N dias. Conta nova (ou sem senha) recebe uma senha, que o admin vê UMA vez e que
  // também vai por e-mail se o HubMail estiver ligado. Conta que já tem senha mantém a dela.
  r.post('/api/admin/customers', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx);
    const email = String(b.email ?? '').trim().toLowerCase();
    if (!isEmail(email)) throw new HttpError(400, 'invalid_input');
    const days = Math.max(1, Math.min(365, Number(b.days) || 30));
    let u = userByEmail(email);
    const created = !u;
    if (!u) u = createUser(email, { lang: cleanLang(b.lang), currency: 'USD' });
    const now = Date.now();
    if (subOf(u.id)) {
      run("UPDATE subscriptions SET state = 'active', canceled_at = NULL, cancel_requested_at = NULL, access_until = MAX(COALESCE(access_until, 0), ?) + ?, updated_at = ? WHERE user_id = ?", now, days * DAY, now, u.id);
    } else {
      run("INSERT INTO subscriptions (user_id, state, started_at, trial_ends_at, access_until, currency, updated_at) VALUES (?, 'active', ?, ?, ?, 'USD', ?)", u.id, now, now, now + days * DAY, now);
    }
    let password: string | null = null, sent = false;
    if (!u.password_hash) { const p = await issuePassword(u); password = p.password; sent = p.sent; }
    audit(a.email, 'customer.grant_access', email, { days, created, sent }, ctx.ip);
    return { ok: true, id: u.id, created, password, sent, days };
  });

  r.get('/api/admin/customers/:id', (ctx) => {
    who(ctx);
    const u = userById(ctx.params.id);
    if (!u) throw new HttpError(404, 'not_found');
    return { customer: { ...customerSummary(u), account: serializeAccount(u), welcomeSentAt: u.welcome_sent_at } };
  });

  r.post('/api/admin/customers/:id/:action', async (ctx) => {
    const a = who(ctx);
    const u = userById(ctx.params.id);
    if (!u) throw new HttpError(404, 'not_found');
    const now = Date.now();
    const s = subOf(u.id);
    switch (ctx.params.action) {
      case 'extend': {
        const b = await readJson(ctx);
        const days = Math.max(1, Math.min(90, Number(b.days) || 7));
        if (!s) throw new HttpError(400, 'no_subscription');
        run('UPDATE subscriptions SET access_until = MAX(COALESCE(access_until, 0), ?) + ?, updated_at = ? WHERE user_id = ?', now, days * DAY, now, u.id);
        break;
      }
      case 'cancel':
        run("UPDATE subscriptions SET state = 'canceled', canceled_at = COALESCE(canceled_at, ?), updated_at = ? WHERE user_id = ?", now, now, u.id);
        break;
      case 'resume':
        run("UPDATE subscriptions SET state = 'active', canceled_at = NULL, cancel_requested_at = NULL, updated_at = ? WHERE user_id = ?", now, u.id);
        break;
      case 'grant': { // liberar acesso manualmente (ex.: cortesia, suporte)
        const b = await readJson(ctx);
        const days = Math.max(1, Math.min(365, Number(b.days) || 30));
        if (s) run("UPDATE subscriptions SET state = 'active', access_until = MAX(COALESCE(access_until, 0), ?) + ?, updated_at = ? WHERE user_id = ?", now, days * DAY, now, u.id);
        else run("INSERT INTO subscriptions (user_id, state, started_at, trial_ends_at, access_until, currency, updated_at) VALUES (?, 'active', ?, ?, ?, 'USD', ?)", u.id, now, now, now + days * DAY, now);
        break;
      }
      case 'new-password': {
        const r2 = await issuePassword(u);
        audit(a.email, 'customer.new-password', u.email, { sent: r2.sent }, ctx.ip);
        endAllSessions('user', u.id);
        return { ok: true, sent: r2.sent };
      }
      case 'logout-all':
        endAllSessions('user', u.id);
        break;
      default:
        throw new HttpError(404, 'not_found');
    }
    audit(a.email, `customer.${ctx.params.action}`, u.email, null, ctx.ip);
    return { ok: true };
  });

  r.delete('/api/admin/customers/:id', (ctx) => {
    const a = who(ctx);
    const u = userById(ctx.params.id);
    if (!u) throw new HttpError(404, 'not_found');
    tx(() => {
      run("DELETE FROM sessions WHERE kind = 'user' AND subject_id = ?", u.id);
      run('DELETE FROM users WHERE id = ?', u.id);
    });
    audit(a.email, 'customer.delete', u.email, null, ctx.ip);
    return { ok: true };
  });

  // ---------- saques ----------
  r.post('/api/admin/payouts/:id/:action', (ctx) => {
    const a = who(ctx);
    const p = one<{ id: string; user_id: string; status: string }>('SELECT id, user_id, status FROM payouts WHERE id = ?', ctx.params.id);
    if (!p || p.status !== 'requested') throw new HttpError(404, 'not_found');
    if (ctx.params.action === 'paid') run("UPDATE payouts SET status = 'paid', paid_at = ? WHERE id = ?", Date.now(), p.id);
    else if (ctx.params.action === 'reject') run('DELETE FROM payouts WHERE id = ?', p.id); // as indicações voltam ao saldo
    else throw new HttpError(404, 'not_found');
    audit(a.email, `payout.${ctx.params.action}`, p.id, null, ctx.ip);
    return { ok: true };
  });

  // ---------- funil, webhooks e registro ----------
  r.get('/api/admin/funnel', (ctx) => {
    who(ctx);
    const days = Math.max(1, Math.min(365, Number(ctx.url.searchParams.get('days')) || 30));
    const from = new Date(Date.now() - (days - 1) * DAY).toISOString().slice(0, 10);
    const rows = all<{ name: string; n: number }>('SELECT name, SUM(count) AS n FROM events WHERE day >= ? GROUP BY name', from);
    return { counts: Object.fromEntries(rows.map((r2) => [r2.name, r2.n])) };
  });

  r.get('/api/admin/webhooks', (ctx) => { who(ctx); return { events: recentWebhooks(100) }; });
  r.get('/api/admin/audit', (ctx) => { who(ctx); return { entries: all('SELECT at, actor, action, target, detail, ip FROM audit ORDER BY id DESC LIMIT 200') }; });

  // ---------- integrações ----------
  r.get('/api/admin/integrations', (ctx) => {
    who(ctx);
    const base = ENV.appUrl || `${ENV.prod ? 'https' : 'http'}://${ctx.host}`;
    return {
      values: maskedIntegrations(),
      webhookUrl: `${base}/api/webhooks/connect`,
      status: { mailWelcome: mailConfigured('welcome'), mailCode: mailConfigured('code'), connectWebhook: !!getIntegrations().connect.webhookSecret, google: !!getIntegrations().google.clientId },
      prices: CONFIG.pricing,
    };
  });

  r.put('/api/admin/integrations', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx, 16 * 1024);
    try {
      updateIntegrations((b.values ?? {}) as Record<string, Record<string, unknown>>, Array.isArray(b.clear) ? (b.clear as string[]) : []);
    } catch (e) {
      const { field, format } = e as { field?: string; format?: boolean };
      if (field) throw new HttpError(400, format ? 'invalid_format' : 'invalid_url', { field });
      throw e;
    }
    // Registra QUAIS seções mudaram, nunca os valores.
    audit(a.email, 'integrations.update', Object.keys(b.values ?? {}).join(','), { cleared: b.clear ?? [] }, ctx.ip);
    return { ok: true, values: maskedIntegrations() };
  });

  r.post('/api/admin/integrations/test-mail', async (ctx) => {
    const a = who(ctx);
    const b = await readJson(ctx);
    const kind = b.kind === 'code' ? 'code' : 'welcome';
    const to = String(b.to ?? '').trim().toLowerCase();
    if (!isEmail(to)) throw new HttpError(400, 'invalid_input');
    limit(`testmail:${a.id}`, 10, 3600_000);
    const sent = await sendMail(kind, to, str(b.lang, 10) || 'pt-BR', { highlight: kind === 'code' ? '123456' : 'Exemplo123', name: 'Teste' });
    audit(a.email, 'integrations.test-mail', kind, { sent }, ctx.ip);
    return { ok: sent };
  });
}

const pendingTotp = new Map<string, { secret: string; at: number }>();

/** Cria o primeiro admin a partir de ADMIN_EMAIL/ADMIN_PASSWORD (só se ainda não houver nenhum). */
export async function bootstrapAdmin() {
  if (one('SELECT 1 FROM admins LIMIT 1')) return;
  if (!ENV.adminEmail || !ENV.adminPassword) {
    console.warn('Nenhum admin cadastrado. Defina ADMIN_EMAIL e ADMIN_PASSWORD (ou rode "npm run seed" em desenvolvimento).');
    return;
  }
  if (ENV.adminPassword.length < 12) { console.error('ADMIN_PASSWORD precisa de pelo menos 12 caracteres.'); return; }
  const { newId } = await import('./crypto.js');
  run('INSERT INTO admins (id, email, password_hash, created_at) VALUES (?, ?, ?, ?)', newId(), ENV.adminEmail, await hashPassword(ENV.adminPassword), Date.now());
  console.log(`Admin ${ENV.adminEmail} criado. Entre no painel, troque a senha e remova ADMIN_PASSWORD das variáveis.`);
}
