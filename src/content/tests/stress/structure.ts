// Nível de estresse: 12 itens originais sobre o último mês, 6 por dimensão, intercalados.
// Os itens de `coping` descrevem recursos positivos e são invertidos: quanto mais frequentes,
// menor a pontuação (e menor o estresse). Faixas sobre o total bruto (0–48).

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'stress',
  category: 'wellbeing',
  icon: 'leaf',
  minutes: [3, 4],
  dims: ['load', 'coping'],
  items: [
    { dim: 'load' }, // 1
    { dim: 'coping', reverse: true },
    { dim: 'load' },
    { dim: 'coping', reverse: true },
    { dim: 'load' },
    { dim: 'coping', reverse: true }, // 6
    { dim: 'load' },
    { dim: 'coping', reverse: true },
    { dim: 'load' },
    { dim: 'coping', reverse: true },
    { dim: 'load' }, // 11
    { dim: 'coping', reverse: true },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'slider',
  bands: [
    { upTo: 16, key: 'low' },
    { upTo: 32, key: 'moderate' },
    { upTo: 48, key: 'high' },
  ],
};

export default s;
