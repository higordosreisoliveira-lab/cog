// Confere o que o TypeScript não pega nas traduções: tamanhos de listas, posições das
// perguntas (a resposta certa depende da posição), funções com a mesma quantidade de
// parâmetros e textos vazios. Uso: npm run check:i18n (roda com tsx).
import { readdirSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');
// Um conjunto por pasta com pt.ts: site, app e cada teste/curso (src/content/<tipo>/<id>/).
const SETS = [
  { name: 'site', dir: join(root, 'i18n', 'locales') },
  { name: 'app', dir: join(root, 'i18n', 'app') },
];
for (const kind of ['tests', 'courses']) {
  for (const id of readdirSync(join(root, 'content', kind), { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)) {
    SETS.push({ name: `${kind === 'tests' ? 'teste' : 'curso'}:${id}`, dir: join(root, 'content', kind, id), skip: ['structure.ts'], kind });
  }
}
// Banco de perguntas alternativas do teste de QI (src/lib/qbank.ts + src/content/qbank/<idioma>.ts).
SETS.push({ name: 'qbank', dir: join(root, 'content', 'qbank'), kind: 'qbank' });

const problems = [];
const ok = [];

function shape(a, b, path, tag) {
  if (typeof a === 'function') {
    if (typeof b !== 'function') return problems.push(`${tag}: ${path} deveria ser função`);
    if (a.length !== b.length) problems.push(`${tag}: ${path} tem ${b.length} parâmetros, esperado ${a.length}`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return problems.push(`${tag}: ${path} deveria ser lista`);
    if (a.length !== b.length) problems.push(`${tag}: ${path} tem ${b.length} itens, esperado ${a.length}`);
    a.forEach((x, i) => shape(x, b[i], `${path}[${i}]`, tag));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return problems.push(`${tag}: ${path} deveria ser objeto`);
    for (const k of Object.keys(a)) shape(a[k], b[k], `${path}.${k}`, tag);
    return;
  }
  if (a === null && b !== null) problems.push(`${tag}: ${path} deveria ser null`);
  if (typeof a === 'string' && (typeof b !== 'string' || !b.trim())) problems.push(`${tag}: ${path} vazio ou ausente`);
}

for (const set of SETS) {
  const load = async (f) => (await import(pathToFileURL(join(set.dir, f)).href)).default;
  const present = readdirSync(set.dir);
  if (!present.includes('pt.ts')) { problems.push(`${set.name}: falta pt.ts`); continue; }
  if ((set.kind === 'tests' || set.kind === 'courses') && !present.includes('structure.ts')) { problems.push(`${set.name}: falta structure.ts`); continue; }
  const pt = await load('pt.ts');
  // Testes: o texto precisa bater com a estrutura (quantidade de perguntas, escala, dimensões, faixas).
  if (set.kind === 'tests') {
    const st = await load('structure.ts');
    const tag = `${set.name}/estrutura`;
    if (pt.items.length !== st.items.length) problems.push(`${tag}: ${pt.items.length} perguntas no texto, ${st.items.length} na estrutura`);
    if (pt.scale.length !== st.scale.length) problems.push(`${tag}: escala com ${pt.scale.length} rótulos, esperado ${st.scale.length}`);
    for (const d of st.dims) if (!pt.dims[d]) problems.push(`${tag}: falta a dimensão ${d}`);
    for (const it of st.items) if (!st.dims.includes(it.dim)) problems.push(`${tag}: item com dimensão desconhecida ${it.dim}`);
    const keys = [...(st.bands ?? []).map((b) => b.key), ...(st.quadrant ? [st.quadrant.lowLow, st.quadrant.highLow, st.quadrant.lowHigh, st.quadrant.highHigh] : [])];
    for (const k of keys) if (!pt.bands?.[k]) problems.push(`${tag}: falta o texto da faixa ${k}`);
    if (st.bands && st.bands.at(-1).upTo !== st.items.length * Math.max(...st.scale)) problems.push(`${tag}: a última faixa deve terminar no total máximo`);
    if (st.alert && !pt.alert) problems.push(`${tag}: falta o texto de alerta`);
  }
  if (set.kind === 'courses') {
    const st = await load('structure.ts');
    if (pt.lessons.length !== st.lessons.length) problems.push(`${set.name}/estrutura: ${pt.lessons.length} aulas no texto, ${st.lessons.length} na estrutura`);
  }
  if (set.kind === 'qbank') {
    const { QBANK } = await import(pathToFileURL(join(root, 'lib', 'qbank.ts')).href);
    const ids = new Set();
    for (const [slot, list] of Object.entries(QBANK)) {
      for (const v of list) {
        const tag = `qbank/${slot}/${v.id}`;
        if (ids.has(v.id)) problems.push(`${tag}: id repetido`);
        ids.add(v.id);
        if (v.answer < 0 || v.answer > 4) problems.push(`${tag}: answer fora de 0–4`);
        if (v.options && v.options.length !== 5) problems.push(`${tag}: precisa de 5 alternativas`);
        if (!v.text) { if (!v.sequence || !v.options) problems.push(`${tag}: sem texto, precisa de sequence e options`); continue; }
        if (!pt[v.id]) { problems.push(`${tag}: falta no pt.ts`); continue; }
        if (!v.options && pt[v.id].options?.length !== 5) problems.push(`${tag}: pt.ts precisa de 5 alternativas`);
      }
    }
    for (const id of Object.keys(pt)) if (!ids.has(id)) problems.push(`qbank/pt: ${id} não existe em qbank.ts`);
  }
  const files = readdirSync(set.dir).filter((f) => f.endsWith('.ts') && f !== 'pt.ts' && !(set.skip ?? []).includes(f));
  let good = 0;
  for (const f of files) {
    const tag = `${set.name}/${f.replace('.ts', '')}`;
    let m;
    try { m = await load(f); } catch (e) { problems.push(`${tag}: não carregou (${e.message.split('\n')[0]})`); continue; }
    if (m === pt) { problems.push(`${tag}: ainda é o português (sem tradução)`); continue; }
    const before = problems.length;
    shape(pt, m, set.name, tag);
    if (set.name === 'site') {
      shape(pt.faq('x@y.z'), m.faq('x@y.z'), 'faq()', tag);
      const words = new Set([...m.words1, ...m.words2].map((w) => w.toLowerCase()));
      if (words.size !== m.words1.length + m.words2.length) problems.push(`${tag}: palavras de memória repetidas`);
    }
    if (problems.length === before) good++;
  }
  ok.push(`${set.name}: ${good}/${files.length} traduções ok`);
}

console.log(ok.join('\n'));
if (problems.length) {
  console.error('\n' + problems.join('\n'));
  process.exit(1);
}
