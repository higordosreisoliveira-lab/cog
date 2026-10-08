// Pixels (Meta, TikTok e Microsoft Clarity, com os IDs configurados no admin) e contagem do funil no servidor.
// Eventos do funil: ViewContent, StartTest, StartQuiz, CompleteTest, Lead, InitiateCheckout (abriu o
// checkout), AddPaymentInfo (clicou em pagar), Purchase.
//
// Os pixels carregam por <script src> (sem código embutido na página), o que deixa a política de
// segurança (CSP) bloquear qualquer script injetado. Dica: com o Zoio enviando as conversões pelo
// servidor, deixe os pixels vazios no admin para não contar venda em dobro.
import { api } from './api';
import { runtime } from './runtime';

type AnyFn = ((...args: unknown[]) => void) & Record<string, unknown>;
declare global {
  interface Window { fbq?: AnyFn; _fbq?: AnyFn; ttq?: AnyFn & unknown[]; TiktokAnalyticsObject?: string; dataLayer?: object[]; clarity?: AnyFn }
}

const STANDARD = new Set(['ViewContent', 'Lead', 'InitiateCheckout', 'AddPaymentInfo', 'Purchase', 'CompleteRegistration']);

function addScript(src: string) {
  const s = document.createElement('script');
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadMeta(id: string) {
  if (window.fbq) return;
  const queue: unknown[][] = [];
  const fbq = ((...args: unknown[]) => {
    const f = fbq as AnyFn & { callMethod?: (...a: unknown[]) => void };
    if (f.callMethod) f.callMethod(...args); else queue.push(args);
  }) as AnyFn;
  Object.assign(fbq, { push: fbq, loaded: true, version: '2.0', queue });
  window.fbq = fbq;
  window._fbq = fbq;
  addScript('https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', id);
  fbq('track', 'PageView');
}

function loadTikTok(id: string) {
  if (window.ttq) return;
  const name = 'ttq';
  window.TiktokAnalyticsObject = name;
  const ttq = [] as unknown as AnyFn & unknown[] & Record<string, unknown>;
  const methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
  for (const m of methods) ttq[m] = (...a: unknown[]) => { ttq.push([m, ...a]); };
  const src = 'https://analytics.tiktok.com/i18n/pixel/events.js';
  Object.assign(ttq, { _i: { [id]: Object.assign([], { _u: src }) }, _t: { [id]: Date.now() }, _o: { [id]: {} } });
  window.ttq = ttq;
  addScript(`${src}?sdkid=${encodeURIComponent(id)}&lib=${name}`);
  (ttq.page as (...a: unknown[]) => void)();
}

// Mesmo snippet oficial do Clarity, só que sem script embutido. Ele já mascara os campos de texto;
// no painel do Clarity dá para deixar o mascaramento em "Strict" se quiser esconder mais coisa.
function loadClarity(id: string) {
  if (window.clarity) return;
  const q: unknown[][] = [];
  const clarity = ((...args: unknown[]) => { q.push(args); }) as AnyFn;
  clarity.q = q;
  window.clarity = clarity;
  addScript(`https://www.clarity.ms/tag/${encodeURIComponent(id)}`);
}

let loaded = false;
export function initPixels() {
  if (loaded || typeof window === 'undefined') return;
  loaded = true;
  // Nada de rastreio dentro do painel de administração.
  if (window.location.pathname.startsWith('/admin')) return;
  const { meta, tiktok, clarity } = runtime().pixels;
  if (meta && /^\d{5,20}$/.test(meta)) loadMeta(meta);
  if (tiktok && /^[A-Z0-9]{8,40}$/i.test(tiktok)) loadTikTok(tiktok);
  if (clarity && /^[a-z0-9]{6,20}$/i.test(clarity)) loadClarity(clarity);
}

export function track(name: string, data: Record<string, unknown> = {}) {
  // Contagem anônima do funil no servidor (painel de administração).
  void api('/events', { body: { name }, keepalive: true }).catch(() => {});
  // Com o Zoio na página (porta de entrada do Hub), ele manda a compra para a Meta pelo servidor;
  // mandar também pelo navegador contaria a mesma venda duas vezes.
  if (name === 'Purchase' && document.querySelector('script[src*="/_z/a.js"]')) return;
  try {
    window.fbq?.(STANDARD.has(name) ? 'track' : 'trackCustom', name, data);
    (window.ttq as unknown as { track?: (...a: unknown[]) => void } | undefined)?.track?.(name, data);
    (window.dataLayer = window.dataLayer || []).push({ event: name, ...data });
  } catch { /* nunca quebra o funil por causa de pixel */ }
}
