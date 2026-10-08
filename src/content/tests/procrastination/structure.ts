// Procrastinação: 16 itens originais sobre os MOTIVOS de adiar, 4 por motivo, intercalados,
// sem itens invertidos. Escala de frequência 0–4; pontuação alta = o motivo pesa mais.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'procrastination',
  category: 'work',
  icon: 'hourglass',
  minutes: [3, 5],
  dims: ['avoidance', 'perfectionism', 'distraction', 'planning'],
  result: 'profile',
  input: 'slider',
  scale: [0, 1, 2, 3, 4],
  items: [
    { dim: 'avoidance' }, // 1
    { dim: 'perfectionism' },
    { dim: 'distraction' },
    { dim: 'planning' },
    { dim: 'avoidance' }, // 5
    { dim: 'perfectionism' },
    { dim: 'distraction' },
    { dim: 'planning' },
    { dim: 'avoidance' }, // 9
    { dim: 'perfectionism' },
    { dim: 'distraction' },
    { dim: 'planning' },
    { dim: 'avoidance' }, // 13
    { dim: 'perfectionism' },
    { dim: 'distraction' },
    { dim: 'planning' },
  ],
};

export default s;
