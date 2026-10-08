// Botão oficial "Continuar com o Google" (Google Identity Services). Só aparece com o ID do
// cliente do Google preenchido no admin (Integrações). Devolve o ID token (JWT) em onCredential.
import { useEffect, useRef } from 'react';
import { runtime } from '../lib/runtime';

export const googleEnabled = () => !!runtime().googleClientId;

interface Gsi {
  initialize(o: { client_id: string; callback: (r: { credential: string }) => void; ux_mode?: 'popup'; auto_select?: boolean }): void;
  renderButton(el: HTMLElement, o: Record<string, unknown>): void;
}
declare global { interface Window { google?: { accounts: { id: Gsi } } } }

let gsiPromise: Promise<void> | null = null;
const loadGsi = () => (gsiPromise ??= new Promise<void>((resolve, reject) => {
  const el = document.createElement('script');
  el.src = 'https://accounts.google.com/gsi/client';
  el.async = true;
  el.onload = () => resolve();
  el.onerror = () => { gsiPromise = null; reject(new Error('gsi')); };
  document.head.appendChild(el);
}));

export function GoogleButton({ locale, onCredential, onError }: { locale: string; onCredential: (jwt: string) => void; onError: () => void }) {
  const box = useRef<HTMLDivElement>(null);
  const cb = useRef(onCredential);
  cb.current = onCredential;

  useEffect(() => {
    const clientId = runtime().googleClientId;
    if (!clientId) return;
    let alive = true;
    loadGsi()
      .then(() => {
        if (!alive || !box.current || !window.google) return;
        window.google.accounts.id.initialize({ client_id: clientId, callback: (r) => cb.current(r.credential), ux_mode: 'popup' });
        window.google.accounts.id.renderButton(box.current, {
          type: 'standard', theme: 'outline', size: 'large', shape: 'pill', text: 'continue_with', logo_alignment: 'center',
          locale, width: Math.min(400, box.current.clientWidth || 360),
        });
      })
      .catch(onError);
    return () => { alive = false; };
  }, [locale, onError]);

  if (!googleEnabled()) return null;
  return <div ref={box} className="flex min-h-11 w-full justify-center" />;
}
