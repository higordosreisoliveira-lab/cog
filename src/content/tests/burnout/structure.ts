// Nível de burnout: 15 itens originais sobre os últimos três meses, 5 por dimensão, intercalados.
// Os itens de `efficacy` descrevem realização no trabalho e são invertidos: quanto mais frequentes,
// menor a pontuação (e menor o burnout). Faixas sobre o total bruto (0–60).

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'burnout',
  category: 'wellbeing',
  icon: 'battery',
  minutes: [4, 5],
  dims: ['exhaustion', 'detachment', 'efficacy'],
  items: [
    { dim: 'exhaustion' }, // 1
    { dim: 'detachment' },
    { dim: 'efficacy', reverse: true },
    { dim: 'exhaustion' },
    { dim: 'detachment' },
    { dim: 'efficacy', reverse: true }, // 6
    { dim: 'exhaustion' },
    { dim: 'detachment' },
    { dim: 'efficacy', reverse: true },
    { dim: 'exhaustion' },
    { dim: 'detachment' }, // 11
    { dim: 'efficacy', reverse: true },
    { dim: 'exhaustion' },
    { dim: 'detachment' },
    { dim: 'efficacy', reverse: true },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'slider',
  bands: [
    { upTo: 20, key: 'low' },
    { upTo: 40, key: 'moderate' },
    { upTo: 60, key: 'high' },
  ],
};

export default s;
