import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { INTERSTITIALS, QUESTIONS } from '../lib/questions';
import { choiceView, matrixOf } from '../lib/variants';
import { useQbankText } from '../lib/qbankText';
import { type Session, iqFromRatio, loadSession, medianMs, newSession, partialRatio, percentileOf, saveSession } from '../lib/session';
import { fmtTime } from '../lib/certificate';
import { track } from '../lib/track';
import { carelessLevel } from '../lib/careless';
import { loadFunnel } from '../lib/prefetch';
import { MatrixCell } from '../components/MatrixCell';
import { Button, Container, Label, Logo } from '../components/ui';

type Step = { kind: 'word1' } | { kind: 'q'; i: number } | { kind: 'inter'; type: 'speed' | 'percentile' | 'almost'; after: number };

const STEPS: Step[] = [{ kind: 'word1' }];
QUESTIONS.forEach((_, i) => {
  STEPS.push({ kind: 'q', i });
  const inter = INTERSTITIALS[i + 1];
  if (inter) STEPS.push({ kind: 'inter', type: inter, after: i + 1 });
});

const TOTAL = QUESTIONS.length;
const LETTERS = 'ABCDEF';
const SPAN_SECONDS = 4;

/** Atalhos de teclado: A–F ou 1–6 escolhem, Enter confirma. */
function useKeys(count: number, onPick: (i: number) => void, onEnter?: () => void) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'Enter' && onEnter) { onEnter(); return; }
      let idx = LETTERS.indexOf(e.key.toUpperCase());
      if (idx < 0 && /^[1-6]$/.test(e.key)) idx = Number(e.key) - 1;
      if (idx >= 0 && idx < count) onPick(idx);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [count, onPick, onEnter]);
}

/** Tempo decorrido; isolado para não re-renderizar o quiz inteiro a cada tique. */
function Elapsed({ since }: { since: number | null }) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 500); return () => clearInterval(t); }, []);
  return <>{since ? fmtTime(now - since) : '00:00'}</>;
}

const noop = () => {};

const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="mx-auto mb-8 max-w-[600px] text-center text-[26px] leading-[1.18] sm:text-[32px]">{children}</h1>
);

// ---------- telas ----------

function Memorize({ title, sub, value, onDone }: { title: string; sub: string; value: string; onDone: () => void }) {
  const { m } = useI18n();
  useKeys(0, noop, onDone);
  return (
    <div className="w-full max-w-[560px] text-center">
      <Title>{title}</Title>
      <p className="-mt-5 mb-8 text-ink-2">{sub}</p>
      <div className="rounded-3xl bg-soft px-5 py-12 text-[clamp(36px,8vw,56px)] font-semibold tracking-[-0.03em]">{value}</div>
      <p className="mb-8 mt-4 font-mono text-[12px] text-muted">{m.quiz.ready}</p>
      <Button size="lg" className="min-w-[220px]" onClick={onDone}>{m.quiz.done}</Button>
    </div>
  );
}

function SpanMemo({ digits, onDone }: { digits: number[]; onDone: () => void }) {
  const { m } = useI18n();
  const [left, setLeft] = useState(SPAN_SECONDS);
  const [drain, setDrain] = useState(false);
  const done = useRef(onDone);
  done.current = onDone;
  useEffect(() => {
    const start = setTimeout(() => setDrain(true), 30); // deixa o navegador pintar a barra cheia antes de esvaziar
    const iv = setInterval(() => setLeft((l) => Math.max(1, l - 1)), 1000);
    const to = setTimeout(() => done.current(), SPAN_SECONDS * 1000);
    return () => { clearTimeout(start); clearInterval(iv); clearTimeout(to); };
  }, []);
  return (
    <div className="w-full max-w-[560px] text-center">
      <Title>{m.quiz.memorizeDigits}</Title>
      <div className="flex justify-center gap-2 sm:gap-3">
        {digits.map((d, i) => (
          <b key={i} className="grid h-16 w-12 place-items-center rounded-2xl bg-soft font-mono text-[28px] font-medium sm:h-20 sm:w-16 sm:text-[34px]">{d}</b>
        ))}
      </div>
      <div className="mx-auto mt-8 h-0.5 max-w-[320px] overflow-hidden rounded-full bg-soft-2">
        <i className="block h-full bg-ink" style={{ width: drain ? '0%' : '100%', transition: `width ${SPAN_SECONDS}s linear` }} />
      </div>
      <p className="mt-3 font-mono text-[12px] text-muted">{m.quiz.disappearsIn(left)}</p>
    </div>
  );
}

function useSinglePick(onPick: (i: number) => void) {
  const [sel, setSel] = useState<number | null>(null);
  const locked = useRef(false);
  const pick = useCallback((i: number) => {
    if (locked.current) return;
    locked.current = true;
    setSel(i);
    onPick(i);
  }, [onPick]);
  return [sel, pick] as const;
}

function TextOptions({ options, keys = true, onPick }: { options: string[]; keys?: boolean; onPick: (i: number) => void }) {
  const [sel, pick] = useSinglePick(onPick);
  useKeys(options.length, pick);
  return (
    <div className="mx-auto grid w-full max-w-[520px] gap-2.5">
      {options.map((o, i) => (
        <button key={i} onClick={() => pick(i)}
          className={`flex min-h-14 w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-[16px] ring-inset transition ${keys ? '' : 'justify-center text-center'} ${
            sel === i ? 'bg-brand-50 ring-2 ring-brand' : 'bg-white ring-1 ring-line hover:bg-soft hover:ring-[#d5d8df]'}`}>
          {keys && <span className={`grid size-7 flex-none place-items-center rounded-lg font-mono text-[12px] transition-colors ${sel === i ? 'bg-brand text-white' : 'bg-soft text-muted'}`}>{LETTERS[i]}</span>}
          <span>{o}</span>
        </button>
      ))}
    </div>
  );
}

function MatrixQuestion({ s, puzzle, onPick }: { s: Session; puzzle: number; onPick: (i: number) => void }) {
  const { m } = useI18n();
  const [sel, pick] = useSinglePick(onPick);
  const { cells, options: opts } = matrixOf(s, puzzle);
  useKeys(6, pick);
  return (
    <div className="grid w-full max-w-[980px] items-center gap-6 md:grid-cols-[1.08fr_1fr] md:gap-12">
      <div className="mx-auto grid w-full max-w-[360px] grid-cols-3 gap-1 rounded-3xl bg-soft p-3 md:max-w-none md:p-4" aria-label={m.quiz.matrixAria}>
        {cells.slice(0, 8).map((c, k) => <div key={k} className="aspect-square p-2"><MatrixCell cell={c} /></div>)}
        <div className="grid aspect-square place-items-center rounded-2xl border-[1.5px] border-dashed border-brand/70 bg-white font-mono text-3xl text-brand md:text-4xl">?</div>
      </div>
      <div>
        <Label className="mb-4 text-center md:text-left">{m.quiz.chooseAnswer}</Label>
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {opts.map((c, k) => (
            <button key={k} onClick={() => pick(k)} aria-label={m.quiz.option(LETTERS[k])}
              className={`relative aspect-square rounded-2xl p-[13%] ring-inset transition ${sel === k ? 'bg-brand-50 ring-2 ring-brand' : 'bg-white ring-1 ring-line hover:bg-soft hover:ring-[#d5d8df]'}`}>
              <span className={`absolute left-2.5 top-2 font-mono text-[11px] ${sel === k ? 'text-brand' : 'text-muted'}`}>{LETTERS[k]}</span>
              <MatrixCell cell={c} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gauge({ pos, ends }: { pos: number; ends: string[] }) {
  const [p, setP] = useState(0);
  useEffect(() => { const t = setTimeout(() => setP(pos), 80); return () => clearTimeout(t); }, [pos]);
  return (
    <div className="mx-auto mb-10 max-w-[380px]">
      <div className="relative h-1 rounded-full bg-soft-2">
        <i className="absolute inset-y-0 left-0 rounded-full bg-brand" style={{ width: `${p}%`, transition: 'width 1.2s cubic-bezier(.2,.8,.2,1)' }} />
        <span className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink ring-4 ring-white"
          style={{ left: `${p}%`, transition: 'left 1.2s cubic-bezier(.2,.8,.2,1)' }} />
      </div>
      <div className="mt-3 flex justify-between font-mono text-[11px] text-muted">{ends.map((e) => <span key={e}>{e}</span>)}</div>
    </div>
  );
}

function Interstitial({ s, type, after, onNext }: { s: Session; type: 'speed' | 'percentile' | 'almost'; after: number; onNext: () => void }) {
  const { m, info } = useI18n();
  const t = m.quiz.inter;
  useKeys(0, noop, onNext);
  let label: string, big: ReactNode, title: string, text: string, visual: ReactNode = null;
  if (type === 'speed') {
    const med = medianMs(s, after) / 1000;
    const fast = med > 0 && med < 14;
    label = t.speedLabel;
    big = <>{med.toLocaleString(info.intl, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}<span className="ml-2 text-lg text-muted">{t.speedUnit}</span></>;
    title = fast ? t.speedFastTitle : t.speedOkTitle;
    text = fast ? t.speedFast : t.speedOk;
    visual = <Gauge pos={Math.max(6, Math.min(94, 100 - (med / 30) * 100))} ends={[t.careful, t.faster]} />;
  } else if (type === 'percentile') {
    const pct = Math.round(percentileOf(iqFromRatio(partialRatio(s, after))));
    const good = pct >= 40;
    label = t.pctLabel;
    big = good ? `${pct}%` : null;
    title = good ? t.pctTitle(pct) : t.pctLowTitle;
    text = good ? t.pctText : t.pctLowText;
    visual = <Gauge pos={Math.max(4, Math.min(96, pct))} ends={['0', '50', '100']} />;
  } else {
    label = t.almostLabel;
    big = <>{after}<span className="text-muted">/{TOTAL}</span></>;
    title = t.almostTitle(TOTAL - after);
    text = t.almostText;
  }
  return (
    <div className="w-full max-w-[520px] text-center">
      <Label className="mb-6">{label}</Label>
      {big && <div className="mb-6 font-mono text-[56px] font-medium leading-none tracking-[-0.04em] sm:text-[72px]">{big}</div>}
      <h2 className="mb-3 text-[24px] sm:text-[28px]">{title}</h2>
      <p className="mx-auto mb-10 max-w-[440px] text-ink-2">{text}</p>
      {visual}
      <Button size="lg" className="min-w-[220px]" onClick={onNext}>{m.common.continue}</Button>
    </div>
  );
}

function Question({ s, i, phase, onPhaseDone, onAnswer }: { s: Session; i: number; phase: 'pre' | 'main'; onPhaseDone: () => void; onAnswer: (choice: number, ms: number) => void }) {
  const { m } = useI18n();
  const q = QUESTIONS[i];
  const text = m.questions[i];
  const qb = useQbankText();
  const shownAt = useRef(Date.now()); // o componente remonta a cada fase (key), então marca o início certo
  const pick = useCallback((choice: number) => onAnswer(choice, Date.now() - shownAt.current), [onAnswer]);

  if (phase === 'pre') {
    if (q.pre === 'number') return <Memorize title={m.quiz.memorizeNumber} sub={m.quiz.memorizeNumberSub} value={s.number} onDone={onPhaseDone} />;
    if (q.pre === 'word2') return <Memorize title={m.quiz.memorizeWord2} sub={m.quiz.memorizeWord2Sub} value={m.words2[s.word2]} onDone={onPhaseDone} />;
    if (q.type === 'span') return <SpanMemo digits={s.spans[i].digits} onDone={onPhaseDone} />;
  }

  switch (q.type) {
    case 'matrix':
      return <MatrixQuestion s={s} puzzle={q.puzzle} onPick={pick} />;
    case 'likert':
      return <div className="w-full"><Title>{text?.prompt}</Title><TextOptions options={m.quiz.likert} keys={false} onPick={pick} /></div>;
    case 'span':
      return <div className="w-full"><Title>{m.quiz.whichDigit(s.spans[i].ask + 1)}</Title><TextOptions options={s.spans[i].options.map(String)} onPick={pick} /></div>;
    case 'recall':
      return <div className="w-full"><Title>{m.quiz.recall}</Title><TextOptions options={s.recallOptions.map((w) => m.words1[w])} onPick={pick} /></div>;
    default: {
      const view = choiceView(s, i, text, qb);
      if (!view) return null; // texto do banco carregando (só na primeira vez)
      return (
        <div className="w-full">
          <Title>{view.prompt}</Title>
          {view.sequence && (
            <div className="mx-auto -mt-2 mb-8 max-w-[520px] rounded-2xl bg-soft px-4 py-5 text-center font-mono text-[clamp(22px,4.4vw,30px)] font-medium tracking-[0.02em]">{view.sequence}</div>
          )}
          <TextOptions options={view.options} onPick={pick} />
        </div>
      );
    }
  }
}

const needsPre = (i: number) => { const q = QUESTIONS[i]; return !!q.pre || q.type === 'span'; };

// ---------- página ----------

export function Quiz() {
  const navigate = useNavigate();
  const { m, path } = useI18n();
  const [params] = useSearchParams();
  const [s, setS] = useState<Session>(() => {
    const saved = loadSession();
    return params.has('novo') || !saved || saved.finishedAt ? newSession() : saved;
  });
  const [phase, setPhase] = useState<'pre' | 'main'>('pre');
  // Respondendo sem ler (rápido demais ou sempre a mesma alternativa): primeiro um aviso para ir com
  // calma; se continuar depois do aviso, o teste para e recomeça.
  const [careless, setCareless] = useState(false);
  const [warn, setWarn] = useState(false);
  const sRef = useRef(s);
  sRef.current = s;
  const chars = useCallback((i: number) => m.questions[i]?.prompt.length ?? 80, [m]);

  useEffect(() => { document.title = `${m.meta.title} | ${CONFIG.brand}`; }, [m]);
  // Quando o celular estiver ocioso, já baixa as telas que vêm depois do teste (troca instantânea).
  useEffect(() => {
    const go = () => { loadFunnel().catch(() => {}); };
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const id = w.requestIdleCallback ? w.requestIdleCallback(go) : window.setTimeout(go, 4000);
    return () => { if (!w.requestIdleCallback) clearTimeout(id); };
  }, []);
  useEffect(() => { if (params.has('novo')) navigate(path('/test'), { replace: true }); }, [params, navigate, path]);
  useEffect(() => { saveSession(s); }, [s]);
  useEffect(() => {
    if (!s.finishedAt) return;
    track('CompleteTest');
    navigate(path('/analyzing'));
  }, [s.finishedAt, navigate, path]);

  const next = useCallback(() => {
    const cur = sRef.current;
    if (cur.step + 1 >= STEPS.length && carelessLevel(cur, chars, true) === 'restart') { setCareless(true); return; }
    setPhase('pre');
    setS((prev) => {
      const step = prev.step + 1;
      return step >= STEPS.length ? { ...prev, step, finishedAt: Date.now() } : { ...prev, step };
    });
    window.scrollTo(0, 0);
  }, [chars]);

  const step = STEPS[Math.min(s.step, STEPS.length - 1)];
  const answered = Object.keys(s.answers).length;
  const count = step.kind === 'q' ? step.i + 1 : Math.min(TOTAL, answered + (step.kind === 'word1' ? 1 : 0));

  const onAnswer = useCallback((choice: number, ms: number) => {
    if (step.kind !== 'q') return;
    const updated: Session = { ...sRef.current, answers: { ...sRef.current.answers, [step.i]: { choice, ms } } };
    const level = carelessLevel(updated, chars);
    if (level === 'restart') { setS(updated); setTimeout(() => setCareless(true), 280); return; }
    if (level === 'warn' && updated.carelessWarnedAt === undefined) {
      // Só um aviso amigável, uma vez por teste; nada é perdido.
      const warned = { ...updated, carelessWarnedAt: Object.keys(updated.answers).length };
      sRef.current = warned;
      setS(warned);
      track('CarelessWarning');
      setTimeout(() => setWarn(true), 280);
      return;
    }
    setS(updated);
    setTimeout(next, 280);
  }, [step, next, chars]);

  const restart = () => {
    track('CarelessRestart');
    setCareless(false);
    setPhase('pre');
    setS(newSession());
    window.scrollTo(0, 0);
  };

  const endPre = useCallback(() => setPhase('main'), []);

  let screen: ReactNode;
  if (warn) {
    screen = (
      <div role="alertdialog" aria-labelledby="slow-title" className="w-full max-w-[480px] text-center">
        <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-brand-50 text-brand">
          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
        </div>
        <h2 id="slow-title" className="text-[26px] sm:text-[30px]">{m.quiz.slowTitle}</h2>
        <p className="mx-auto mb-9 mt-4 max-w-[440px] text-ink-2">{m.quiz.slowText}</p>
        <Button size="lg" className="min-w-[240px]" onClick={() => { setWarn(false); next(); }}>{m.quiz.slowCta}</Button>
      </div>
    );
  } else if (careless) {
    screen = (
      <div role="alertdialog" aria-labelledby="careless-title" className="w-full max-w-[480px] text-center">
        <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-warn-50 text-warn">
          <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9" /></svg>
        </div>
        <h2 id="careless-title" className="text-[26px] sm:text-[30px]">{m.quiz.carelessTitle}</h2>
        <p className="mx-auto mb-9 mt-4 max-w-[440px] text-ink-2">{m.quiz.carelessText}</p>
        <Button size="lg" className="min-w-[240px]" onClick={restart}>{m.quiz.carelessCta}</Button>
      </div>
    );
  } else if (step.kind === 'word1') {
    screen = <Memorize title={m.quiz.memorizeWord} sub={m.quiz.memorizeWordSub} value={m.words1[s.word1]}
      onDone={() => { setS((prev) => ({ ...prev, startedAt: prev.startedAt ?? Date.now() })); track('StartQuiz'); next(); }} />;
  } else if (step.kind === 'inter') {
    screen = <Interstitial s={s} type={step.type} after={step.after} onNext={next} />;
  } else {
    const ph = needsPre(step.i) ? phase : 'main';
    screen = <Question key={`${step.i}-${ph}`} s={s} i={step.i} phase={ph} onPhaseDone={endPre} onAnswer={onAnswer} />;
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-20 bg-white">
        <Container className="flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4 font-mono text-[13px] tabular-nums">
            <span aria-label={`${count} / ${TOTAL}`}>{String(count).padStart(2, '0')}<span className="text-muted"> / {TOTAL}</span></span>
            <span className="h-4 w-px bg-line" aria-hidden="true" />
            <span className="text-ink-2"><Elapsed since={s.startedAt} /></span>
          </div>
        </Container>
        <div className="h-0.5 bg-soft-2"><i className="block h-full bg-brand transition-[width] duration-500" style={{ width: `${(answered / TOTAL) * 100}%` }} /></div>
      </header>
      <main className="flex flex-1 items-center justify-center px-5 pb-16 pt-10" aria-live="polite">
        <div key={warn ? 'warn' : careless ? 'careless' : `${s.step}-${phase}`} className="flex w-full animate-in justify-center">{screen}</div>
      </main>
    </div>
  );
}
