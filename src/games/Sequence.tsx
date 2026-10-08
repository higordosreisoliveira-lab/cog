import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui';
import type { GameProps } from './types';
import type { SequenceStrings } from './ui-pt';

// Sequência (estilo "Simon"): quatro blocos coloridos. A cada rodada a sequência ganha um bloco
// sorteado; o jogo mostra a sequência inteira e o jogador repete tocando (ou teclas 1–4). Um erro
// encerra a partida. A primeira rodada só começa no botão "Começar".
// Pontuação = maior sequência repetida sem erro (nível; maior é melhor).

type Phase = 'ready' | 'watch' | 'input' | 'between' | 'over';

const PADS = [
  { idle: 'bg-brand/20 text-brand', lit: 'bg-brand text-white' },
  { idle: 'bg-good/20 text-good', lit: 'bg-good text-white' },
  { idle: 'bg-warn/20 text-warn', lit: 'bg-warn text-white' },
  { idle: 'bg-ink/12 text-ink', lit: 'bg-ink text-white' },
] as const;

const KEYS = ['1', '2', '3', '4'];
const LEAD_IN = 500; // entre o aviso "Observe" e o primeiro bloco
const NEXT_ROUND = 800; // depois de acertar uma rodada
const PRESS_MS = 180; // brilho do toque do jogador
const END_DELAY = 1000; // tempo para ver o erro antes de encerrar

/** Brilho e intervalo de cada bloco; encurtam aos poucos conforme a sequência cresce. */
const timing = (len: number) => ({
  on: Math.max(260, 500 - (len - 1) * 20),
  gap: Math.max(110, 200 - (len - 1) * 8),
});

export default function Sequence({ s, c, onFinish }: GameProps<SequenceStrings>) {
  const [phase, setPhaseState] = useState<Phase>('ready');
  const [level, setLevel] = useState(0);
  const [pos, setPos] = useState(0);
  const [lit, setLit] = useState<number | null>(null);
  const [missed, setMissed] = useState<number | null>(null);

  // A lógica lê só refs, então os timers e o atalho de teclado nunca enxergam estado velho.
  const phaseRef = useRef<Phase>('ready');
  const seq = useRef<number[]>([]);
  const posRef = useRef(0);
  const best = useRef(0);
  const finished = useRef(false);
  const timers = useRef(new Set<number>());
  const pressTimer = useRef(0);
  const onFinishRef = useRef(onFinish);
  useEffect(() => { onFinishRef.current = onFinish; }, [onFinish]);

  const setPhase = (p: Phase) => { phaseRef.current = p; setPhaseState(p); };

  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => { timers.current.delete(id); fn(); }, ms);
    timers.current.add(id);
  };

  const clearAll = () => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current.clear();
    window.clearTimeout(pressTimer.current);
  };

  const finish = () => {
    if (finished.current) return;
    finished.current = true;
    clearAll();
    onFinishRef.current({ score: best.current, completed: true });
  };

  const playRound = () => {
    const next = [...seq.current, Math.floor(Math.random() * PADS.length)];
    seq.current = next;
    posRef.current = 0;
    setPos(0);
    setLevel(next.length);
    setPhase('watch');
    const { on, gap } = timing(next.length);
    let t = LEAD_IN;
    for (const p of next) {
      later(() => setLit(p), t);
      later(() => setLit(null), t + on);
      t += on + gap;
    }
    later(() => setPhase('input'), t - gap);
  };

  const press = (p: number) => {
    if (phaseRef.current !== 'input' || finished.current) return;
    const expected = seq.current[posRef.current];
    window.clearTimeout(pressTimer.current);
    if (p !== expected) {
      setPhase('over');
      setMissed(p);
      setLit(expected); // mostra qual era o bloco certo
      later(finish, END_DELAY);
      return;
    }
    setLit(p);
    pressTimer.current = window.setTimeout(() => setLit(null), PRESS_MS);
    posRef.current += 1;
    setPos(posRef.current);
    if (posRef.current === seq.current.length) {
      best.current = seq.current.length;
      setPhase('between');
      later(playRound, NEXT_ROUND);
    }
  };

  const start = () => {
    if (phaseRef.current !== 'ready' || finished.current) return;
    playRound();
  };

  // Ao desmontar, nenhum timer sobrevive (nem brilho, nem rodada agendada, nem o fim da partida).
  useEffect(() => {
    const ids = timers.current;
    return () => {
      ids.forEach((id) => window.clearTimeout(id));
      ids.clear();
      window.clearTimeout(pressTimer.current);
    };
  }, []);

  const pressRef = useRef(press);
  useEffect(() => { pressRef.current = press; });
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.metaKey || e.ctrlKey || e.altKey) return;
      const i = KEYS.indexOf(e.key);
      if (i < 0) return;
      e.preventDefault();
      pressRef.current(i);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const status = {
    ready: s.intro,
    watch: s.watch,
    input: s.yourTurn,
    between: s.roundDone,
    over: s.miss,
  }[phase];
  const canPress = phase === 'input';

  return (
    <div className="mx-auto w-full max-w-[440px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="font-mono text-[13px] tabular-nums text-ink-2">
          <span className="text-muted">{c.level} </span>{Math.max(1, level)}
        </div>
        <Button variant="ghost" size="sm" className="min-h-11 shrink-0" onClick={finish}>{c.giveUp}</Button>
      </div>

      <div className="mb-3 flex h-7 items-center justify-center gap-2">
        <span aria-live="polite" className={`text-[17px] font-medium ${phase === 'over' ? 'text-bad' : canPress ? 'text-ink' : 'text-ink-2'}`}>{status}</span>
        {canPress && <span aria-hidden="true" className="font-mono text-[13px] tabular-nums text-muted">{pos}/{level}</span>}
      </div>

      <div role="group" aria-label={s.boardAria} className="relative grid grid-cols-2 gap-3 rounded-3xl bg-soft p-3">
        {PADS.map((pad, i) => (
          <button
            key={i}
            type="button"
            onClick={() => press(i)}
            aria-label={s.pad(i + 1)}
            aria-disabled={!canPress}
            tabIndex={phase === 'ready' ? -1 : undefined}
            className={`relative aspect-square min-h-11 touch-manipulation select-none rounded-2xl transition ${
              lit === i ? `${pad.lit} duration-75` : `${pad.idle} duration-300`
            } ${missed === i ? 'ring-4 ring-inset ring-bad' : ''} ${canPress ? 'active:scale-[0.98]' : 'cursor-default'}`}
          >
            <span aria-hidden="true" className="absolute left-3 top-2.5 font-mono text-[12px] font-medium opacity-70">{i + 1}</span>
          </button>
        ))}
        {phase === 'ready' && (
          <div className="absolute inset-0 grid place-items-center rounded-3xl bg-soft/60">
            <Button size="lg" className="min-w-[180px]" onClick={start}>{c.start}</Button>
          </div>
        )}
      </div>

      <p className="mt-3 hidden text-center font-mono text-[12px] text-muted sm:block">{s.keysHint}</p>
      {/* Leitores de tela ouvem o número de cada bloco aceso durante a demonstração. */}
      <span className="sr-only" aria-live="assertive">{phase === 'watch' && lit !== null ? lit + 1 : ''}</span>
    </div>
  );
}
