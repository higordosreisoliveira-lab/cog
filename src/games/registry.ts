import type { ComponentType } from 'react';
import type { GameProps } from './types';

export type GameId = 'sudoku' | 'g2048' | 'memory' | 'schulte' | 'sequence' | 'math';
export type GameSkill = 'logic' | 'memory' | 'attention' | 'math';
export type GameUnit = 'seconds' | 'points' | 'moves' | 'level';

export interface GameMeta {
  id: GameId;
  skill: GameSkill;
  unit: GameUnit;
  better: 'higher' | 'lower'; // como comparar recordes
  minutes: number; // duração típica de uma partida
  // Cada jogo tem seu próprio tipo de textos; o registro só repassa o objeto certo para ele.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  load: () => Promise<{ default: ComponentType<GameProps<any>> }>;
}

export const GAMES: GameMeta[] = [
  { id: 'sudoku', skill: 'logic', unit: 'seconds', better: 'lower', minutes: 8, load: () => import('./Sudoku') },
  { id: 'g2048', skill: 'logic', unit: 'points', better: 'higher', minutes: 5, load: () => import('./Game2048') },
  { id: 'memory', skill: 'memory', unit: 'moves', better: 'lower', minutes: 3, load: () => import('./Memory') },
  { id: 'sequence', skill: 'memory', unit: 'level', better: 'higher', minutes: 3, load: () => import('./Sequence') },
  { id: 'schulte', skill: 'attention', unit: 'seconds', better: 'lower', minutes: 2, load: () => import('./Schulte') },
  { id: 'math', skill: 'math', unit: 'points', better: 'higher', minutes: 1, load: () => import('./MathSprint') },
];

export const findGame = (id?: string) => GAMES.find((g) => g.id === id);

/** Três jogos do dia, sempre os mesmos para a mesma data, variando entre habilidades. */
export function gamesOfTheDay(date = new Date()): GameMeta[] {
  const seed = Number(date.toISOString().slice(0, 10).replace(/-/g, ''));
  const order = [...GAMES].sort((a, b) => hash(a.id + seed) - hash(b.id + seed));
  const picked: GameMeta[] = [];
  for (const g of order) {
    if (picked.length === 3) break;
    if (!picked.some((p) => p.skill === g.skill)) picked.push(g);
  }
  return picked;
}

function hash(s: string) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
