// Checkout embutido do Connect (Hub). A oferta e o formulário são nossos; o campo do cartão e a
// cobrança vêm do script do Connect (/pay/embed/checkout-v1.js). Só funciona no domínio liberado em
// Connect → Checkout do site (https://cognitivai.online); em outro endereço o script recusa.
import { type FormEvent, useEffect, useRef, useState } from 'react';
import { runtime } from '../lib/runtime';
import { useI18n } from '../i18n';
import { Button } from './ui';

interface ConnectResult {
  status: 'approved' | 'trialing' | 'pending' | 'failed' | string;
  pedido?: { eventId?: string; orderId?: string; id?: string } | null;
}
interface ConnectReady {
  pagar(comprador: Record<string, unknown>): Promise<ConnectResult>;
  retornoDoPagamento?: ConnectResult | null;
}
declare global {
  interface Window {
    HubCheckout?: { montar(opts: { api: string; checkout: string; elemento: string; idioma?: string }): Promise<ConnectReady> };
  }
}

let scriptPromise: Promise<void> | null = null;
function loadScript(src: string) {
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const el = document.createElement('script');
    el.src = src;
    el.async = true;
    el.onload = () => resolve();
    el.onerror = () => { scriptPromise = null; reject(new Error('script')); };
    document.head.appendChild(el);
  });
  return scriptPromise;
}

// Idiomas que o Connect recebe explicitamente; nos outros ele segue o navegador de quem compra.
const CONNECT_LANG: Record<string, string> = { 'pt-BR': 'pt-BR', en: 'en', es: 'es' };
const PAID = new Set(['approved', 'trialing']);
const orderIdOf = (r: ConnectResult) => r.pedido?.orderId ?? r.pedido?.id ?? r.pedido?.eventId ?? '';

export function ConnectPay({ email, onStart, onPaid }: { email: string; onStart: () => void; onPaid: (orderId: string, email: string) => void }) {
  const { m, lang, price } = useI18n();
  const T = m.checkout.connect;
  const [name, setName] = useState('');
  const [mail, setMail] = useState(email);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const pay = useRef<ConnectReady | null>(null);
  const started = useRef(false); // o StrictMode roda o efeito duas vezes; o Connect só pode montar uma
  const paidRef = useRef(onPaid);
  paidRef.current = onPaid;

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const cfg = runtime().connect;
    if (!cfg) { setError(T.unavailable); return; }
    loadScript(cfg.script)
      .then(() => window.HubCheckout!.montar({ api: cfg.api, checkout: cfg.checkout, elemento: '#connect-pagamento', idioma: CONNECT_LANG[lang] }))
      .then((pronto) => {
        pay.current = pronto;
        const back = pronto.retornoDoPagamento; // volta de autenticação do banco (3D Secure)
        if (back && PAID.has(back.status)) { paidRef.current(orderIdOf(back), email); return; }
        if (back?.status === 'pending') { setError(T.pending); return; }
        if (back?.status === 'failed') setError(T.declined);
        setReady(true);
      })
      .catch((e) => { console.error('Connect:', e); setError(T.unavailable); });
  }, [lang, T, email]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!pay.current || busy) return;
    setError(null);
    setBusy(true);
    onStart();
    try {
      const r = await pay.current.pagar({ name: name.trim(), email: mail.trim() });
      if (PAID.has(r.status)) { onPaid(orderIdOf(r), mail.trim().toLowerCase()); return; }
      setError(r.status === 'pending' ? T.pending : T.declined);
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : T.declined);
    }
    setBusy(false);
  };

  const input = 'h-12 w-full rounded-xl bg-white px-4 text-[15px] outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand';
  return (
    <form onSubmit={submit} className="grid gap-3">
      <label className="grid gap-1.5 text-[13.5px] font-medium">
        {T.name}
        <input name="name" autoComplete="name" required value={name} onChange={(e) => setName(e.target.value)} className={input} />
      </label>
      <label className="grid gap-1.5 text-[13.5px] font-medium">
        {T.email}
        <input name="email" type="email" autoComplete="email" required value={mail} onChange={(e) => setMail(e.target.value)} className={input} />
      </label>
      <div id="connect-pagamento" className="min-h-12" />
      <Button type="submit" size="lg" className="w-full" disabled={!ready || busy}>{busy ? T.processing : T.pay(price.today)}</Button>
      {error && <p role="alert" className="text-[13.5px] text-bad">{error}</p>}
      <p className="flex items-center gap-2 text-[12.5px] text-muted">
        <svg className="size-3.5 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
        {T.secure}
      </p>
    </form>
  );
}
