// Traços de TDAH em adultos: 18 itens originais (cenários concretos do dia a dia), 9 por dimensão,
// intercalados na ordem inattention, hyperactivity. Nenhum item é invertido: pontuação alta indica
// mais traços. Total bruto: 18 itens × 0–4 pontos = 0–72.
// Autoavaliação de traços, não diagnóstico; as faixas são só uma orientação, sem validação clínica.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'adhd',
  category: 'neuro',
  icon: 'brain',
  minutes: [4, 6],
  dims: ['inattention', 'hyperactivity'],
  items: [
    { dim: 'inattention' }, // 1
    { dim: 'hyperactivity' },
    { dim: 'inattention' },
    { dim: 'hyperactivity' },
    { dim: 'inattention' }, // 5
    { dim: 'hyperactivity' },
    { dim: 'inattention' },
    { dim: 'hyperactivity' },
    { dim: 'inattention' }, // 9
    { dim: 'hyperactivity' },
    { dim: 'inattention' },
    { dim: 'hyperactivity' },
    { dim: 'inattention' }, // 13
    { dim: 'hyperactivity' },
    { dim: 'inattention' },
    { dim: 'hyperactivity' },
    { dim: 'inattention' }, // 17
    { dim: 'hyperactivity' },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'slider',
  tasks: [{ kind: 'gonogo', after: 9 }],
  bands: [
    { upTo: 24, key: 'few' },
    { upTo: 44, key: 'some' },
    { upTo: 72, key: 'many' },
  ],
};

export default s;
