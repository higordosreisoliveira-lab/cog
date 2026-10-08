import { type FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { useAppMessages } from '../i18n/lazy';
import { account } from '../lib/account';
import { Arrow, Button, Container, SimpleHeader } from '../components/ui';
import { GoogleButton, googleEnabled } from '../components/GoogleButton';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

// Três jeitos de entrar: e-mail + senha (a primeira senha vai por e-mail na compra), Google (entra
// direto se o e-mail do Google for o da compra) e código de 6 dígitos por e-mail ("esqueci a senha").
export function Login() {
  const { path, m, lang } = useI18n();
  const am = useAppMessages();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = params.get('next');
  const target = next && next.startsWith('/') ? next : path('/app');

  const [step, setStep] = useState<'password' | 'email' | 'code'>('password');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [code, setCode] = useState('');
  const [demoCode, setDemoCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [already, setAlready] = useState<boolean | null>(null);
  const codeRef = useRef<HTMLInputElement>(null);

  useEffect(() => { account.me().then((a) => setAlready(!!a)); }, []);
  useEffect(() => { if (am) document.title = `${am.login.title} | ${CONFIG.brand}`; }, [am]);
  useEffect(() => { if (step === 'code') codeRef.current?.focus(); }, [step]);
  const googleFailed = useCallback(() => setError(am?.login.googleError ?? null), [am]);

  if (already) return <Navigate to={target} replace />;
  if (!am || already === null) return <div className="min-h-dvh" />;
  const L = am.login;
  const A = am.access;
  const go = (s: typeof step) => { setStep(s); setError(null); };

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    if (!isEmail(email)) { setError(L.invalidEmail); return; }
    setBusy(true); setError(null);
    const a = await account.loginWithPassword(email, password);
    setBusy(false);
    if (!a) { setError(L.wrongPassword); return; }
    navigate(target, { replace: true });
  };

  const send = async (e?: FormEvent) => {
    e?.preventDefault();
    if (!isEmail(email)) { setError(L.invalidEmail); return; }
    setBusy(true); setError(null);
    const r = await account.requestCode(email);
    setBusy(false);
    if (!r.ok) { setError(L.noAccount); return; }
    setDemoCode(r.demoCode ?? null);
    setCode('');
    setStep('code');
  };

  const verify = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setError(null);
    const a = await account.verifyCode(email, code);
    setBusy(false);
    if (!a) { setError(L.wrongCode); return; }
    navigate(target, { replace: true });
  };

  const google = async (jwt: string) => {
    setBusy(true); setError(null);
    const r = await account.loginWithGoogle(jwt);
    setBusy(false);
    if (!r.ok) { setError(r.reason === 'no-account' ? L.googleNoAccount : L.googleError); return; }
    navigate(target, { replace: true });
  };

  const input = 'h-14 w-full rounded-2xl bg-white px-5 text-base outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand';
  const link = 'text-ink-2 underline underline-offset-2 hover:text-ink';
  const err = (id: string) => error && <p id={id} role="alert" className="mt-3 text-[13.5px] text-bad">{error}</p>;
  const emailField = (
    <>
      <label htmlFor="login-email" className="mb-2 block text-sm font-medium">{L.email}</label>
      <input id="login-email" type="email" inputMode="email" autoComplete="email" autoFocus value={email}
        onChange={(e) => { setEmail(e.target.value); setError(null); }} placeholder={m.email.placeholder} className={input} />
    </>
  );

  return (
    <>
      <SimpleHeader />
      <main className="py-16 md:py-24">
        <Container width={420}>
          {step === 'password' && (
            <form onSubmit={signIn} noValidate className="animate-in">
              <h1 className="text-[32px] sm:text-[36px]">{L.title}</h1>
              <p className="mb-8 mt-3 text-ink-2">{L.subPassword}</p>
              {googleEnabled() && (
                <>
                  <GoogleButton locale={lang} onCredential={google} onError={googleFailed} />
                  <div className="my-6 flex items-center gap-3 text-[12.5px] text-muted" aria-hidden="true">
                    <span className="h-px flex-1 bg-line" />{L.or}<span className="h-px flex-1 bg-line" />
                  </div>
                </>
              )}
              {emailField}
              <div className="mb-2 mt-5 flex items-baseline justify-between gap-3">
                <label htmlFor="login-password" className="text-sm font-medium">{L.password}</label>
                <button type="button" onClick={() => setShowPw((s) => !s)} className="text-[12.5px] text-muted underline underline-offset-2 hover:text-ink">{showPw ? A.hide : A.show}</button>
              </div>
              <input id="login-password" type={showPw ? 'text' : 'password'} autoComplete="current-password" value={password}
                onChange={(e) => { setPassword(e.target.value); setError(null); }} className={input} />
              {err('login-err')}
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={busy || !email || !password}>{busy ? L.verifying : <>{L.signIn} <Arrow /></>}</Button>
              <div className="mt-5 text-center text-sm"><button type="button" onClick={() => go('email')} className={link}>{L.forgot}</button></div>
              <p className="mt-8 text-center text-sm text-muted">
                {L.noAccountYet} <Link to={path('/test?novo=1')} className="font-medium text-ink underline underline-offset-2">{L.takeTest}</Link>
              </p>
            </form>
          )}

          {step === 'email' && (
            <form onSubmit={send} noValidate className="animate-in">
              <h1 className="text-[32px] sm:text-[36px]">{L.useCode}</h1>
              <p className="mb-8 mt-3 text-ink-2">{L.sub}</p>
              {emailField}
              {err('login-err')}
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={busy}>{busy ? L.sending : <>{L.send} <Arrow /></>}</Button>
              <div className="mt-5 text-center text-sm"><button type="button" onClick={() => go('password')} className={link}>{L.usePassword}</button></div>
            </form>
          )}

          {step === 'code' && (
            <form onSubmit={verify} noValidate className="animate-in">
              <h1 className="text-[32px] sm:text-[36px]">{L.codeTitle}</h1>
              <p className="mb-8 mt-3 text-ink-2">{L.codeSub(email.trim().toLowerCase())}</p>
              {demoCode && <p className="mb-5 rounded-xl bg-warn-50 px-4 py-3 text-[13.5px] text-warn">{L.demo(demoCode)}</p>}
              <label htmlFor="login-code" className="mb-2 block text-sm font-medium">{L.code}</label>
              <input id="login-code" ref={codeRef} inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code}
                onChange={(e) => { setCode(e.target.value.replace(/\D/g, '').slice(0, 6)); setError(null); }}
                className={`${input} text-center font-mono text-2xl tracking-[0.5em]`} />
              {err('code-err')}
              <Button type="submit" size="lg" className="mt-6 w-full" disabled={busy || code.length !== 6}>{busy ? L.verifying : L.verify}</Button>
              <div className="mt-6 flex flex-wrap justify-between gap-3 text-sm">
                <button type="button" onClick={() => go('email')} className={link}>{L.changeEmail}</button>
                <button type="button" onClick={() => send()} className={link}>{L.resend}</button>
              </div>
            </form>
          )}
        </Container>
      </main>
    </>
  );
}
