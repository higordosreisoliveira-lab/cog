// Configuração do servidor por variáveis de ambiente (na Hospedagem do Hub: detalhe do site → Variáveis).
//
//   APP_SECRET       obrigatório em produção: 32+ caracteres aleatórios. Criptografa as chaves das
//                    integrações e assina dados. Trocar invalida as chaves salvas (cole de novo no admin).
//   SITE_URL         endereço do funil (ex.: https://cognitivai.online)
//   APP_URL          endereço da área do cliente (ex.: https://app.cognitivai.online)
//   COOKIE_DOMAIN    domínio do cookie de login, para valer nos dois (ex.: .cognitivai.online)
//   DATA_DIR         pasta do banco (na Hospedagem: /app/data, que sobrevive a redeploy)
//   ADMIN_EMAIL /    criam o primeiro admin na primeira subida, se ainda não existir nenhum.
//   ADMIN_PASSWORD   Depois de entrar, troque a senha no painel e apague ADMIN_PASSWORD.
//   TRUST_PROXY=1    confia no IP enviado pela Cloudflare/proxy (cf-connecting-ip / x-forwarded-for)
//   DEMO_PURCHASES=1 libera a "compra simulada" (só para testar; nunca em produção)
//   SERVE_MODE       "app" (padrão): API + banco + área do cliente + admin (app.cognitivai.online).
//                    "site": só o funil (cognitivai.online), sem banco; usa a API do APP_URL.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash, randomBytes } from 'node:crypto';
import { join, resolve } from 'node:path';

const prod = process.env.NODE_ENV === 'production';
const mode: 'app' | 'site' = process.env.SERVE_MODE === 'site' ? 'site' : 'app';
const dataDir = resolve(process.env.DATA_DIR ?? (prod ? '/app/data' : 'data'));
if (mode === 'app' && !existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });

function secretKey(): Buffer {
  let s = process.env.APP_SECRET ?? '';
  if (!s) {
    if (mode === 'site') return Buffer.alloc(32); // o funil não guarda nem criptografa nada
    if (prod) {
      console.error('APP_SECRET não definido. Defina uma variável de ambiente com 32+ caracteres aleatórios.');
      process.exit(1);
    }
    // Em desenvolvimento, gera e guarda um segredo local na pasta de dados (fora do git).
    const f = join(dataDir, '.app-secret');
    if (!existsSync(f)) writeFileSync(f, randomBytes(32).toString('base64url'), { mode: 0o600 });
    s = readFileSync(f, 'utf8').trim();
  }
  if (s.length < 32) { console.error('APP_SECRET precisa de pelo menos 32 caracteres.'); process.exit(1); }
  return createHash('sha256').update(s).digest();
}

const url = (v: string | undefined) => (v ? v.replace(/\/+$/, '') : '');

export const ENV = {
  prod,
  mode,
  port: Number(process.env.PORT) || 3000,
  dataDir,
  secretKey: secretKey(),
  siteUrl: url(process.env.SITE_URL),
  appUrl: url(process.env.APP_URL),
  cookieDomain: process.env.COOKIE_DOMAIN || undefined,
  trustProxy: process.env.TRUST_PROXY === '1',
  demoPurchases: (process.env.DEMO_PURCHASES ?? (prod ? '0' : '1')) === '1' && !prod, // nunca em produção
  adminEmail: process.env.ADMIN_EMAIL?.trim().toLowerCase() || '',
  adminPassword: process.env.ADMIN_PASSWORD || '',
};

export const hostOf = (u: string) => { try { return new URL(u).host; } catch { return ''; } };
