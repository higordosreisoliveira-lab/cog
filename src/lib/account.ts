// Conta do cliente, agora no servidor (/api). As telas usam as mesmas funções de antes:
// - leitura: account.me() busca no servidor; account.meSync() devolve a última versão em memória;
// - progresso (QI, jogos, testes, cursos): atualiza na hora em memória e envia ao servidor em segundo plano.
// Login, senha, Google, assinatura e indicações são decididos SÓ pelo servidor.

import { CONFIG, type Currency } from '../config';
import { api, ApiError } from './api';
import { runtime } from './runtime';
import { computeResult, type Session } from './session';

export type SubStatus = 'trial' | 'active' | 'canceled' | 'expired';

export interface Subscription {
  startedAt: number;
  trialEndsAt: number;
  currency: Currency;
  canceledAt: number | null;
  accessUntil?: number | null; // vem do Connect
  state?: SubStatus;
  cancelRequestedAt?: number | null;
}

export interface GameStat { best: number | null; plays: number; last: number }
export interface TestTasks { delay?: { now: number; total: number }; gonogo?: { impulse: number; missed: number; rt: number } }
export interface TestResultData { completedAt: number; scores: Record<string, number>; total?: number; max?: number; band?: string | null; alert?: boolean; tasks?: TestTasks }
export interface CourseProgress { done: string[]; last?: string }

export interface Payout {
  id?: string;
  at: number;
  amount: number;
  currency: Currency;
  referrals: number;
  method: 'pix' | 'paypal';
  dest: string;
  status: 'requested' | 'paid';
}

export type ReferralStatus = 'pending' | 'confirmed' | 'canceled';
export interface ReferralRow { email: string; at: number; status: ReferralStatus }

export interface Account {
  email: string;
  name: string;
  lang?: string;
  createdAt: number;
  subscription: Subscription;
  refCode: string;
  referredBy: string | null;
  referrals: ReferralRow[]; // já com status e e-mail mascarado (vem do servidor)
  payouts: Payout[];
  iq: Session | null;
  games: Record<string, GameStat>;
  tests: Record<string, TestResultData>;
  courses: Record<string, CourseProgress>;
  activity: string[];
  hasPassword?: boolean;
  google?: { email: string } | null;
  certToken?: string | null;
}

const DAY = 86400000;
export const MIN_PASSWORD = 8;
export const today = (ts = Date.now()) => new Date(ts).toISOString().slice(0, 10);

let current: Account | null = null;
const set = (a: Account | null) => { current = a; return a; };

// ---------- assinatura ----------

/** Até quando a pessoa tem acesso. */
export function accessUntil(sub: Subscription): number | null {
  if (sub.accessUntil) return sub.accessUntil;
  if (!sub.canceledAt) return null;
  return nextCharge(sub, sub.canceledAt);
}

/** Próxima cobrança: fim do teste e depois a cada `periodDays` (o Connect manda o "acesso até"). */
export function nextCharge(sub: Subscription, now = Date.now()): number {
  if (sub.accessUntil && sub.accessUntil > now) return sub.accessUntil;
  if (now < sub.trialEndsAt) return sub.trialEndsAt;
  const period = CONFIG.pricing.periodDays * DAY;
  const cycles = Math.floor((now - sub.trialEndsAt) / period) + 1;
  return sub.trialEndsAt + cycles * period;
}

export function subStatus(sub: Subscription, now = Date.now()): SubStatus {
  if (sub.state) {
    if (sub.accessUntil && now > sub.accessUntil + DAY) return 'expired';
    if (sub.state !== 'expired' && sub.cancelRequestedAt) return 'canceled';
    return sub.state;
  }
  if (sub.canceledAt) return now < (accessUntil(sub) ?? 0) ? 'canceled' : 'expired';
  return now < sub.trialEndsAt ? 'trial' : 'active';
}

export const hasAccess = (a: Account | null) => !!a && subStatus(a.subscription) !== 'expired';

// ---------- envio do progresso em segundo plano ----------

type ProgressKey = 'iq' | 'games' | 'tests' | 'courses';
const dirty = new Set<ProgressKey>();
let timer: ReturnType<typeof setTimeout> | null = null;
function queueSync(...keys: ProgressKey[]) {
  keys.forEach((k) => dirty.add(k));
  if (timer) clearTimeout(timer);
  timer = setTimeout(flush, 400);
}
async function flush() {
  timer = null;
  if (!current || !dirty.size) return;
  const body: Record<string, unknown> = { activity: current.activity };
  for (const k of dirty) body[k] = current[k];
  if (dirty.has('iq') && current.iq?.finishedAt) body.iqScore = computeResult(current.iq).iq;
  dirty.clear();
  try { await api('/me/progress', { body, keepalive: true }); } catch { /* sem rede: a próxima mudança reenvia tudo */ }
}
if (typeof window !== 'undefined') window.addEventListener('pagehide', () => { void flush(); });

function touch(a: Account) {
  const d = today();
  if (!a.activity.includes(d)) a.activity = [...a.activity, d].slice(-400);
}

// ---------- API ----------

const asAccount = async (p: Promise<{ account: Account }>) => set((await p).account);

export const account = {
  /** Usuário logado (ou null). */
  async me(): Promise<Account | null> {
    try { return await asAccount(api('/me')); } catch (e) { if (e instanceof ApiError && e.status === 401) return set(null); throw e; }
  },

  /** Última versão conhecida (sem ir ao servidor). */
  meSync: (): Account | null => current,

  /** Envia um código de 6 dígitos para o e-mail (a resposta é a mesma com ou sem conta). */
  async requestCode(email: string, lang?: string): Promise<{ ok: boolean; demoCode?: string; reason?: 'no-account' | 'limit' }> {
    try {
      const r = await api<{ ok: boolean; devCode?: string }>('/auth/code', { body: { email, lang } });
      return { ok: true, demoCode: r.devCode };
    } catch (e) {
      return { ok: false, reason: e instanceof ApiError && e.status === 429 ? 'limit' : 'no-account' };
    }
  },

  async verifyCode(email: string, code: string): Promise<Account | null> {
    try { return await asAccount(api('/auth/verify', { body: { email, code } })); } catch { return null; }
  },

  async loginWithPassword(email: string, password: string): Promise<Account | null> {
    try { return await asAccount(api('/auth/login', { body: { email, password } })); } catch { return null; }
  },

  async loginWithGoogle(credential: string): Promise<{ ok: true; account: Account } | { ok: false; reason: 'no-account' | 'invalid' }> {
    try {
      const a = await asAccount(api('/auth/google', { body: { credential } }));
      return { ok: true, account: a! };
    } catch (e) {
      return { ok: false, reason: e instanceof ApiError && e.status === 404 ? 'no-account' : 'invalid' };
    }
  },

  async linkGoogle(credential: string): Promise<{ ok: true; account: Account } | { ok: false; reason: 'invalid' | 'taken' }> {
    try {
      const a = await asAccount(api('/me/google', { body: { credential } }));
      return { ok: true, account: a! };
    } catch (e) {
      return { ok: false, reason: e instanceof ApiError && e.status === 409 ? 'taken' : 'invalid' };
    }
  },

  async unlinkGoogle(): Promise<Account | null> { return asAccount(api('/me/google', { method: 'DELETE' })); },

  async setPassword(password: string): Promise<Account | null> {
    if (password.length < MIN_PASSWORD) return null;
    return asAccount(api('/me/password', { body: { password } }));
  },

  /**
   * Depois do pagamento: liga o pedido (confirmado pelo webhook do Connect) a este navegador e entra
   * na conta. `pending` = o aviso do Connect ainda não chegou; tente de novo em alguns segundos.
   */
  async claimPurchase(p: { orderId: string; email: string; iq: Session | null; lang: string }): Promise<{ pending: true } | { pending: false; account: Account; devPassword?: string; appUrl: string | null }> {
    const key = `cognitiva_claim_${p.orderId}`;
    let claimToken: string | null = null;
    try { claimToken = localStorage.getItem(key); } catch { /* sem storage */ }
    const r = await api<{ pending?: boolean; account?: Account; claimToken?: string; devPassword?: string; appUrl?: string | null }>('/purchase/claim', {
      body: { orderId: p.orderId, email: p.email, lang: p.lang, iq: p.iq, iqScore: p.iq?.finishedAt ? computeResult(p.iq).iq : undefined, ref: pendingRef(), claimToken },
    });
    if (r.pending || !r.account) return { pending: true };
    try { if (r.claimToken) localStorage.setItem(key, r.claimToken); } catch { /* sem storage */ }
    set(r.account);
    welcome.set({ email: r.account.email, password: r.devPassword });
    return { pending: false, account: r.account, devPassword: r.devPassword, appUrl: r.appUrl ?? null };
  },

  /** Só em desenvolvimento (o servidor recusa em produção): simula o aviso de pagamento do Connect. */
  async demoPurchase(email: string): Promise<string | null> {
    try { return (await api<{ orderId: string }>('/purchase/demo', { body: { email } })).orderId; } catch { return null; }
  },

  async logout(): Promise<void> {
    await flush();
    try { await api('/auth/logout', { body: {} }); } catch { /* já saiu */ }
    set(null);
  },

  async update(patch: { name?: string; lang?: string }): Promise<Account | null> {
    return asAccount(api('/me', { method: 'PATCH', body: patch }));
  },

  async cancelSubscription(): Promise<Account | null> { return asAccount(api('/me/cancel', { body: {} })); },
  async resumeSubscription(): Promise<Account | null> { return asAccount(api('/me/resume', { body: {} })); },

  /** Apaga conta e dados (LGPD). */
  async deleteAccount(): Promise<void> {
    await api('/me', { method: 'DELETE' });
    set(null);
  },

  // ---------- progresso (na hora em memória, servidor em segundo plano) ----------

  saveIq(iq: Session): Account | null {
    const a = current;
    if (!a) return null;
    a.iq = { ...iq, paid: true };
    touch(a);
    queueSync('iq');
    return set({ ...a });
  },

  /** Registra uma partida. `better` diz se o recorde é o maior ou o menor valor. Devolve se bateu recorde. */
  recordGame(id: string, score: number, completed: boolean, better: 'higher' | 'lower'): { account: Account | null; record: boolean } {
    const a = current;
    if (!a) return { account: null, record: false };
    const g = a.games[id] ?? { best: null, plays: 0, last: 0 };
    let record = false;
    if (completed) {
      record = g.best === null || (better === 'higher' ? score > g.best : score < g.best);
      if (record) g.best = score;
    }
    a.games = { ...a.games, [id]: { ...g, plays: g.plays + 1, last: Date.now() } };
    touch(a);
    queueSync('games');
    return { account: set({ ...a }), record };
  },

  saveTest(id: string, r: { dims: Record<string, number>; total: number; max: number; band: string | null; alert: boolean }, tasks?: TestTasks): Account | null {
    const a = current;
    if (!a) return null;
    a.tests = { ...a.tests, [id]: { completedAt: Date.now(), scores: r.dims, total: r.total, max: r.max, band: r.band, alert: r.alert, tasks } };
    touch(a);
    queueSync('tests');
    return set({ ...a });
  },

  markLesson(course: string, lesson: string, done: boolean): Account | null {
    const a = current;
    if (!a) return null;
    const p = a.courses[course] ?? { done: [] };
    const s = new Set(p.done);
    if (done) s.add(lesson); else s.delete(lesson);
    a.courses = { ...a.courses, [course]: { done: [...s], last: lesson } };
    touch(a);
    queueSync('courses');
    return set({ ...a });
  },
};

/** Dias seguidos com atividade até hoje (ou até ontem, se hoje ainda não houve). */
export function streak(a: Account): number {
  const days = new Set(a.activity);
  let n = 0;
  let cursor = Date.now();
  if (!days.has(today(cursor))) cursor -= DAY;
  while (days.has(today(cursor))) { n++; cursor -= DAY; }
  return n;
}

// ---------- aviso de boas-vindas depois da compra ----------

const WELCOME_KEY = 'cognitiva_welcome';
export const welcome = {
  get(): { email: string; password?: string } | null {
    try { const raw = sessionStorage.getItem(WELCOME_KEY); return raw ? JSON.parse(raw) : null; } catch { return null; }
  },
  set(v: { email: string; password?: string }) { try { sessionStorage.setItem(WELCOME_KEY, JSON.stringify(v)); } catch { /* sem storage */ } },
  dismiss() { try { sessionStorage.removeItem(WELCOME_KEY); } catch { /* sem storage */ } },
};

// ---------- indicação ----------

const REF_KEY = 'cognitiva_ref';
const REF_TTL = 30 * DAY; // a indicação vale por 30 dias depois do clique

/** Guarda o código de quem indicou (vem do link /r/CODIGO). Vale por 30 dias; o último clique vence. */
export function captureRef(code: string) {
  if (!/^[A-Za-z0-9]{4,12}$/.test(code)) return;
  try { localStorage.setItem(REF_KEY, JSON.stringify({ code, at: Date.now() })); } catch { /* sem storage */ }
}

function pendingRef(): string | null {
  try {
    const r = JSON.parse(localStorage.getItem(REF_KEY) ?? 'null') as { code: string; at: number } | null;
    return r && Date.now() - r.at < REF_TTL ? r.code : null;
  } catch { return null; }
}

export function maskEmail(email: string) {
  const [user, domain] = email.split('@');
  return `${user.slice(0, 2)}${'•'.repeat(Math.max(2, Math.min(5, user.length - 2)))}@${domain}`;
}

/** Resumo das indicações. Status e e-mails mascarados vêm do servidor; os valores seguem a moeda pedida. */
export function referralSummary(a: Account, currency: Currency = a.subscription.currency) {
  const rows = [...a.referrals].sort((x, y) => y.at - x.at);
  const reward = CONFIG.referral.rewards[currency];
  const confirmed = rows.filter((r) => r.status === 'confirmed').length;
  const unpaid = Math.max(0, confirmed - a.payouts.reduce((s, p) => s + p.referrals, 0));
  return {
    rows,
    pending: rows.filter((r) => r.status === 'pending').length,
    confirmed,
    reward,
    currency,
    earned: confirmed * reward,
    unpaid,
    balance: unpaid * reward,
    min: CONFIG.referral.minPayout[currency],
    payouts: [...a.payouts].sort((x, y) => y.at - x.at),
  };
}

/** Link de indicação: sempre no endereço do funil. */
export const referralLink = (a: Account) => `${runtime().siteUrl ?? window.location.origin}/r/${a.refCode}`;

/** Pede o saque do saldo disponível (o servidor confere o saldo de novo). */
export async function requestPayout(method: Payout['method'], dest: string, currency: Currency): Promise<Account | null> {
  try { return await asAccount(api('/me/payouts', { body: { method, dest, currency } })); } catch { return current; }
}
