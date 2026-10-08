import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps } from './types';
import type { SchulteStrings } from './ui-pt';

// Tabela de Schulte: os números de 1 a 25 embaralhados numa grade 5×5, tocados em ordem crescente.
// O cronômetro começa no toque certo do 1 e para no 25. Toques errados piscam a célula e contam
// como erro, sem penalizar o tempo. Pontuação = segundos com uma casa decimal (menor é melhor).

const SIZE = 5;
const TOTAL = SIZE * SIZE;
const FLASH_MS = 300;

function shuffled(): number[] {
  const a = Array.from({ length: TOTAL }, (_, i) => i + 1);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Milissegundos → segundos com uma casa decimal. */
const toSeconds = (ms: number) => Math.round(ms / 100) / 10;

export default function Schulte({ s, c, onFinish }: GameProps<SchulteStrings>) {
  const [cells] = useState(shuffled);
  const [next, setNext] = useState(1);
  const [errors, setErrors] = useState(0);
  const [startAt, setStartAt] = useState<number | null>(null);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const [flash, setFlash] = useState<number | null>(null); // índice da célula tocada por engano

  const nextRef = useRef(1);
  const startRef = useRef<number | null>(null);
  const finished = useRef(false);
  const flashTimer = useRef(0);

  const running = startAt !== null && endAt === null;
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setNow(performance.now()), 100);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => () => window.clearTimeout(flashTimer.current), []);

  const finish = (completed: boolean, t = performance.now()) => {
    if (finished.current) return;
    finished.current = true;
    setEndAt(t);
    const start = startRef.current;
    onFinish({ score: start === null ? 0 : toSeconds(t - start), completed });
  };

  const tap = (n: number, i: number) => {
    if (finished.current || n < nextRef.current) return; // já marcado: ignora
    if (n !== nextRef.current) {
      setErrors((e) => e + 1);
      setFlash(i);
      window.clearTimeout(flashTimer.current);
      flashTimer.current = window.setTimeout(() => setFlash(null), FLASH_MS);
      return;
    }
    const t = performance.now();
    if (n === 1) {
      startRef.current = t;
      setStartAt(t);
      setNow(t);
    }
    nextRef.current = n + 1;
    setNext(n + 1);
    if (n === TOTAL) finish(true, t);
  };

  const elapsed = startAt === null ? 0 : toSeconds(Math.max(0, (endAt ?? now) - startAt));

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[13px] tabular-nums text-ink-2">
          <span className="font-medium text-ink" aria-live="polite">{next > TOTAL ? s.done : s.next(next)}</span>
          <span><span className="text-muted">{c.time} </span>{s.seconds(elapsed)}</span>
          <span><span className="text-muted">{c.wrong} </span>{errors}</span>
        </div>
        <Button variant="ghost" size="sm" className="min-h-11 shrink-0" onClick={() => finish(false)}>{c.giveUp}</Button>
      </div>

      <div role="group" aria-label={s.boardAria} className="grid grid-cols-5 gap-1.5 rounded-3xl bg-soft p-3 sm:gap-2">
        {cells.map((n, i) => {
          const done = n < next;
          const bad = flash === i;
          return (
            <button
              key={n}
              type="button"
              onClick={() => tap(n, i)}
              aria-disabled={done || undefined}
              aria-label={done ? s.doneAria(n) : undefined}
              className={`grid aspect-square min-h-11 touch-manipulation select-none place-items-center rounded-xl font-mono text-[clamp(18px,5.6vw,26px)] font-medium tabular-nums ${
                bad
                  ? 'bg-bad-50 text-bad ring-1 ring-inset ring-bad/40 transition-none'
                  : done
                    ? 'cursor-default bg-brand-50 text-brand/70 transition-colors duration-300'
                    : 'bg-white text-ink ring-1 ring-inset ring-line transition-colors duration-300 hover:bg-soft-2/50'
              }`}
            >
              {n}
            </button>
          );
        })}
      </div>

      <p className={`mt-3 text-center font-mono text-[12px] text-muted ${startAt === null ? '' : 'invisible'}`}>{s.timerHint}</p>
    </div>
  );
}
