// Forças pessoais: 30 itens originais, 3 por força, intercalados, sem itens invertidos.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'strengths',
  category: 'personality',
  icon: 'diamond',
  minutes: [6, 8],
  dims: ['curiosity', 'persistence', 'empathy', 'leadership', 'creativity', 'organization', 'courage', 'humor', 'prudence', 'generosity'],
  result: 'top',
  input: 'stars',
  scale: [1, 2, 3, 4, 5],
  items: [
    { dim: 'curiosity' }, // 1
    { dim: 'persistence' },
    { dim: 'empathy' },
    { dim: 'leadership' },
    { dim: 'creativity' },
    { dim: 'organization' },
    { dim: 'courage' },
    { dim: 'humor' },
    { dim: 'prudence' },
    { dim: 'generosity' },
    { dim: 'curiosity' }, // 11
    { dim: 'persistence' },
    { dim: 'empathy' },
    { dim: 'leadership' },
    { dim: 'creativity' },
    { dim: 'organization' },
    { dim: 'courage' },
    { dim: 'humor' },
    { dim: 'prudence' },
    { dim: 'generosity' },
    { dim: 'curiosity' }, // 21
    { dim: 'persistence' },
    { dim: 'empathy' },
    { dim: 'leadership' },
    { dim: 'creativity' },
    { dim: 'organization' },
    { dim: 'courage' },
    { dim: 'humor' },
    { dim: 'prudence' },
    { dim: 'generosity' },
  ],
};

export default s;
