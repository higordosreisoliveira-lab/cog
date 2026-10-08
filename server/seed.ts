// Cria (ou recria a senha de) a conta de administrador e uma conta de cliente de teste.
// Uso: npm run seed            (gera senhas novas e grava em data/credenciais-locais.txt)
//      ADMIN_EMAIL=voce@dominio npm run seed
// Em produção, prefira ADMIN_EMAIL/ADMIN_PASSWORD nas variáveis do Hub (o servidor cria o admin sozinho).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { ENV } from './env.js';
import { one, run } from './db.js';
import { hashPassword, newId, readablePassword } from './crypto.js';
import { createUser, ensureCertToken, upsertSubscription, userByEmail } from './users.js';
import { computeResult, correctIndex, newSession } from '../src/lib/session';
import { QUESTIONS } from '../src/lib/questions';

const DAY = 86400_000;
const adminEmail = (process.env.ADMIN_EMAIL || 'admin@cognitivai.online').trim().toLowerCase();
const testEmail = 'teste@cognitivai.online';

const adminPass = readablePassword(16);
const existing = one<{ id: string }>('SELECT id FROM admins WHERE email = ?', adminEmail);
if (existing) run('UPDATE admins SET password_hash = ?, failed_logins = 0, locked_until = NULL WHERE id = ?', await hashPassword(adminPass), existing.id);
else run('INSERT INTO admins (id, email, password_hash, created_at) VALUES (?, ?, ?, ?)', newId(), adminEmail, await hashPassword(adminPass), Date.now());

// Cliente de teste com assinatura ativa e um resultado de QI de verdade (respostas sorteadas).
const testPass = readablePassword(12);
const u = userByEmail(testEmail) ?? createUser(testEmail, { name: 'Cliente Teste', lang: 'pt-BR', currency: 'USD' });
const s = newSession();
QUESTIONS.forEach((_, i) => {
  const ci = correctIndex(s, i);
  s.answers[i] = { choice: ci === null ? 0 : Math.random() < 0.7 ? ci : (ci + 1) % 4, ms: 4000 + Math.random() * 15000 };
});
s.startedAt = Date.now() - 22 * 60_000;
s.finishedAt = Date.now();
s.paid = true;
s.email = testEmail;
s.name = 'Cliente Teste';
const iq = computeResult(s).iq;
run('UPDATE users SET password_hash = ?, data = ?, iq_score = ?, welcome_sent_at = ?, updated_at = ? WHERE id = ?',
  await hashPassword(testPass), JSON.stringify({ iq: s, games: {}, tests: {}, courses: {}, activity: [new Date().toISOString().slice(0, 10)] }), iq, Date.now(), Date.now(), u.id);
upsertSubscription(u.id, { state: 'active', startedAt: Date.now() - 5 * DAY, accessUntil: Date.now() + 30 * DAY, currency: 'USD', orderId: 'teste' });
ensureCertToken(u.id);

const file = join(ENV.dataDir, 'credenciais-locais.txt');
writeFileSync(file, [
  'Credenciais locais (geradas por "npm run seed"). NÃO publique este arquivo.',
  '',
  `Admin  (${ENV.appUrl || 'http://localhost:5180'}/admin)`,
  `  e-mail: ${adminEmail}`,
  `  senha:  ${adminPass}`,
  '',
  `Cliente de teste (${ENV.appUrl || 'http://localhost:5180'}/pt-BR/login)`,
  `  e-mail: ${testEmail}`,
  `  senha:  ${testPass}`,
  `  QI do teste: ${iq}`,
  '',
].join('\n'), { mode: 0o600 });
console.log(`Contas prontas. Senhas em ${file}`);
