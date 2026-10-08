// Matrizes progressivas geradas por regras. Cada célula é uma lista de camadas;
// o desenho em SVG fica em components/MatrixCell.tsx.

export type Shape = 'circle' | 'square' | 'diamond' | 'triangle' | 'pentagon' | 'hexagon' | 'star' | 'cross' | 'arrow';
export type Fill = 'none' | 'solid' | 'gray' | 'hatch';
export type Size = 'xs' | 's' | 'm' | 'l';
export type SegId = 'top' | 'right' | 'bottom' | 'left' | 'd1' | 'd2' | 'h' | 'v';

export type Layer =
  | { k: 'sh'; shape: Shape; n: number; fill: Fill; size: Size; rot: number }
  | { k: 'seg'; s: SegId[] }
  | { k: 'dot'; p: number[]; fill: 'solid' | 'none'; small?: boolean };

export interface Cell { layers: Layer[] }

export interface Puzzle {
  difficulty: 1 | 2 | 3 | 4;
  cells: Cell[]; // 9 células; a última é a resposta
  distractors: Cell[]; // 5 alternativas erradas
}

export const SEGS: Record<SegId, [number, number, number, number]> = {
  top: [20, 20, 80, 20], right: [80, 20, 80, 80], bottom: [20, 80, 80, 80], left: [20, 20, 20, 80],
  d1: [20, 20, 80, 80], d2: [80, 20, 20, 80], h: [20, 50, 80, 50], v: [50, 20, 50, 80],
};

export const SIZE_R: Record<Size, number> = { xs: 11, s: 17, m: 25, l: 34 };

export const LAYOUTS: Record<number, { r: number; p: [number, number][] }> = {
  1: { r: 0, p: [[50, 50]] },
  2: { r: 15, p: [[29, 50], [71, 50]] },
  3: { r: 14, p: [[50, 28], [28, 70], [72, 70]] },
  4: { r: 14, p: [[30, 30], [70, 30], [30, 70], [70, 70]] },
  5: { r: 12, p: [[24, 24], [76, 24], [50, 50], [24, 76], [76, 76]] },
  6: { r: 11, p: [[22, 33], [50, 33], [78, 33], [22, 67], [50, 67], [78, 67]] },
  7: { r: 10, p: [[50, 50], [50, 20], [76, 35], [76, 65], [50, 80], [24, 65], [24, 35]] },
  8: { r: 10, p: [[22, 22], [50, 22], [78, 22], [22, 50], [78, 50], [22, 78], [50, 78], [78, 78]] },
};

export const dotXY = (p: number): [number, number] => [25 + 25 * (p % 3), 25 + 25 * Math.floor(p / 3)];

function poly(n: number, R: number, startDeg: number, dy = 0): [number, number][] {
  return Array.from({ length: n }, (_, i) => {
    const a = ((startDeg + (360 / n) * i) * Math.PI) / 180;
    return [R * Math.cos(a), R * Math.sin(a) + dy] as [number, number];
  });
}

// Vértices da forma centrada em (0,0) com "raio visual" r. Círculo não tem vértices.
export function shapePoints(shape: Exclude<Shape, 'circle'>, r: number): [number, number][] {
  switch (shape) {
    case 'square': return poly(4, r * 1.22, -45);
    case 'diamond': return poly(4, r * 1.3, -90);
    case 'triangle': return poly(3, r * 1.32, -90, r * 0.2);
    case 'pentagon': return poly(5, r * 1.16, -90, r * 0.06);
    case 'hexagon': return poly(6, r * 1.12, 0);
    case 'star': {
      const R = r * 1.3, q = R * 0.46;
      return Array.from({ length: 10 }, (_, i) => {
        const a = ((-90 + 36 * i) * Math.PI) / 180, rr = i % 2 ? q : R;
        return [rr * Math.cos(a), rr * Math.sin(a) + r * 0.08] as [number, number];
      });
    }
    case 'cross': {
      const R = r * 1.15, w = r * 0.38;
      return [[-w, -R], [w, -R], [w, -w], [R, -w], [R, w], [w, w], [w, R], [-w, R], [-w, w], [-R, w], [-R, -w], [-w, -w]];
    }
    case 'arrow': {
      const R = r * 1.25;
      return [[0, -R], [R * 0.8, -R * 0.05], [R * 0.3, -R * 0.05], [R * 0.3, R], [-R * 0.3, R], [-R * 0.3, -R * 0.05], [-R * 0.8, -R * 0.05]];
    }
  }
}

// ---------- construtores ----------

const L1 = [[0, 1, 2], [1, 2, 0], [2, 0, 1]];
const L2 = [[0, 1, 2], [2, 0, 1], [1, 2, 0]];
const L3 = [[1, 2, 0], [0, 1, 2], [2, 0, 1]];

type ShOpts = Partial<{ n: number; fill: Fill; size: Size; rot: number }>;
const sh = (shape: Shape, o: ShOpts = {}): Cell => ({ layers: [{ k: 'sh', shape, n: 1, fill: 'none', size: 'm', rot: 0, ...o }] });
const two = (outer: Shape, inner: Shape): Cell => ({
  layers: [
    { k: 'sh', shape: outer, n: 1, fill: 'none', size: 'l', rot: 0 },
    { k: 'sh', shape: inner, n: 1, fill: 'solid', size: 'xs', rot: 0 },
  ],
});
const seg = (...s: SegId[]): Cell => ({ layers: [{ k: 'seg', s }] });
const dots = (p: number[]): Cell => ({ layers: [{ k: 'dot', p, fill: 'solid' }] });
const pair = (hollow: number, solid: number): Cell => ({
  layers: [{ k: 'dot', p: [hollow], fill: 'none' }, { k: 'dot', p: [solid], fill: 'solid', small: true }],
});
const grid = (f: (r: number, c: number) => Cell): Cell[] => {
  const out: Cell[] = [];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) out.push(f(r, c));
  return out;
};
const xor = <T,>(a: T[], b: T[]): T[] => [...a.filter((x) => !b.includes(x)), ...b.filter((x) => !a.includes(x))];
const RING = [0, 1, 2, 5, 8, 7, 6, 3];

// ---------- os 16 quebra-cabeças, do mais fácil ao mais difícil ----------

export const PUZZLES: Puzzle[] = [
  { // quantidade cresce na linha; forma muda por linha
    difficulty: 1,
    cells: grid((r, c) => sh((['circle', 'square', 'triangle'] as const)[r], { n: c + 1 })),
    distractors: [sh('triangle', { n: 2 }), sh('square', { n: 3 }), sh('triangle', { n: 4 }), sh('circle', { n: 3 }), sh('triangle', { n: 3, fill: 'solid' })],
  },
  { // tamanho cresce na linha
    difficulty: 1,
    cells: grid((r, c) => sh((['square', 'circle', 'hexagon'] as const)[r], { size: (['s', 'm', 'l'] as const)[c] })),
    distractors: [sh('hexagon', { size: 's' }), sh('hexagon', { size: 'm' }), sh('circle', { size: 'l' }), sh('square', { size: 'l' }), sh('hexagon', { size: 'l', fill: 'solid' })],
  },
  { // preenchimento progride na linha
    difficulty: 1,
    cells: grid((r, c) => sh((['circle', 'diamond', 'pentagon'] as const)[r], { fill: (['none', 'hatch', 'solid'] as const)[c] })),
    distractors: [sh('pentagon'), sh('pentagon', { fill: 'hatch' }), sh('diamond', { fill: 'solid' }), sh('circle', { fill: 'solid' }), sh('pentagon', { fill: 'gray' })],
  },
  { // seta gira 45° por coluna e 90° por linha
    difficulty: 2,
    cells: grid((r, c) => sh('arrow', { rot: r * 90 + c * 45, fill: 'solid' })),
    distractors: [0, 90, 180, 225, 315].map((rot) => sh('arrow', { rot, fill: 'solid' })),
  },
  { // quantidade = linha + coluna + 1; forma em quadrado latino
    difficulty: 2,
    cells: grid((r, c) => sh((['circle', 'triangle', 'square'] as const)[L2[r][c]], { n: r + c + 1, fill: 'solid' })),
    distractors: [sh('circle', { n: 4, fill: 'solid' }), sh('circle', { n: 6, fill: 'solid' }), sh('square', { n: 5, fill: 'solid' }), sh('circle', { n: 5 }), sh('triangle', { n: 5, fill: 'solid' })],
  },
  { // formas em quadrado latino; preenchimento por coluna
    difficulty: 2,
    cells: grid((r, c) => sh((['circle', 'square', 'triangle'] as const)[L1[r][c]], { fill: (['none', 'gray', 'solid'] as const)[c] })),
    distractors: [sh('square'), sh('square', { fill: 'gray' }), sh('circle', { fill: 'solid' }), sh('triangle', { fill: 'solid' }), sh('square', { fill: 'hatch' })],
  },
  { // forma externa por linha, forma interna por coluna
    difficulty: 2,
    cells: grid((r, c) => two((['circle', 'square', 'hexagon'] as const)[r], (['triangle', 'circle', 'square'] as const)[c])),
    distractors: [two('hexagon', 'triangle'), two('hexagon', 'circle'), two('square', 'square'), two('circle', 'square'), two('hexagon', 'star')],
  },
  { // terceira coluna = união das linhas das duas primeiras
    difficulty: 2,
    cells: [seg('top'), seg('left'), seg('top', 'left'), seg('h'), seg('v'), seg('h', 'v'), seg('d1', 'bottom'), seg('d2', 'top'), seg('d1', 'bottom', 'd2', 'top')],
    distractors: [seg('d1', 'd2'), seg('d1', 'bottom', 'd2'), seg('top', 'bottom'), seg('d1', 'bottom', 'd2', 'top', 'h'), seg('d1', 'd2', 'top', 'left')],
  },
  { // terceira coluna = soma das quantidades
    difficulty: 3,
    cells: ([['triangle', [1, 2, 3]], ['circle', [2, 2, 4]], ['square', [2, 4, 6]]] as const)
      .flatMap(([s, ns]) => ns.map((n) => sh(s, { n, fill: 'solid' }))),
    distractors: [sh('square', { n: 5, fill: 'solid' }), sh('square', { n: 4, fill: 'solid' }), sh('circle', { n: 6, fill: 'solid' }), sh('square', { n: 7, fill: 'solid' }), sh('square', { n: 6 })],
  },
  { // forma, preenchimento e quantidade em três quadrados latinos
    difficulty: 3,
    cells: grid((r, c) => sh((['triangle', 'circle', 'diamond'] as const)[L1[r][c]], { fill: (['none', 'hatch', 'solid'] as const)[L2[r][c]], n: L3[r][c] + 1 })),
    distractors: [sh('circle', { n: 2, fill: 'solid' }), sh('circle', { n: 2, fill: 'hatch' }), sh('triangle', { n: 2 }), sh('circle', { n: 1 }), sh('circle', { n: 3 })],
  },
  { // setas: quantidade por linha, giro por posição, preenchimento latino
    difficulty: 3,
    cells: grid((r, c) => sh('arrow', { n: r + 1, rot: ((((c - r) * 90) % 360) + 360) % 360, fill: (['none', 'solid', 'hatch'] as const)[L2[r][c]] })),
    distractors: [sh('arrow', { n: 3, rot: 90 }), sh('arrow', { n: 3, rot: 180 }), sh('arrow', { n: 2, rot: 0 }), sh('arrow', { n: 3, rot: 0, fill: 'solid' }), sh('arrow', { n: 3, rot: 270, fill: 'hatch' })],
  },
  { // terceira coluna = primeira menos a segunda
    difficulty: 3,
    cells: [seg('top', 'right', 'bottom', 'left'), seg('right', 'left'), seg('top', 'bottom'), seg('h', 'v', 'd1', 'd2'), seg('d1', 'd2'), seg('h', 'v'), seg('top', 'bottom', 'h', 'd1'), seg('top', 'd1'), seg('bottom', 'h')],
    distractors: [seg('top', 'bottom', 'h', 'd1'), seg('top', 'd1'), seg('bottom', 'h', 'top'), seg('bottom'), seg('bottom', 'h', 'v')],
  },
  { // terceira coluna = linhas que aparecem em só uma das duas (XOR)
    difficulty: 3,
    cells: ([[['top', 'left', 'h'], ['top', 'right']], [['v', 'd1'], ['v', 'd2', 'bottom']], [['top', 'v', 'd2'], ['v', 'left', 'bottom']]] as SegId[][][])
      .flatMap(([a, b]) => [seg(...a), seg(...b), seg(...xor(a, b))]),
    distractors: [seg('top', 'v', 'd2', 'left', 'bottom'), seg('v'), seg('top', 'd2', 'left'), seg('top', 'd2', 'left', 'bottom', 'h'), seg('d2', 'left', 'bottom', 'v')],
  },
  { // ponto cheio anda 2 casas no sentido horário; ponto vazado anda 1 no anti-horário
    difficulty: 4,
    cells: Array.from({ length: 9 }, (_, k) => pair(RING[(4 - k + 8) % 8], RING[(2 * k) % 8])),
    distractors: [pair(5, 0), pair(8, 2), pair(0, 8), pair(8, 6), pair(7, 0)],
  },
  { // pontos: terceira coluna = posições que aparecem em só uma das duas
    difficulty: 4,
    cells: [[[0, 4, 8], [2, 4, 6]], [[1, 3, 5], [1, 3, 7]], [[0, 1, 2, 4], [2, 4, 5, 8]]]
      .flatMap(([a, b]) => [dots(a), dots(b), dots(xor(a, b))]),
    distractors: [dots([0, 1, 2, 4, 5, 8]), dots([2, 4]), dots([0, 1, 5]), dots([0, 1, 5, 8, 6]), dots([1, 5, 8, 2])],
  },
  { // giro da terceira coluna = soma dos giros das duas primeiras
    difficulty: 4,
    cells: [[45, 45], [90, 180], [135, 90]]
      .flatMap(([a, b]) => [a, b, (a + b) % 360].map((rot) => sh('arrow', { rot, fill: 'hatch' }))),
    distractors: [45, 135, 180, 270, 315].map((rot) => sh('arrow', { rot, fill: 'hatch' })),
  },
];

export const MATRIX_COUNT = PUZZLES.length;

const cellKey = (cell: Cell) => JSON.stringify(cell.layers.map((l) => {
  if (l.k === 'seg') return { ...l, s: [...l.s].sort() };
  if (l.k === 'dot') return { ...l, p: [...l.p].sort() };
  return l;
}));

// Garante que nenhuma alternativa repete a resposta ou outra alternativa.
export function validatePuzzles(): string[] {
  const problems: string[] = [];
  PUZZLES.forEach((pz, i) => {
    const keys = [pz.cells[8], ...pz.distractors].map(cellKey);
    if (pz.cells.length !== 9) problems.push(`Matriz ${i + 1}: precisa de 9 células`);
    if (pz.distractors.length !== 5) problems.push(`Matriz ${i + 1}: precisa de 5 distratores`);
    if (new Set(keys).size !== keys.length) problems.push(`Matriz ${i + 1}: alternativas repetidas`);
  });
  return problems;
}

// order: permutação de [0..5] em que 0 é a resposta correta.
export function matrixOptions(index: number, order: number[]): Cell[] {
  const pz = PUZZLES[index];
  const all = [pz.cells[8], ...pz.distractors];
  return order.map((i) => all[i]);
}

// =====================================================================================
// Variantes por semente
// makePuzzle(i, semente) sorteia uma versão nova do quebra-cabeça i: mesma regra e mesma
// dificuldade de PUZZLES[i], com outras formas, preenchimentos, quantidades, traços, posições
// e giros. Tudo sai de um gerador pseudoaleatório com semente (mulberry32): a mesma semente
// dá sempre o mesmo desenho. Cada variante é conferida (regra, alternativas, desenho) antes
// de ser devolvida; se nenhuma tentativa passar, volta a versão feita à mão.
// =====================================================================================

interface Rng {
  next: () => number;
  int: (n: number) => number;
  pick: <T>(a: readonly T[]) => T;
  shuffle: <T>(a: readonly T[]) => T[];
  sample: <T>(a: readonly T[], k: number) => T[];
}

function mulberry32(seed: number): () => number {
  let a = seed | 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Mistura índice e semente (inclusive bits altos e parte fracionária) antes do mulberry32.
function makeRng(index: number, seed: number): Rng {
  const s = Number.isFinite(seed) ? seed : 0;
  const hi = Math.floor(s / 4294967296) | 0, fr = Math.floor((s - Math.floor(s)) * 4294967296) | 0;
  let h = Math.imul(index + 1, 0x9e3779b1) ^ (s | 0) ^ Math.imul(hi, 0x27d4eb2f) ^ Math.imul(fr, 0x165667b1);
  h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  const next = mulberry32(h ^ (h >>> 16));
  const int = (n: number) => Math.floor(next() * n);
  const shuffle = <T,>(arr: readonly T[]): T[] => {
    const b = [...arr];
    for (let i = b.length - 1; i > 0; i--) {
      const j = int(i + 1);
      [b[i], b[j]] = [b[j], b[i]];
    }
    return b;
  };
  return {
    next,
    int,
    shuffle,
    pick: <T,>(arr: readonly T[]): T => arr[int(arr.length)],
    sample: <T,>(arr: readonly T[], k: number): T[] => shuffle(arr).slice(0, k),
  };
}

// ---------- vocabulário ----------

const SHAPES: readonly Shape[] = ['circle', 'square', 'diamond', 'triangle', 'pentagon', 'hexagon', 'star', 'cross', 'arrow'];
const FILLS: readonly Fill[] = ['none', 'solid', 'gray', 'hatch'];
const SIZES: readonly Size[] = ['xs', 's', 'm', 'l'];
const SEG_IDS = Object.keys(SEGS) as SegId[];
const POS = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// Forma única e grande: todas menos a seta (a seta é reservada às regras de giro).
const BIG: readonly Shape[] = ['circle', 'square', 'diamond', 'triangle', 'pentagon', 'hexagon', 'star', 'cross'];
// Várias cópias pequenas (ou tamanho xs): só as que não se confundem com círculo.
const SMALL: readonly Shape[] = ['circle', 'square', 'diamond', 'triangle', 'star', 'cross'];
// Pares parecidos demais para aparecer no mesmo quebra-cabeça.
const CLASH: readonly [Shape, Shape][] = [['pentagon', 'hexagon']];

type Sh = Extract<Layer, { k: 'sh' }>;
type Item = string | number;

const mod = (x: number, m: number) => ((x % m) + m) % m;
const rot360 = (x: number) => mod(x, 360);
const union = <T,>(a: readonly T[], b: readonly T[]): T[] => [...a, ...b.filter((x) => !a.includes(x))];
const minus = <T,>(a: readonly T[], b: readonly T[]): T[] => a.filter((x) => !b.includes(x));
const inter = <T,>(a: readonly T[], b: readonly T[]): T[] => a.filter((x) => b.includes(x));
const symDiff = <T,>(a: readonly T[], b: readonly T[]): T[] => [...minus(a, b), ...minus(b, a)];
const sameSet = <T,>(a: readonly T[], b: readonly T[]) => new Set(a).size === new Set(b).size && a.every((x) => b.includes(x));
// Traços e pontos sempre em ordem canônica (o desenho não muda; a comparação fica estável).
const segC = (s: readonly SegId[]): Cell => seg(...SEG_IDS.filter((x) => s.includes(x)));
const dotsC = (p: readonly number[]): Cell => dots(POS.filter((x) => p.includes(x)));

function pickShapes(g: Rng, pool: readonly Shape[], k: number): Shape[] {
  const out: Shape[] = [];
  for (const s of g.shuffle(pool)) {
    const clash = out.some((o) => CLASH.some(([x, y]) => (x === o && y === s) || (x === s && y === o)));
    if (out.length < k && !clash) out.push(s);
  }
  return out;
}

const otherThan = <T,>(g: Rng, pool: readonly T[], ...not: T[]): T => g.pick(pool.filter((x) => !not.includes(x)));

// Liga/desliga 1 ou 2 elementos do conjunto (distratores extras das regras de conjunto).
function toggle<T>(g: Rng, base: readonly T[], uni: readonly T[]): T[] {
  let out = [...base];
  for (let i = 1 + g.int(2); i > 0; i--) {
    const x = g.pick(uni);
    out = out.includes(x) ? out.filter((y) => y !== x) : [...out, x];
  }
  return out;
}

// Chave visual: duas células com a mesma chave são desenhadas igual (o tamanho só conta com
// n = 1, o giro não conta no círculo). Mais rígida que cellKey.
function vkey(c: Cell): string {
  return c.layers.map((l) => {
    if (l.k === 'seg') { const s = l.s; return `g${SEG_IDS.filter((x) => s.includes(x)).join(',')}`; }
    if (l.k === 'dot') { const p = l.p; return `d${l.fill}${l.small ? 's' : ''}${POS.filter((x) => p.includes(x)).join(',')}`; }
    return `s${l.shape}/${l.n}/${l.fill}/${l.n > 1 ? '' : l.size}/${l.shape === 'circle' ? 0 : rot360(l.rot)}`;
  }).join('|');
}

// Problema de desenho na célula (null = desenhável por MatrixCell).
function cellProblem(c: Cell): string | null {
  if (!c.layers.length) return 'célula vazia';
  for (const l of c.layers) {
    if (l.k === 'sh') {
      if (!SHAPES.includes(l.shape) || !FILLS.includes(l.fill) || !SIZES.includes(l.size)) return `valor inválido (${l.shape}/${l.fill}/${l.size})`;
      if (!Number.isInteger(l.n) || !LAYOUTS[l.n]) return `quantidade ${l.n} sem layout`;
      if (l.n > 1 && l.size !== 'm') return 'várias cópias precisam de tamanho m';
      if (!Number.isInteger(l.rot) || l.rot < 0 || l.rot >= 360 || l.rot % 45) return `giro inválido ${l.rot}`;
      if (l.rot && l.shape !== 'arrow') return `giro em forma simétrica (${l.shape})`;
    } else if (l.k === 'seg') {
      if (!l.s.length || new Set(l.s).size !== l.s.length || !l.s.every((s) => s in SEGS)) return 'traços inválidos';
    } else if (!l.p.length || new Set(l.p).size !== l.p.length || !l.p.every((p) => Number.isInteger(p) && p >= 0 && p <= 8) || (l.fill !== 'solid' && l.fill !== 'none')) {
      return 'pontos inválidos';
    }
  }
  return null;
}

// ---------- verificação das regras (sobre a grade completa de 9 células) ----------

const same = <T,>(v: readonly T[]) => v.every((x) => x === v[0]);
const uniq = <T,>(v: readonly T[]) => new Set(v).size === v.length;
const rowsOf = <T,>(v: readonly T[]): T[][] => [0, 1, 2].map((r) => v.slice(3 * r, 3 * r + 3));
const colsOf = <T,>(v: readonly T[]): T[][] => [0, 1, 2].map((c) => [v[c], v[c + 3], v[c + 6]]);
// Valor depende só da linha (ou da coluna), com três valores diferentes.
const byRow = <T,>(v: readonly T[]) => rowsOf(v).every((r) => same(r)) && uniq(rowsOf(v).map((r) => r[0]));
const byCol = <T,>(v: readonly T[]) => colsOf(v).every((c) => same(c)) && uniq(colsOf(v).map((c) => c[0]));
// Quadrado latino: três valores, cada um uma vez por linha e por coluna.
const latin = <T,>(v: readonly T[]) => new Set(v).size === 3 && [...rowsOf(v), ...colsOf(v)].every((x) => uniq(x));
// Giro = início + passo por coluna + passo por linha (os dois passos diferentes de zero).
function linearRot(v: readonly number[]): boolean {
  const cs = rot360(v[1] - v[0]), rs = rot360(v[3] - v[0]);
  return cs !== 0 && rs !== 0 && v.every((x, i) => rot360(x - v[0] - (i % 3) * cs - Math.floor(i / 3) * rs) === 0);
}

function setOf(c: Cell, kind: 'seg' | 'dot'): readonly Item[] | null {
  const l = c.layers[0];
  if (c.layers.length !== 1) return null;
  if (kind === 'seg' && l.k === 'seg') return l.s;
  if (kind === 'dot' && l.k === 'dot' && l.fill === 'solid' && !l.small) return l.p;
  return null;
}

// Posições (no anel) do ponto vazado e do cheio, para o #13.
function ringPair(c: Cell): [number, number] | null {
  const [h, s] = c.layers;
  if (c.layers.length !== 2 || h.k !== 'dot' || s.k !== 'dot' || h.fill !== 'none' || s.fill !== 'solid' || h.small || !s.small || h.p.length !== 1 || s.p.length !== 1) return null;
  const hi = RING.indexOf(h.p[0]), si = RING.indexOf(s.p[0]);
  return hi < 0 || si < 0 ? null : [hi, si];
}

/** A grade de 9 células (a última no lugar da resposta) segue a regra do quebra-cabeça `index`? */
function ruleHolds(index: number, cells: readonly Cell[]): boolean {
  if (cells.length !== 9) return false;

  if (index === 7 || index === 11 || index === 12 || index === 14) {
    const sets: (readonly Item[])[] = [];
    for (const c of cells) {
      const s = setOf(c, index === 14 ? 'dot' : 'seg');
      if (!s) return false;
      sets.push(s);
    }
    const op: (a: readonly Item[], b: readonly Item[]) => Item[] = index === 7 ? union : index === 11 ? minus : symDiff;
    return rowsOf(sets).every(([a, b, c]) => sameSet(c, op(a, b)));
  }

  if (index === 6) {
    const O: Shape[] = [], I: Shape[] = [];
    for (const c of cells) {
      const [o, i] = c.layers;
      if (c.layers.length !== 2 || o.k !== 'sh' || i.k !== 'sh' || o.n !== 1 || i.n !== 1 || o.fill !== 'none' || i.fill !== 'solid'
        || o.size !== 'l' || i.size !== 'xs' || o.rot !== 0 || i.rot !== 0) return false;
      O.push(o.shape);
      I.push(i.shape);
    }
    return (byRow(O) && byCol(I)) || (byCol(O) && byRow(I));
  }

  if (index === 13) {
    const P: [number, number][] = [];
    for (const c of cells) {
      const rp = ringPair(c);
      if (!rp) return false;
      P.push(rp);
    }
    const dh = mod(P[1][0] - P[0][0], 8), ds = mod(P[1][1] - P[0][1], 8);
    return P.every(([h, s], k) => mod(h - P[0][0] - k * dh, 8) === 0 && mod(s - P[0][1] - k * ds, 8) === 0);
  }

  const L: Sh[] = [];
  for (const c of cells) {
    const l = c.layers[0];
    if (c.layers.length !== 1 || l.k !== 'sh') return false;
    L.push(l);
  }
  const shape = L.map((l) => l.shape), n = L.map((l) => l.n), fill = L.map((l) => l.fill), size = L.map((l) => l.size), rot = L.map((l) => l.rot);
  const arrows = shape.every((s) => s === 'arrow'), single = n.every((x) => x === 1);
  switch (index) {
    case 0: return same(fill) && same(size) && same(rot) && byRow(shape) && byCol(n) && n[1] === n[0] + 1 && n[2] === n[0] + 2;
    case 1: return same(fill) && same(rot) && single && byRow(shape) && byCol(size) && SIZE_R[size[0]] < SIZE_R[size[1]] && SIZE_R[size[1]] < SIZE_R[size[2]];
    case 2: return same(n) && same(size) && same(rot) && byRow(shape) && byCol(fill);
    case 3: return arrows && single && same(fill) && same(size) && linearRot(rot);
    case 4: return same(fill) && same(size) && same(rot) && latin(shape) && n.every((x, i) => x === n[0] + Math.floor(i / 3) + (i % 3));
    case 5: return same(n) && same(size) && same(rot) && latin(shape) && byCol(fill);
    case 8: return same(fill) && same(size) && same(rot) && byRow(shape) && rowsOf(n).every(([a, b, c]) => c === a + b);
    case 9: return same(size) && same(rot) && latin(shape) && latin(fill) && latin(n);
    case 10: return arrows && same(size) && byRow(n) && latin(fill) && linearRot(rot);
    case 15: return arrows && single && same(fill) && same(size) && rowsOf(rot).every(([a, b, c]) => rot360(a + b - c) === 0);
    default: return false;
  }
}

// Linhas 1–2 não podem admitir outra regra simples que dê outra resposta na linha 3
// (c = b + k, c = a + k, c proporcional): usado na soma de quantidades e na soma de giros.
const ambiguousPairs = ([a0, b0]: readonly number[], [a1, b1]: readonly number[]) => a0 === a1 || b0 === b1 || a0 * b1 === a1 * b0;

// Restrições da família que a regra sozinha não garante (deixam a operação inequívoca).
function familyProblem(index: number, cells: readonly Cell[]): string | null {
  const sets = (kind: 'seg' | 'dot') => rowsOf(cells.map((c) => setOf(c, kind) ?? []));
  switch (index) {
    case 7: return sets('seg').every(([a, b]) => !inter(a, b).length) ? null : 'união com traços em comum';
    case 11: return sets('seg').every(([a, b, c]) => b.length && c.length && !minus(b, a).length) ? null : 'subtração sem B ⊂ A';
    case 12:
    case 14: return sets(index === 14 ? 'dot' : 'seg').every(([a, b]) => inter(a, b).length && minus(a, b).length && minus(b, a).length) ? null : 'XOR indistinguível da união';
    case 8:
    case 15: {
      const v = cells.map((c) => { const l = c.layers[0]; return l.k === 'sh' ? (index === 8 ? l.n : l.rot / 45) : 0; });
      if (index === 15 && rowsOf(v).some(([a, b, c]) => a + b !== c)) return 'giro dá a volta';
      return ambiguousPairs(v.slice(0, 2), v.slice(3, 5)) ? 'linhas 1–2 admitem outra regra' : null;
    }
    case 13: {
      const P = cells.map(ringPair);
      if (!P[0] || !P[1]) return 'pontos inválidos';
      const step = (d: number) => Math.min(mod(d, 8), 8 - mod(d, 8));
      const steps = [step(P[1][0] - P[0][0]), step(P[1][1] - P[0][1])].sort();
      return steps[0] === 1 && steps[1] === 2 ? null : 'passos diferentes de 1 e 2';
    }
    default: return null;
  }
}

function puzzleProblems(index: number, p: Puzzle): string[] {
  if (p.cells.length !== 9 || p.distractors.length !== 5) return ['precisa de 9 células e 5 distratores'];
  const out: string[] = [];
  if (p.difficulty !== PUZZLES[index].difficulty) out.push('dificuldade diferente da original');
  [...p.cells, ...p.distractors].forEach((c, i) => {
    const e = cellProblem(c);
    if (e) out.push(`${i < 9 ? `célula ${i + 1}` : `distrator ${i - 8}`}: ${e}`);
  });
  const opts = [p.cells[8], ...p.distractors];
  if (new Set(opts.map(cellKey)).size !== 6 || new Set(opts.map(vkey)).size !== 6) out.push('alternativas repetidas');
  const keys = p.cells.map(vkey);
  // Giros (#3, #15) repetem direções por força da regra; no #13 a resposta volta à 1ª célula.
  if (index === 13) { if (new Set(keys.slice(0, 8)).size !== 8) out.push('células visíveis repetidas'); }
  else if (index !== 3 && index !== 15 && new Set(keys).size !== 9) out.push('células repetidas');
  if (!ruleHolds(index, p.cells)) out.push('a resposta não segue a regra');
  p.distractors.forEach((d, i) => { if (ruleHolds(index, [...p.cells.slice(0, 8), d])) out.push(`distrator ${i + 1} também segue a regra`); });
  const fam = familyProblem(index, p.cells);
  if (fam) out.push(fam);
  return out;
}

// ---------- geradores, um por quebra-cabeça ----------

interface Draft {
  cells: Cell[];
  cands: Cell[]; // distratores em ordem de preferência (cada um muda um atributo da resposta)
  more?: () => Cell; // reserva, se os candidatos não renderem 5
}

const PAIRS_1: [number, number][] = [[1, 1], [1, 2], [2, 1]];
const SPLITS_SEG: number[][] = [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2]];
const SPLITS_DOT: number[][] = [[1, 1, 1], [1, 1, 2], [1, 2, 1], [1, 2, 2], [2, 1, 1], [2, 1, 2], [2, 2, 1], [2, 2, 2]];

// Três linhas (a, b) diferentes, a ≠ b, a + b ≤ max (última com soma ≥ minLast), sem regra alternativa.
function sumRows(g: Rng, max: number, minLast: number): [number, number][] | null {
  const P: [number, number][] = [];
  for (let a = 1; a < max; a++) for (let b = 1; a + b <= max; b++) if (a !== b) P.push([a, b]);
  const last = P.filter(([a, b]) => a + b >= minLast);
  for (let t = 0; t < 100; t++) {
    const rows = [g.pick(P), g.pick(P), g.pick(last)];
    if (ambiguousPairs(rows[0], rows[1]) || new Set(rows.map(([a, b]) => `${a},${b}`)).size < 3) continue;
    return rows;
  }
  return null;
}

// XOR: A e B dividem `o` elementos e têm `ao` / `bo` exclusivos.
function xorDraft<T>(g: Rng, uni: readonly T[], splits: readonly number[][], last: readonly number[], mk: (s: readonly T[]) => Cell): Draft {
  const rows = [g.pick(splits), g.pick(splits), last].map(([o, ao, bo]) => {
    const s = g.shuffle(uni), O = s.slice(0, o);
    return [[...O, ...s.slice(o, o + ao)], [...O, ...s.slice(o + ao, o + ao + bo)]] as const;
  });
  const [A, B] = rows[2], C = symDiff(A, B), I = inter(A, B), U = union(A, B);
  return {
    cells: rows.flatMap(([a, b]) => [mk(a), mk(b), mk(symDiff(a, b))]),
    // união, interseção, um a menos, um a mais, um trocado por um da interseção
    cands: [mk(U), mk(I), mk(minus(C, [g.pick(C)])), mk([...C, g.pick(minus(uni, U))]), mk([...minus(C, [g.pick(C)]), g.pick(I)])],
    more: () => mk(toggle(g, C, uni)),
  };
}

const GENS: ((g: Rng) => Draft | null)[] = [
  // 0: quantidade cresce na linha (n0, n0+1, n0+2); forma muda por linha
  (g) => {
    const S = pickShapes(g, SMALL, 3), fill = g.pick(FILLS), n0 = g.pick([1, 2, 3]), n = n0 + 2;
    const cell = (s: Shape, k: number, f: Fill = fill) => sh(s, { n: k, fill: f });
    return {
      cells: grid((r, c) => cell(S[r], n0 + c)),
      cands: [cell(S[2], n - 1), cell(S[1], n), cell(S[2], n + 1), cell(S[0], n), cell(S[2], n, otherThan(g, FILLS, fill)), cell(S[2], n - 2)],
    };
  },
  // 1: tamanho cresce na linha
  (g) => {
    const tiny = g.next() < 0.3;
    const Z: Size[] = tiny ? ['xs', 's', 'm'] : ['s', 'm', 'l'];
    const S = pickShapes(g, tiny ? SMALL : BIG, 3), fill = g.pick(FILLS);
    const cell = (s: Shape, size: Size, f: Fill = fill) => sh(s, { size, fill: f });
    return {
      cells: grid((r, c) => cell(S[r], Z[c])),
      cands: [cell(S[2], Z[0]), cell(S[2], Z[1]), cell(S[1], Z[2]), cell(S[0], Z[2]), cell(S[2], Z[2], otherThan(g, FILLS, fill)), cell(S[2], tiny ? 'l' : 'xs')],
    };
  },
  // 2: preenchimento progride na linha (vazio → meio-tom → cheio, ou o inverso)
  (g) => {
    const mid = g.pick(['hatch', 'gray'] as const);
    const F: Fill[] = g.next() < 0.5 ? ['none', mid, 'solid'] : ['solid', mid, 'none'];
    const S = pickShapes(g, BIG, 3), size = g.pick(['m', 'l'] as const);
    const cell = (s: Shape, fill: Fill) => sh(s, { fill, size });
    return {
      cells: grid((r, c) => cell(S[r], F[c])),
      cands: [cell(S[2], F[0]), cell(S[2], F[1]), cell(S[1], F[2]), cell(S[0], F[2]), cell(S[2], mid === 'hatch' ? 'gray' : 'hatch')],
    };
  },
  // 3: seta gira 45° por coluna e 90° por linha (ou 90°/45°), cada sentido sorteado
  (g) => {
    const swap = g.next() < 0.5;
    const cs = (swap ? 90 : 45) * g.pick([1, -1]), rs = (swap ? 45 : 90) * g.pick([1, -1]);
    const start = 45 * g.int(8), fill = g.pick(['solid', 'hatch', 'gray', 'none'] as const), size = g.pick(['m', 'l'] as const);
    const arrow = (rot: number) => sh('arrow', { rot: rot360(rot), fill, size });
    const a = start + 2 * rs + 2 * cs;
    return { cells: grid((r, c) => arrow(start + r * rs + c * cs)), cands: [45, -45, 90, -90, 180].map((d) => arrow(a + d)) };
  },
  // 4: quantidade = base + linha + coluna; forma em quadrado latino constante nas diagonais
  // (assim forma e quantidade não andam juntas e as 9 células são diferentes)
  (g) => {
    const S = pickShapes(g, SMALL, 3), fill = g.pick(FILLS), base = g.pick([1, 2, 3]), n = base + 4;
    const cell = (s: Shape, k: number, f: Fill = fill) => sh(s, { n: k, fill: f });
    return {
      cells: grid((r, c) => cell(S[(c + 2 * r) % 3], base + r + c)),
      cands: [cell(S[0], n - 1), cell(S[0], n + 1), cell(S[1], n), cell(S[2], n), cell(S[0], n, otherThan(g, FILLS, fill)), cell(S[0], n - 2)],
    };
  },
  // 5: formas em quadrado latino; preenchimento por coluna
  (g) => {
    const S = pickShapes(g, BIG, 3), k = g.pick([1, 2]), F = g.shuffle(FILLS), size = g.pick(['m', 'l'] as const);
    const cell = (s: Shape, fill: Fill) => sh(s, { fill, size });
    const ans = S[(2 + 2 * k) % 3], [o1, o2] = S.filter((s) => s !== ans);
    return {
      cells: grid((r, c) => cell(S[(c + k * r) % 3], F[c])),
      cands: [cell(ans, F[0]), cell(ans, F[1]), cell(o1, F[2]), cell(o2, F[2]), cell(ans, F[3])],
    };
  },
  // 6: forma externa por linha, interna por coluna (ou transposto)
  (g) => {
    const O = pickShapes(g, BIG, 3), I = pickShapes(g, SMALL, 4), tr = g.next() < 0.5;
    return {
      cells: grid((r, c) => (tr ? two(O[c], I[r]) : two(O[r], I[c]))),
      cands: [two(O[2], I[0]), two(O[2], I[1]), two(O[1], I[2]), two(O[0], I[2]), two(O[2], I[3])],
    };
  },
  // 7: terceira coluna = união dos traços das duas primeiras (sem traços em comum)
  (g) => {
    const spec = [g.pick(PAIRS_1), g.pick(PAIRS_1), g.pick<[number, number]>([[2, 2], [2, 2], [1, 2], [2, 1]])];
    const rows = spec.map(([a, b]) => { const s = g.shuffle(SEG_IDS); return [s.slice(0, a), s.slice(a, a + b)] as const; });
    const [A, B] = rows[2], U = union(A, B), out = g.shuffle(minus(SEG_IDS, U));
    return {
      cells: rows.flatMap(([a, b]) => [segC(a), segC(b), segC(union(a, b))]),
      cands: [segC(minus(U, [g.pick(A)])), segC(minus(U, [g.pick(B)])), segC([...U, out[0]]), segC([...minus(U, [g.pick(U)]), out[1]]), segC(minus(U, [g.pick(A), g.pick(B)]))],
      more: () => segC(toggle(g, U, SEG_IDS)),
    };
  },
  // 8: terceira coluna = soma das quantidades; forma por linha
  (g) => {
    const rows = sumRows(g, 7, 4);
    if (!rows) return null;
    const S = pickShapes(g, SMALL, 3), fill = g.pick(FILLS), [a, b] = rows[2], n = a + b;
    const cell = (s: Shape, k: number, f: Fill = fill) => sh(s, { n: k, fill: f });
    return {
      cells: rows.flatMap(([x, y], r) => [x, y, x + y].map((k) => cell(S[r], k))),
      cands: [cell(S[2], n - 1), cell(S[2], n + 1), cell(S[1], n), cell(S[2], n, otherThan(g, FILLS, fill)), cell(S[2], n - 2), cell(S[0], n), cell(S[2], 2 * b - a)],
    };
  },
  // 9: forma, preenchimento e quantidade em três quadrados latinos (c + k·linha) mod 3;
  // os k não são todos iguais, então há dois quadrados ortogonais e as 9 células diferem
  (g) => {
    const S = pickShapes(g, SMALL, 3), F = g.shuffle(FILLS).slice(0, 3), base = g.pick([1, 2, 3]), N = g.shuffle([base, base + 1, base + 2]);
    const [ks, kf, kn] = g.pick([[1, 2, 2], [2, 1, 1], [1, 1, 2], [2, 2, 1], [1, 2, 1], [2, 1, 2]]);
    const at = (k: number, r: number, c: number) => (c + k * r) % 3;
    const cell = (s: Shape, fill: Fill, n: number) => sh(s, { fill, n });
    const s = S[at(ks, 2, 2)], f = F[at(kf, 2, 2)], n = N[at(kn, 2, 2)];
    const [f1, f2] = F.filter((x) => x !== f), [n1, n2] = N.filter((x) => x !== n);
    return {
      cells: grid((r, c) => cell(S[at(ks, r, c)], F[at(kf, r, c)], N[at(kn, r, c)])),
      cands: [cell(s, f1, n), cell(s, f2, n), cell(s, f, n1), cell(s, f, n2), cell(otherThan(g, S, s), f, n)],
    };
  },
  // 10: setas: quantidade por linha, giro de ±90° por coluna e por linha, preenchimento latino
  (g) => {
    const base = g.pick([1, 2]), start = 45 * g.int(8), cs = g.pick([90, -90]), rs = g.pick([90, -90]), k = g.pick([1, 2]), F = g.shuffle(FILLS).slice(0, 3);
    const arrow = (n: number, rot: number, fill: Fill) => sh('arrow', { n, rot: rot360(rot), fill });
    const n = base + 2, a = start + 2 * rs + 2 * cs, f = F[(2 + 2 * k) % 3], [f1, f2] = F.filter((x) => x !== f);
    return {
      cells: grid((r, c) => arrow(base + r, start + r * rs + c * cs, F[(c + k * r) % 3])),
      cands: [arrow(n, a + 90, f), arrow(n, a + 180, f), arrow(n - 1, a, f), arrow(n, a, f1), arrow(n, a, f2), arrow(n, a - 90, f), arrow(n + 1, a, f)],
    };
  },
  // 11: terceira coluna = primeira menos a segunda (a segunda está contida na primeira)
  (g) => {
    const SUB: [number, number][] = [[3, 1], [4, 2], [4, 1]];
    const rows = [g.pick(SUB), g.pick(SUB), [4, 2]].map(([na, nb]) => { const A = g.sample(SEG_IDS, na); return [A, g.sample(A, nb)] as const; });
    const [A, B] = rows[2], C = minus(A, B);
    return {
      cells: rows.flatMap(([a, b]) => [segC(a), segC(b), segC(minus(a, b))]),
      // sem subtrair, só o subtraendo, sobrou um, faltou um, um a mais de fora
      cands: [segC(A), segC(B), segC([...C, g.pick(B)]), segC(minus(C, [g.pick(C)])), segC([...C, g.pick(minus(SEG_IDS, A))])],
      more: () => segC(toggle(g, C, SEG_IDS)),
    };
  },
  // 12: terceira coluna = traços que aparecem em só uma das duas (XOR), sempre com um em comum
  (g) => xorDraft(g, SEG_IDS, SPLITS_SEG, [1, 2, 2], segC),
  // 13: um ponto anda 1 casa no anel e o outro anda 2, sentidos sorteados, em ordem de leitura
  (g) => {
    const hollowFast = g.next() < 0.5;
    const dh = (hollowFast ? 2 : 1) * g.pick([1, -1]), ds = (hollowFast ? 1 : 2) * g.pick([1, -1]);
    const h0 = g.int(8), s0 = g.int(8);
    const cell = (h: number, s: number) => pair(RING[mod(h, 8)], RING[mod(s, 8)]);
    const H = h0 + 8 * dh, S = s0 + 8 * ds;
    return {
      cells: Array.from({ length: 9 }, (_, k) => cell(h0 + k * dh, s0 + k * ds)),
      cands: [cell(H + dh, S), cell(H - dh, S), cell(H, S + ds), cell(H, S - ds), cell(S, H)],
      more: () => cell(H + g.int(8), S + g.int(8)),
    };
  },
  // 14: pontos: terceira coluna = posições que aparecem em só uma das duas
  (g) => xorDraft(g, POS, SPLITS_DOT, g.pick([[2, 2, 2], [1, 2, 2]]), dotsC),
  // 15: giro da terceira coluna = soma dos giros das duas primeiras (sem passar de 315°)
  (g) => {
    const rows = sumRows(g, 7, 3);
    if (!rows) return null;
    const fill = g.pick(['hatch', 'solid', 'gray', 'none'] as const);
    const arrow = (rot: number) => sh('arrow', { rot: rot360(rot), fill });
    const [a, b] = rows[2], ans = 45 * (a + b);
    return {
      cells: rows.flatMap(([x, y]) => [x, y, x + y].map((u) => arrow(45 * u))),
      cands: [-180, -90, -45, 45, 90].map((d) => arrow(ans + d)),
    };
  },
];

// Escolhe 5 distratores: desenháveis, diferentes entre si e da resposta, e que quebram a regra.
function finish(index: number, d: Draft): Puzzle {
  const seen = new Set([vkey(d.cells[8])]);
  const out: Cell[] = [];
  const add = (c: Cell) => {
    const k = vkey(c);
    if (out.length >= 5 || seen.has(k) || cellProblem(c) || ruleHolds(index, [...d.cells.slice(0, 8), c])) return;
    seen.add(k);
    out.push(c);
  };
  d.cands.forEach(add);
  const more = d.more;
  if (more) for (let i = 0; i < 100 && out.length < 5; i++) add(more());
  return { difficulty: PUZZLES[index].difficulty, cells: d.cells, distractors: out };
}

function generate(index: number, seed: number): { puzzle: Puzzle; fallback: boolean } {
  const gen = GENS[index];
  if (!Number.isInteger(index) || !gen) throw new RangeError(`Matriz inexistente: ${index}`);
  const g = makeRng(index, seed);
  for (let t = 0; t < 50; t++) {
    const d = gen(g);
    if (!d) continue;
    const p = finish(index, d);
    if (!puzzleProblems(index, p).length) return { puzzle: p, fallback: false };
  }
  return { puzzle: structuredClone(PUZZLES[index]), fallback: true };
}

const generated = new Map<string, Puzzle>();

/** Variante determinística do quebra-cabeça `index` (0..15) para uma semente inteira. Mesma regra
 *  e dificuldade de PUZZLES[index], com outras formas/preenchimentos/quantidades/traços/posições/giros.
 *  O objeto devolvido é compartilhado (cache): não modifique. */
export function makePuzzle(index: number, seed: number): Puzzle {
  const key = `${index}:${seed}`;
  let p = generated.get(key);
  if (!p) {
    if (generated.size >= 256) generated.clear();
    p = generate(index, seed).puzzle;
    generated.set(key, p);
  }
  return p;
}

/** Igual a matrixOptions, mas para um quebra-cabeça gerado. order: permutação de [0..5], 0 = resposta. */
export function puzzleOptions(p: Puzzle, order: number[]): Cell[] {
  const all = [p.cells[8], ...p.distractors];
  return order.map((i) => all[i]);
}

/** Confere muitas sementes de cada quebra-cabeça; devolve os problemas (vazio = tudo certo). */
export function validateGenerated(seedsPerPuzzle = 300): string[] {
  const problems: string[] = [];
  PUZZLES.forEach((pz, i) => {
    const tag = `Matriz ${i + 1}`;
    // autoteste do verificador com a versão feita à mão
    if (!ruleHolds(i, pz.cells)) problems.push(`${tag}: o verificador de regra rejeita a original`);
    pz.distractors.forEach((d, j) => { if (ruleHolds(i, [...pz.cells.slice(0, 8), d])) problems.push(`${tag}: distrator ${j + 1} da original passa no verificador`); });
    const variants = new Set<string>();
    for (let s = 1; s <= seedsPerPuzzle; s++) {
      const { puzzle, fallback } = generate(i, s);
      const json = JSON.stringify(puzzle);
      if (json !== JSON.stringify(generate(i, s).puzzle) || json !== JSON.stringify(makePuzzle(i, s))) problems.push(`${tag}, semente ${s}: não determinística`);
      if (fallback) problems.push(`${tag}, semente ${s}: nenhuma tentativa passou, caiu na versão fixa`);
      puzzleProblems(i, puzzle).forEach((e) => problems.push(`${tag}, semente ${s}: ${e}`));
      variants.add(json);
    }
    if (variants.size < Math.min(20, seedsPerPuzzle)) problems.push(`${tag}: só ${variants.size} variantes diferentes`);
  });
  return problems;
}
