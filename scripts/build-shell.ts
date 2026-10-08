// Gera o "topo pronto" da página inicial em cada idioma (dist/shell.json). O servidor coloca esse
// HTML dentro de <div id="root"> na primeira resposta, então o título, o texto e o botão aparecem
// antes de o JavaScript chegar (no navegador do Facebook/Instagram isso faz muita diferença).
// Quando o React carrega, ele troca esse HTML pela página de verdade, com a mesma aparência.
// Classes iguais às de src/pages/Landing.tsx e src/components/ui.tsx: mudou lá, mude aqui.
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const CODES: Record<string, string> = {
  'pt-BR': 'pt', en: 'en', es: 'es', fr: 'fr', de: 'de', it: 'it', nl: 'nl', pl: 'pl', tr: 'tr', id: 'id', ja: 'ja', ko: 'ko',
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const CONTAINER = 'mx-auto w-full px-5 sm:px-8';
const BTN_CTA_LG = 'inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium no-underline transition-colors bg-cta text-white shadow-[0_8px_20px_-8px_rgba(11,138,66,0.55)] hover:bg-cta-600 h-14 px-8 text-base w-full sm:w-auto';
const ARROW = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const BOLT = '<svg class="size-4 text-cta" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg>';

const out: Record<string, string> = {};
for (const [code, file] of Object.entries(CODES)) {
  const m = (await import(`../src/i18n/locales/${file}.ts`)).default;
  const L = m.landing;
  out[code] = `<div data-shell>`
    + `<header class="sticky top-0 z-30 border-b border-transparent bg-white/85 backdrop-blur-md"><div class="${CONTAINER} flex h-16 items-center justify-between gap-3" style="max-width:1184px">`
    + `<a href="/${code}" class="inline-flex items-center no-underline" aria-label="CognitivAI"><img src="/brand/logo-horizontal.svg" alt="CognitivAI" width="3550" height="876" class="h-[30px] w-auto sm:h-8"></a></div></header>`
    + `<main><section class="pb-20 pt-12 md:pb-28 md:pt-20"><div class="${CONTAINER} grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16" style="max-width:1184px"><div>`
    + `<div class="font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-muted mb-5">${esc(L.eyebrow)}</div>`
    + `<h1 class="text-[42px] sm:text-[54px] lg:text-[60px]">${esc(L.h1a)}<br><span class="text-muted">${esc(L.h1b)}</span></h1>`
    + `<p class="mt-6 max-w-[480px] text-lg text-ink-2">${esc(L.lead)}</p>`
    + `<div class="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3"><a href="/${code}/test?novo=1" class="${BTN_CTA_LG}">${esc(m.common.start)} ${ARROW}</a>`
    + `<span class="flex items-center gap-1.5 text-[13.5px] text-ink-2">${BOLT}${esc(L.note)}</span></div>`
    + `</div></div></section></main></div>`;
}
writeFileSync(resolve(import.meta.dirname, '../dist/shell.json'), JSON.stringify(out));
console.log(`✓ topo pronto da página inicial em ${Object.keys(out).length} idiomas (dist/shell.json)`);
