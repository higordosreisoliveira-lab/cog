// Síndrome do impostor: 15 itens originais (cenários concretos de trabalho e estudo), 5 por dimensão,
// intercalados na ordem luck, fear, perfection. Nenhum item é invertido: pontuação alta em qualquer
// dimensão, e no total, indica mais sentimentos de impostor. Total bruto: 15 itens × 0–4 pontos = 0–60.
// Itens escritos do zero; não reproduz nem adapta escalas publicadas.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'impostor',
  category: 'work',
  icon: 'mask',
  minutes: [3, 5],
  dims: ['luck', 'fear', 'perfection'],
  items: [
    { dim: 'luck' }, // 1
    { dim: 'fear' },
    { dim: 'perfection' },
    { dim: 'luck' }, // 4
    { dim: 'fear' },
    { dim: 'perfection' },
    { dim: 'luck' }, // 7
    { dim: 'fear' },
    { dim: 'perfection' },
    { dim: 'luck' }, // 10
    { dim: 'fear' },
    { dim: 'perfection' },
    { dim: 'luck' }, // 13
    { dim: 'fear' },
    { dim: 'perfection' },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'slider',
  bands: [
    { upTo: 20, key: 'few' },
    { upTo: 38, key: 'some' },
    { upTo: 60, key: 'strong' },
  ],
};

export default s;
