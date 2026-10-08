// Catálogo de testes e cursos da área do cliente. Cada teste/curso é uma pasta em
// src/content/tests/<id>/ ou src/content/courses/<id>/ (veja src/content/schema.ts).
// As estruturas vêm junto com o app; os textos de cada idioma são baixados sob demanda.

import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';
import type { CourseStructure, CourseText, TestStructure, TestText } from './schema';

/** Ordem de exibição. Pastas que ainda não existem são ignoradas. */
export const TEST_ORDER = [
  'personality', 'eq', 'career', 'strengths', 'archetypes', 'confidence',
  'adhd', 'autism', 'dopamine',
  'anxiety', 'stress', 'depression', 'burnout',
  'love', 'attachment',
  'impostor', 'values', 'procrastination', 'time',
];
export const COURSE_ORDER = ['matrices', 'memory', 'logic', 'focus', 'emotional', 'confidence', 'creativity', 'decisions', 'problems'];

const testStructures = import.meta.glob<TestStructure>('./tests/*/structure.ts', { eager: true, import: 'default' });
const courseStructures = import.meta.glob<CourseStructure>('./courses/*/structure.ts', { eager: true, import: 'default' });
const testTexts = import.meta.glob<TestText>(['./tests/*/*.ts', '!./tests/*/structure.ts'], { import: 'default' });
const courseTexts = import.meta.glob<CourseText>(['./courses/*/*.ts', '!./courses/*/structure.ts'], { import: 'default' });

export const TESTS: TestStructure[] = TEST_ORDER.map((id) => testStructures[`./tests/${id}/structure.ts`]).filter((s): s is TestStructure => !!s);
export const COURSES: CourseStructure[] = COURSE_ORDER.map((id) => courseStructures[`./courses/${id}/structure.ts`]).filter((s): s is CourseStructure => !!s);
export const findTest = (id?: string) => TESTS.find((t) => t.id === id);
export const findCourse = (id?: string) => COURSES.find((c) => c.id === id);

/** Código do idioma na URL → nome do arquivo (pt-BR usa pt.ts). */
const fileLang = (lang: string) => (lang === 'pt-BR' ? 'pt' : lang);

const cache = new Map<string, unknown>();

async function loadText<T>(kind: 'tests' | 'courses', id: string, lang: string): Promise<T | null> {
  const key = `${kind}/${id}/${fileLang(lang)}`;
  if (cache.has(key)) return cache.get(key) as T;
  const table = (kind === 'tests' ? testTexts : courseTexts) as Record<string, () => Promise<T>>;
  // Se a tradução ainda não existe, usa o português.
  const loader = table[`./${kind}/${id}/${fileLang(lang)}.ts`] ?? table[`./${kind}/${id}/pt.ts`];
  if (!loader) return null;
  const value = await loader();
  cache.set(key, value);
  return value;
}

function useTexts<T>(kind: 'tests' | 'courses', ids: string[]): Record<string, T> | null {
  const { lang } = useI18n();
  const key = ids.join(',');
  const [state, setState] = useState<{ key: string; lang: string; value: Record<string, T> } | null>(null);
  useEffect(() => {
    let alive = true;
    Promise.all(ids.map((id) => loadText<T>(kind, id, lang).then((t) => [id, t] as const))).then((pairs) => {
      if (!alive) return;
      setState({ key, lang, value: Object.fromEntries(pairs.filter(([, t]) => t)) as Record<string, T> });
    });
    return () => { alive = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind, key, lang]);
  return state && state.key === key && state.lang === lang ? state.value : null;
}

/** Textos de vários testes (para listas). */
export const useTestTexts = (ids: string[] = TESTS.map((t) => t.id)) => useTexts<TestText>('tests', ids);
/** Textos de vários cursos (para listas). */
export const useCourseTexts = (ids: string[] = COURSES.map((c) => c.id)) => useTexts<CourseText>('courses', ids);

export function useTestText(id: string): TestText | null {
  const all = useTestTexts([id]);
  return all ? all[id] ?? null : null;
}
export function useCourseText(id: string): CourseText | null {
  const all = useCourseTexts([id]);
  return all ? all[id] ?? null : null;
}

// ---------- pontuação ----------

export interface TestScore {
  dims: Record<string, number>; // 0–100 por dimensão
  total: number; // soma bruta dos pontos (itens invertidos já invertidos)
  max: number; // total máximo possível
  band: string | null; // faixa ('screen') ou tipo ('quadrant')
  alert: boolean; // aviso urgente disparado
}

/** answers[i] = índice da opção escolhida (0-based) na escala do teste. */
export function scoreTest(st: TestStructure, answers: number[]): TestScore {
  const min = Math.min(...st.scale), max = Math.max(...st.scale);
  const sums: Record<string, { s: number; n: number }> = Object.fromEntries(st.dims.map((d) => [d, { s: 0, n: 0 }]));
  let total = 0;
  st.items.forEach((it, i) => {
    const choice = answers[i];
    if (choice === undefined) return;
    let pts = st.scale[choice];
    if (it.reverse) pts = max + min - pts;
    sums[it.dim].s += pts;
    sums[it.dim].n += 1;
    total += pts;
  });
  const dims = Object.fromEntries(st.dims.map((d) => [d, sums[d].n ? Math.round(((sums[d].s / sums[d].n - min) / (max - min)) * 100) : 0]));
  let band: string | null = null;
  if (st.result === 'screen' && st.bands) band = st.bands.find((b) => total <= b.upTo)?.key ?? st.bands[st.bands.length - 1].key;
  if (st.result === 'quadrant' && st.quadrant) {
    const q = st.quadrant;
    const x = dims[q.x] >= 50, y = dims[q.y] >= 50;
    band = x ? (y ? q.highHigh : q.highLow) : (y ? q.lowHigh : q.lowLow);
  }
  const alert = !!st.alert && answers[st.alert.item] !== undefined && st.scale[answers[st.alert.item]] >= st.alert.minPoints;
  return { dims, total, max: st.items.length * max, band, alert };
}
