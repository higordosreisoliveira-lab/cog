// Servidor da CognitivAI, sem dependências externas. Na Hospedagem do Hub: Dockerfile, porta 3000.
// Dois modos (SERVE_MODE):
//   app  (app.cognitivai.online): API (/api), banco, webhook do Connect, área do cliente e admin.
//   site (cognitivai.online): só o funil (teste, venda, relatório); conversa com a API do APP_URL.
import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { ENV, hostOf } from './env.js';
import { HttpError, Router, parseCookies, readBody, sendJson, type Ctx } from './http.js';

const DIST = resolve(process.env.DIST_DIR ?? 'dist');
const APP_MODE = ENV.mode === 'app';
const router = new Router();
router.get('/api/health', () => ({ ok: true, mode: ENV.mode }));

// O modo "site" nem abre o banco: tudo que é dado mora no app.
let checkCsrf: (ctx: Ctx) => void = () => {};
let publicConfig: () => Record<string, unknown> = () => ({});
let startJobs = async () => {};
if (APP_MODE) {
  const [auth, user, admin, connect, db] = await Promise.all([
    import('./auth.js'), import('./routes-user.js'), import('./routes-admin.js'), import('./connect.js'), import('./db.js'),
  ]);
  checkCsrf = auth.checkCsrf;
  publicConfig = user.publicConfig;
  user.userRoutes(router);
  admin.adminRoutes(router);
  router.post('/api/webhooks/connect', (ctx) => connect.handleWebhook(ctx), { rawBody: true });
  startJobs = async () => {
    await admin.bootstrapAdmin();
    db.housekeeping();
    setInterval(db.housekeeping, 3600_000).unref();
  };
}

// Funil: a configuração pública (checkout, pixels, Google…) vem do app, editável no admin.
// Guarda por 60 s e atualiza em segundo plano; se o app cair, segue com a última versão.
let remoteCfg: { at: number; value: Record<string, unknown> } | null = null;
let refreshing: Promise<void> | null = null;
function refreshRemote() {
  refreshing ??= fetch(`${ENV.appUrl}/api/config`, { signal: AbortSignal.timeout(4000) })
    .then(async (r) => { if (r.ok) remoteCfg = { at: Date.now(), value: (await r.json()) as Record<string, unknown> }; })
    .catch((e) => console.warn('[config] não deu para ler a configuração do app:', (e as Error).message))
    .finally(() => { refreshing = null; });
  return refreshing;
}
async function siteConfig() {
  if (!remoteCfg) await refreshRemote();
  else if (Date.now() - remoteCfg.at > 60_000) void refreshRemote();
  return { ...(remoteCfg?.value ?? {}), siteUrl: ENV.siteUrl || null, appUrl: ENV.appUrl || null, apiBase: ENV.appUrl || null };
}

// ---------- cabeçalhos de segurança ----------

const extraHosts = (process.env.CSP_EXTRA_HOSTS ?? '').split(/\s+/).filter((h) => /^https:\/\/[\w.*-]+$/.test(h)).join(' ');
const CSP = [
  "default-src 'self'",
  `script-src 'self' https://*.demiourgos.com.br https://js.stripe.com https://accounts.google.com https://connect.facebook.net https://analytics.tiktok.com https://www.clarity.ms https://scripts.clarity.ms https://static.cloudflareinsights.com https://*.hubcovil.space ${extraHosts}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://accounts.google.com",
  "font-src 'self' data: https://fonts.gstatic.com",
  "img-src 'self' data: blob: https:",
  `connect-src 'self' ${APP_MODE ? '' : ENV.appUrl} https://*.demiourgos.com.br https://api.stripe.com https://*.stripe.com https://accounts.google.com https://*.facebook.com https://*.tiktok.com https://*.tiktokw.us https://*.clarity.ms https://c.bing.com https://cloudflareinsights.com https://*.hubcovil.space ${extraHosts}`,
  `frame-src https://*.demiourgos.com.br https://js.stripe.com https://*.stripe.com https://accounts.google.com ${extraHosts}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join('; ');

function securityHeaders(res: ServerResponse, html: boolean) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups'); // o login do Google abre popup
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), usb=(), interest-cohort=()');
  if (ENV.prod) res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  if (html) res.setHeader('Content-Security-Policy', CSP);
}

// ---------- endereços: funil x app ----------

const SITE_HOST = hostOf(ENV.siteUrl), APP_HOST = hostOf(ENV.appUrl);
const split = !!SITE_HOST && !!APP_HOST && SITE_HOST !== APP_HOST;
/** Rotas que moram no app (área do cliente, login, admin). O resto é do funil. */
const isAppPath = (p: string) => p === '/admin' || p.startsWith('/admin/') || /^\/[a-zA-Z-]{2,5}\/(app|login)(\/|$)/.test(p);
const privatePath = (p: string) => isAppPath(p) || p.startsWith('/api/') || /^\/[a-zA-Z-]{2,5}\/(v\/|preview)/.test(p);

function hostRedirect(host: string, pathname: string, search: string): string | null {
  if (!split || pathname.startsWith('/api/') || pathname.startsWith('/assets/') || /\.\w+$/.test(pathname)) return null;
  // O admin não é anunciado no funil: lá /admin simplesmente não existe.
  if (host === SITE_HOST && (pathname === '/admin' || pathname.startsWith('/admin/'))) return null;
  if (host === SITE_HOST && isAppPath(pathname)) return `${ENV.appUrl}${pathname}${search}`;
  if (host === APP_HOST && !isAppPath(pathname) && pathname !== '/') return `${ENV.siteUrl}${pathname}${search}`;
  return null;
}

// ---------- arquivos do site ----------

const TYPES: Record<string, string> = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.webmanifest': 'application/manifest+json',
};

let indexHtml: string | null = null;

// Topo pronto da página inicial por idioma (scripts/build-shell.ts): aparece antes do JavaScript.
let shells: Record<string, string> | null = null;
async function shellFor(pathname: string, acceptLanguage: string | undefined): Promise<string> {
  if (shells === null) {
    try { shells = JSON.parse(await readFile(join(DIST, 'shell.json'), 'utf8')) as Record<string, string>; } catch { shells = {}; }
  }
  const codes = Object.keys(shells);
  const find = (c: string) => codes.find((k) => k.toLowerCase() === c.toLowerCase());
  const m = /^\/([A-Za-z-]{2,5})\/?$/.exec(pathname);
  if (m) return (find(m[1]) && shells[find(m[1])!]) || '';
  if (pathname !== '/') return '';
  // Raiz: o navegador vai para o idioma da pessoa; usamos o mesmo critério (Accept-Language).
  for (const part of (acceptLanguage ?? '').split(',')) {
    const tag = part.split(';')[0].trim();
    if (!tag) continue;
    const hit = find(tag) ?? codes.find((k) => k.split('-')[0].toLowerCase() === tag.split('-')[0].toLowerCase());
    if (hit) return shells[hit];
  }
  return shells.en ?? '';
}

async function renderIndex(pathname = '', acceptLanguage?: string): Promise<string> {
  indexHtml ??= await readFile(join(DIST, 'index.html'), 'utf8');
  // Configuração pública vai embutida como JSON (não é script executável; passa no CSP).
  const cfg = APP_MODE ? publicConfig() : await siteConfig();
  const json = JSON.stringify(cfg).replace(/</g, '\\u003c');
  const shell = await shellFor(pathname, acceptLanguage);
  const html = indexHtml.replace('</head>', `<script id="cg-config" type="application/json">${json}</script></head>`);
  return shell ? html.replace('<div id="root"></div>', `<div id="root">${shell}</div>`) : html;
}

async function serveStatic(req: IncomingMessage, res: ServerResponse, url: URL, host: string) {
  const path = url.pathname;
  // Sem source maps, arquivos ocultos ou caminhos estranhos.
  if (path.endsWith('.map') || path.split('/').some((s) => s.startsWith('.'))) { res.writeHead(404).end(); return; }
  if (path === '/robots.txt') {
    securityHeaders(res, false);
    const body = host === APP_HOST && split ? 'User-agent: *\nDisallow: /\n' : 'User-agent: *\nAllow: /\nDisallow: /api/\n';
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' }).end(body);
    return;
  }
  let decoded: string;
  try { decoded = decodeURIComponent(path); } catch { res.writeHead(400).end(); return; }
  const wanted = normalize(join(DIST, decoded));
  let file: string | null = null;
  if (wanted.startsWith(DIST) && wanted !== DIST) { try { if ((await stat(wanted)).isFile()) file = wanted; } catch { /* não existe */ } }
  const noindex = privatePath(path) || (split && host === APP_HOST);
  if (!file || file.endsWith('index.html')) {
    if (/\.\w{2,5}$/.test(path) && !path.endsWith('.html')) { res.writeHead(404).end(); return; } // arquivo que não existe
    securityHeaders(res, true);
    res.writeHead(200, { 'content-type': TYPES['.html'], 'cache-control': 'no-store', ...(noindex ? { 'x-robots-tag': 'noindex, nofollow' } : {}) });
    res.end(req.method === 'HEAD' ? undefined : await renderIndex(path, req.headers['accept-language']));
    return;
  }
  const body = await readFile(file);
  securityHeaders(res, false);
  res.writeHead(200, {
    'content-type': TYPES[extname(file)] ?? 'application/octet-stream',
    'cache-control': path.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600',
  });
  res.end(req.method === 'HEAD' ? undefined : body);
}

// ---------- requisição ----------

function clientIp(req: IncomingMessage): string {
  if (ENV.trustProxy) {
    const cf = req.headers['cf-connecting-ip'];
    if (typeof cf === 'string' && cf) return cf.slice(0, 64);
    const fwd = String(req.headers['x-forwarded-for'] ?? '').split(',')[0].trim();
    if (fwd) return fwd.slice(0, 64);
  }
  return req.socket.remoteAddress ?? '';
}

const server = createServer(async (req, res) => {
  // Só confia no cabeçalho do proxy quando há proxy (Hub: Cloudflare → Caddy → container).
  const host = String((ENV.trustProxy ? req.headers['x-forwarded-host'] : undefined) ?? req.headers.host ?? '').split(',')[0].trim().toLowerCase();
  let url: URL;
  try { url = new URL(req.url ?? '/', 'http://x'); } catch { res.writeHead(400).end(); return; }

  const redirect = hostRedirect(host, url.pathname, url.search);
  if (redirect && (req.method === 'GET' || req.method === 'HEAD')) { res.writeHead(302, { location: redirect }).end(); return; }

  if (!url.pathname.startsWith('/api/')) {
    if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405).end(); return; }
    try { await serveStatic(req, res, url, host); } catch (e) { console.error(e); if (!res.headersSent) res.writeHead(500).end(); }
    return;
  }

  securityHeaders(res, false);
  res.setHeader('x-robots-tag', 'noindex, nofollow');
  // O funil (outro endereço) chama a API do app com o cookie de login: só ele, e nunca o admin.
  const origin = req.headers.origin;
  if (APP_MODE && split && origin && hostOf(origin) === SITE_HOST && !url.pathname.startsWith('/api/admin')) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Vary', 'Origin');
    if (req.method === 'OPTIONS') {
      res.writeHead(204, {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'content-type, x-requested-with',
        'Access-Control-Max-Age': '600',
      }).end();
      return;
    }
  }
  const m = router.match(req.method ?? 'GET', url.pathname);
  if (!m) { sendJson(res, 404, { error: 'not_found' }); return; }
  const ctx: Ctx = { req, res, url, params: m.params, ip: clientIp(req), cookies: parseCookies(req.headers.cookie), host };
  try {
    if (req.method !== 'GET' && !m.route.rawBody) checkCsrf(ctx);
    if (m.route.rawBody) ctx.raw = await readBody(req, 256 * 1024);
    const out = await m.route.handler(ctx);
    if (!res.headersSent) sendJson(res, 200, out ?? { ok: true });
  } catch (e) {
    if (e instanceof HttpError) {
      const headers: Record<string, string> = e.extra.retryAfter ? { 'retry-after': String(e.extra.retryAfter) } : {};
      if (!res.headersSent) sendJson(res, e.status, { error: e.code, ...e.extra }, headers);
    } else {
      console.error('Erro na API', req.method, url.pathname, e);
      if (!res.headersSent) sendJson(res, 500, { error: 'internal' }); // nunca devolve detalhes internos
    }
  }
});

server.headersTimeout = 20_000;
server.requestTimeout = 30_000;

await startJobs();
if (!APP_MODE && !ENV.appUrl) console.warn('SERVE_MODE=site sem APP_URL: defina o endereço do app (ex.: https://app.cognitivai.online).');
server.listen(ENV.port, () => console.log(`CognitivAI (${ENV.mode}) no ar na porta ${ENV.port}${split ? ` (funil ${SITE_HOST}, app ${APP_HOST})` : ''}`));
