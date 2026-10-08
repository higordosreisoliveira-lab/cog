import { type PointerEvent as ReactPointerEvent, type ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps, GameResult } from './types';
import type { Game2048Strings } from './ui-pt';

// 2048 clássico num tabuleiro 4×4. Setas/WASD ou deslizar o dedo.
// Resultado: pontos (soma das junções). Chegar a 2048 não encerra a partida.

type Dir = 'up' | 'down' | 'left' | 'right';

const IDX = [0, 1, 2, 3];
/** Para cada direção, as 4 linhas de índices, começando pela borda para onde as peças vão. */
const LINES: Record<Dir, number[][]> = {
  left: IDX.map((r) => IDX.map((c) => r * 4 + c)),
  right: IDX.map((r) => IDX.map((c) => r * 4 + 3 - c)),
  up: IDX.map((c) => IDX.map((r) => r * 4 + c)),
  down: IDX.map((c) => IDX.map((r) => (3 - r) * 4 + c)),
};

interface Board {
  cells: number[];
  score: number;
  moves: number;
  born: number[]; // índices das peças novas
  merged: number[]; // índices que receberam uma junção na última jogada
  over: boolean;
  seq: number; // muda a cada jogada; usado para reiniciar as animações
}

function spawn(cells: number[]): number {
  const empty: number[] = [];
  cells.forEach((v, i) => { if (!v) empty.push(i); });
  if (!empty.length) return -1;
  const i = empty[Math.floor(Math.random() * empty.length)];
  cells[i] = Math.random() < 0.9 ? 2 : 4;
  return i;
}

function canMove(cells: number[]): boolean {
  for (let i = 0; i < 16; i++) {
    const v = cells[i];
    if (!v) return true;
    if (i % 4 < 3 && cells[i + 1] === v) return true;
    if (i < 12 && cells[i + 4] === v) return true;
  }
  return false;
}

function initial(): Board {
  const cells = new Array<number>(16).fill(0);
  const born = [spawn(cells), spawn(cells)];
  return { cells, score: 0, moves: 0, born, merged: [], over: false, seq: 0 };
}

/** Aplica uma jogada. Devolve null se nada se mexeu. */
function slide(b: Board, dir: Dir): Board | null {
  const cells = new Array<number>(16).fill(0);
  const merged: number[] = [];
  let gained = 0;
  let changed = false;
  for (const line of LINES[dir]) {
    const vals = line.map((i) => b.cells[i]).filter((v) => v > 0);
    const out: number[] = [];
    for (let k = 0; k < vals.length; k++) {
      if (k + 1 < vals.length && vals[k] === vals[k + 1]) {
        const v = vals[k] * 2;
        out.push(v);
        gained += v;
        merged.push(line[out.length - 1]);
        k++;
      } else {
        out.push(vals[k]);
      }
    }
    line.forEach((idx, k) => {
      cells[idx] = k < out.length ? out[k] : 0;
      if (cells[idx] !== b.cells[idx]) changed = true;
    });
  }
  if (!changed) return null;
  const born = [spawn(cells)]; // a peça nova entra antes de conferir se ainda há jogadas
  return { cells, score: b.score + gained, moves: b.moves + 1, born, merged, over: !canMove(cells), seq: b.seq + 1 };
}

// ---------- visual ----------

/** Escala calma: cinza claro → tons da marca → tinta. */
const TILE: Record<number, string> = {
  2: 'bg-white text-ink',
  4: 'bg-[#e3e6ed] text-ink',
  8: 'bg-brand-50 text-brand',
  16: 'bg-[#d6dfff] text-brand-600',
  32: 'bg-[#b3c3ff] text-brand-600',
  64: 'bg-[#5577ff] text-white',
  128: 'bg-brand text-white',
  256: 'bg-brand-600 text-white',
  512: 'bg-[#1a39b8] text-white',
  1024: 'bg-[#1b2668] text-white',
};
const tileColor = (v: number) => TILE[v] ?? 'bg-ink text-white';

const tileSize = (v: number) =>
  v < 100 ? 'text-[26px] sm:text-[34px]'
    : v < 1000 ? 'text-[22px] sm:text-[29px]'
      : v < 10000 ? 'text-[18px] sm:text-[24px]'
        : 'text-[15px] sm:text-[19px]';

const KEYFRAMES =
  '@keyframes g2048-in{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:none}}'
  + '@keyframes g2048-merge{0%{transform:scale(1)}45%{transform:scale(1.1)}100%{transform:scale(1)}}';

const KEYS: Record<string, Dir> = {
  ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
  w: 'up', s: 'down', a: 'left', d: 'right',
};

const SWIPE = 30; // px

const isTyping = (t: EventTarget | null) =>
  t instanceof HTMLElement && (t.isContentEditable || t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT');

function Stat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 leading-none">
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">{label}</span>
      <span className="font-mono text-[17px] font-medium tabular-nums text-ink">{children}</span>
    </div>
  );
}

export default function Game2048({ s, c, onFinish }: GameProps<Game2048Strings>) {
  const [board, setBoard] = useState(initial);
  const [ended, setEnded] = useState(false);
  // Fonte da verdade fora do estado do React: as jogadas leem e escrevem aqui (sem efeitos
  // colaterais dentro de setState, que o StrictMode executa duas vezes).
  const ref = useRef(board);
  const done = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  const swipe = useRef<{ id: number; x: number; y: number } | null>(null);
  const finishRef = useRef(onFinish);
  useEffect(() => { finishRef.current = onFinish; }, [onFinish]);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const end = (delay: number) => {
    if (done.current) return;
    done.current = true;
    setEnded(true);
    const r: GameResult = { score: ref.current.score, completed: true };
    if (delay > 0) timer.current = window.setTimeout(() => finishRef.current(r), delay);
    else finishRef.current(r);
  };

  const move = (dir: Dir) => {
    if (done.current) return;
    const next = slide(ref.current, dir);
    if (!next) return;
    ref.current = next;
    setBoard(next);
    if (next.over) end(1600);
  };

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || isTyping(e.target)) return;
      const dir = KEYS[e.key] ?? KEYS[e.key.toLowerCase()];
      if (!dir) return;
      e.preventDefault();
      move(dir);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  });

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) return;
    swipe.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* sem captura, segue igual */ }
  };
  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const st = swipe.current;
    if (!st || st.id !== e.pointerId) return;
    const dx = e.clientX - st.x, dy = e.clientY - st.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < SWIPE) return;
    swipe.current = null; // um gesto = uma jogada
    move(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'));
  };
  const onPointerEnd = () => { swipe.current = null; };

  const reached = board.cells.some((v) => v >= 2048);

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <style>{KEYFRAMES}</style>
      <div className="mb-3 flex min-h-11 items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <Stat label={c.score}>{board.score}</Stat>
          <Stat label={c.moves}>{board.moves}</Stat>
        </div>
        <Button variant="ghost" size="sm" className="min-h-11 flex-none disabled:opacity-50" disabled={ended} onClick={() => end(0)}>
          {c.giveUp}
        </Button>
      </div>

      <div
        role="group"
        aria-label={s.board}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        className="relative touch-none select-none rounded-3xl bg-soft p-3"
      >
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {board.cells.map((v, i) => {
            const anim = board.born.includes(i) ? 'g2048-in 180ms ease-out both' : board.merged.includes(i) ? 'g2048-merge 200ms ease-out' : undefined;
            return (
              <div key={i} className="relative aspect-square rounded-xl bg-soft-2">
                {v > 0 ? (
                  <div
                    key={anim ? `a${board.seq}` : 's'}
                    style={anim ? { animation: anim } : undefined}
                    className={`absolute inset-0 grid place-items-center rounded-xl font-mono font-semibold leading-none tracking-[-0.03em] ${tileColor(v)} ${tileSize(v)}`}
                  >
                    {v}
                  </div>
                ) : (
                  <span className="sr-only">{s.empty}</span>
                )}
              </div>
            );
          })}
        </div>

        {board.over && (
          <div className="absolute inset-0 grid animate-fade place-items-center rounded-3xl bg-white/45 p-6">
            <p className="max-w-[280px] rounded-2xl bg-white px-5 py-4 text-center text-[16px] font-medium leading-snug text-ink ring-1 ring-inset ring-line" aria-hidden="true">{s.over}</p>
          </div>
        )}
      </div>

      <p className={`mt-4 text-center text-[14px] ${reached ? 'text-brand' : 'text-muted'}`}>{reached ? s.reached : s.hint}</p>
      <p className="sr-only" aria-live="polite">{board.over ? s.over : ''}</p>
    </div>
  );
}
