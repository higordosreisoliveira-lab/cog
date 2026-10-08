// Variações por sessão do teste de QI: qual pergunta do banco (src/lib/qbank.ts) entra em cada
// posição e qual matriz gerada (src/lib/matrices.ts, makePuzzle) aparece em cada uma das 16 matrizes.
// Sessões antigas, sem `variants`/`matrixSeeds`, continuam usando as perguntas originais.

import type { QbankText } from '../content/qbank/pt';
import { QBANK, type Variant } from './qbank';
import { PUZZLES, makePuzzle, matrixOptions, puzzleOptions, type Cell } from './matrices';
import { QUESTIONS } from './questions';

interface SessionLike { variants?: Record<number, string>; matrixSeeds?: number[]; matrixOrder: number[][] }

/** Sorteia uma variante por posição; a pergunta original também participa do sorteio. */
export function pickVariants(rnd: (n: number) => number): Record<number, string> {
  const out: Record<number, string> = {};
  for (const [slot, list] of Object.entries(QBANK)) {
    const k = rnd(list.length + 1);
    if (k < list.length) out[Number(slot)] = list[k].id;
  }
  return out;
}

export function variantOf(s: SessionLike, i: number): Variant | null {
  const id = s.variants?.[i];
  return id ? QBANK[i]?.find((v) => v.id === id) ?? null : null;
}

/** Resposta correta de uma pergunta de múltipla escolha, considerando a variante sorteada. */
export function choiceAnswer(s: SessionLike, i: number): number {
  const q = QUESTIONS[i];
  if (q.type !== 'choice') throw new Error(`pergunta ${i} não é de múltipla escolha`);
  return variantOf(s, i)?.answer ?? q.answer;
}

export interface ChoiceView { prompt: string; sequence?: string; options: string[] }

/**
 * Texto da pergunta como a pessoa vê nesta sessão. `base` é m.questions[i]; `qb` é o texto do banco
 * no idioma atual (useQbankText). Devolve null enquanto o texto do banco ainda está carregando.
 */
export function choiceView(s: SessionLike, i: number, base: { prompt: string; options?: string[] } | null | undefined, qb: Record<string, QbankText> | null): ChoiceView | null {
  const q = QUESTIONS[i];
  const seq = q.type === 'choice' ? q.sequence : undefined;
  const v = variantOf(s, i);
  if (!v) return { prompt: base?.prompt ?? '', sequence: seq, options: base?.options ?? [] };
  if (!v.text) return { prompt: base?.prompt ?? '', sequence: v.sequence ?? seq, options: v.options ?? [] };
  if (!qb) return null;
  const t = qb[v.id];
  return { prompt: t?.prompt ?? '', sequence: v.sequence, options: v.options ?? t?.options ?? [] };
}

/** Grade (9 células, a última é a resposta) e alternativas da matriz nesta sessão. */
export function matrixOf(s: SessionLike, puzzle: number): { cells: Cell[]; options: Cell[] } {
  const seed = s.matrixSeeds?.[puzzle];
  if (seed === undefined) return { cells: PUZZLES[puzzle].cells, options: matrixOptions(puzzle, s.matrixOrder[puzzle]) };
  const p = makePuzzle(puzzle, seed);
  return { cells: p.cells, options: puzzleOptions(p, s.matrixOrder[puzzle]) };
}
