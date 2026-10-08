// Detecta quem responde sem ler, clicando sem parar. Responder rápido algumas perguntas fáceis é
// normal e não faz nada; só uma sequência longa de cliques quase instantâneos conta:
//   - 6 entre as últimas 8 respostas → um aviso amigável ("leia com calma"), sem perder nada;
//   - 10 entre as últimas 12 → o teste não é aceito e recomeça do início.
// (Contar numa janela, e não só em sequência, evita que um clique mais lento no meio zere a conta.)
// O mesmo vale para marcar sempre a mesma alternativa, e no fim para quem fez a maior parte assim.

import { QUESTIONS } from './questions';
import type { Session } from './session';

/** Respostas quase instantâneas dentro das últimas N: aviso e recomeço. */
export const FAST_WARN = { of: 8, min: 6 };
export const FAST_RESTART = { of: 12, min: 10 };
/** Seguidas na mesma posição de alternativa (perguntas de múltipla escolha e matrizes). */
export const SAME_WARN = 9;
export const SAME_STREAK = 12;
/** No fim: fração das perguntas que pontuam respondidas quase instantaneamente → recomeçar. */
export const FAST_SHARE = 0.6;

const scored = (i: number) => {
  const t = QUESTIONS[i].type;
  return t === 'choice' || t === 'matrix' || t === 'span' || t === 'recall';
};

/**
 * Abaixo deste tempo a resposta é praticamente um clique sem ler. `chars` = tamanho do enunciado.
 * Uma pergunta de 80 caracteres: 0,9 s. Quem lê e já sabe a resposta costuma levar mais que isso.
 */
export function minMs(i: number, chars = 80): number {
  switch (QUESTIONS[i].type) {
    case 'matrix': return 1000;
    case 'span': case 'recall': return 600; // acabou de memorizar: responder rápido é normal, mas não instantâneo
    case 'likert': case 'demo': return 700;
    default: return Math.min(1800, 500 + chars * 5);
  }
}

/** Índices das perguntas respondidas, na ordem do teste. */
const answeredOrder = (s: Session) => QUESTIONS.map((_, i) => i).filter((i) => s.answers[i]);

export type CarelessLevel = 'ok' | 'warn' | 'restart';

/**
 * Confere depois de cada resposta (e no fim, com `finished`). `chars(i)` = tamanho do enunciado da pergunta i.
 */
export function carelessLevel(s: Session, chars: (i: number) => number, finished = false): CarelessLevel {
  const order = answeredOrder(s);

  // 1) respostas quase instantâneas entre as últimas (todas as perguntas contam, cada uma com seu tempo mínimo)
  const isFast = (i: number) => s.answers[i].ms < minMs(i, chars(i));
  const fastIn = (n: number) => order.slice(-n).filter(isFast).length;

  // 2) mesma posição de alternativa várias vezes seguidas (as alternativas das matrizes são embaralhadas)
  const choiceLike = order.filter((i) => QUESTIONS[i].type === 'choice' || QUESTIONS[i].type === 'matrix');
  let same = choiceLike.length ? 1 : 0;
  for (let k = choiceLike.length - 1; k > 0; k--) {
    if (s.answers[choiceLike[k]].choice === s.answers[choiceLike[k - 1]].choice) same++; else break;
  }

  if (fastIn(FAST_RESTART.of) >= FAST_RESTART.min || same >= SAME_STREAK) return 'restart';

  // 3) no fim: a maior parte do teste respondida assim
  if (finished) {
    const sc = order.filter(scored);
    const tooFast = sc.filter(isFast).length;
    if (sc.length && tooFast / sc.length >= FAST_SHARE) return 'restart';
  }

  if (fastIn(FAST_WARN.of) >= FAST_WARN.min || same >= SAME_WARN) return 'warn';
  return 'ok';
}

/** Testes de autoconhecimento: frases respondidas mais rápido do que dá para ler, em sequência. */
export const TEST_FAST_STREAK = 8;
export const testMinMs = (chars: number) => 300 + chars * 6;
export function isCarelessTest(times: { ms: number; chars: number }[]): boolean {
  let fast = 0;
  for (let k = times.length - 1; k >= 0; k--) {
    if (times[k].ms < testMinMs(times[k].chars)) { fast++; if (fast >= TEST_FAST_STREAK) return true; } else break;
  }
  return false;
}
