// Valores no trabalho: 24 itens originais, 3 por valor, intercalados, sem itens invertidos.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'values',
  category: 'work',
  icon: 'target',
  minutes: [5, 6],
  dims: ['purpose', 'growth', 'autonomy', 'stability', 'recognition', 'balance', 'collaboration', 'pay'],
  result: 'top',
  input: 'stars',
  scale: [1, 2, 3, 4, 5],
  items: [
    { dim: 'purpose' }, // 1
    { dim: 'growth' },
    { dim: 'autonomy' },
    { dim: 'stability' },
    { dim: 'recognition' },
    { dim: 'balance' },
    { dim: 'collaboration' },
    { dim: 'pay' },
    { dim: 'purpose' }, // 9
    { dim: 'growth' },
    { dim: 'autonomy' },
    { dim: 'stability' },
    { dim: 'recognition' },
    { dim: 'balance' },
    { dim: 'collaboration' },
    { dim: 'pay' },
    { dim: 'purpose' }, // 17
    { dim: 'growth' },
    { dim: 'autonomy' },
    { dim: 'stability' },
    { dim: 'recognition' },
    { dim: 'balance' },
    { dim: 'collaboration' },
    { dim: 'pay' },
  ],
};

export default s;
