import { type ComponentType, useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import { GAMES, findGame, type GameId, type GameMeta } from '../../games/registry';
import type { GameProps, GameResult } from '../../games/types';
import { account } from '../../lib/account';
import { Button, ButtonLink, Container, Label } from '../../components/ui';
import { PageHead, useApp } from './AppLayout';

// Pequenos desenhos para identificar cada jogo.
function Glyph({ id }: { id: GameId }) {
  const c = 'fill-none stroke-ink stroke-[1.6]';
  const body = {
    sudoku: <><rect x="6" y="6" width="28" height="28" rx="3" className={c} /><path d="M15.3 6v28M24.6 6v28M6 15.3h28M6 24.6h28" className="fill-none stroke-ink/30 stroke-[1.2]" /><text x="10.6" y="13.5" fontSize="7" className="fill-brand font-mono">5</text><text x="20" y="23" fontSize="7" className="fill-ink font-mono">3</text></>,
    g2048: <><rect x="6" y="6" width="13" height="13" rx="3" className="fill-soft-2" /><rect x="21" y="6" width="13" height="13" rx="3" className="fill-brand-50" /><rect x="6" y="21" width="13" height="13" rx="3" className="fill-brand" /><rect x="21" y="21" width="13" height="13" rx="3" className="fill-ink" /></>,
    memory: <><rect x="6" y="9" width="12" height="22" rx="3" className="fill-ink" /><rect x="22" y="9" width="12" height="22" rx="3" className={c} /><circle cx="28" cy="20" r="3.5" className="fill-brand" /></>,
    sequence: <><rect x="6" y="6" width="13" height="13" rx="4" className="fill-brand" /><rect x="21" y="6" width="13" height="13" rx="4" className="fill-soft-2" /><rect x="6" y="21" width="13" height="13" rx="4" className="fill-soft-2" /><rect x="21" y="21" width="13" height="13" rx="4" className="fill-ink" /></>,
    schulte: <><rect x="6" y="6" width="28" height="28" rx="3" className={c} /><text x="11" y="17" fontSize="7" className="fill-ink font-mono">1</text><text x="23" y="17" fontSize="7" className="fill-ink/40 font-mono">9</text><text x="11" y="29" fontSize="7" className="fill-ink/40 font-mono">4</text><text x="22" y="29" fontSize="7" className="fill-brand font-mono">2</text></>,
    math: <><path d="M10 13h8M14 9v8M22 13h8M10 27h8M22 25h8M22 29h8" className="fill-none stroke-ink stroke-[1.8]" strokeLinecap="round" /></>,
  }[id];
  return <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">{body}</svg>;
}

export function useScoreFormat() {
  const { info } = useI18n();
  const { am } = useApp();
  return (g: GameMeta, n: number) => am.games.units[g.unit](n.toLocaleString(info.intl, { maximumFractionDigits: 1 }));
}

export function GameCard({ game }: { game: GameMeta }) {
  const { path } = useI18n();
  const { user, am } = useApp();
  const fmt = useScoreFormat();
  const t = am.games.list[game.id];
  const stat = user.games[game.id];
  return (
    <Link to={path(`/app/games/${game.id}`)} className="group flex flex-col rounded-3xl p-6 no-underline ring-1 ring-inset ring-line transition-colors hover:bg-soft/60">
      <div className="flex items-start justify-between gap-4">
        <div className="grid size-14 place-items-center rounded-2xl bg-soft"><Glyph id={game.id} /></div>
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-muted">{am.games.skills[game.skill]}</span>
      </div>
      <div className="mt-5 text-lg font-semibold tracking-[-0.02em]">{t.name}</div>
      <p className="mt-1 flex-1 text-[14.5px] text-ink-2">{t.desc}</p>
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4 text-sm">
        <span className="text-muted">{am.games.best}: <span className="font-mono text-ink">{stat?.best != null ? fmt(game, stat.best) : '—'}</span></span>
        <span className="font-medium text-ink group-hover:text-brand">{am.games.play} →</span>
      </div>
    </Link>
  );
}

export function GamesList() {
  const { am } = useApp();
  useEffect(() => { document.title = `${am.games.title} | ${CONFIG.brand}`; }, [am.games.title]);
  return (
    <Container>
      <PageHead title={am.games.title} sub={am.games.sub} />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {GAMES.map((g) => <GameCard key={g.id} game={g} />)}
      </div>
    </Container>
  );
}

export function GamePage() {
  const { id } = useParams();
  const game = findGame(id);
  const { path } = useI18n();
  if (!game) return <Navigate to={path('/app/games')} replace />;
  return <GameRunner key={game.id} game={game} />;
}

function GameRunner({ game }: { game: GameMeta }) {
  const { path } = useI18n();
  const { user, setUser, am } = useApp();
  const fmt = useScoreFormat();
  const t = am.games.list[game.id];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [Comp, setComp] = useState<ComponentType<GameProps<any>> | null>(null);
  const [round, setRound] = useState(0);
  const [result, setResult] = useState<(GameResult & { record: boolean }) | null>(null);
  const best = user.games[game.id]?.best ?? null;

  useEffect(() => { document.title = `${t.name} | ${CONFIG.brand}`; }, [t.name]);
  useEffect(() => { game.load().then((mod) => setComp(() => mod.default)); }, [game]);

  const finish = (r: GameResult) => {
    const { account: a, record } = account.recordGame(game.id, r.score, r.completed, game.better);
    if (a) setUser({ ...a });
    setResult({ ...r, record });
  };

  return (
    <Container width={760}>
      <PageHead back={{ to: path('/app/games'), label: am.games.back }} title={t.name} sub={t.desc}
        right={<div className="text-right"><Label>{am.games.best}</Label><div className="mt-1 font-mono text-xl">{best != null ? fmt(game, best) : '—'}</div></div>} />

      <details className="group mb-8 rounded-2xl bg-soft px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium [&::-webkit-details-marker]:hidden">
          {am.games.howToPlay}
          <svg className="size-4 text-muted transition-transform group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        </summary>
        <ul className="mt-3 grid gap-2 text-[15px] text-ink-2">
          {t.how.map((h) => <li key={h} className="flex gap-3"><span className="mt-[9px] size-1.5 flex-none rounded-full bg-ink-2" />{h}</li>)}
        </ul>
      </details>

      {result ? (
        <div className="animate-in rounded-3xl p-8 text-center ring-1 ring-inset ring-line sm:p-12">
          <Label className="mb-4">{result.record ? am.games.newRecord : am.games.finished}</Label>
          <div className={`font-mono text-[64px] font-medium leading-none tracking-[-0.04em] ${result.record ? 'text-brand' : ''}`}>{fmt(game, result.score)}</div>
          <p className="mt-3 text-ink-2">{am.games.yourScore}</p>
          {!result.completed && <p className="mx-auto mt-4 max-w-[360px] text-[13.5px] text-muted">{am.games.notCounted}</p>}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            <Button size="lg" onClick={() => { setResult(null); setRound((n) => n + 1); }}>{am.games.playAgain}</Button>
            <ButtonLink to={path('/app/games')} size="lg" variant="secondary">{am.games.otherGames}</ButtonLink>
          </div>
        </div>
      ) : Comp ? (
        <div className="animate-in"><Comp key={round} s={t.ui} c={am.games.common} onFinish={finish} /></div>
      ) : (
        <div className="h-[420px] animate-pulse rounded-3xl bg-soft" />
      )}
    </Container>
  );
}
