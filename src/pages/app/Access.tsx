// Trocar a senha (a primeira vem por e-mail na compra) e conectar o Google: Configurações → Acesso.
import { type FormEvent, useCallback, useState } from 'react';
import { useI18n } from '../../i18n';
import { MIN_PASSWORD, account } from '../../lib/account';
import { Button } from '../../components/ui';
import { GoogleButton, googleEnabled } from '../../components/GoogleButton';
import { useApp } from './AppLayout';

export function AccessPanel() {
  const { lang } = useI18n();
  const { user, setUser, am } = useApp();
  const A = am.access;
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [gErr, setGErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const googleFailed = useCallback(() => setGErr(A.googleError), [A]);

  const savePw = async (e: FormEvent) => {
    e.preventDefault();
    if (pw.length < MIN_PASSWORD) return setMsg({ ok: false, text: A.tooShort(MIN_PASSWORD) });
    if (pw !== pw2) return setMsg({ ok: false, text: A.mismatch });
    setBusy(true);
    const a = await account.setPassword(pw);
    setBusy(false);
    if (a) { setUser({ ...a }); setPw(''); setPw2(''); setMsg({ ok: true, text: A.saved }); }
  };

  const linkGoogle = async (jwt: string) => {
    setGErr(null);
    const r = await account.linkGoogle(jwt);
    if (r.ok) setUser({ ...r.account });
    else setGErr(r.reason === 'taken' ? A.googleTaken : A.googleError);
  };

  const input = 'h-12 w-full rounded-xl bg-white px-4 text-[15px] outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand';
  const showGoogle = googleEnabled() || import.meta.env.DEV;

  return (
    <div className="grid gap-3">
      <form onSubmit={savePw} className="rounded-3xl bg-soft p-5 sm:p-6">
        <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{user.hasPassword ? A.passwordChange : A.passwordTitle}</h3>
        {user.hasPassword && <p className="mt-1 text-[13.5px] text-good">✓ {A.hasPassword}</p>}
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          <input type={show ? 'text' : 'password'} autoComplete="new-password" placeholder={A.password} aria-label={A.password} value={pw}
            onChange={(e) => { setPw(e.target.value); setMsg(null); }} className={input} />
          <input type={show ? 'text' : 'password'} autoComplete="new-password" placeholder={A.confirm} aria-label={A.confirm} value={pw2}
            onChange={(e) => { setPw2(e.target.value); setMsg(null); }} className={input} />
        </div>
        <div className="mt-2 flex items-center justify-between gap-3 text-[12.5px] text-muted">
          <span>{A.rule(MIN_PASSWORD)}</span>
          <button type="button" onClick={() => setShow((s) => !s)} className="underline underline-offset-2 hover:text-ink">{show ? A.hide : A.show}</button>
        </div>
        {msg && <p role="status" className={`mt-3 text-[13.5px] ${msg.ok ? 'text-good' : 'text-bad'}`}>{msg.text}</p>}
        <Button type="submit" variant="secondary" size="sm" className="mt-4" disabled={busy || !pw}>{A.save}</Button>
      </form>

      {showGoogle && (
        <div className="rounded-3xl bg-soft p-5 sm:p-6">
          <h3 className="text-[17px] font-semibold tracking-[-0.01em]">{A.googleTitle}</h3>
          {user.google ? (
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <p className="text-[14.5px] text-ink-2">✓ {A.googleLinked(user.google.email)}</p>
              <Button variant="ghost" size="sm" onClick={async () => { const a = await account.unlinkGoogle(); if (a) setUser({ ...a }); }}>{A.googleUnlink}</Button>
            </div>
          ) : (
            <>
              <p className="mt-1 text-[14px] text-ink-2">{A.googleText}</p>
              <div className="mt-4 max-w-[360px]">
                {googleEnabled()
                  ? <GoogleButton locale={lang} onCredential={linkGoogle} onError={googleFailed} />
                  : <p className="rounded-xl bg-warn-50 px-3.5 py-2.5 text-[12.5px] text-warn">{A.googleSetup}</p>}
              </div>
            </>
          )}
          {gErr && <p role="alert" className="mt-3 text-[13.5px] text-bad">{gErr}</p>}
        </div>
      )}
    </div>
  );
}
