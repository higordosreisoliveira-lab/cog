import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps, GameResult } from './types';
import type { SudokuStrings } from './ui-pt';

// Sudoku clássico 9×9. A grade é gerada ao montar: uma solução completa aleatória e, depois,
// remoção simétrica de números enquanto a solução continuar única (conferida pelo solver).
// Resultado: segundos até completar (menor é melhor).

// ---------- geometria da grade ----------

const ROW = Array.from({ length: 81 }, (_, i) => Math.floor(i / 9));
const COL = Array.from({ length: 81 }, (_, i) => i % 9);
const BOX = Array.from({ length: 81 }, (_, i) => Math.floor(ROW[i] / 3) * 3 + Math.floor(COL[i] / 3));
/** Células de cada bloco 3×3, na ordem de leitura. */
const BOX_CELLS = Array.from({ length: 9 }, (_, b) => Array.from({ length: 81 }, (_, i) => i).filter((i) => BOX[i] === b));
/** As 20 células que dividem linha, coluna ou bloco com cada célula. */
const PEERS = Array.from({ length: 81 }, (_, i) =>
  Array.from({ length: 81 }, (_, j) => j).filter((j) => j !== i && (ROW[j] === ROW[i] || COL[j] === COL[i] || BOX[j] === BOX[i])));

const ALL = 0x3fe; // bits 1..9

function bitCount(m: number) {
  let n = 0;
  while (m) { m &= m - 1; n++; }
  return n;
}

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ---------- solver e gerador ----------

interface Solved { count: number; first: number[] | null; aborted: boolean }

/**
 * Backtracking com máscaras de bits, sempre pela célula com menos candidatos.
 * Para ao achar `limit` soluções ou ao estourar `budget` nós (aí `aborted` = true).
 */
function solve(grid: number[], limit: number, randomize: boolean, budget: number): Solved {
  const g = grid.slice();
  const rows = new Array<number>(9).fill(0);
  const cols = new Array<number>(9).fill(0);
  const boxes = new Array<number>(9).fill(0);
  for (let i = 0; i < 81; i++) {
    const v = g[i];
    if (!v) continue;
    const bit = 1 << v;
    rows[ROW[i]] |= bit; cols[COL[i]] |= bit; boxes[BOX[i]] |= bit;
  }
  const out: Solved = { count: 0, first: null, aborted: false };
  let nodes = 0;

  const rec = (): boolean => {
    if (++nodes > budget) { out.aborted = true; return true; }
    let best = -1, bestMask = 0, bestN = 10;
    for (let i = 0; i < 81; i++) {
      if (g[i]) continue;
      const m = ~(rows[ROW[i]] | cols[COL[i]] | boxes[BOX[i]]) & ALL;
      const n = bitCount(m);
      if (n === 0) return false;
      if (n < bestN) { best = i; bestMask = m; bestN = n; if (n === 1) break; }
    }
    if (best < 0) {
      out.count++;
      if (!out.first) out.first = g.slice();
      return out.count >= limit;
    }
    const digits: number[] = [];
    for (let d = 1; d <= 9; d++) if (bestMask & (1 << d)) digits.push(d);
    if (randomize) shuffle(digits);
    const r = ROW[best], c = COL[best], b = BOX[best];
    for (const d of digits) {
      const bit = 1 << d;
      g[best] = d; rows[r] |= bit; cols[c] |= bit; boxes[b] |= bit;
      const stop = rec();
      g[best] = 0; rows[r] &= ~bit; cols[c] &= ~bit; boxes[b] &= ~bit;
      if (stop) return true;
    }
    return false;
  };

  rec();
  return out;
}

/** Grade válida conhecida, usada só se o gerador aleatório falhar (não deve acontecer). */
const FALLBACK = Array.from({ length: 81 }, (_, i) => ((ROW[i] * 3 + Math.floor(ROW[i] / 3) + COL[i]) % 9) + 1);

interface Puzzle { puzzle: number[]; solution: number[] }

function makePuzzle(): Puzzle {
  const solution = solve(new Array<number>(81).fill(0), 1, true, 50000).first ?? FALLBACK.slice();
  const target = 36 + Math.floor(Math.random() * 5); // 36 a 40 números dados
  const puzzle = solution.slice();
  let givens = 81;
  // Remove em pares simétricos (i e 80 − i) para a grade ficar equilibrada.
  for (const i of shuffle(Array.from({ length: 41 }, (_, k) => k))) {
    const j = 80 - i;
    const n = i === j ? 1 : 2;
    if (givens - n < target) continue;
    const a = puzzle[i], b = puzzle[j];
    puzzle[i] = 0; puzzle[j] = 0;
    const res = solve(puzzle, 2, false, 4000);
    if (res.count === 1 && !res.aborted) givens -= n;
    else { puzzle[i] = a; puzzle[j] = b; }
    if (givens <= target) break;
  }
  return { puzzle, solution };
}

function findConflicts(values: number[]) {
  const set = new Set<number>();
  for (let i = 0; i < 81; i++) {
    const v = values[i];
    if (v && PEERS[i].some((j) => values[j] === v)) set.add(i);
  }
  return set;
}

const isSolved = (values: number[]) => values.every((v) => v > 0) && findConflicts(values).size === 0;

// ---------- interface ----------

const pad = (n: number) => String(n).padStart(2, '0');
function fmtTime(sec: number) {
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  return h ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

/** Relógio isolado para não re-renderizar a grade a cada tique. */
function Clock({ start, stoppedAt }: { start: number; stoppedAt: number | null }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (stoppedAt !== null) return;
    const t = window.setInterval(() => setNow(Date.now()), 250);
    return () => window.clearInterval(t);
  }, [stoppedAt]);
  return <>{fmtTime(Math.max(0, Math.floor(((stoppedAt ?? now) - start) / 1000)))}</>;
}

function Stat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 leading-none">
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">{label}</span>
      <span className="font-mono text-[17px] font-medium tabular-nums text-ink">{children}</span>
    </div>
  );
}

const EraseIcon = () => (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-6-7z" /><path d="M12 9.5l5 5M17 9.5l-5 5" />
  </svg>
);

const ARROWS: Record<string, [number, number]> = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1] };

const isTyping = (t: EventTarget | null) =>
  t instanceof HTMLElement && (t.isContentEditable || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT');

export default function Sudoku({ s, c, onFinish }: GameProps<SudokuStrings>) {
  const [game] = useState(makePuzzle);
  const [values, setValues] = useState(() => game.puzzle.slice());
  const [sel, setSel] = useState<number | null>(null);
  const [lockedTry, setLockedTry] = useState(false);
  const [start] = useState(() => Date.now());
  const [stoppedAt, setStoppedAt] = useState<number | null>(null);
  const [solved, setSolved] = useState(false);

  const done = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  const cells = useRef<(HTMLButtonElement | null)[]>([]);
  const finishRef = useRef(onFinish);
  useEffect(() => { finishRef.current = onFinish; }, [onFinish]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const conflicts = useMemo(() => findConflicts(values), [values]);
  const counts = useMemo(() => {
    const n = new Array<number>(10).fill(0);
    for (const v of values) n[v]++;
    return n;
  }, [values]);

  /** Encerra a partida uma única vez; `delay` deixa ver a grade resolvida antes do resultado. */
  const end = (completed: boolean, delay: number) => {
    if (done.current) return;
    done.current = true;
    const now = Date.now();
    setStoppedAt(now);
    const r: GameResult = { score: Math.max(0, Math.floor((now - start) / 1000)), completed };
    if (delay > 0) timer.current = window.setTimeout(() => finishRef.current(r), delay);
    else finishRef.current(r);
  };

  // Seleção e valores também ficam em refs: o atalho de teclado (ouvinte na janela) pode
  // disparar antes de o React registrar o ouvinte novo, e assim nunca lê um estado antigo.
  const selRef = useRef<number | null>(null);
  const valuesRef = useRef(values);

  const select = (i: number | null) => {
    selRef.current = i;
    setSel(i);
    setLockedTry(false);
  };

  const place = (v: number) => {
    const at = selRef.current;
    if (done.current || at === null) return;
    if (game.puzzle[at]) { setLockedTry(true); return; }
    if (valuesRef.current[at] === v) return;
    const next = valuesRef.current.slice();
    next[at] = v;
    valuesRef.current = next;
    setValues(next);
    if (v && isSolved(next)) {
      setSolved(true);
      select(null);
      end(true, 900);
    }
  };

  const moveTo = (i: number) => {
    if (done.current) return;
    select(i);
    cells.current[i]?.focus();
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || done.current || isTyping(e.target)) return;
      if (/^[1-9]$/.test(e.key)) { e.preventDefault(); place(Number(e.key)); return; }
      if (e.key === 'Backspace' || e.key === 'Delete' || e.key === '0') { e.preventDefault(); place(0); return; }
      const d = ARROWS[e.key];
      if (!d) return;
      e.preventDefault();
      const at = selRef.current;
      if (at === null) { const first = valuesRef.current.indexOf(0); moveTo(first < 0 ? 0 : first); return; }
      const r = Math.min(8, Math.max(0, ROW[at] + d[0]));
      const col = Math.min(8, Math.max(0, COL[at] + d[1]));
      moveTo(r * 9 + col);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const selV = sel !== null ? values[sel] : 0;
  const focusable = sel ?? 0;

  let status: string = s.hint;
  let statusTone = 'text-muted';
  if (solved) { status = s.solved; statusTone = 'text-good'; }
  else if (conflicts.size) { status = s.conflicts; statusTone = 'text-bad'; }
  else if (lockedTry) status = s.givenLocked;

  const cellClass = (i: number) => {
    const v = values[i];
    const given = game.puzzle[i] !== 0;
    const weight = given ? 'font-semibold' : 'font-medium';
    if (solved) return `${weight} bg-good-50 ${given ? 'text-ink' : 'text-good'}`;
    const conflict = conflicts.has(i);
    if (sel === i) return `${weight} ${conflict && !given ? 'bg-bad' : 'bg-brand'} text-white`;
    if (conflict) return `${weight} bg-bad-50 text-bad`;
    if (selV && v === selV) return `${weight} bg-brand-50 text-brand`;
    const peer = sel !== null && (ROW[i] === ROW[sel] || COL[i] === COL[sel] || BOX[i] === BOX[sel]);
    return `${weight} ${peer ? 'bg-soft-2' : 'bg-white'} ${given ? 'text-ink' : 'text-brand'}`;
  };

  const cellLabel = (i: number) => {
    const v = values[i];
    let label = `${s.cell(ROW[i] + 1, COL[i] + 1)}, ${v ? v : s.empty}`;
    if (game.puzzle[i]) label += `, ${s.given}`;
    if (conflicts.has(i)) label += `, ${s.conflict}`;
    return label;
  };

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="mb-3 flex min-h-11 items-center justify-between gap-3">
        <Stat label={c.time}><Clock start={start} stoppedAt={stoppedAt} /></Stat>
        <Button variant="ghost" size="sm" className="min-h-11 flex-none disabled:opacity-50" disabled={stoppedAt !== null} onClick={() => end(false, 0)}>
          {c.giveUp}
        </Button>
      </div>

      <div className="rounded-3xl bg-soft p-3">
        <div role="group" aria-label={s.board} className="grid grid-cols-3 gap-1.5 select-none">
          {BOX_CELLS.map((box, b) => (
            <div key={b} className="grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-line">
              {box.map((i) => (
                <button
                  key={i}
                  type="button"
                  ref={(el) => { cells.current[i] = el; }}
                  tabIndex={focusable === i ? 0 : -1}
                  aria-label={cellLabel(i)}
                  onClick={() => { if (!done.current) select(i); }}
                  onFocus={() => { if (!done.current && selRef.current !== i) select(i); }}
                  className={`grid aspect-square place-items-center rounded-none font-mono text-[18px] leading-none transition-colors duration-100 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink sm:text-[22px] ${cellClass(i)}`}
                >
                  {values[i] || ''}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div role="group" aria-label={s.keypad} className="mt-3 grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
          const left = Math.max(0, 9 - counts[n]);
          return (
            <button
              key={n}
              type="button"
              onClick={() => place(n)}
              disabled={stoppedAt !== null}
              aria-label={`${s.key(n)}, ${s.left(left)}`}
              className={`flex h-14 flex-col items-center justify-center gap-1 rounded-2xl bg-white font-mono ring-1 ring-inset ring-line transition-colors hover:bg-soft disabled:opacity-50 ${left === 0 ? 'text-muted' : 'text-ink'}`}
            >
              <span className="text-[22px] font-medium leading-none">{n}</span>
              <span className="text-[10px] leading-none text-muted" aria-hidden="true">{left}</span>
            </button>
          );
        })}
        <button
          type="button"
          onClick={() => place(0)}
          disabled={stoppedAt !== null}
          aria-label={s.erase}
          title={s.erase}
          className="grid h-14 place-items-center rounded-2xl bg-white text-ink-2 ring-1 ring-inset ring-line transition-colors hover:bg-soft disabled:opacity-50"
        >
          <EraseIcon />
        </button>
      </div>

      <p className={`mt-4 min-h-[3em] text-center text-[14px] leading-normal ${statusTone}`} aria-live="polite">{status}</p>
    </div>
  );
}
