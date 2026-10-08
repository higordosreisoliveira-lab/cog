import { useEffect, useMemo, useRef, useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { WORD_COUNT } from '../lib/questions';
import { type Session, loadSession, saveSession, shuffle } from '../lib/session';
import { account, hasAccess } from '../lib/account';
import { Button, Container, Label, Modal, SimpleHeader } from '../components/ui';

const DURATION = 26000; // duração do cálculo sem contar o tempo nos modais

type Ask =
  | { at: number; kind: 'info' }
  | { at: number; kind: 'yesno'; key: 'aboveAvg' | 'firstTest' }
  | { at: number; kind: 'number'; options: string[] }
  | { at: number; kind: 'word2'; options: number[] };

function numberDecoy(n: string) {
  const d = n.split('');
  [d[1], d[2]] = [d[2], d[1]];
  const out = d.join('');
  return out === n ? n.slice(0, 3) + ((Number(n[3]) + 3) % 10) : out;
}

export function Analyzing() {
  const { path } = useI18n();
  const [s] = useState(loadSession);
  if (!s || !s.finishedAt) return <Navigate to={path('/test')} replace />;
  return <AnalyzingView session={s} />;
}

function AnalyzingView({ session }: { session: Session }) {
  const { m, path } = useI18n();
  const A = m.analyzing;
  const navigate = useNavigate();
  const s = useRef(session);
  const asks = useMemo<Ask[]>(() => [
    { at: 6, kind: 'info' },
    { at: 28, kind: 'yesno', key: 'aboveAvg' },
    { at: 50, kind: 'yesno', key: 'firstTest' },
    { at: 72, kind: 'number', options: shuffle([session.number, numberDecoy(session.number)]) },
    { at: 88, kind: 'word2', options: shuffle([session.word2, shuffle(Array.from({ length: WORD_COUNT }, (_, i) => i).filter((w) => w !== session.word2))[0]]) },
  ], [session]);

  const [progress, setProgress] = useState(0);
  const [askIdx, setAskIdx] = useState(0);
  const [open, setOpen] = useState<Ask | null>(null);

  useEffect(() => { document.title = `${A.title} | ${CONFIG.brand}`; }, [A.title]);

  // Avança o progresso; pausa enquanto um modal está aberto. Usa setInterval (e não
  // requestAnimationFrame) para continuar andando com a aba em segundo plano.
  useEffect(() => {
    if (open) return;
    let last = performance.now();
    const t = setInterval(() => {
      const now = performance.now();
      const dt = now - last;
      last = now;
      setProgress((p) => {
        const nextP = Math.min(100, p + (dt / DURATION) * 100);
        const ask = asks[askIdx];
        return ask && nextP >= ask.at ? ask.at : nextP;
      });
    }, 100);
    return () => clearInterval(t);
  }, [open, askIdx, asks]);

  useEffect(() => {
    const ask = asks[askIdx];
    if (!open && ask && progress >= ask.at) setOpen(ask);
    if (progress >= 100 && !open) {
      // Assinante refazendo o teste: o novo resultado vai direto para a conta.
      let alive = true;
      account.me().catch(() => null).then((me) => {
        if (!alive) return;
        if (me && hasAccess(me)) { account.saveIq(s.current); navigate(path('/app/report')); return; }
        navigate(path(s.current.email ? '/checkout' : '/email'));
      });
      return () => { alive = false; };
    }
  }, [progress, askIdx, asks, open, navigate, path]);

  const answer = (patch: Partial<Session['extra']>) => {
    s.current = { ...s.current, extra: { ...s.current.extra, ...patch } };
    saveSession(s.current);
    setOpen(null);
    setAskIdx((i) => i + 1);
  };

  const p = Math.floor(progress);
  return (
    <>
      <SimpleHeader />
      <main className="py-14 md:py-20">
        <Container width={760}>
          <div className="text-center">
            <Label className="mb-5">{A.title}</Label>
            <div className="font-mono text-[72px] font-medium leading-none tracking-[-0.05em] tabular-nums sm:text-[96px]" aria-live="off">{p}<span className="text-muted">%</span></div>
            <p className="mt-5 text-ink-2">{A.sub}</p>
            <div className="mx-auto mt-8 h-1 max-w-[420px] overflow-hidden rounded-full bg-soft-2" role="progressbar" aria-valuenow={p} aria-valuemin={0} aria-valuemax={100}>
              <i className="block h-full rounded-full bg-brand" style={{ width: `${progress}%`, transition: 'width .1s linear' }} />
            </div>
          </div>

          <ul className="mx-auto mt-12 max-w-[420px] divide-y divide-line border-y border-line">
            {A.metrics.map((label, i) => {
              const st = progress >= (i + 1) * 20 ? 'done' : progress >= i * 20 ? 'run' : 'wait';
              return (
                <li key={label} className="flex items-center justify-between py-3.5">
                  <span className={st === 'wait' ? 'text-muted' : ''}>{label}</span>
                  <span className={`flex items-center gap-2 font-mono text-[12px] ${st === 'done' ? 'text-good' : st === 'run' ? 'text-brand' : 'text-muted'}`}>
                    {st === 'done' && <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>}
                    {st === 'run' && <span className="size-2 animate-pulse rounded-full bg-brand" aria-hidden="true" />}
                    {st === 'done' ? A.done : st === 'run' ? A.running : A.waiting}
                  </span>
                </li>
              );
            })}
          </ul>
        </Container>

        <Container className="mt-20">
          <Label className="mb-5">{CONFIG.reviews.length ? A.reviewsTitle : A.factsTitle}</Label>
          <div className="grid gap-3 md:grid-cols-3">
            {(CONFIG.reviews.length ? CONFIG.reviews.slice(0, 6).map((r) => ({ t: r.title, d: r.text })) : A.facts).map((f) => (
              <div key={f.t} className="rounded-3xl bg-soft p-6">
                <p className="font-medium">{f.t}</p>
                <p className="mt-1.5 text-[15px] text-ink-2">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>

      {open && (
        <Modal labelledBy="ask-title">
          {open.kind === 'info' && (
            <>
              <h3 id="ask-title" className="text-[22px]">{A.ask.attention}</h3>
              <p className="mt-3 text-[15px] text-ink-2">{A.ask.attentionText}</p>
              <p className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-soft px-4 py-3 text-[13px] text-ink-2">
                <svg className="size-4 flex-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
                {A.ask.attentionNote}
              </p>
              <Button size="lg" className="mt-6 w-full" onClick={() => answer({})}>{A.ask.ok}</Button>
            </>
          )}
          {open.kind === 'yesno' && (
            <>
              <h3 id="ask-title" className="text-[22px]">{open.key === 'aboveAvg' ? A.ask.aboveAvg : A.ask.firstTest}</h3>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                <Button variant="secondary" onClick={() => answer({ [open.key]: false })}>{A.ask.no}</Button>
                <Button variant="secondary" onClick={() => answer({ [open.key]: true })}>{A.ask.yes}</Button>
              </div>
            </>
          )}
          {open.kind === 'number' && (
            <>
              <h3 id="ask-title" className="text-[22px]">{A.ask.number}</h3>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {open.options.map((o) => <Button key={o} variant="secondary" className="font-mono" onClick={() => answer({ number: o })}>{o}</Button>)}
              </div>
            </>
          )}
          {open.kind === 'word2' && (
            <>
              <h3 id="ask-title" className="text-[22px]">{A.ask.word2}</h3>
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {open.options.map((o) => <Button key={o} variant="secondary" onClick={() => answer({ word2: o })}>{m.words2[o]}</Button>)}
              </div>
            </>
          )}
        </Modal>
      )}
    </>
  );
}
