import { type FormEvent, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { computeResult, loadSession, saveSession } from '../lib/session';
import { track } from '../lib/track';
import { Arrow, Button, Container, SimpleHeader } from '../components/ui';

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

async function sendLead(payload: Record<string, unknown>) {
  if (!CONFIG.leadWebhook) return;
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), 2500);
  try {
    await fetch(CONFIG.leadWebhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: ctrl.signal,
    });
  } catch { /* não trava o funil se o webhook falhar */ }
  clearTimeout(t);
}

export function EmailCapture() {
  const { m, path, lang } = useI18n();
  const E = m.email;
  const navigate = useNavigate();
  const [s] = useState(loadSession);
  const [email, setEmail] = useState(s?.email ?? '');
  const [optin, setOptin] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => { document.title = `${E.titleHl} | ${CONFIG.brand}`; }, [E.titleHl]);
  if (!s || !s.finishedAt) return <Navigate to={path('/test')} replace />;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    const clean = email.trim().toLowerCase();
    if (!isEmail(clean)) { setError(true); return; }
    setSending(true);
    const next = { ...s, email: clean, optin };
    saveSession(next);
    const r = computeResult(next);
    track('Lead');
    await sendLead({
      email: clean, optin, lang, iq: r.iq, percentile: r.percentile, correct: r.correct, scored: r.scored,
      sessionId: s.id, createdAt: new Date().toISOString(),
    });
    navigate(path('/checkout'));
  };

  return (
    <>
      <SimpleHeader />
      <main className="py-16 md:py-24">
        <Container width={480} className="text-center">
          <h1 className="text-[34px] sm:text-[42px]">{E.titleA} <span className="text-brand">{E.titleHl}</span>{E.titleB}</h1>
          <p className="mb-10 mt-5 text-[17px] text-ink-2">{E.lead}</p>
          <form onSubmit={submit} noValidate className="text-left">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">{E.label}</label>
            <input
              id="email" type="email" inputMode="email" autoComplete="email" placeholder={E.placeholder} autoFocus
              value={email} onChange={(e) => { setEmail(e.target.value); setError(false); }}
              aria-invalid={error} aria-describedby={error ? 'email-err' : undefined}
              className={`h-14 w-full rounded-2xl bg-white px-5 text-base outline-none ring-1 ring-inset transition focus:ring-2 focus:ring-brand ${error ? 'ring-bad' : 'ring-line'}`}
            />
            {error && <p id="email-err" className="mt-2 text-[13.5px] text-bad">{E.invalid}</p>}
            <label className="mb-6 mt-5 flex cursor-pointer items-start gap-3 text-[14px] text-ink-2">
              <input type="checkbox" checked={optin} onChange={(e) => setOptin(e.target.checked)} className="mt-[3px] size-4 accent-ink" />
              {E.optin}
            </label>
            <Button type="submit" size="lg" className="w-full" disabled={!isEmail(email) || sending}>{sending ? E.sending : <>{E.submit} <Arrow /></>}</Button>
          </form>
          <p className="mt-6 text-[12.5px] leading-relaxed text-muted">
            {E.legalA} <Link to={path('/terms')} className="underline underline-offset-2 hover:text-ink">{m.common.terms}</Link> {E.legalAnd}{' '}
            <Link to={path('/privacy')} className="underline underline-offset-2 hover:text-ink">{E.privacyPolicy}</Link>.
          </p>
        </Container>
      </main>
    </>
  );
}
