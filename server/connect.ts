// Pagamentos pelo Connect (Hub).
//
// 1) O Connect avisa o servidor (webhook, padrão Standard Webhooks, assinado com o segredo whsec_…).
//    É ESSE aviso que confirma a venda: cria a conta, liga a assinatura e atualiza o acesso.
// 2) O navegador de quem pagou chama /api/purchase/claim com o número do pedido e o e-mail. Se o
//    pedido já foi confirmado pelo webhook, a conta recebe o resultado do teste e a pessoa entra
//    logada. O primeiro navegador que reivindica fica "dono" do pedido (token guardado só por ele).
import { createHmac } from 'node:crypto';
import { CONFIG, type Currency } from '../src/config.js';
import { all, audit, one, run, tx } from './db.js';
import { newId, randomToken, safeEqual, sha256 } from './crypto.js';
import { getIntegrations } from './settings.js';
import { createUser, ensureCertToken, isCurrency, issuePassword, upsertSubscription, userByEmail, userById, type UserRow } from './users.js';
import { HttpError, isEmail, str, type Ctx } from './http.js';
import { ENV } from './env.js';
import { cleanLang } from './mail.js';

const DAY = 86400_000;

// ---------- assinatura do webhook ----------

export function verifyWebhook(ctx: Ctx, secret: string): boolean {
  const id = String(ctx.req.headers['webhook-id'] ?? '');
  const ts = String(ctx.req.headers['webhook-timestamp'] ?? '');
  const sigs = String(ctx.req.headers['webhook-signature'] ?? '');
  if (!secret || !id || !/^\d+$/.test(ts) || !sigs || !ctx.raw) return false;
  if (Math.abs(Date.now() / 1000 - Number(ts)) > 300) return false; // 5 min: barra reenvio de requisição capturada
  const key = Buffer.from(secret.startsWith('whsec_') ? secret.slice(6) : secret, 'base64');
  const expected = createHmac('sha256', key).update(`${id}.${ts}.`).update(ctx.raw).digest('base64');
  return sigs.split(' ').some((s) => { const [v, sig] = s.split(','); return v === 'v1' && !!sig && safeEqual(sig, expected); });
}

// ---------- leitura tolerante do corpo (o formato exato pode variar entre eventos) ----------

type Any = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
const pick = (...vals: unknown[]) => vals.find((v) => v !== undefined && v !== null && v !== '');
const toMs = (v: unknown): number | null => {
  if (typeof v === 'number') return v < 1e12 ? v * 1000 : v;
  if (typeof v === 'string' && v) { const t = Date.parse(v); return Number.isNaN(t) ? null : t; }
  return null;
};
function emailFrom(p: Any): string | null {
  const o = p.order ?? {}, s = p.subscription ?? {};
  const e = pick(o.customer?.email, o.buyer?.email, o.comprador?.email, o.email, o.customerEmail, s.customer?.email, s.email, p.customer?.email, p.email);
  return isEmail(e) ? String(e).trim().toLowerCase() : null;
}

// ---------- processamento do evento ----------

export async function handleWebhook(ctx: Ctx) {
  const secret = getIntegrations().connect.webhookSecret;
  if (!verifyWebhook(ctx, secret)) throw new HttpError(401, 'invalid_signature');
  const id = String(ctx.req.headers['webhook-id']);
  if (one('SELECT 1 FROM webhook_events WHERE id = ?', id)) return { ok: true, duplicate: true };
  let payload: Any;
  try { payload = JSON.parse(ctx.raw!.toString('utf8')); } catch { throw new HttpError(400, 'invalid_json'); }
  const event = String(ctx.req.headers['x-event'] ?? payload.event ?? payload.type ?? '');
  const test = ctx.req.headers['x-test'] === '1';
  run('INSERT INTO webhook_events (id, event, received_at, status, payload) VALUES (?, ?, ?, ?, ?)',
    id, event, Date.now(), 'received', JSON.stringify(payload).slice(0, 20000));
  try {
    if (!test) await applyEvent(event, payload);
    run("UPDATE webhook_events SET status = ? WHERE id = ?", test ? 'test' : 'ok', id);
  } catch (e) {
    run("UPDATE webhook_events SET status = 'error', error = ? WHERE id = ?", String((e as Error).message).slice(0, 500), id);
    throw new HttpError(500, 'processing_failed'); // 5xx: o Connect tenta de novo
  }
  return { ok: true };
}

async function applyEvent(event: string, p: Any) {
  const order = p.order ?? {};
  const sub = p.subscription ?? {};
  const email = emailFrom(p);
  const orderId = str(pick(order.id, order.orderId, order.eventId, p.orderId), 120) || null;
  const subId = str(pick(sub.id, order.subscriptionId, order.subscription?.id), 120) || null;
  const accessUntil = toMs(pick(order.accessUntil, sub.accessUntil, p.accessUntil));
  const currency = String(pick(order.currency, sub.currency, 'USD')).toUpperCase();
  const amount = Number(pick(order.amount, order.total, order.value, 0)) || null;

  if (event === 'hubpay.order.approved' || event === 'hubpay.order.trialing') {
    if (!email) throw new Error('pedido sem e-mail');
    const user = ensureUser(email, isCurrency(currency) ? currency : 'USD');
    if (orderId) {
      run(`INSERT INTO orders (id, email, status, amount, currency, user_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
           ON CONFLICT(id) DO UPDATE SET status = excluded.status, user_id = excluded.user_id, updated_at = excluded.updated_at`,
        orderId, email, event.endsWith('trialing') ? 'trialing' : 'approved', amount, currency, user.id, toMs(order.createdAt) ?? Date.now(), Date.now());
    }
    const trial = event.endsWith('trialing') || sub.state === 'trialing';
    upsertSubscription(user.id, { state: trial ? 'trial' : 'active', accessUntil: accessUntil ?? Date.now() + CONFIG.pricing.trialDays * DAY, currency, orderId, subscriptionId: subId });
    // Senha inicial por e-mail: se ninguém reivindicar o pedido no navegador em 10 min, sai assim mesmo.
    setTimeout(() => { void sendWelcomeIfPending(user.id, orderId ?? undefined); }, 10 * 60_000).unref();
    return;
  }

  // Demais eventos: acham a pessoa pela assinatura, pelo pedido ou pelo e-mail.
  const user = (subId && one<UserRow>('SELECT u.* FROM users u JOIN subscriptions s ON s.user_id = u.id WHERE s.connect_subscription_id = ?', subId))
    || (orderId && one<UserRow>('SELECT u.* FROM users u JOIN orders o ON o.user_id = u.id WHERE o.id = ?', orderId))
    || (email ? userByEmail(email) : undefined);
  if (!user) return; // nada a fazer (ex.: evento de outro produto)

  const now = Date.now();
  switch (event) {
    case 'hubpay.order.refunded':
    case 'hubpay.subscription.unpaid':
    case 'hubpay.subscription.trial_ended_unpaid':
      run("UPDATE subscriptions SET state = 'expired', access_until = ?, updated_at = ? WHERE user_id = ?", now, now, user.id);
      if (orderId && event === 'hubpay.order.refunded') run("UPDATE orders SET status = 'refunded', updated_at = ? WHERE id = ?", now, orderId);
      break;
    case 'hubpay.subscription.canceled':
    case 'hubpay.subscription.cancel_scheduled':
      run("UPDATE subscriptions SET state = 'canceled', canceled_at = COALESCE(canceled_at, ?), access_until = COALESCE(?, access_until), updated_at = ? WHERE user_id = ?",
        now, accessUntil, now, user.id);
      break;
    case 'hubpay.subscription.renewed':
    case 'hubpay.subscription.trial_extended':
    case 'hubpay.subscription.reactivated':
      run("UPDATE subscriptions SET state = ?, canceled_at = CASE WHEN ? = 'hubpay.subscription.reactivated' THEN NULL ELSE canceled_at END, cancel_requested_at = CASE WHEN ? = 'hubpay.subscription.reactivated' THEN NULL ELSE cancel_requested_at END, access_until = COALESCE(?, access_until), updated_at = ? WHERE user_id = ?",
        event.endsWith('trial_extended') ? 'trial' : 'active', event, event, accessUntil, now, user.id);
      break;
    case 'hubpay.subscription.past_due':
      // Cobrança recusada; o Connect tenta de novo. O acesso continua até o "accessUntil" atual.
      break;
    default:
      break;
  }
}

function ensureUser(email: string, currency: Currency): UserRow {
  return userByEmail(email) ?? createUser(email, { currency, lang: getIntegrations().hubmail.defaultLang });
}

async function sendWelcomeIfPending(userId: string, dedupe?: string) {
  const u = userById(userId);
  if (!u || u.welcome_sent_at || u.password_hash) return;
  await issuePassword(u, dedupe);
}

// ---------- reivindicação da compra pelo navegador ----------

export async function claimPurchase(ctx: Ctx, body: Any) {
  const orderId = str(body.orderId, 120);
  const email = String(body.email ?? '').trim().toLowerCase();
  if (!orderId || !isEmail(email)) throw new HttpError(400, 'invalid_input');
  const order = one<{ id: string; email: string; status: string; user_id: string | null; claim_hash: string | null; created_at: number; demo: number }>('SELECT * FROM orders WHERE id = ?', orderId);
  // Pedido ainda não confirmado pelo webhook: o navegador tenta de novo em alguns segundos.
  if (!order) return { pending: true };
  if (order.email !== email || !['approved', 'trialing'].includes(order.status) || !order.user_id) throw new HttpError(404, 'not_found');
  if (Date.now() - order.created_at > DAY) throw new HttpError(410, 'claim_expired');
  const token = str(body.claimToken, 100);
  if (order.claim_hash && !(token && safeEqual(sha256(token), order.claim_hash))) throw new HttpError(409, 'already_claimed');

  const user = userById(order.user_id)!;
  const lang = cleanLang(body.lang);
  const newToken = order.claim_hash ? token : randomToken(24);
  tx(() => {
    if (!order.claim_hash) run('UPDATE orders SET claim_hash = ?, claimed_at = ? WHERE id = ?', sha256(newToken), Date.now(), order.id);
    // Resultado do teste: só se a conta ainda não tem um (não sobrescreve).
    const data = JSON.parse(user.data || '{}');
    if (!data.iq && body.iq && typeof body.iq === 'object' && JSON.stringify(body.iq).length < 60_000) {
      data.iq = body.iq;
      const score = Number(body.iqScore);
      run('UPDATE users SET data = ?, iq_score = ?, lang = ?, updated_at = ? WHERE id = ?', JSON.stringify(data), Number.isFinite(score) ? Math.round(score) : null, lang, Date.now(), user.id);
    } else run('UPDATE users SET lang = ?, updated_at = ? WHERE id = ?', lang, Date.now(), user.id);
    if (data.iq) ensureCertToken(user.id);
    // Indicação: só para conta nova (sem indicação), de outra pessoa.
    const ref = str(body.ref, 20);
    if (ref && !user.referred_by && ref !== user.ref_code && one('SELECT 1 FROM users WHERE ref_code = ?', ref)) {
      run('UPDATE users SET referred_by = ? WHERE id = ?', ref, user.id);
    }
  });
  // Senha inicial por e-mail, no idioma de quem comprou.
  let devPassword: string | undefined;
  const fresh = userById(user.id)!;
  if (!fresh.password_hash && !fresh.welcome_sent_at) {
    const r = await issuePassword(fresh, order.id);
    if (!r.sent && !ENV.prod) devPassword = r.password; // só em desenvolvimento, sem e-mail configurado
  }
  audit(email, 'purchase.claim', order.id, null, ctx.ip);
  return { ok: true, userId: user.id, claimToken: newToken, devPassword };
}

/** Compra simulada (DEMO_PURCHASES=1, só fora de produção): finge o webhook de um pedido aprovado. */
export async function demoPurchase(body: Any) {
  if (!ENV.demoPurchases) throw new HttpError(404, 'not_found');
  const email = String(body.email ?? '').trim().toLowerCase();
  if (!isEmail(email)) throw new HttpError(400, 'invalid_input');
  const orderId = `demo_${newId()}`;
  await applyEvent('hubpay.order.trialing', { order: { id: orderId, email, currency: 'USD', amount: CONFIG.pricing.currencies.USD.today, accessUntil: Date.now() + CONFIG.pricing.trialDays * DAY } });
  run('UPDATE orders SET demo = 1 WHERE id = ?', orderId);
  return { orderId };
}

export const recentWebhooks = (n = 100) =>
  all<{ id: string; event: string; received_at: number; status: string; error: string | null }>('SELECT id, event, received_at, status, error FROM webhook_events ORDER BY received_at DESC LIMIT ?', n);
