// Nível de ansiedade: 10 itens originais sobre as últimas duas semanas, 5 por dimensão, intercalados.
// Escala de frequência 0–3, sem itens invertidos. Faixas sobre o total bruto (0–30).

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'anxiety',
  category: 'wellbeing',
  icon: 'pulse',
  minutes: [3, 4],
  dims: ['worry', 'tension'],
  items: [
    { dim: 'worry' }, // 1
    { dim: 'tension' },
    { dim: 'worry' },
    { dim: 'tension' },
    { dim: 'worry' },
    { dim: 'tension' }, // 6
    { dim: 'worry' },
    { dim: 'tension' },
    { dim: 'worry' },
    { dim: 'tension' },
  ],
  scale: [0, 1, 2, 3],
  result: 'screen',
  input: 'cards',
  bands: [
    { upTo: 6, key: 'minimal' },
    { upTo: 13, key: 'mild' },
    { upTo: 20, key: 'moderate' },
    { upTo: 30, key: 'high' },
  ],
};

export default s;
