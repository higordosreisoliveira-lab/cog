// Contas de clientes: criação, leitura no formato que o app usa, assinatura e indicações.
import { CONFIG, type Currency } from '../src/config.js';
import { all, one, run } from './db.js';
import { hashPassword, newId, randomToken, readablePassword } from './crypto.js';
import { sendMail } from './mail.js';

const DAY = 86400_000;
export const CURRENCIES = Object.keys(CONFIG.pricing.currencies) as Currency[];
export const isCurrency = (c: unknown): c is Currency => typeof c === 'string' && (CURRENCIES as string[]).includes(c);

export interface UserRow {
  id: string; email: string; name: string; lang: string; password_hash: string | null; google_sub: string | null; google_email: string | null;
  ref_code: string; referred_by: string | null; currency: string; iq_score: number | null; cert_token: string | null; data: string; welcome_sent_at: number | null;
  failed_logins: number; locked_until: number | null; created_at: number; updated_at: number;
}
export interface SubRow {
  user_id: string; state: string; started_at: number; trial_ends_at: number; access_until: number | null; canceled_at: number | null;
  cancel_requested_at: number | null; currency: string; connect_order_id: string | null; connect_subscription_id: string | null; updated_at: number;
}

export const userById = (id: string) => one<UserRow>('SELECT * FROM users WHERE id = ?', id);
export const userByEmail = (email: string) => one<UserRow>('SELECT * FROM users WHERE email = ?', email.trim().toLowerCase());
export const subOf = (userId: string) => one<SubRow>('SELECT * FROM subscriptions WHERE user_id = ?', userId);

const newRefCode = () => {
  for (;;) {
    const code = randomToken(6).replace(/[-_]/g, '').slice(0, 7);
    if (code.length >= 6 && !one('SELECT 1 FROM users WHERE ref_code = ?', code)) return code;
  }
};

export function createUser(email: string, opts: { lang?: string; currency?: Currency; name?: string } = {}): UserRow {
  const clean = email.trim().toLowerCase();
  const now = Date.now();
  const id = newId();
  run('INSERT INTO users (id, email, name, lang, ref_code, currency, data, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    id, clean, (opts.name ?? clean.split('@')[0]).slice(0, 40), opts.lang ?? 'pt-BR', newRefCode(), opts.currency ?? 'USD',
    JSON.stringify({ activity: [new Date(now).toISOString().slice(0, 10)] }), now, now);
  return userById(id)!;
}

/** Cria ou atualiza a assinatura a partir de um pedido aprovado/em teste. */
export function upsertSubscription(userId: string, p: { state: string; startedAt?: number; accessUntil?: number | null; currency?: string; orderId?: string | null; subscriptionId?: string | null }) {
  const now = Date.now();
  const cur = subOf(userId);
  const started = p.startedAt ?? cur?.started_at ?? now;
  const trialEnds = cur?.trial_ends_at ?? started + CONFIG.pricing.trialDays * DAY;
  if (!cur) {
    run(`INSERT INTO subscriptions (user_id, state, started_at, trial_ends_at, access_until, currency, connect_order_id, connect_subscription_id, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      userId, p.state, started, p.state === 'trial' && p.accessUntil ? p.accessUntil : trialEnds, p.accessUntil ?? trialEnds, p.currency ?? 'USD', p.orderId ?? null, p.subscriptionId ?? null, now);
  } else {
    run(`UPDATE subscriptions SET state = ?, access_until = COALESCE(?, access_until), currency = COALESCE(?, currency),
         connect_order_id = COALESCE(?, connect_order_id), connect_subscription_id = COALESCE(?, connect_subscription_id), updated_at = ? WHERE user_id = ?`,
      p.state, p.accessUntil ?? null, p.currency ?? null, p.orderId ?? null, p.subscriptionId ?? null, now, userId);
  }
}

/** Estado efetivo: passou do "acesso até" → encerrada. */
export function effectiveState(s: SubRow | undefined, now = Date.now()): 'trial' | 'active' | 'canceled' | 'expired' {
  if (!s) return 'expired';
  if (s.access_until && now > s.access_until + DAY) return 'expired'; // um dia de folga: o Connect cobra ~1 h depois do fim
  return (['trial', 'active', 'canceled'].includes(s.state) ? s.state : 'expired') as 'trial' | 'active' | 'canceled';
}

const maskEmail = (email: string) => {
  const [u, d] = email.split('@');
  return `${u.slice(0, 2)}${'•'.repeat(Math.max(2, Math.min(5, u.length - 2)))}@${d}`;
};

/** Indicações de alguém, com status calculado pela assinatura de cada indicado. */
export function referralRows(refCode: string) {
  const rows = all<{ email: string; created_at: number; state: string | null; trial_ends_at: number | null; canceled_at: number | null; access_until: number | null }>(
    `SELECT u.email, u.created_at, s.state, s.trial_ends_at, s.canceled_at, s.access_until
       FROM users u LEFT JOIN subscriptions s ON s.user_id = u.id WHERE u.referred_by = ? ORDER BY u.created_at DESC`, refCode);
  const now = Date.now();
  return rows.map((r) => {
    let status: 'pending' | 'confirmed' | 'canceled' = 'pending';
    if (r.canceled_at && r.trial_ends_at && r.canceled_at < r.trial_ends_at) status = 'canceled';
    else if (r.trial_ends_at && now >= r.trial_ends_at && r.state !== 'expired') status = 'confirmed';
    return { email: maskEmail(r.email), at: r.created_at, status };
  });
}

export function payoutsOf(userId: string) {
  return all<{ id: string; amount: number; currency: string; referrals: number; method: string; dest: string; status: string; created_at: number }>(
    'SELECT id, amount, currency, referrals, method, dest, status, created_at FROM payouts WHERE user_id = ? ORDER BY created_at DESC', userId)
    .map((p) => ({ id: p.id, at: p.created_at, amount: p.amount, currency: p.currency, referrals: p.referrals, method: p.method, dest: p.dest, status: p.status }));
}

/** A conta no formato que o app (src/lib/account.ts) espera. Nunca inclui hash de senha. */
export function serializeAccount(u: UserRow) {
  const s = subOf(u.id);
  const data = safeData(u.data);
  return {
    email: u.email,
    name: u.name,
    lang: u.lang,
    createdAt: u.created_at,
    subscription: s
      ? { startedAt: s.started_at, trialEndsAt: s.trial_ends_at, currency: s.currency, canceledAt: s.canceled_at, accessUntil: s.access_until, state: effectiveState(s), cancelRequestedAt: s.cancel_requested_at }
      : { startedAt: u.created_at, trialEndsAt: u.created_at, currency: u.currency, canceledAt: null, accessUntil: u.created_at, state: 'expired', cancelRequestedAt: null },
    refCode: u.ref_code,
    referredBy: u.referred_by,
    referrals: referralRows(u.ref_code),
    payouts: payoutsOf(u.id),
    iq: data.iq ?? null,
    games: data.games ?? {},
    tests: data.tests ?? {},
    courses: data.courses ?? {},
    activity: data.activity ?? [],
    hasPassword: !!u.password_hash,
    google: u.google_email ? { email: u.google_email } : null,
    certToken: u.cert_token,
  };
}

/** Garante o código de verificação do certificado (criado quando a conta ganha um resultado de QI). */
export function ensureCertToken(userId: string) {
  const u = userById(userId);
  if (!u || u.cert_token) return;
  run('UPDATE users SET cert_token = ? WHERE id = ?', randomToken(12), userId);
}

/** Página pública de verificação: só o que está impresso no certificado. */
export function certificateByToken(token: string) {
  if (!/^[A-Za-z0-9_-]{10,40}$/.test(token)) return null;
  const u = one<UserRow>('SELECT * FROM users WHERE cert_token = ?', token);
  if (!u || u.iq_score === null) return null;
  const iq = safeData(u.data).iq ?? {};
  return { name: String(iq.name || u.name).slice(0, 60), iq: u.iq_score, date: Number(iq.finishedAt) || u.created_at, id: String(iq.certificateId ?? '').slice(0, 20) };
}

export function safeData(raw: string): Record<string, any> { // eslint-disable-line @typescript-eslint/no-explicit-any
  try { const d = JSON.parse(raw); return d && typeof d === 'object' ? d : {}; } catch { return {}; }
}

/** Gera uma senha nova, guarda o hash e manda por e-mail. Devolve a senha só para o modo de desenvolvimento. */
export async function issuePassword(u: UserRow, dedupe?: string): Promise<{ sent: boolean; password: string }> {
  const password = readablePassword();
  run('UPDATE users SET password_hash = ?, updated_at = ? WHERE id = ?', await hashPassword(password), Date.now(), u.id);
  const sent = await sendMail('welcome', u.email, u.lang, { highlight: password, name: u.name, dedupe });
  // Só marca como enviado quando o HubMail aceitou (o admin vê "Não enviado" e pode reenviar).
  if (sent) run('UPDATE users SET welcome_sent_at = ? WHERE id = ?', Date.now(), u.id);
  return { sent, password };
}

/** Saldo de indicações (mesma regra do app): indicações confirmadas que ainda não viraram saque. */
export function referralBalance(u: UserRow, currency: Currency) {
  const confirmed = referralRows(u.ref_code).filter((r) => r.status === 'confirmed').length;
  const paid = (one<{ n: number }>('SELECT COALESCE(SUM(referrals), 0) AS n FROM payouts WHERE user_id = ?', u.id)?.n) ?? 0;
  const unpaid = Math.max(0, confirmed - paid);
  return { unpaid, balance: unpaid * CONFIG.referral.rewards[currency], min: CONFIG.referral.minPayout[currency] };
}
