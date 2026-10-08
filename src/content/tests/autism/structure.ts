// Traços do espectro autista em adultos: 25 itens originais (cenários do dia a dia), 5 por dimensão,
// intercalados na ordem social, interaction, routine, sensory, details. Cada dimensão tem 2 itens
// invertidos (concordar indica MENOS traços). Pontuação alta, por dimensão ou no total, indica mais
// traços associados ao espectro. Total bruto: 25 itens × 0–4 pontos = 0–100.
// Autoavaliação de traços, não diagnóstico.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'autism',
  category: 'neuro',
  icon: 'puzzle',
  minutes: [6, 8],
  dims: ['social', 'interaction', 'routine', 'sensory', 'details'],
  items: [
    { dim: 'social' }, // 1
    { dim: 'interaction' },
    { dim: 'routine', reverse: true },
    { dim: 'sensory' },
    { dim: 'details' },
    { dim: 'social', reverse: true }, // 6
    { dim: 'interaction' },
    { dim: 'routine' },
    { dim: 'sensory', reverse: true },
    { dim: 'details' },
    { dim: 'social' }, // 11
    { dim: 'interaction', reverse: true },
    { dim: 'routine' },
    { dim: 'sensory' },
    { dim: 'details', reverse: true },
    { dim: 'social', reverse: true }, // 16
    { dim: 'interaction' },
    { dim: 'routine', reverse: true },
    { dim: 'sensory' },
    { dim: 'details' },
    { dim: 'social' }, // 21
    { dim: 'interaction', reverse: true },
    { dim: 'routine' },
    { dim: 'sensory', reverse: true },
    { dim: 'details', reverse: true },
  ],
  scale: [0, 1, 2, 3, 4],
  result: 'screen',
  input: 'circles',
  bands: [
    { upTo: 40, key: 'few' },
    { upTo: 65, key: 'some' },
    { upTo: 100, key: 'many' },
  ],
};

export default s;
