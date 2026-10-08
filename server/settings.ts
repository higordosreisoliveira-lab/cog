// Integrações configuradas pelo admin (HubMail, Connect, Google, pixels, suporte).
// Tudo fica num registro só, criptografado com APP_SECRET. Os campos secretos nunca voltam
// inteiros para o navegador: o admin vê só os 4 últimos caracteres.
import { decrypt, encrypt } from './crypto.js';
import { one, run } from './db.js';

export interface Integrations {
  hubmail: { welcomeUrl: string; welcomeToken: string; codeUrl: string; codeToken: string; defaultLang: string };
  connect: { webhookSecret: string; script: string; api: string; checkout: string };
  google: { clientId: string };
  pixels: { meta: string; tiktok: string; clarity: string };
  support: { email: string };
}

/** Campos que são segredo (mascarados no admin, nunca expostos ao público). */
export const SECRET_FIELDS: Record<string, string[]> = {
  hubmail: ['welcomeToken', 'codeToken'],
  connect: ['webhookSecret'],
};

const DEFAULTS: Integrations = {
  hubmail: { welcomeUrl: '', welcomeToken: '', codeUrl: '', codeToken: '', defaultLang: 'pt-BR' },
  connect: { webhookSecret: '', script: 'https://pay.demiourgos.com.br/pay/embed/checkout-v1.js', api: 'https://api.demiourgos.com.br', checkout: 'iq-test-venda-2x-a4433d' },
  google: { clientId: '' },
  pixels: { meta: '', tiktok: '', clarity: 'yts08jnasd' },
  support: { email: 'suport@cognitivai.online' },
};

let cache: Integrations | null = null;

export function getIntegrations(): Integrations {
  if (cache) return cache;
  const row = one<{ value: string }>("SELECT value FROM settings WHERE key = 'integrations'");
  let saved: Partial<Integrations> = {};
  if (row) { try { saved = JSON.parse(decrypt(row.value)); } catch { console.error('Não deu para abrir as integrações salvas (APP_SECRET mudou?).'); } }
  const merged = structuredClone(DEFAULTS) as unknown as Record<string, Record<string, string>>;
  for (const [section, values] of Object.entries(saved)) {
    if (!merged[section] || !values || typeof values !== 'object') continue;
    for (const [k, v] of Object.entries(values)) if (k in merged[section] && typeof v === 'string') merged[section][k] = v;
  }
  cache = merged as unknown as Integrations;
  return cache;
}

export function saveIntegrations(next: Integrations) {
  run("INSERT INTO settings (key, value, updated_at) VALUES ('integrations', ?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value, updated_at = excluded.updated_at",
    encrypt(JSON.stringify(next)), Date.now());
  cache = next;
}

const LIMITS: Record<string, number> = { welcomeUrl: 500, codeUrl: 500, script: 500, api: 300, checkout: 120, webhookSecret: 300, welcomeToken: 300, codeToken: 300, clientId: 200, meta: 40, tiktok: 60, clarity: 30, email: 200, defaultLang: 10 };

// Formato de cada campo público (vai para a página de todo visitante: nada fora do padrão passa).
const FORMATS: Record<string, RegExp> = {
  checkout: /^[\w-]+$/,
  clientId: /^[\w.-]+\.apps\.googleusercontent\.com$/,
  meta: /^\d{5,20}$/,
  tiktok: /^[A-Z0-9]{8,40}$/i,
  clarity: /^[a-z0-9]{6,20}$/i,
  email: /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/,
  defaultLang: /^[a-z]{2}(-[A-Z]{2})?$/,
};

/** Aplica o que o admin mandou. Segredo vazio = mantém o atual; `clear` apaga. */
export function updateIntegrations(patch: Record<string, Record<string, unknown>>, clear: string[] = []): Integrations {
  const cur = structuredClone(getIntegrations()) as unknown as Record<string, Record<string, string>>;
  for (const [section, values] of Object.entries(patch ?? {})) {
    if (!cur[section] || !values || typeof values !== 'object') continue;
    for (const [k, v] of Object.entries(values)) {
      if (!(k in cur[section]) || typeof v !== 'string') continue;
      const val = v.trim().slice(0, LIMITS[k] ?? 300);
      const secret = SECRET_FIELDS[section]?.includes(k);
      if (secret && !val) continue;
      if ((k.endsWith('Url') || k === 'script' || k === 'api') && val && !/^https:\/\/[^\s"'<>]+$/.test(val)) throw Object.assign(new Error('url'), { field: `${section}.${k}` });
      if (FORMATS[k] && val && !FORMATS[k].test(val)) throw Object.assign(new Error('format'), { field: `${section}.${k}`, format: true });
      cur[section][k] = val;
    }
  }
  for (const path of clear) {
    const [s, k] = path.split('.');
    if (cur[s] && SECRET_FIELDS[s]?.includes(k)) cur[s][k] = '';
  }
  saveIntegrations(cur as unknown as Integrations);
  return cur as unknown as Integrations;
}

/** Visão do admin: segredos mascarados. */
export function maskedIntegrations() {
  const cur = structuredClone(getIntegrations()) as unknown as Record<string, Record<string, string>>;
  for (const [section, keys] of Object.entries(SECRET_FIELDS)) {
    for (const k of keys) {
      const v = cur[section][k];
      cur[section][k] = v ? `••••${v.slice(-4)}` : '';
    }
  }
  return cur;
}
