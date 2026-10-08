import { useEffect, useState } from 'react';
import { useI18n } from '.';
import type { AppMessages } from './app/pt';

type Loaders<T> = Record<string, () => Promise<{ default: T }>>;

/** Carrega o dicionário do idioma atual sob demanda (só a área do cliente e o login usam). */
function useLazyLocale<T>(loaders: Loaders<T>, fallback: T | null, cache: Record<string, T>): T | null {
  const { lang } = useI18n();
  const [value, setValue] = useState<T | null>(cache[lang] ?? (lang === 'pt-BR' ? fallback : null));
  useEffect(() => {
    if (cache[lang]) { setValue(cache[lang]); return; }
    const load = loaders[lang];
    if (!load) { setValue(fallback); return; }
    let alive = true;
    load().then((mod) => { cache[lang] = mod.default; if (alive) setValue(mod.default); });
    return () => { alive = false; };
  }, [lang, loaders, fallback, cache]);
  return value;
}

const APP: Loaders<AppMessages> = {
  'pt-BR': () => import('./app/pt'),
  en: () => import('./app/en'), es: () => import('./app/es'), fr: () => import('./app/fr'), de: () => import('./app/de'),
  it: () => import('./app/it'), nl: () => import('./app/nl'), pl: () => import('./app/pl'), tr: () => import('./app/tr'),
  id: () => import('./app/id'), ja: () => import('./app/ja'), ko: () => import('./app/ko'),
};
const appCache: Record<string, AppMessages> = {};
export const useAppMessages = () => useLazyLocale(APP, null, appCache);
