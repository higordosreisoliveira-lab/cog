import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { Navigate, Outlet, useLocation, useParams } from 'react-router';
import { CONFIG, chargeCurrency, type Currency } from '../config';
import pt, { type Messages } from './locales/pt';
import { runtime } from '../lib/runtime';

export interface LocaleInfo {
  code: string; // prefixo da URL
  label: string; // nome no próprio idioma
  flag: string; // código ISO do país da bandeira
  currency: Currency;
  intl: string; // locale para datas e moeda
}

export const LOCALES: LocaleInfo[] = [
  { code: 'pt-BR', label: 'Português', flag: 'BR', currency: 'BRL', intl: 'pt-BR' },
  { code: 'en', label: 'English', flag: 'US', currency: 'USD', intl: 'en-US' },
  { code: 'es', label: 'Español', flag: 'ES', currency: 'USD', intl: 'es' },
  { code: 'fr', label: 'Français', flag: 'FR', currency: 'EUR', intl: 'fr-FR' },
  { code: 'de', label: 'Deutsch', flag: 'DE', currency: 'EUR', intl: 'de-DE' },
  { code: 'it', label: 'Italiano', flag: 'IT', currency: 'EUR', intl: 'it-IT' },
  { code: 'nl', label: 'Nederlands', flag: 'NL', currency: 'EUR', intl: 'nl-NL' },
  { code: 'pl', label: 'Polski', flag: 'PL', currency: 'PLN', intl: 'pl-PL' },
  { code: 'tr', label: 'Türkçe', flag: 'TR', currency: 'TRY', intl: 'tr-TR' },
  { code: 'id', label: 'Bahasa Indonesia', flag: 'ID', currency: 'IDR', intl: 'id-ID' },
  { code: 'ja', label: '日本語', flag: 'JP', currency: 'JPY', intl: 'ja-JP' },
  { code: 'ko', label: '한국어', flag: 'KR', currency: 'KRW', intl: 'ko-KR' },
];

// Cada idioma é baixado só quando usado (o português já vem no pacote principal).
const LOADERS: Record<string, () => Promise<{ default: Messages }>> = {
  en: () => import('./locales/en'),
  es: () => import('./locales/es'),
  fr: () => import('./locales/fr'),
  de: () => import('./locales/de'),
  it: () => import('./locales/it'),
  nl: () => import('./locales/nl'),
  pl: () => import('./locales/pl'),
  tr: () => import('./locales/tr'),
  id: () => import('./locales/id'),
  ja: () => import('./locales/ja'),
  ko: () => import('./locales/ko'),
};
const cache: Record<string, Messages> = { 'pt-BR': pt };

// Fontes extras para escritas que a Geist não cobre; carregadas só quando o idioma é usado.
const EXTRA_FONTS: Record<string, string> = {
  ja: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;600&display=swap',
  ko: 'https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600&display=swap',
};

function loadExtraFont(code: string) {
  const href = EXTRA_FONTS[code];
  if (!href || document.querySelector(`link[href="${href}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
}

const PREF_KEY = 'cognitiva_lang';
const DEFAULT_LOCALE = 'en';

export const findLocale = (code?: string) => LOCALES.find((l) => l.code.toLowerCase() === code?.toLowerCase());

/** Idioma salvo, senão o do navegador, senão inglês. */
export function detectLocale(): string {
  try {
    const saved = findLocale(localStorage.getItem(PREF_KEY) ?? undefined);
    if (saved) return saved.code;
  } catch { /* sem storage */ }
  for (const nav of navigator.languages ?? [navigator.language]) {
    const exact = findLocale(nav);
    if (exact) return exact.code;
    const base = nav.split('-')[0].toLowerCase();
    const loose = LOCALES.find((l) => l.code.split('-')[0].toLowerCase() === base);
    if (loose) return loose.code;
  }
  return DEFAULT_LOCALE;
}

export interface I18n {
  lang: string;
  info: LocaleInfo;
  m: Messages;
  /** Caminho com o prefixo do idioma atual: path('/test') → '/pt-BR/test'. */
  path: (p?: string) => string;
  money: (n: number) => string;
  date: (ts: number) => string;
  price: { today: string; after: string; anchor: string | null; period: string; currency: Currency };
}

const Ctx = createContext<I18n | null>(null);

export function useI18n(): I18n {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n fora do LangLayout');
  return v;
}

function I18nProvider({ info, children }: { info: LocaleInfo; children: ReactNode }) {
  const [loaded, setLoaded] = useState<{ code: string; m: Messages } | null>(cache[info.code] ? { code: info.code, m: cache[info.code] } : null);

  useEffect(() => {
    document.documentElement.lang = info.code;
    loadExtraFont(info.code);
    try { localStorage.setItem(PREF_KEY, info.code); } catch { /* sem storage */ }
    if (cache[info.code]) { setLoaded({ code: info.code, m: cache[info.code] }); return; }
    let alive = true;
    LOADERS[info.code]().then((mod) => {
      cache[info.code] = mod.default;
      if (alive) setLoaded({ code: info.code, m: mod.default });
    });
    return () => { alive = false; };
  }, [info.code]);

  const value = useMemo<I18n | null>(() => {
    if (!loaded) return null;
    const m = loaded.m;
    const fmt = new Intl.NumberFormat(info.intl, { style: 'currency', currency: info.currency, maximumFractionDigits: info.currency === 'JPY' || info.currency === 'KRW' || info.currency === 'IDR' ? 0 : 2 });
    const money = (n: number) => fmt.format(n);
    // Preço na moeda da cobrança (ex.: dólar em todos os idiomas), escrito do jeito do idioma.
    const cc = chargeCurrency(info.currency);
    const fmtPrice = new Intl.NumberFormat(info.intl, { style: 'currency', currency: cc, maximumFractionDigits: cc === 'JPY' || cc === 'KRW' || cc === 'IDR' ? 0 : 2 });
    const p = CONFIG.pricing.currencies[cc];
    const pm = (n: number) => fmtPrice.format(n);
    return {
      lang: info.code,
      info,
      m,
      path: (rest = '') => `/${info.code}${rest}`,
      money,
      date: (ts: number) => new Date(ts).toLocaleDateString(info.intl, { day: 'numeric', month: 'long', year: 'numeric' }),
      price: { today: pm(p.today), after: pm(p.after), anchor: p.anchor ? pm(p.anchor) : null, period: m.billing.period(CONFIG.pricing.periodDays), currency: cc },
    };
  }, [loaded, info]);

  if (!value) return null;
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

/** Rota /:lang — valida o idioma da URL e fornece os textos para as páginas filhas. */
export function LangLayout() {
  const { lang } = useParams();
  const { pathname, search } = useLocation();
  const info = findLocale(lang);
  if (!info) return <Navigate to={`/${detectLocale()}${pathname}${search}`} replace />;
  if (info.code !== lang) return <Navigate to={pathname.replace(`/${lang}`, `/${info.code}`) + search} replace />;
  return <I18nProvider info={info}><Outlet /></I18nProvider>;
}

export function RootRedirect() {
  const { search } = useLocation();
  // No endereço do app (app.cognitivai.online), a raiz leva para a área do cliente.
  const { appUrl, siteUrl } = runtime();
  let onApp = false;
  try { onApp = !!appUrl && appUrl !== siteUrl && new URL(appUrl).host === window.location.host; } catch { /* sem config */ }
  return <Navigate to={`/${detectLocale()}${onApp ? '/app' : ''}${search}`} replace />;
}
