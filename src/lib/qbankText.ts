// Textos do banco de perguntas alternativas (src/content/qbank/<idioma>.ts), carregados sob demanda.

import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import type { QbankText } from '../content/qbank/pt';

const files = import.meta.glob<Record<string, QbankText>>(['../content/qbank/*.ts'], { import: 'default' });
const cache: Record<string, Record<string, QbankText>> = {};
const fileLang = (lang: string) => (lang === 'pt-BR' ? 'pt' : lang);

export function loadQbankText(lang: string): Promise<Record<string, QbankText>> {
  const f = fileLang(lang);
  if (cache[f]) return Promise.resolve(cache[f]);
  const loader = files[`../content/qbank/${f}.ts`] ?? files['../content/qbank/pt.ts'];
  return loader().then((t) => (cache[f] = t));
}

/** Texto do banco no idioma atual; null só na primeira carga. */
export function useQbankText(): Record<string, QbankText> | null {
  const { lang } = useI18n();
  const [t, setT] = useState(() => cache[fileLang(lang)] ?? null);
  useEffect(() => {
    let alive = true;
    const hit = cache[fileLang(lang)];
    if (hit) { setT(hit); return; }
    loadQbankText(lang).then((x) => { if (alive) setT(x); });
    return () => { alive = false; };
  }, [lang]);
  return t;
}
