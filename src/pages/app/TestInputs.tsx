import { useCallback, useEffect, useRef, useState } from 'react';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import type { AppMessages } from '../../i18n/app/pt';
import { Button, Label } from '../../components/ui';

// ---------- formatos de resposta ----------

// Em tela de toque o "hover" fica preso no último ponto tocado e faria a próxima pergunta parecer
// já respondida; por isso a prévia ao passar o mouse só vale em aparelho com mouse de verdade.
const canHover = () => typeof window !== 'undefined' && !!window.matchMedia?.('(hover: hover) and (pointer: fine)').matches;

interface InputProps {
  labels: string[]; // rótulos da escala, na ordem exibida
  value: number | undefined; // índice escolhido
  onPick: (i: number) => void;
  am: AppMessages;
}

/** Opções empilhadas (formato padrão). */
export function ListInput({ labels, value, onPick }: InputProps) {
  return (
    <div className="grid gap-2.5">
      {labels.map((label, k) => {
        const sel = value === k;
        return (
          <button key={k} onClick={() => onPick(k)}
            className={`flex min-h-14 items-center gap-4 rounded-2xl px-4 py-3 text-left ring-inset transition ${sel ? 'bg-brand-50 ring-2 ring-brand' : 'bg-white ring-1 ring-line hover:bg-soft'}`}>
            <span className={`grid size-7 flex-none place-items-center rounded-lg font-mono text-[12px] ${sel ? 'bg-brand text-white' : 'bg-soft text-muted'}`}>{k + 1}</span>
            {label}
          </button>
        );
      })}
    </div>
  );
}

/** Círculos de concordância: maiores nas pontas, "Discordo" à esquerda e "Concordo" à direita. */
const CIRCLE = {
  // lado "discordo" em grafite, lado "concordo" no azul da marca, meio neutro
  dis: { idle: 'border-ink-2/45 bg-soft group-hover:border-ink-2 group-hover:bg-ink-2/10 group-hover:text-ink-2/60', on: 'border-ink-2 bg-ink-2 text-white shadow-[0_8px_18px_-8px_rgba(14,17,22,0.55)]' },
  mid: { idle: 'border-muted/45 bg-white group-hover:border-muted group-hover:text-muted/70', on: 'border-muted bg-muted text-white' },
  agr: { idle: 'border-brand/45 bg-brand-50 group-hover:border-brand group-hover:bg-brand/15 group-hover:text-brand/70', on: 'border-brand bg-brand text-white shadow-[0_8px_18px_-8px_rgba(45,91,255,0.7)]' },
};

export function CirclesInput({ labels, value, onPick, am }: InputProps) {
  const n = labels.length, mid = (n - 1) / 2;
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;
  return (
    <div>
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        <span className="hidden w-24 text-right text-[14px] font-medium text-ink-2 sm:block">{am.tests.disagree}</span>
        <div role="radiogroup" className="flex flex-1 items-center justify-between sm:max-w-[400px]" onMouseLeave={() => setHover(null)}>
          {labels.map((label, k) => {
            const dist = Math.abs(k - mid) / (mid || 1); // 0 no meio, 1 nas pontas
            const size = Math.round(34 + dist * 24); // 34 px no meio, 58 px nas pontas (bom para o dedo)
            const side = k < mid ? CIRCLE.dis : k > mid ? CIRCLE.agr : CIRCLE.mid;
            const sel = value === k;
            return (
              <button key={k} role="radio" aria-checked={sel} aria-label={label} title={label}
                onClick={() => onPick(k)} onMouseEnter={() => { if (canHover()) setHover(k); }}
                className="group grid place-items-center rounded-full p-1.5 outline-none focus-visible:ring-2 focus-visible:ring-brand/40">
                <span className={`grid place-items-center rounded-full border-2 transition-all duration-150 ${sel ? `scale-110 ${side.on}` : `text-transparent group-hover:scale-105 ${side.idle}`}`}
                  style={{ width: size, height: size }}>
                  <svg viewBox="0 0 24 24" className="size-[46%]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                </span>
              </button>
            );
          })}
        </div>
        <span className="hidden w-24 text-[14px] font-medium text-brand sm:block">{am.tests.agree}</span>
      </div>
      <div className="mt-2 flex justify-between px-1 text-[13px] font-medium sm:hidden">
        <span className="text-ink-2">{am.tests.disagree}</span>
        <span className="text-brand">{am.tests.agree}</span>
      </div>
      <p className={`mt-5 min-h-6 text-center text-[14.5px] font-medium transition-colors ${shown === undefined ? '' : shown < mid ? 'text-ink-2' : shown > mid ? 'text-brand' : 'text-muted'}`} aria-live="polite">
        {shown !== undefined ? labels[shown] : ''}
      </p>
    </div>
  );
}

/** Régua de frequência: arraste o marcador ou toque numa parada; solta = escolhe. Setas + Enter no teclado. */
export function SliderInput({ labels, value, onPick }: InputProps) {
  const n = labels.length;
  const pct = (k: number) => (k / (n - 1)) * 100;
  const track = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState<number | null>(null);
  const shown = drag ?? value;
  const at = (x: number) => {
    const r = track.current!.getBoundingClientRect();
    return Math.round(Math.min(1, Math.max(0, (x - r.left) / r.width)) * (n - 1));
  };
  const key = (e: React.KeyboardEvent) => {
    const cur = shown ?? Math.floor((n - 1) / 2);
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); setDrag(Math.min(n - 1, shown === undefined ? cur : cur + 1)); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); setDrag(Math.max(0, shown === undefined ? cur : cur - 1)); }
    else if ((e.key === 'Enter' || e.key === ' ') && shown !== undefined) { e.preventDefault(); setDrag(null); onPick(shown); }
  };
  return (
    <div className="px-4 pb-2 pt-6">
      <div ref={track} role="slider" tabIndex={0} aria-valuemin={1} aria-valuemax={n} aria-valuenow={shown !== undefined ? shown + 1 : undefined}
        aria-valuetext={shown !== undefined ? labels[shown] : undefined} onKeyDown={key}
        onPointerDown={(e) => { e.currentTarget.setPointerCapture(e.pointerId); setDrag(at(e.clientX)); }}
        onPointerMove={(e) => { if (drag !== null) { const k = at(e.clientX); if (k !== drag) setDrag(k); } }}
        onPointerUp={() => { if (drag !== null) { onPick(drag); setDrag(null); } }}
        onPointerCancel={() => setDrag(null)}
        className="relative h-14 cursor-pointer touch-pan-y select-none rounded-full outline-none focus-visible:ring-2 focus-visible:ring-brand/30">
        <div className="absolute inset-x-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-soft-2" />
        {shown !== undefined && <div className={`absolute left-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-brand ${drag === null ? 'transition-all' : ''}`} style={{ width: `${pct(shown)}%` }} />}
        {labels.map((_, k) => (
          <span key={k} className={`absolute top-1/2 block size-4 -translate-x-1/2 -translate-y-1/2 rounded-full ${shown !== undefined && k <= shown ? 'bg-brand' : 'bg-white ring-2 ring-[#cfd3db]'}`}
            style={{ left: `${pct(k)}%` }} />
        ))}
        {shown !== undefined && (
          <span className={`absolute top-1/2 block size-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand bg-white shadow-[0_2px_10px_rgba(45,91,255,0.35)] ${drag === null ? 'transition-all' : ''}`}
            style={{ left: `${pct(shown)}%` }} />
        )}
      </div>
      <div className="relative mt-2 h-10">
        {labels.map((label, k) => (
          <button key={k} onClick={() => onPick(k)} tabIndex={-1}
            className={`absolute top-0 w-[22%] -translate-x-1/2 text-center text-[12.5px] leading-tight sm:text-[13px] ${shown === k ? 'font-medium text-brand' : 'text-muted hover:text-ink'}`}
            style={{ left: `${pct(k)}%` }}>{label}</button>
        ))}
      </div>
    </div>
  );
}

const STAR = 'M12 3.4l2.65 5.37 5.93.86-4.29 4.18 1.01 5.9L12 16.92l-5.3 2.79 1.01-5.9-4.29-4.18 5.93-.86z';

/** Estrelas: "quanto isso combina com você", de 1 a 5. */
export function StarsInput({ labels, value, onPick }: InputProps) {
  const [hover, setHover] = useState<number | null>(null);
  const shown = hover ?? value;
  return (
    <div className="text-center">
      <div className="inline-block">
      <div className="flex gap-1 sm:gap-2" onMouseLeave={() => setHover(null)}>
        {labels.map((label, k) => {
          const on = shown !== undefined && k <= shown;
          return (
            <button key={k} onClick={() => onPick(k)} onMouseEnter={() => { if (canHover()) setHover(k); }} aria-label={label} title={label}
              className="grid size-14 place-items-center rounded-2xl transition-transform active:scale-95 sm:size-16">
              <svg viewBox="0 0 24 24" aria-hidden="true" strokeWidth="1.4" strokeLinejoin="round"
                className={`size-11 transition-colors sm:size-[52px] ${on ? 'fill-brand stroke-brand' : 'fill-white stroke-[#c4c9d3]'}`}>
                <path d={STAR} />
              </svg>
            </button>
          );
        })}
      </div>
      <div className="mt-1 flex justify-between gap-4 text-[12.5px] text-muted">
        <span className="text-left">{labels[0]}</span><span className="text-right">{labels[labels.length - 1]}</span>
      </div>
      </div>
      <p className="mt-4 min-h-6 text-[15px] font-medium text-ink" aria-live="polite">{shown !== undefined ? labels[shown] : ''}</p>
    </div>
  );
}

/** Cartões grandes com barras de intensidade (bom para escalas de 4 opções). */
export function CardsInput({ labels, value, onPick }: InputProps) {
  const n = labels.length;
  return (
    <div className={`grid gap-2.5 ${n === 4 ? 'grid-cols-2' : n === 5 ? 'grid-cols-2 sm:grid-cols-5' : 'grid-cols-2 sm:grid-cols-3'}`}>
      {labels.map((label, k) => {
        const sel = value === k;
        const wide = n % 2 === 1 && k === n - 1; // no celular, o último cartão de uma escala ímpar ocupa a linha toda
        return (
          <button key={k} onClick={() => onPick(k)}
            className={`flex min-h-28 flex-col justify-between rounded-2xl p-4 text-left ring-inset transition ${wide ? 'col-span-2 sm:col-span-1' : ''} ${sel ? 'bg-brand-50 ring-2 ring-brand' : 'bg-white ring-1 ring-line hover:bg-soft'}`}>
            <span className="flex items-end gap-1" aria-hidden="true">
              {Array.from({ length: n }, (_, b) => (
                <i key={b} className={`w-2 rounded-sm ${b <= k ? (sel ? 'bg-brand' : 'bg-ink') : 'bg-soft-2'}`} style={{ height: 8 + b * 5 }} />
              ))}
            </span>
            <span className={`mt-4 font-medium leading-snug ${n >= 5 ? 'text-[14px]' : 'text-[15px]'}`}>{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ---------- tarefas interativas ----------

export interface DelayResult { now: number; total: number }
export interface GoNoGoResult { impulse: number; missed: number; rt: number }

const DELAY_OFFERS: { later: number; when: { days?: number; months?: number; year?: boolean } }[] = [
  { later: 1.1, when: { days: 7 } },
  { later: 1.6, when: { months: 1 } },
  { later: 1.3, when: { months: 1 } },
  { later: 2, when: { months: 6 } },
  { later: 3, when: { year: true } },
];

/** "Agora ou depois?": 5 escolhas entre um valor hoje e um valor maior no futuro. */
export function DelayTask({ am, onDone }: { am: AppMessages; onDone: (r: DelayResult) => void }) {
  const { info, money } = useI18n();
  const T = am.tests.delay;
  const base = CONFIG.referral.rewards[info.currency] * 10; // valor "redondo" na moeda local
  const [i, setI] = useState(-1);
  const [now, setNow] = useState(0);
  const done = useRef(false);
  const pick = (immediate: boolean) => {
    const n = now + (immediate ? 1 : 0);
    if (i + 1 >= DELAY_OFFERS.length) {
      if (!done.current) { done.current = true; onDone({ now: n, total: DELAY_OFFERS.length }); }
      return;
    }
    setNow(n);
    setI(i + 1);
  };
  if (i < 0) {
    return (
      <div className="text-center">
        <Label className="mb-4">{T.label}</Label>
        <h1 className="text-[28px] sm:text-[32px]">{T.title}</h1>
        <p className="mx-auto mt-4 max-w-[460px] text-ink-2">{T.intro}</p>
        <Button size="lg" className="mt-8" onClick={() => setI(0)}>{T.start}</Button>
      </div>
    );
  }
  const offer = DELAY_OFFERS[i];
  const when = offer.when.year ? T.inYear : offer.when.months ? T.inMonths(offer.when.months) : T.inDays(offer.when.days!);
  const round = (v: number) => Math.round(v / 5) * 5 || v;
  return (
    <div key={i} className="animate-in text-center">
      <Label className="mb-4">{T.label} · {T.progress(i + 1, DELAY_OFFERS.length)}</Label>
      <h1 className="text-[26px] sm:text-[30px]">{T.title}</h1>
      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        <button onClick={() => pick(true)} className="rounded-3xl bg-soft p-7 text-center transition hover:bg-soft-2 hover:ring-2 hover:ring-ink">
          <div className="font-mono text-[34px] font-medium tracking-[-0.03em]">{money(round(base))}</div>
          <div className="mt-1 text-ink-2">{T.now('').trim()}</div>
        </button>
        <button onClick={() => pick(false)} className="rounded-3xl bg-brand-50 p-7 text-center transition hover:ring-2 hover:ring-brand">
          <div className="font-mono text-[34px] font-medium tracking-[-0.03em] text-brand">{money(round(base * offer.later))}</div>
          <div className="mt-1 text-ink-2">{when}</div>
        </button>
      </div>
    </div>
  );
}

const LETTERS = 'ABCDEFGHJKLMNPRSTUVZ';

/** Go/no-go: toque para cada letra, menos o X. ~40 estímulos de 850 ms. */
export function GoNoGoTask({ am, onDone }: { am: AppMessages; onDone: (r: GoNoGoResult) => void }) {
  const T = am.tests.gonogo;
  const TOTAL = 40;
  const [phase, setPhase] = useState<'intro' | 'run'>('intro');
  const [k, setK] = useState(0);
  const [letter, setLetter] = useState('');
  const [flash, setFlash] = useState<'ok' | 'bad' | null>(null);
  const stats = useRef({ impulse: 0, missed: 0, rts: [] as number[] });
  const trial = useRef({ go: true, shownAt: 0, answered: false });
  const done = useRef(false);
  // onDone chega como função nova a cada render da página; guardar numa ref evita reiniciar o estímulo.
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const tap = useCallback(() => {
    if (phase !== 'run' || trial.current.answered || !letter) return;
    trial.current.answered = true;
    if (trial.current.go) { stats.current.rts.push(performance.now() - trial.current.shownAt); setFlash('ok'); }
    else { stats.current.impulse++; setFlash('bad'); }
  }, [phase, letter]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.code === 'Space') { e.preventDefault(); tap(); } };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [tap]);

  useEffect(() => {
    if (phase !== 'run') return;
    if (k >= TOTAL) {
      if (!done.current) {
        done.current = true;
        const rts = stats.current.rts;
        onDoneRef.current({ impulse: stats.current.impulse, missed: stats.current.missed, rt: rts.length ? Math.round(rts.reduce((a, b) => a + b, 0) / rts.length) : 0 });
      }
      return;
    }
    const go = Math.random() > 0.25;
    trial.current = { go, shownAt: performance.now(), answered: false };
    setFlash(null);
    setLetter(go ? LETTERS[Math.floor(Math.random() * LETTERS.length)] : 'X');
    const hide = setTimeout(() => setLetter(''), 600);
    const next = setTimeout(() => {
      if (trial.current.go && !trial.current.answered) stats.current.missed++;
      setK((v) => v + 1);
    }, 900);
    return () => { clearTimeout(hide); clearTimeout(next); };
  }, [phase, k]);

  if (phase === 'intro') {
    return (
      <div className="text-center">
        <Label className="mb-4">{T.label}</Label>
        <h1 className="text-[28px] sm:text-[32px]">{T.title}</h1>
        <p className="mx-auto mt-4 max-w-[460px] text-ink-2">{T.intro}</p>
        <Button size="lg" className="mt-8" onClick={() => setPhase('run')}>{T.start}</Button>
      </div>
    );
  }
  return (
    <div className="text-center">
      <Label className="mb-4">{T.label} · {Math.min(k + 1, TOTAL)}/{TOTAL}</Label>
      <div className={`mx-auto grid size-48 place-items-center rounded-[36px] transition-colors ${flash === 'bad' ? 'bg-bad-50' : flash === 'ok' ? 'bg-good-50' : 'bg-soft'}`}>
        <span className={`font-mono text-[88px] font-medium leading-none ${letter === 'X' ? 'text-bad' : 'text-ink'}`}>{letter}</span>
      </div>
      <p className="mt-5 text-[13px] text-muted">{T.hint}</p>
      <Button size="lg" className="mt-4 w-full max-w-[320px] select-none" onPointerDown={(e) => { e.preventDefault(); tap(); }}>{T.tap}</Button>
    </div>
  );
}
