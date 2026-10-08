// Cliente da API do servidor, com o cookie de sessão (HttpOnly, o JavaScript não lê) e o cabeçalho
// que o servidor exige contra requisição forjada. No funil (cognitivai.online) a API é a do app
// (app.cognitivai.online); no app e em desenvolvimento, o mesmo endereço.
import { runtime } from './runtime';

export class ApiError extends Error {
  constructor(public status: number, public code: string, public data: Record<string, unknown> = {}) { super(code); }
}

export async function api<T = Record<string, unknown>>(path: string, opts: { method?: string; body?: unknown; keepalive?: boolean } = {}): Promise<T> {
  const method = opts.method ?? (opts.body !== undefined ? 'POST' : 'GET');
  let res: Response;
  try {
    res = await fetch(`${runtime().apiBase ?? ''}/api${path}`, {
      method,
      credentials: 'include',
      keepalive: opts.keepalive,
      headers: { 'x-requested-with': 'cognitivai', ...(opts.body !== undefined ? { 'content-type': 'application/json' } : {}) },
      body: opts.body !== undefined ? JSON.stringify(opts.body) : undefined,
    });
  } catch {
    throw new ApiError(0, 'network');
  }
  const data = (await res.json().catch(() => ({}))) as Record<string, unknown>;
  if (!res.ok) throw new ApiError(res.status, String(data.error ?? 'error'), data);
  return data as T;
}
