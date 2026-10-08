import { CONFIG } from '../config';
import { QUESTIONS, DOMAIN_KEYS, WORD_COUNT, type DomainKey } from './questions';
import { MATRIX_COUNT, PUZZLES } from './matrices';
import { choiceAnswer, pickVariants } from './variants';

export interface Answer { choice: number; ms: number }

export interface Span { digits: number[]; ask: number; options: number[]; correct: number }

// Palavras ficam guardadas como índices (words1/words2 do dicionário), para a sessão
// continuar válida se a pessoa trocar de idioma no meio do teste.
export interface Session {
  id: string;
  createdAt: number;
  startedAt: number | null;
  finishedAt: number | null;
  step: number;
  answers: Record<number, Answer>; // índice da pergunta → resposta
  extra: { aboveAvg?: boolean; firstTest?: boolean; number?: string; word2?: number };
  word1: number;
  word2: number;
  number: string;
  spans: Record<number, Span>;
  matrixOrder: number[][];
  /** Semente da matriz gerada em cada uma das 16 posições (ausente em sessões antigas = matrizes originais). */
  matrixSeeds?: number[];
  /** Posição → id da pergunta alternativa sorteada (src/lib/qbank.ts); posição ausente = pergunta original. */
  variants?: Record<number, string>;
  recallOptions: number[];
  email: string | null;
  optin: boolean;
  paid: boolean;
  orderId?: string; // pedido no Connect (quando o pagamento foi pelo checkout embutido)
  name: string;
  certificateId: string;
  /** Quantas respostas havia quando a pessoa recebeu o aviso de "responda com calma" (só um aviso por teste). */
  carelessWarnedAt?: number;
  /** Teste de exemplo do link de demonstração (/preview): nunca vira resultado de ninguém. */
  sample?: boolean;
}

const KEY = 'cognitiva_session_v2';

export function loadSession(): Session | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

export function saveSession(s: Session) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* navegação privada: segue sem persistir */ }
}

const rnd = (n: number) => Math.floor(Math.random() * n);
const range = (n: number) => Array.from({ length: n }, (_, i) => i);

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomDigits(len: number) {
  const out: number[] = [];
  while (out.length < len) {
    const d = rnd(9) + 1;
    if (!out.includes(d)) out.push(d);
  }
  return out;
}

// Sorteia o que muda a cada sessão: palavras, dígitos, número e a ordem das alternativas das matrizes.
// Não persiste: quem cria a sessão salva com saveSession.
export function newSession(): Session {
  const spans: Record<number, Span> = {};
  QUESTIONS.forEach((q, i) => {
    if (q.type !== 'span') return;
    const digits = randomDigits(q.length);
    const ask = rnd(q.length);
    const correct = digits[ask];
    const others = shuffle([...digits.filter((d) => d !== correct), ...[1, 2, 3, 4, 5, 6, 7, 8, 9].filter((d) => !digits.includes(d))]);
    spans[i] = { digits, ask, correct, options: shuffle([correct, ...others.slice(0, 4)]) };
  });
  const word1 = rnd(WORD_COUNT);
  return {
    id: Math.random().toString(36).slice(2, 10) + Date.now().toString(36),
    createdAt: Date.now(),
    startedAt: null,
    finishedAt: null,
    step: 0,
    answers: {},
    extra: {},
    word1,
    word2: rnd(WORD_COUNT),
    number: String(1000 + rnd(9000)),
    spans,
    matrixOrder: Array.from({ length: MATRIX_COUNT }, () => shuffle([0, 1, 2, 3, 4, 5])),
    matrixSeeds: Array.from({ length: MATRIX_COUNT }, () => rnd(2 ** 31)),
    variants: pickVariants(rnd),
    recallOptions: shuffle([word1, ...shuffle(range(WORD_COUNT).filter((w) => w !== word1)).slice(0, 4)]),
    email: null,
    optin: false,
    paid: false,
    name: '',
    certificateId: `${100 + rnd(900)} ${100 + rnd(900)}`,
  };
}

// ---------- pontuação ----------

/** Índice da alternativa correta nesta sessão, ou null se a pergunta não pontua. */
export function correctIndex(s: Session, i: number): number | null {
  const q = QUESTIONS[i];
  switch (q.type) {
    case 'choice': return choiceAnswer(s, i);
    case 'matrix': return s.matrixOrder[q.puzzle].indexOf(0);
    case 'span': return s.spans[i].options.indexOf(s.spans[i].correct);
    case 'recall': return s.recallOptions.indexOf(s.word1);
    default: return null;
  }
}

const MATRIX_WEIGHT: Record<number, number> = { 1: 1, 2: 1.5, 3: 2, 4: 2.5 };

export function weightOf(i: number): number {
  const q = QUESTIONS[i];
  if (q.type === 'matrix') return MATRIX_WEIGHT[PUZZLES[q.puzzle].difficulty];
  if ('weight' in q) return q.weight;
  return 0;
}

function normCdf(z: number) {
  // Aproximação de Abramowitz-Stegun
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

export const percentileOf = (iq: number) => Math.round(normCdf((iq - 100) / 15) * 1000) / 10;

export function iqFromRatio(ratio: number) {
  const z = (ratio - CONFIG.norms.mean) / CONFIG.norms.sd;
  return Math.max(65, Math.min(150, Math.round(100 + 15 * z)));
}

/** Proporção ponderada de acertos nas perguntas [0, upTo). Usada nas telas de incentivo. */
export function partialRatio(s: Session, upTo = QUESTIONS.length) {
  let got = 0, max = 0;
  for (let i = 0; i < upTo; i++) {
    const ci = correctIndex(s, i);
    if (ci === null || !s.answers[i]) continue;
    max += weightOf(i);
    if (s.answers[i].choice === ci) got += weightOf(i);
  }
  return max ? got / max : 0;
}

export function medianMs(s: Session, upTo = QUESTIONS.length) {
  const times: number[] = [];
  for (let i = 0; i < upTo; i++) if (correctIndex(s, i) !== null && s.answers[i]) times.push(s.answers[i].ms);
  if (!times.length) return 0;
  times.sort((a, b) => a - b);
  return times[Math.floor(times.length / 2)];
}

// 0–100: ~5 s por questão ≈ 95; ~40 s ≈ 15 (escala log), reduzido quando a precisão é baixa.
function speedScore(s: Session, accuracy: number) {
  const ms = medianMs(s) || 20000;
  const t = Math.log(ms / 5000) / Math.log(40000 / 5000);
  const raw = 95 - Math.max(0, Math.min(1, t)) * 80;
  return Math.round(raw * (0.5 + 0.5 * Math.min(1, accuracy / 0.6)));
}

export interface ReviewItem { index: number; ok: boolean; ms: number }

export interface MemoryCheck { key: 'number' | 'word2'; ok: boolean; answered: boolean }

export interface Result {
  iq: number;
  percentile: number;
  correct: number;
  scored: number;
  ratio: number;
  domains: Record<DomainKey, number>;
  durationMs: number | null;
  items: ReviewItem[];
  memoryChecks: MemoryCheck[];
}

export function computeResult(s: Session): Result {
  const dom = Object.fromEntries(DOMAIN_KEYS.map((k) => [k, { got: 0, max: 0 }])) as Record<DomainKey, { got: number; max: number }>;
  let got = 0, max = 0, correct = 0, scored = 0;
  const items: ReviewItem[] = [];

  QUESTIONS.forEach((q, i) => {
    const ci = correctIndex(s, i);
    if (ci === null || !('domain' in q)) return;
    const w = weightOf(i);
    const ok = s.answers[i]?.choice === ci;
    max += w; dom[q.domain].max += w; scored++;
    if (ok) { got += w; dom[q.domain].got += w; correct++; }
    items.push({ index: i, ok, ms: s.answers[i]?.ms ?? 0 });
  });

  // Lembranças pedidas na tela "analisando"
  const memoryChecks: MemoryCheck[] = (['number', 'word2'] as const).map((key) => {
    const answered = s.extra[key] !== undefined;
    const ok = key === 'number' ? s.extra.number === s.number : s.extra.word2 === s.word2;
    if (answered) {
      max += 1.5; dom.memory.max += 1.5; scored++;
      if (ok) { got += 1.5; dom.memory.got += 1.5; correct++; }
    }
    return { key, ok, answered };
  });

  const ratio = max ? got / max : 0;
  const iq = iqFromRatio(ratio);
  const domains = {} as Record<DomainKey, number>;
  DOMAIN_KEYS.forEach((k) => { domains[k] = dom[k].max ? Math.round((dom[k].got / dom[k].max) * 100) : 0; });
  domains.speed = speedScore(s, ratio);

  return {
    iq,
    percentile: percentileOf(iq),
    correct,
    scored,
    ratio,
    domains,
    durationMs: s.finishedAt && s.startedAt ? s.finishedAt - s.startedAt : null,
    items,
    memoryChecks,
  };
}

export type IqClass = 'veryHigh' | 'superior' | 'above' | 'average' | 'below';

export function classify(iq: number): IqClass {
  if (iq >= 145) return 'veryHigh';
  if (iq >= 130) return 'superior';
  if (iq >= 115) return 'above';
  if (iq >= 85) return 'average';
  return 'below';
}
