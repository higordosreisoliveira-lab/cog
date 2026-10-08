// Depois do pagamento: confirma a compra no servidor (o aviso do Connect costuma chegar em segundos),
// entra na conta e leva para o relatório dentro do app (app.cognitivai.online, se configurado).
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router';
import { useI18n } from '../i18n';
import { account } from '../lib/account';
import { ApiError } from '../lib/api';
import { appHref } from '../lib/runtime';
import type { Session } from '../lib/session';
import { ButtonLink } from '../components/ui';

export type ClaimState = 'idle' | 'confirming' | 'slow';

export function usePurchaseClaim() {
  const { lang } = useI18n();
  const navigate = useNavigate();
  const [state, setState] = useState<ClaimState>('idle');

  const run = useCallback(async (orderId: string, email: string, iq: Session | null) => {
    setState('confirming');
    const started = Date.now();
    while (Date.now() - started < 90_000) {
      try {
        const r = await account.claimPurchase({ orderId, email, iq, lang });
        if (!r.pending) {
          const target = `/${lang}/app/report`;
          const external = appHref(target);
          if (external) window.location.href = external;
          else navigate(target, { replace: true });
          return;
        }
      } catch (e) {
        // Erro definitivo (pedido de outro e-mail, já reivindicado em outro aparelho…): para de tentar.
        if (e instanceof ApiError && e.status >= 400 && e.status < 500 && e.status !== 429) break;
      }
      await new Promise((r) => setTimeout(r, 2500));
    }
    setState('slow');
  }, [lang, navigate]);

  return { state, run };
}

export function ConfirmingPayment({ state }: { state: ClaimState }) {
  const { m, path, lang } = useI18n();
  const C = m.checkout.connect;
  if (state === 'idle') return null;
  return (
    <div role="status" aria-live="polite" className="fixed inset-0 z-50 grid place-items-center bg-white/95 px-6 backdrop-blur-sm">
      <div className="w-full max-w-[420px] text-center">
        {state === 'confirming' ? (
          <>
            <div className="mx-auto size-12 animate-spin rounded-full border-[3px] border-brand/20 border-t-brand" aria-hidden="true" />
            <h2 className="mt-6 text-[24px]">{C.confirming}</h2>
            <p className="mt-2 text-ink-2">{C.confirmingSub}</p>
          </>
        ) : (
          <>
            <h2 className="text-[24px]">{C.confirming.replace('…', '')}</h2>
            <p className="mt-3 text-ink-2">{C.slow}</p>
            <ButtonLink to={path('/login')} reloadDocument={!!appHref(`/${lang}/login`)} size="lg" className="mt-7">{C.goLogin}</ButtonLink>
          </>
        )}
      </div>
    </div>
  );
}
