import { useEffect, useReducer, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps } from './types';
import type { MathSprintStrings } from './ui-pt';

// Contas rápidas: 60 segundos de cálculo mental, com dificuldade crescente (somas e subtrações,
// depois multiplicações até 12×12, depois contas de dois passos). Nenhum resultado é negativo.
// O tempo só começa no botão "Começar". Pontuação = número de acertos (maior é melhor).

const DURATION_MS = 60_000;
const MAX_DIGITS = 4;

// ---------- perguntas ----------

interface Question { text: string; answer: number }

const rnd = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1));

/** Pergunta de número `i` (0 = primeira). A dificuldade sobe com `i`. */
function build(i: number): Question {
  if (i < 5) { // 1–2 algarismos
    if (Math.random() < 0.5) { const a = rnd(2, 19), b = rnd(2, 9); return { text: `${a} + ${b}`, answer: a + b }; }
    const a = rnd(8, 20), b = rnd(2, Math.min(9, a - 1));
    return { text: `${a} − ${b}`, answer: a - b };
  }
  if (i < 10) { // dois algarismos
    if (Math.random() < 0.5) { const a = rnd(12, 69), b = rnd(11, 29); return { text: `${a} + ${b}`, answer: a + b }; }
    const a = rnd(31, 99), b = rnd(11, a - 10);
    return { text: `${a} − ${b}`, answer: a - b };
  }
  if (i < 18) { // tabuada até 12×12, sem os fatores mais fáceis depois de algumas
    const lo = i < 14 ? 2 : 4;
    const a = rnd(lo, 12), b = rnd(lo, 12);
    return { text: `${a} × ${b}`, answer: a * b };
  }
  // dois passos
  const a = rnd(3, 12), b = rnd(3, 9);
  switch (rnd(0, 2)) {
    case 0: { const k = rnd(2, 19); return { text: `${a} × ${b} + ${k}`, answer: a * b + k }; }
    case 1: { const k = rnd(2, Math.min(19, a * b - 1)); return { text: `${a} × ${b} − ${k}`, answer: a * b - k }; }
    default: { const x = rnd(2, 9), y = rnd(2, 9), m = rnd(2, 6); return { text: `(${x} + ${y}) × ${m}`, answer: (x + y) * m }; }
  }
}

/** Evita repetir a mesma conta duas vezes seguidas. */
function nextQuestion(i: number, prev?: Question): Question {
  let q = build(i);
  for (let k = 0; k < 6 && prev && q.text === prev.text; k++) q = build(i);
  return q;
}

// ---------- estado ----------

type Phase = 'ready' | 'play' | 'over';

interface State {
  phase: Phase;
  q: Question;
  idx: number; // perguntas já respondidas (define a dificuldade)
  typed: string;
  right: number;
  wrong: number;
  fb: { ok: boolean } | null; // objeto novo a cada resposta, para disparar o brilho
}

type Action = { type: 'start' } | { type: 'digit'; d: string } | { type: 'back' } | { type: 'submit' } | { type: 'end' };

const init = (): State => ({ phase: 'ready', q: nextQuestion(0), idx: 0, typed: '', right: 0, wrong: 0, fb: null });

function reducer(st: State, a: Action): State {
  switch (a.type) {
    case 'start':
      return st.phase === 'ready' ? { ...st, phase: 'play' } : st;
    case 'digit':
      if (st.phase !== 'play' || st.typed.length >= MAX_DIGITS) return st;
      return { ...st, typed: st.typed === '0' ? a.d : st.typed + a.d };
    case 'back':
      return st.phase === 'play' ? { ...st, typed: st.typed.slice(0, -1) } : st;
    case 'submit': {
      if (st.phase !== 'play' || st.typed === '') return st;
      const ok = Number(st.typed) === st.q.answer;
      const idx = st.idx + 1;
      return { ...st, idx, q: nextQuestion(idx, st.q), typed: '', right: st.right + (ok ? 1 : 0), wrong: st.wrong + (ok ? 0 : 1), fb: { ok } };
    }
    case 'end':
      return { ...st, phase: 'over', typed: '' };
  }
}

const clock = (ms: number) => {
  const sec = Math.ceil(ms / 1000);
  return `${Math.floor(sec / 60)}:${String(sec % 60).padStart(2, '0')}`;
};

/** Teclas do teclado na tela não roubam o foco, para o Enter do teclado físico continuar confirmando. */
const keepFocus = (e: { preventDefault: () => void }) => e.preventDefault();

const KEYPAD = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'back', '0', 'ok'] as const;

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7z" /><path d="M12.5 9.5l5 5M17.5 9.5l-5 5" />
  </svg>
);

// ---------- jogo ----------

export default function MathSprint({ s, c, onFinish }: GameProps<MathSprintStrings>) {
  const [st, dispatch] = useReducer(reducer, undefined, init);
  const [left, setLeft] = useState(DURATION_MS);

  const endAt = useRef(0);
  const finished = useRef(false);
  const flashRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef(0);
  const onFinishRef = useRef(onFinish);
  useEffect(() => { onFinishRef.current = onFinish; }, [onFinish]);
  useEffect(() => { rightRef.current = st.right; }, [st.right]);

  const finish = (completed: boolean) => {
    if (finished.current) return;
    finished.current = true;
    dispatch({ type: 'end' });
    onFinishRef.current({ score: rightRef.current, completed });
  };

  const start = () => {
    if (st.phase !== 'ready') return;
    endAt.current = performance.now() + DURATION_MS;
    setLeft(DURATION_MS);
    dispatch({ type: 'start' });
  };

  // Contagem regressiva (só durante a partida).
  useEffect(() => {
    if (st.phase !== 'play') return;
    const id = window.setInterval(() => {
      const ms = Math.max(0, endAt.current - performance.now());
      setLeft(ms);
      if (ms === 0) {
        window.clearInterval(id);
        finish(true);
      }
    }, 100);
    return () => window.clearInterval(id);
    // `finish` só usa refs e dispatch, então a versão capturada aqui continua válida.
  }, [st.phase]);

  // Teclado físico: dígitos, Backspace e Enter.
  useEffect(() => {
    if (st.phase !== 'play') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const t = e.target;
      if (t instanceof HTMLElement && (t.isContentEditable || t.closest('input, textarea, select'))) return;
      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        if (!e.repeat) dispatch({ type: 'digit', d: e.key });
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        dispatch({ type: 'back' });
      } else if (e.key === 'Enter') {
        if (t instanceof HTMLElement && t.closest('button, a')) return; // botão focado pelo Tab age normalmente
        e.preventDefault();
        if (!e.repeat) dispatch({ type: 'submit' });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [st.phase]);

  // Brilho rápido no cartão da pergunta a cada resposta.
  useEffect(() => {
    if (!st.fb) return;
    flashRef.current?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: 'ease-out' });
  }, [st.fb]);

  const playing = st.phase === 'play';
  const urgent = playing && left <= 10_000;
  const live = playing ? `${st.fb ? `${st.fb.ok ? s.right : s.miss}. ` : ''}${st.q.text}` : '';

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[13px] tabular-nums text-ink-2">
          <span className={`font-medium ${urgent ? 'text-bad' : 'text-ink'}`}><span className="font-normal text-muted">{c.time} </span>{clock(left)}</span>
          <span><span className="text-muted">{c.correct} </span>{st.right}</span>
          <span><span className="text-muted">{c.wrong} </span>{st.wrong}</span>
        </div>
        <Button variant="ghost" size="sm" className="min-h-11 shrink-0" onClick={() => finish(false)}>{c.giveUp}</Button>
      </div>

      <div className="mb-3 h-0.5 overflow-hidden rounded-full bg-soft-2" aria-hidden="true">
        <i className="block h-full bg-brand transition-[width] duration-100 ease-linear" style={{ width: `${(left / DURATION_MS) * 100}%` }} />
      </div>

      <div className="rounded-3xl bg-soft p-3">
        <div className="relative mb-3 grid min-h-[152px] place-items-center overflow-hidden rounded-2xl bg-white px-4 py-5 text-center ring-1 ring-inset ring-line">
          <span ref={flashRef} aria-hidden="true" style={{ opacity: 0 }}
            className={`pointer-events-none absolute inset-0 ring-2 ring-inset ${st.fb && !st.fb.ok ? 'bg-bad-50 ring-bad/40' : 'bg-good-50 ring-good/40'}`} />
          <div className="relative">
            {st.phase === 'ready' && (
              <>
                <p className="mx-auto mb-4 max-w-[300px] text-[15px] text-ink-2">{s.intro(DURATION_MS / 1000)}</p>
                <Button size="lg" className="min-w-[180px]" onClick={start}>{c.start}</Button>
              </>
            )}
            {playing && (
              <>
                <div className="font-mono text-[clamp(30px,9vw,42px)] font-medium leading-none tracking-[-0.02em]">{st.q.text}</div>
                <div className="mt-5 flex items-baseline justify-center gap-3 font-mono">
                  <span className="text-[24px] text-muted" aria-hidden="true">=</span>
                  <output aria-label={s.answerAria} className="min-w-[4ch] border-b-2 border-brand pb-1 text-[30px] font-medium leading-none">
                    {st.typed || ' '}
                  </output>
                </div>
              </>
            )}
            {st.phase === 'over' && left === 0 && <p className="text-[20px] font-medium">{s.timeUp}</p>}
          </div>
        </div>

        <div role="group" aria-label={s.keypadAria} className="grid grid-cols-3 gap-2">
          {KEYPAD.map((k) => {
            const base = 'grid h-14 touch-manipulation select-none place-items-center rounded-2xl transition-colors disabled:cursor-not-allowed disabled:opacity-40';
            if (k === 'ok') {
              return (
                <button key={k} type="button" disabled={!playing} onMouseDown={keepFocus} onClick={() => dispatch({ type: 'submit' })}
                  className={`${base} bg-ink text-[16px] font-semibold text-white hover:bg-[#2a303c]`}>{s.ok}</button>
              );
            }
            if (k === 'back') {
              return (
                <button key={k} type="button" disabled={!playing} onMouseDown={keepFocus} onClick={() => dispatch({ type: 'back' })} aria-label={s.backspace}
                  className={`${base} bg-white text-ink-2 ring-1 ring-inset ring-line hover:bg-soft-2/50 active:bg-soft-2`}><BackIcon /></button>
              );
            }
            return (
              <button key={k} type="button" disabled={!playing} onMouseDown={keepFocus} onClick={() => dispatch({ type: 'digit', d: k })}
                className={`${base} bg-white font-mono text-[24px] font-medium text-ink ring-1 ring-inset ring-line hover:bg-soft-2/50 active:bg-soft-2`}>{k}</button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 hidden text-center font-mono text-[12px] text-muted sm:block">{s.keysHint}</p>
      <span className="sr-only" aria-live="polite">{live}</span>
    </div>
  );
}
