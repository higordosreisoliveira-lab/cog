// Painel de administração: tudo vem do servidor (/api/admin/*), com sessão própria de admin
// (cookie separado do cliente, só no endereço do app, com verificação em duas etapas opcional).
// Nada de lista de admins ou dado de cliente fica no navegador.

import { CONFIG, type Currency } from '../config';
import { api } from './api';
import { nextCharge, subStatus, today, type Account, type Payout, type SubStatus, type Subscription } from './account';

const DAY = 86400000;

// ---------- login do admin ----------

export interface AdminMe { email: string; totp: boolean }

export const adminAuth = {
  async me(): Promise<AdminMe | null> {
    try { return await api<AdminMe>('/admin/me'); } catch { return null; }
  },
  /** Senha e, se a verificação em duas etapas estiver ligada, o código do app autenticador. */
  login: (email: string, password: string, totp?: string) =>
    api<{ ok?: true; needTotp?: true; email?: string }>('/admin/login', { body: { email, password, totp } }),
  logout: () => api('/admin/logout', { body: {} }).catch(() => {}),
  changePassword: (current: string, password: string) => api('/admin/me/password', { body: { current, password } }),
  totpSetup: () => api<{ secret: string; otpauth: string }>('/admin/me/totp/setup', { body: {} }),
  totpEnable: (code: string) => api('/admin/me/totp/enable', { body: { code } }),
  totpDisable: (code: string) => api('/admin/me/totp/disable', { body: { code } }),
};

// ---------- clientes ----------

export interface CustomerSub extends Subscription {
  accessUntil: number | null;
  cancelRequestedAt: number | null;
  state: SubStatus;
  orderId: string | null;
}

export interface Customer {
  id: string;
  email: string;
  name: string;
  lang: string;
  createdAt: number;
  subscription: CustomerSub | null;
  iqScore: number | null;
  tests: number;
  refCode: string;
  referredBy: string | null;
  referrals: number;
  payouts: Payout[];
  hasPassword: boolean;
  google: boolean;
}

export interface CustomerFull extends Customer { account: Account; welcomeSentAt: number | null }

export type CustomerAction = 'extend' | 'cancel' | 'resume' | 'grant' | 'new-password' | 'logout-all';

export const admin = {
  list: async () => (await api<{ customers: Customer[] }>('/admin/customers')).customers,
  get: async (id: string) => (await api<{ customer: CustomerFull }>(`/admin/customers/${encodeURIComponent(id)}`)).customer,
  act: (id: string, action: CustomerAction, body: Record<string, unknown> = {}) =>
    api<{ ok: true; sent?: boolean }>(`/admin/customers/${encodeURIComponent(id)}/${action}`, { body }),
  remove: (id: string) => api(`/admin/customers/${encodeURIComponent(id)}`, { method: 'DELETE' }),
  /** Libera acesso para um e-mail (cria a conta se precisar). `password` só vem quando a conta não tinha senha. */
  grantAccess: (email: string, days: number) =>
    api<{ ok: true; id: string; created: boolean; password: string | null; sent: boolean; days: number }>('/admin/customers', { body: { email, days, lang: 'pt-BR' } }),
  payout: (id: string, action: 'paid' | 'reject') => api(`/admin/payouts/${encodeURIComponent(id)}/${action}`, { body: {} }),
  funnel: async (days = 30) => (await api<{ counts: Record<string, number> }>(`/admin/funnel?days=${days}`)).counts,
  webhooks: async () => (await api<{ events: WebhookEvent[] }>('/admin/webhooks')).events,
  audit: async () => (await api<{ entries: AuditEntry[] }>('/admin/audit')).entries,
};

export interface WebhookEvent { id: string; event: string; received_at: number; status: string; error: string | null }
export interface AuditEntry { at: number; actor: string | null; action: string; target: string | null; detail: string | null; ip: string | null }

/** Situação da assinatura de um cliente (sem assinatura = encerrada). */
export const statusOf = (c: Pick<Customer, 'subscription'>): SubStatus => (c.subscription ? subStatus(c.subscription) : 'expired');

/** Pediu para cancelar no app e ainda falta cancelar no Connect (o Connect não tem API de cancelamento). */
export const wantsCancel = (c: Customer) => !!c.subscription?.cancelRequestedAt && c.subscription.state !== 'canceled' && c.subscription.state !== 'expired';

// ---------- integrações ----------

export interface IntegrationValues {
  hubmail: { welcomeUrl: string; welcomeToken: string; codeUrl: string; codeToken: string; defaultLang: string };
  connect: { webhookSecret: string; script: string; api: string; checkout: string };
  google: { clientId: string };
  pixels: { meta: string; tiktok: string; clarity: string };
  support: { email: string };
}

export interface IntegrationsInfo {
  values: IntegrationValues;
  webhookUrl: string;
  status: { mailWelcome: boolean; mailCode: boolean; connectWebhook: boolean; google: boolean };
}

export const integrations = {
  get: () => api<IntegrationsInfo>('/admin/integrations'),
  /** Campo secreto vazio = mantém o valor atual. Para apagar um segredo, mande em `clear` ("secao.campo"). */
  save: (values: Partial<Record<keyof IntegrationValues, Record<string, string>>>, clear: string[] = []) =>
    api<{ ok: true; values: IntegrationValues }>('/admin/integrations', { method: 'PUT', body: { values, clear } }),
  testMail: (kind: 'welcome' | 'code', to: string, lang: string) => api<{ ok: boolean }>('/admin/integrations/test-mail', { body: { kind, to, lang } }),
};

// ---------- números (estimados a partir das assinaturas) ----------

export interface Charge { at: number; amount: number; currency: Currency; kind: 'trial' | 'renewal' }

const priceOf = (c: Currency) => CONFIG.pricing.currencies[c] ?? CONFIG.pricing.currencies.USD;

/** Cobranças estimadas: o valor do teste no início e cada renovação até hoje (ou até cancelar/encerrar). */
export function chargesOf(s: CustomerSub | null, now = Date.now()): Charge[] {
  if (!s) return [];
  const price = priceOf(s.currency);
  const out: Charge[] = [{ at: s.startedAt, amount: price.today, currency: s.currency, kind: 'trial' }];
  const period = CONFIG.pricing.periodDays * DAY;
  const end = Math.min(now, s.state === 'expired' && s.accessUntil ? s.accessUntil : now);
  for (let t = s.trialEndsAt; t <= end; t += period) {
    if (s.canceledAt && s.canceledAt <= t) break;
    out.push({ at: t, amount: price.after, currency: s.currency, kind: 'renewal' });
  }
  return out;
}

export interface Metrics {
  total: number;
  new7: number;
  byStatus: Record<SubStatus, number>;
  trialToPaid: number | null;
  revenue30: Partial<Record<Currency, number>>;
  revenueAll: Partial<Record<Currency, number>>;
  mrr: Partial<Record<Currency, number>>;
  daily: { day: string; signups: number }[];
  payoutsPending: { count: number; byCurrency: Partial<Record<Currency, number>> };
  cancelRequests: number;
}

export function metrics(list: Customer[], now = Date.now()): Metrics {
  const byStatus: Record<SubStatus, number> = { trial: 0, active: 0, canceled: 0, expired: 0 };
  const revenue30: Metrics['revenue30'] = {}, revenueAll: Metrics['revenueAll'] = {}, mrr: Metrics['mrr'] = {};
  const add = (o: Partial<Record<Currency, number>>, c: Currency, v: number) => { o[c] = (o[c] ?? 0) + v; };
  let trialEnded = 0, paidAfterTrial = 0, cancelRequests = 0;
  const payoutsPending: Metrics['payoutsPending'] = { count: 0, byCurrency: {} };

  for (const c of list) {
    const st = statusOf(c);
    byStatus[st]++;
    if (wantsCancel(c)) cancelRequests++;
    const s = c.subscription;
    for (const ch of chargesOf(s, now)) {
      add(revenueAll, ch.currency, ch.amount);
      if (ch.at >= now - 30 * DAY) add(revenue30, ch.currency, ch.amount);
    }
    if (s && now >= s.trialEndsAt) {
      trialEnded++;
      if (!(s.canceledAt && s.canceledAt < s.trialEndsAt) && !(s.accessUntil && s.accessUntil < s.trialEndsAt + DAY)) paidAfterTrial++;
    }
    if (s && st === 'active') add(mrr, s.currency, (priceOf(s.currency).after * 30) / CONFIG.pricing.periodDays);
    for (const p of c.payouts) if (p.status === 'requested') { payoutsPending.count++; add(payoutsPending.byCurrency, p.currency, p.amount); }
  }

  const daily = Array.from({ length: 14 }, (_, i) => {
    const day = today(now - (13 - i) * DAY);
    return { day, signups: list.filter((c) => today(c.createdAt) === day).length };
  });

  return {
    total: list.length,
    new7: list.filter((c) => c.createdAt >= now - 7 * DAY).length,
    byStatus,
    trialToPaid: trialEnded ? Math.round((paidAfterTrial / trialEnded) * 100) : null,
    revenue30,
    revenueAll,
    mrr,
    daily,
    payoutsPending,
    cancelRequests,
  };
}

export const FUNNEL = ['ViewContent', 'StartTest', 'CompleteTest', 'Lead', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase'] as const;

export { nextCharge };
