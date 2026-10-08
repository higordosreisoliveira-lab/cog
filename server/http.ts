// Roteador mínimo e utilidades de HTTP (sem dependências).
import type { IncomingMessage, ServerResponse } from 'node:http';

export class HttpError extends Error {
  constructor(public status: number, public code: string, public extra: Record<string, unknown> = {}) {
    super(code);
  }
}

export interface Ctx {
  req: IncomingMessage;
  res: ServerResponse;
  url: URL;
  params: Record<string, string>;
  ip: string;
  cookies: Record<string, string>;
  host: string;
  /** Corpo cru (só preenchido nas rotas que pedem, como o webhook). */
  raw?: Buffer;
}

export type Handler = (ctx: Ctx) => Promise<unknown> | unknown;

interface Route { method: string; parts: string[]; handler: Handler; rawBody: boolean }

export class Router {
  private routes: Route[] = [];
  add(method: string, path: string, handler: Handler, opts: { rawBody?: boolean } = {}) {
    this.routes.push({ method, parts: path.split('/').filter(Boolean), handler, rawBody: !!opts.rawBody });
  }
  get = (p: string, h: Handler) => this.add('GET', p, h);
  post = (p: string, h: Handler, o?: { rawBody?: boolean }) => this.add('POST', p, h, o);
  put = (p: string, h: Handler) => this.add('PUT', p, h);
  patch = (p: string, h: Handler) => this.add('PATCH', p, h);
  delete = (p: string, h: Handler) => this.add('DELETE', p, h);

  match(method: string, pathname: string): { route: Route; params: Record<string, string> } | null {
    const segs = pathname.split('/').filter(Boolean);
    for (const route of this.routes) {
      if (route.method !== method || route.parts.length !== segs.length) continue;
      const params: Record<string, string> = {};
      let ok = true;
      for (let i = 0; i < segs.length; i++) {
        const p = route.parts[i];
        if (p.startsWith(':')) {
          try { params[p.slice(1)] = decodeURIComponent(segs[i]); } catch { ok = false; break; }
        } else if (p !== segs[i]) { ok = false; break; }
      }
      if (ok) return { route, params };
    }
    return null;
  }
}

export async function readBody(req: IncomingMessage, limit: number): Promise<Buffer> {
  const declared = Number(req.headers['content-length'] ?? 0);
  if (declared > limit) throw new HttpError(413, 'body_too_large');
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of req) {
    size += (chunk as Buffer).length;
    if (size > limit) throw new HttpError(413, 'body_too_large');
    chunks.push(chunk as Buffer);
  }
  return Buffer.concat(chunks);
}

export async function readJson<T = Record<string, unknown>>(ctx: Ctx, limit = 32 * 1024): Promise<T> {
  const type = String(ctx.req.headers['content-type'] ?? '');
  if (!type.includes('application/json')) throw new HttpError(415, 'json_required');
  const buf = await readBody(ctx.req, limit);
  if (!buf.length) return {} as T;
  try {
    const v = JSON.parse(buf.toString('utf8'));
    if (!v || typeof v !== 'object' || Array.isArray(v)) throw new Error('obj');
    return v as T;
  } catch {
    throw new HttpError(400, 'invalid_json');
  }
}

export function sendJson(res: ServerResponse, status: number, data: unknown, headers: Record<string, string | string[]> = {}) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers });
  res.end(body);
}

export function parseCookies(header: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  if (!header) return out;
  for (const part of header.split(';')) {
    const i = part.indexOf('=');
    if (i < 0) continue;
    const k = part.slice(0, i).trim();
    const v = part.slice(i + 1).trim();
    if (k && !(k in out)) { try { out[k] = decodeURIComponent(v); } catch { /* ignora cookie malformado */ } }
  }
  return out;
}

export function setCookie(res: ServerResponse, name: string, value: string, opts: { maxAge?: number; domain?: string; secure: boolean; sameSite: 'Lax' | 'Strict'; path?: string }) {
  const parts = [`${name}=${encodeURIComponent(value)}`, `Path=${opts.path ?? '/'}`, 'HttpOnly', `SameSite=${opts.sameSite}`];
  if (opts.secure) parts.push('Secure');
  if (opts.domain) parts.push(`Domain=${opts.domain}`);
  if (opts.maxAge !== undefined) parts.push(`Max-Age=${Math.floor(opts.maxAge)}`);
  const prev = res.getHeader('set-cookie');
  const list = Array.isArray(prev) ? prev : prev ? [String(prev)] : [];
  res.setHeader('set-cookie', [...list, parts.join('; ')]);
}

// ---------- validação simples ----------

export const isEmail = (v: unknown): v is string => typeof v === 'string' && v.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const str = (v: unknown, max = 200): string => (typeof v === 'string' ? v.trim().slice(0, max) : '');
export function need<T>(v: T | null | undefined | false | '', code = 'invalid_input'): T {
  if (v === null || v === undefined || v === false || v === '') throw new HttpError(400, code);
  return v as T;
}
