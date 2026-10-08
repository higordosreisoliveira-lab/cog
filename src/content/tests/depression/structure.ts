// Sinais de humor deprimido: 10 itens originais sobre as últimas duas semanas, 5 por dimensão.
// Escala de frequência 0–3, sem itens invertidos. Faixas sobre o total bruto (0–30).
// O item 10 (índice 9) pergunta sobre pensamentos de que não vale a pena viver ou de se machucar:
// qualquer resposta acima de "Nunca" mostra o aviso de ajuda urgente.

import type { TestStructure } from '../../schema';

const s: TestStructure = {
  id: 'depression',
  category: 'wellbeing',
  icon: 'cloud',
  minutes: [3, 4],
  dims: ['mood', 'energy'],
  items: [
    { dim: 'mood' }, // 1
    { dim: 'energy' },
    { dim: 'mood' },
    { dim: 'energy' },
    { dim: 'energy' },
    { dim: 'mood' }, // 6
    { dim: 'energy' },
    { dim: 'mood' },
    { dim: 'energy' },
    { dim: 'mood' }, // 10: pensamentos de não querer viver ou de se machucar
  ],
  scale: [0, 1, 2, 3],
  result: 'screen',
  input: 'cards',
  bands: [
    { upTo: 6, key: 'minimal' },
    { upTo: 13, key: 'mild' },
    { upTo: 20, key: 'moderate' },
    { upTo: 30, key: 'high' },
  ],
  alert: { item: 9, minPoints: 1 },
};

export default s;
