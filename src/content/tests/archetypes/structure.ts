// Arquétipos: os 12 arquétipos clássicos inspirados em Jung, como ideia narrativa.
// 36 itens originais, 3 por arquétipo, intercalados, sem itens invertidos.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'archetypes',
  category: 'personality',
  icon: 'compass',
  minutes: [6, 8],
  dims: ['innocent', 'explorer', 'sage', 'hero', 'rebel', 'magician', 'everyperson', 'lover', 'jester', 'caregiver', 'creator', 'ruler'],
  result: 'top',
  input: 'circles',
  scale: [1, 2, 3, 4, 5],
  items: [
    { dim: 'innocent' }, // 1
    { dim: 'explorer' },
    { dim: 'sage' },
    { dim: 'hero' },
    { dim: 'rebel' },
    { dim: 'magician' },
    { dim: 'everyperson' },
    { dim: 'lover' },
    { dim: 'jester' },
    { dim: 'caregiver' },
    { dim: 'creator' },
    { dim: 'ruler' },
    { dim: 'innocent' }, // 13
    { dim: 'explorer' },
    { dim: 'sage' },
    { dim: 'hero' },
    { dim: 'rebel' },
    { dim: 'magician' },
    { dim: 'everyperson' },
    { dim: 'lover' },
    { dim: 'jester' },
    { dim: 'caregiver' },
    { dim: 'creator' },
    { dim: 'ruler' },
    { dim: 'innocent' }, // 25
    { dim: 'explorer' },
    { dim: 'sage' },
    { dim: 'hero' },
    { dim: 'rebel' },
    { dim: 'magician' },
    { dim: 'everyperson' },
    { dim: 'lover' },
    { dim: 'jester' },
    { dim: 'caregiver' },
    { dim: 'creator' },
    { dim: 'ruler' },
  ],
};

export default s;
