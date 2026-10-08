// Configuração pública que o servidor embute na página (<script id="cg-config" type="application/json">):
// endereços do funil e do app, checkout do Connect, ID do Google e pixels — tudo editável no admin.
// Sem servidor (ex.: só o Vite rodando), usa os valores de src/config.ts.
import { CONFIG } from '../config';

export interface RuntimeConfig {
  siteUrl: string | null;
  appUrl: string | null;
  /** Endereço da API quando o funil está em outro domínio (null = mesmo endereço). */
  apiBase: string | null;
  googleClientId: string | null;
  connect: { script: string; api: string; checkout: string } | null;
  pixels: { meta: string | null; tiktok: string | null; clarity: string | null };
  supportEmail: string;
  demoPurchases: boolean;
}

let cached: RuntimeConfig | null = null;

export function runtime(): RuntimeConfig {
  if (cached) return cached;
  let injected: Partial<RuntimeConfig> = {};
  try {
    const el = typeof document !== 'undefined' ? document.getElementById('cg-config') : null;
    if (el?.textContent) injected = JSON.parse(el.textContent);
  } catch { /* página sem configuração embutida */ }
  cached = {
    siteUrl: injected.siteUrl ?? null,
    appUrl: injected.appUrl ?? null,
    apiBase: injected.apiBase ?? null,
    googleClientId: injected.googleClientId ?? (CONFIG.googleClientId || null),
    connect: injected.connect !== undefined ? injected.connect : CONFIG.connect.checkout ? CONFIG.connect : null,
    pixels: injected.pixels ?? { meta: CONFIG.pixels.meta || null, tiktok: CONFIG.pixels.tiktok || null, clarity: CONFIG.pixels.clarity || null },
    supportEmail: injected.supportEmail ?? CONFIG.supportEmail,
    demoPurchases: injected.demoPurchases ?? false,
  };
  return cached;
}

/** Leva para o app (outro endereço, se configurado) ou navega dentro do mesmo site. */
export function appHref(path: string): string | null {
  const { appUrl } = runtime();
  if (!appUrl) return null;
  try { if (new URL(appUrl).host === window.location.host) return null; } catch { return null; }
  return `${appUrl}${path}`;
}
