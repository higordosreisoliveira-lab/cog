// Teste de dopamina (nome popular): 16 itens originais, 4 por dimensão, intercalados na ordem
// quickRewards, boredom, longTerm, screens. Os itens de longTerm são invertidos (concordar indica
// mais equilíbrio), então pontuação alta em qualquer dimensão, e no total, indica mais dependência
// de estímulos rápidos. Total bruto: 16 itens × 0–4 pontos = 0–64.
// Não mede dopamina: avalia hábitos ligados ao sistema de recompensa.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'dopamine',
  category: 'wellbeing',
  icon: 'brain',
  minutes: [4, 5],
  dims: ['quickRewards', 'boredom', 'longTerm', 'screens'],
  items: [
    { dim: 'quickRewards' }, // 1
    { dim: 'boredom' },
    { dim: 'longTerm', reverse: true },
    { dim: 'screens' },
    { dim: 'quickRewards' }, // 5
    { dim: 'boredom' },
    { dim: 'longTerm', reverse: true },
    { dim: 'screens' },
    { dim: 'quickRewards' }, // 9
    { dim: 'boredom' },
    { dim: 'longTerm', reverse: true },
    { dim: 'screens' },
    { dim: 'quickRewards' }, // 13
    { dim: 'boredom' },
    { dim: 'longTerm', reverse: true },
    { dim: 'screens' },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'slider',
  tasks: [{ kind: 'delay', after: 8 }],
  bands: [
    { upTo: 21, key: 'balanced' },
    { upTo: 42, key: 'attention' },
    { upTo: 64, key: 'overloaded' },
  ],
};

export default s;
