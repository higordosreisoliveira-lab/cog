// Estrutura do teste: tipo, resposta correta, peso e domínio de cada pergunta.
// Os textos ficam nos dicionários (src/i18n/locales), na mesma ordem desta lista.

export type Domain = 'logic' | 'visual' | 'numeric' | 'memory';
export type DomainKey = Domain | 'speed';
export type Trait = 'challenge' | 'focus' | 'practice' | 'growth';

interface Base { pre?: 'number' | 'word2' } // tela de memorização antes da pergunta

export type Question = Base & (
  | { type: 'choice'; domain: Domain; weight: number; answer: number; sequence?: string }
  | { type: 'matrix'; domain: 'visual'; puzzle: number }
  | { type: 'span'; domain: 'memory'; weight: number; length: number } // dígitos sorteados por sessão
  | { type: 'recall'; domain: 'memory'; weight: number } // palavra do início
  | { type: 'likert'; trait: Trait } // não pontua
  | { type: 'demo'; key: 'education' } // não pontua
);

export const QUESTIONS: Question[] = [
  { type: 'choice', domain: 'logic', weight: 1, answer: 2 },
  { type: 'choice', domain: 'logic', weight: 1, answer: 1 },
  { type: 'choice', domain: 'visual', weight: 1, answer: 3 },
  { type: 'likert', trait: 'challenge' },
  { type: 'choice', domain: 'numeric', weight: 1, answer: 3, sequence: '3, 6, 12, 24, ___' },
  { type: 'choice', domain: 'numeric', weight: 1, answer: 2, sequence: '7, 14, 21, ___, 35, 42' },
  { type: 'span', domain: 'memory', weight: 1, length: 4 },
  { type: 'span', domain: 'memory', weight: 1.5, length: 5 },
  { type: 'span', domain: 'memory', weight: 2, length: 6 },
  { type: 'likert', trait: 'focus' },
  { type: 'matrix', domain: 'visual', puzzle: 0 },
  { type: 'matrix', domain: 'visual', puzzle: 1 },
  { type: 'matrix', domain: 'visual', puzzle: 2 },
  { type: 'matrix', domain: 'visual', puzzle: 3 },
  { type: 'matrix', domain: 'visual', puzzle: 4 },
  { type: 'matrix', domain: 'visual', puzzle: 5 },
  { type: 'matrix', domain: 'visual', puzzle: 6 },
  { type: 'matrix', domain: 'visual', puzzle: 7 },
  { type: 'matrix', domain: 'visual', puzzle: 8 },
  { type: 'matrix', domain: 'visual', puzzle: 9 },
  { type: 'matrix', domain: 'visual', puzzle: 10 },
  { type: 'matrix', domain: 'visual', puzzle: 11 },
  { type: 'matrix', domain: 'visual', puzzle: 12 },
  { type: 'recall', domain: 'memory', weight: 1.5 },
  { type: 'matrix', domain: 'visual', puzzle: 13 },
  { type: 'matrix', domain: 'visual', puzzle: 14 },
  { type: 'matrix', domain: 'visual', puzzle: 15 },
  { type: 'choice', domain: 'numeric', weight: 1.5, answer: 2, sequence: '1, 1, 2, 3, 5, 8, ___' },
  { type: 'choice', domain: 'logic', weight: 2, answer: 3 },
  { type: 'choice', domain: 'logic', weight: 1, answer: 1 },
  { type: 'choice', domain: 'numeric', weight: 2.5, answer: 0, sequence: '2, 6, 7, 21, 22, 66, ___' },
  { type: 'choice', domain: 'logic', weight: 1.5, answer: 2 },
  { type: 'choice', domain: 'numeric', weight: 1.5, answer: 2, pre: 'number' },
  { type: 'choice', domain: 'logic', weight: 1, answer: 2 },
  { type: 'choice', domain: 'numeric', weight: 2, answer: 2, sequence: 'A, C, F, J, ___' },
  { type: 'likert', trait: 'practice' },
  { type: 'choice', domain: 'logic', weight: 2.5, answer: 1 },
  { type: 'likert', trait: 'growth' },
  { type: 'choice', domain: 'logic', weight: 2.5, answer: 1, pre: 'word2' },
  { type: 'demo', key: 'education' },
];

// Telas de incentivo exibidas depois da pergunta de número indicado (1-based).
export const INTERSTITIALS: Record<number, 'speed' | 'percentile' | 'almost'> = { 11: 'speed', 22: 'percentile', 35: 'almost' };

export const DOMAIN_KEYS: DomainKey[] = ['logic', 'visual', 'numeric', 'memory', 'speed'];

/** Quantidade de palavras em cada lista de memorização (words1/words2 nos dicionários). */
export const WORD_COUNT = 6;
