import { type ReactNode, useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps, GameResult } from './types';
import type { MemoryStrings } from './ui-pt';

// Jogo da memória 4×4 (8 pares). Cada par de cartas viradas conta 1 jogada.
// Resultado: número de jogadas (menor é melhor).

const PAIRS = 8;
const FLIP_BACK_MS = 700;

function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const newDeck = () => shuffle(Array.from({ length: PAIRS * 2 }, (_, i) => i % PAIRS));

// ---------- figuras ----------

/** Polígono com raios por vértice (raios alternados fazem a estrela). Ângulos em graus. */
function polygon(cx: number, cy: number, radii: number[], rot: number) {
  return radii.map((r, k) => {
    const a = ((rot + (k * 360) / radii.length) * Math.PI) / 180;
    return `${k ? 'L' : 'M'}${(cx + r * Math.cos(a)).toFixed(2)} ${(cy + r * Math.sin(a)).toFixed(2)}`;
  }).join(' ') + 'Z';
}

const TRIANGLE = polygon(24, 27, [15, 15, 15], -90);
const DIAMOND = polygon(24, 24, [16, 12, 16, 12], -90);
const STAR = polygon(24, 25.5, [15, 6.5, 15, 6.5, 15, 6.5, 15, 6.5, 15, 6.5], -90);
const HEXAGON = polygon(24, 24, [14, 14, 14, 14, 14, 14], 0);
const CROSS = 'M19.5 9.5h9v10h10v9h-10v10h-9v-10h-10v-9h10z';

/** Paleta calma: marca, tinta, estados e dois tons neutros. */
const COLORS = ['#2d5bff', '#0e1116', '#12a150', '#b4561e', '#e5484d', '#7a64c8', '#2b8a9a', '#7c8394'];

function Shape({ kind }: { kind: number }) {
  const color = COLORS[kind];
  const solid = { fill: color, stroke: color, strokeWidth: 2, strokeLinejoin: 'round' as const };
  let el: ReactNode;
  switch (kind) {
    case 0: el = <circle cx="24" cy="24" r="13.5" fill={color} />; break;
    case 1: el = <rect x="11.5" y="11.5" width="25" height="25" rx="3.5" fill={color} />; break;
    case 2: el = <path d={TRIANGLE} {...solid} />; break;
    case 3: el = <path d={DIAMOND} {...solid} />; break;
    case 4: el = <path d={STAR} {...solid} />; break;
    case 5: el = <path d={HEXAGON} {...solid} />; break;
    case 6: el = <path d={CROSS} {...solid} />; break;
    default: el = <circle cx="24" cy="24" r="11" fill="none" stroke={color} strokeWidth="5.5" />;
  }
  return <svg viewBox="0 0 48 48" className="size-[60%]" aria-hidden="true">{el}</svg>;
}

/** Verso da carta: a grade 3×3 da marca, com a última célula vazada. */
function Back() {
  const pos = [0, 9, 18];
  return (
    <svg viewBox="0 0 24 24" className="size-[34%]" aria-hidden="true">
      {pos.flatMap((y, r) => pos.map((x, c) => (r === 2 && c === 2
        ? <rect key="q" x={x + 0.75} y={y + 0.75} width="4.5" height="4.5" rx="1.2" fill="none" stroke="#2d5bff" strokeOpacity="0.7" strokeWidth="1.5" />
        : <rect key={`${r}${c}`} x={x} y={y} width="6" height="6" rx="1.6" fill="#dcdfe6" />)))}
    </svg>
  );
}

function Stat({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1 leading-none">
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-muted">{label}</span>
      <span className="font-mono text-[17px] font-medium tabular-nums text-ink">{children}</span>
    </div>
  );
}

export default function Memory({ s, c, onFinish }: GameProps<MemoryStrings>) {
  const [deck] = useState(newDeck);
  const [open, setOpen] = useState<number[]>([]);
  const [found, setFound] = useState<boolean[]>(() => new Array<boolean>(PAIRS * 2).fill(false));
  const [moves, setMoves] = useState(0);
  const [miss, setMiss] = useState(false);
  const [msg, setMsg] = useState('');
  const [ended, setEnded] = useState(false);

  const busy = useRef(false);
  const done = useRef(false);
  const flipTimer = useRef<number | undefined>(undefined);
  const endTimer = useRef<number | undefined>(undefined);
  const finishRef = useRef(onFinish);
  useEffect(() => { finishRef.current = onFinish; }, [onFinish]);
  useEffect(() => () => { window.clearTimeout(flipTimer.current); window.clearTimeout(endTimer.current); }, []);

  const end = (score: number, completed: boolean, delay: number) => {
    if (done.current) return;
    done.current = true;
    setEnded(true);
    const r: GameResult = { score, completed };
    if (delay > 0) endTimer.current = window.setTimeout(() => finishRef.current(r), delay);
    else finishRef.current(r);
  };

  const flip = (i: number) => {
    if (busy.current || done.current || found[i] || open.includes(i)) return;
    if (open.length === 0) { setOpen([i]); return; }
    const a = open[0];
    const m = moves + 1;
    setMoves(m);
    if (deck[a] === deck[i]) {
      const next = found.slice();
      next[a] = true;
      next[i] = true;
      const pairs = next.filter(Boolean).length / 2;
      setFound(next);
      setOpen([]);
      setMsg(`${s.match}. ${s.pairs}: ${pairs}/${PAIRS}`);
      if (pairs === PAIRS) end(m, true, 900);
    } else {
      busy.current = true;
      setOpen([a, i]);
      setMiss(true);
      setMsg(`${s.noMatch}. ${c.moves}: ${m}`);
      flipTimer.current = window.setTimeout(() => {
        busy.current = false;
        setOpen([]);
        setMiss(false);
      }, FLIP_BACK_MS);
    }
  };

  const pairsFound = found.filter(Boolean).length / 2;
  const allFound = pairsFound === PAIRS;

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="mb-3 flex min-h-11 items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <Stat label={c.moves}>{moves}</Stat>
          <Stat label={s.pairs}>{pairsFound}<span className="text-muted">/{PAIRS}</span></Stat>
        </div>
        <Button variant="ghost" size="sm" className="min-h-11 flex-none disabled:opacity-50" disabled={ended} onClick={() => end(moves, false, 0)}>
          {c.giveUp}
        </Button>
      </div>

      <div className="rounded-3xl bg-soft p-3">
        <div role="group" aria-label={s.board} className="grid grid-cols-4 gap-2 sm:gap-3">
          {deck.map((kind, i) => {
            const isFound = found[i];
            const up = isFound || open.includes(i);
            const shape = s.shapes[kind] ?? '';
            const label = isFound ? s.found(i + 1, shape) : up ? s.shown(i + 1, shape) : s.hidden(i + 1);
            const faceRing = isFound ? 'ring-2 ring-good/40' : miss ? 'ring-2 ring-bad/40' : 'ring-2 ring-brand/40';
            return (
              <button
                key={i}
                type="button"
                onClick={() => flip(i)}
                aria-label={label}
                aria-disabled={up || ended ? true : undefined}
                className="group relative aspect-square rounded-2xl [perspective:800px]"
              >
                <span
                  className="absolute inset-0 transition-transform duration-300 ease-out [transform-style:preserve-3d]"
                  style={{ transform: up ? 'rotateY(180deg)' : 'none' }}
                >
                  <span className="absolute inset-0 grid place-items-center rounded-2xl bg-white ring-1 ring-inset ring-line transition-colors [backface-visibility:hidden] group-hover:ring-[#d5d8df] group-aria-disabled:ring-line">
                    <Back />
                  </span>
                  <span
                    className={`absolute inset-0 grid place-items-center rounded-2xl bg-white ring-inset [backface-visibility:hidden] ${faceRing}`}
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <Shape kind={kind} />
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <p className={`mt-4 text-center text-[14px] ${allFound ? 'text-good' : 'text-muted'}`}>{allFound ? s.done : s.hint}</p>
      <p className="sr-only" aria-live="polite">{allFound ? s.done : msg}</p>
    </div>
  );
}
