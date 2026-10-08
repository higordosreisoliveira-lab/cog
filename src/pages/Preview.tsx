// Link de demonstração (/:lang/preview): abre o checkout sem fazer o teste, para mostrar a página a
// alguém. Usa um teste de exemplo marcado como amostra: se a pessoa pagar mesmo assim, a conta é criada
// SEM esse resultado e o app pede para ela fazer o teste de verdade.
import { Navigate } from 'react-router';
import { useI18n } from '../i18n';
import { QUESTIONS } from '../lib/questions';
import { correctIndex, loadSession, newSession, saveSession } from '../lib/session';

function sampleSession() {
  const s = newSession();
  QUESTIONS.forEach((_, i) => {
    const ci = correctIndex(s, i);
    s.answers[i] = { choice: ci === null ? 0 : Math.random() < 0.7 ? ci : (ci + 1) % 4, ms: 12000 + Math.random() * 14000 };
  });
  const now = Date.now();
  s.startedAt = now - 22 * 60000;
  s.finishedAt = now;
  s.sample = true;
  return s;
}

export function Preview() {
  const { path } = useI18n();
  const current = loadSession();
  // Quem já fez o teste de verdade continua com o próprio resultado.
  if (!current?.finishedAt || current.sample) {
    if (!current?.paid) saveSession(sampleSession());
  }
  return <Navigate to={path('/checkout')} replace />;
}
