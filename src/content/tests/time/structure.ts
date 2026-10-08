// Gestão do tempo: 16 itens originais, 4 por dimensão, intercalados, 1 invertido por dimensão.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'time',
  category: 'work',
  icon: 'timer',
  minutes: [4, 5],
  dims: ['priorities', 'planning', 'focus', 'boundaries'],
  result: 'profile',
  input: 'cards',
  scale: [1, 2, 3, 4, 5],
  items: [
    { dim: 'priorities' }, // 1
    { dim: 'planning' },
    { dim: 'focus' },
    { dim: 'boundaries' },
    { dim: 'priorities' }, // 5
    { dim: 'planning', reverse: true },
    { dim: 'focus' },
    { dim: 'boundaries' },
    { dim: 'priorities', reverse: true }, // 9
    { dim: 'planning' },
    { dim: 'focus' },
    { dim: 'boundaries', reverse: true },
    { dim: 'priorities' }, // 13
    { dim: 'planning' },
    { dim: 'focus', reverse: true },
    { dim: 'boundaries' },
  ],
};

export default s;
