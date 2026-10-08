import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { type Session, computeResult, loadSession, saveSession } from '../lib/session';
import { account } from '../lib/account';
import { runtime } from '../lib/runtime';
import { ConfirmingPayment, usePurchaseClaim } from './PurchaseClaim';
import { fmtTime } from '../lib/certificate';
import { track } from '../lib/track';
import { BellCurve } from '../components/charts';
import { ConnectPay } from '../components/ConnectPay';
import { Arrow, Aurora, Button, Checks, Container, Disclaimer, Faq, Footer, Label, SimpleHeader, Stat } from '../components/ui';

const OFFER_KEY = 'cognitiva_offer_deadline';

/** Cronômetro de oferta (só aparece com pricing.offerMinutes > 0). O prazo não reinicia ao recarregar. */
function useOfferDeadline() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const minutes = CONFIG.pricing.offerMinutes;
    if (!minutes) return;
    let deadline = Number(localStorage.getItem(OFFER_KEY));
    if (!deadline) { deadline = Date.now() + minutes * 60000; localStorage.setItem(OFFER_KEY, String(deadline)); }
    const tick = () => setLeft(Math.max(0, deadline - Date.now()));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);
  return left;
}

export function Checkout() {
  const { m, path, price, lang } = useI18n();
  const C = m.checkout;
  const [s] = useState(loadSession);
  const claim = usePurchaseClaim();
  const left = useOfferDeadline();
  useEffect(() => { document.title = `${C.title} | ${CONFIG.brand}`; }, [C.title]);

  // InitiateCheckout quando a pessoa ABRE o checkout (uma vez por teste, mesmo recarregando).
  // O link de demonstração (/preview) não conta.
  useEffect(() => {
    if (!s?.finishedAt || s.paid || s.sample || (!s.email && !s.sample)) return;
    const key = `cg_ic_${s.id}`;
    try { if (sessionStorage.getItem(key)) return; sessionStorage.setItem(key, '1'); } catch { /* sem storage: conta mesmo assim */ }
    track('InitiateCheckout', { value: CONFIG.pricing.currencies[price.currency].today, currency: price.currency, content_name: 'iq-report' });
  }, [s, price.currency]);

  if (!s || !s.finishedAt) return <Navigate to={path('/test')} replace />;
  if (!s.email && !s.sample) return <Navigate to={path('/email')} replace />;
  if (s.paid && claim.state === 'idle') return <Navigate to={path(`/report?status=paid${s.orderId ? `&pedido=${encodeURIComponent(s.orderId)}` : ''}`)} replace />;

  const answered = Object.keys(s.answers).length;
  const duration = s.startedAt ? s.finishedAt - s.startedAt : 0;

  const useConnect = !!runtime().connect;
  const value = CONFIG.pricing.currencies[price.currency].today;

  // Pagamento aprovado no Connect: marca a sessão como paga e confirma no servidor (o webhook do
  // Connect é quem cria a conta); depois entra no app já logada.
  const connectPaid = (orderId: string, email: string) => {
    const buyer = email || s.email || '';
    const paid = { ...s, paid: true, orderId: orderId || undefined, email: buyer || s.email };
    saveSession(paid);
    track('Purchase', { value, currency: price.currency, order_id: orderId });
    // Teste de exemplo não vira resultado: a conta nasce sem QI e o app pede o teste de verdade.
    void claim.run(orderId, buyer, s.sample ? null : paid);
  };

  const pay = (method: 'pix' | 'card') => {
    track('AddPaymentInfo', { method, value, currency: price.currency });
    if (CONFIG.checkoutUrl && !useConnect) {
      const url = new URL(CONFIG.checkoutUrl);
      url.searchParams.set('ref', s.id);
      url.searchParams.set('method', method);
      url.searchParams.set('lang', lang);
      url.searchParams.set('currency', price.currency);
      window.location.href = url.toString();
      return;
    }
    // Só em desenvolvimento: o servidor simula o aviso de pagamento do Connect e seguimos o fluxo real.
    void account.demoPurchase(s.email!).then((orderId) => {
      if (!orderId) return;
      const paid = { ...s, paid: true, orderId } satisfies Session;
      saveSession(paid);
      track('Purchase', { value, currency: price.currency, demo: true });
      void claim.run(orderId, s.email!, paid);
    });
  };

  const bars = [
    { cap: C.average, val: '100', sub: C.averageSub, h: 50 },
    { cap: C.you, val: '?', sub: C.youSub, h: 74, you: true },
    { cap: C.top, val: '130+', sub: C.topSub, h: 92 },
  ];

  return (
    <>
      {left !== null && left > 0 && (
        <div className="bg-ink px-4 py-2.5 text-center text-sm text-white">
          {C.offer(price.today)} <b className="ml-1 font-mono font-medium tabular-nums">{fmtTime(left)}</b>
        </div>
      )}
      <SimpleHeader right={
        <span className="flex max-w-[55%] items-center gap-2 truncate font-mono text-[12px] text-muted">
          <span className="size-1.5 flex-none rounded-full bg-good" aria-hidden="true" />
          <span className="truncate">{s.email ?? ''}</span>
        </span>
      } />

      <ConfirmingPayment state={claim.state} />
      <main>
        <Container className="pb-20 pt-12 md:pt-16">
          <h1 className="mb-10 text-center text-[32px] sm:text-[42px]">{C.title}</h1>
          {price.anchor && (
            // Desconto de quem conclui o teste (vale para todos). "Acima da média" só para quem ficou acima, de verdade.
            <div className="mx-auto -mt-4 mb-10 flex max-w-[560px] items-start gap-3 rounded-2xl bg-good-50 px-5 py-4 text-left ring-1 ring-inset ring-good/15">
              <svg className="mt-0.5 size-6 flex-none text-good" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z" /></svg>
              <div>
                <p className="font-semibold text-good">{C.specialTitle}</p>
                <p className="mt-1 text-[14.5px] text-ink-2">{C.specialText(price.anchor, price.today)}</p>
                {computeResult(s).iq > 100 && <p className="mt-1 text-[14.5px] font-medium text-ink">{C.specialAbove}</p>}
              </div>
            </div>
          )}
          <div className="grid items-start gap-6 md:grid-cols-2 md:gap-10">
            {/* comparação */}
            <Aurora>
            <div className="float-card p-5 sm:p-7">
              <Label className="mb-6">{C.compareLabel}</Label>
              <div className="grid h-[220px] grid-cols-3 items-end gap-3">
                {bars.map((b) => (
                  <div key={b.cap} className="flex h-full flex-col justify-end text-center">
                    <div className={`font-mono text-[26px] font-medium tracking-[-0.03em] ${b.you ? 'text-brand' : ''}`}>{b.val}</div>
                    <div className="mb-3 text-[12px] text-muted">{b.sub}</div>
                    <div className={`rounded-t-xl ${b.you ? 'bg-brand' : 'bg-soft-2'}`} style={{ height: `${b.h}%` }} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-line pt-3 text-center font-mono text-[11px] uppercase tracking-[0.06em] text-muted">
                {bars.map((b) => <span key={b.cap} className={b.you ? 'text-brand' : ''}>{b.cap}</span>)}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-2">
                <Stat tone="soft" value={answered} label={C.answers} />
                <Stat tone="soft" value={fmtTime(duration)} label={C.totalTime} />
                <Stat tone="soft" value="5" label={C.areas} />
              </div>
            </div>
            </Aurora>

            {/* resumo e pagamento */}
            <div id="pagar" className="scroll-mt-24">
              <Label className="mb-3">{C.summary}</Label>
              <ul className="border-t border-line">
                {C.lines.map((l, i) => (
                  <li key={l} className="flex justify-between gap-4 border-b border-line py-3 text-[15px]">
                    <span className="text-ink-2">{l}</span>
                    <span className={i ? 'text-muted' : 'font-mono'}>{i ? C.included : price.today}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-baseline justify-between">
                <span className="font-medium">{C.total}</span>
                <span>
                  {price.anchor && <s className="mr-2 font-mono text-muted">{price.anchor}</s>}
                  <b className="font-mono text-[32px] font-medium tracking-[-0.03em]">{price.today}</b>
                </span>
              </div>
              {useConnect ? (
                <div className="mt-6">
                  <ConnectPay email={s.email ?? ''} onStart={() => track('AddPaymentInfo', { method: 'card', value, currency: price.currency })} onPaid={connectPaid} />
                  {import.meta.env.DEV && (
                    <button type="button" onClick={() => pay('card')} className="mt-4 w-full rounded-xl border border-dashed border-warn/50 px-3 py-2.5 text-[12.5px] text-warn hover:bg-warn-50">{C.connect.simulate}</button>
                  )}
                </div>
              ) : (
              <div className="mt-6 grid gap-2.5">
                {price.currency === 'BRL' && (
                  <Button variant="secondary" size="lg" className="w-full" onClick={() => pay('pix')}>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#32bcad" d="M12 2.5 21.5 12 12 21.5 2.5 12z" /><path fill="#fff" d="M12 7.6 16.4 12 12 16.4 7.6 12z" /></svg>{C.pix}
                  </Button>
                )}
                <Button size="lg" className="w-full" onClick={() => pay('card')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 10h19" /></svg>{C.card}
                </Button>
              </div>
              )}
              {!CONFIG.checkoutUrl && !useConnect && <p className="mt-3 rounded-xl bg-warn-50 px-3.5 py-2.5 text-[12.5px] text-warn">{C.demo}</p>}
              <p className="mt-4 text-[12.5px] leading-relaxed text-muted">{m.billing.terms(price.today, CONFIG.pricing.trialDays, price.after, price.period, runtime().supportEmail)}</p>
            </div>
          </div>
        </Container>

        {/* prévia borrada do relatório */}
        <section className="border-t border-line py-20 md:py-28">
          <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="text-[30px] sm:text-[38px]">{C.previewTitle}</h2>
              <p className="mb-8 mt-4 text-[17px] text-ink-2">{C.previewSub}</p>
              <Checks items={C.previewItems} />
            </div>
            <div className="aurora relative overflow-hidden rounded-[28px] p-5 sm:p-7">
              <div className="pointer-events-none select-none blur-[8px]" aria-hidden="true">
                <BellCurve iq={121} tag="121" />
                <div className="mt-5 grid grid-cols-3 gap-2"><Stat value="121" label="—" /><Stat value="92%" label="—" /><Stat value="+21" label="—" /></div>
              </div>
              <div className="absolute inset-0 grid place-items-center p-5">
                <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium ring-1 ring-line">
                  <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                  {C.locked}
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-line py-20 md:py-28">
          <Container className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <h2 className="text-[30px] sm:text-[38px]">{C.faqTitle}</h2>
            <Faq items={m.faq(runtime().supportEmail)} />
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="rounded-[32px] bg-ink px-6 py-16 text-center text-white">
              <h2 className="text-[32px] sm:text-[42px]">{C.finalTitle}</h2>
              <p className="mx-auto mt-4 max-w-[440px] text-white/70">{C.finalSub}</p>
              <Button variant="light" size="lg" className="mt-8" onClick={() => document.getElementById('pagar')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{C.finalCta} <Arrow /></Button>
            </div>
            <Disclaimer className="mx-auto mt-10 max-w-[640px] text-center" />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
