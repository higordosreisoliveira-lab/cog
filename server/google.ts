// Confere o ID token do botão "Continuar com o Google": assinatura RS256 com as chaves públicas do
// Google, emissor, público (nosso Client ID), validade e e-mail verificado.
import { createPublicKey, verify, type JsonWebKey } from 'node:crypto';

interface Claims { iss: string; aud: string; sub: string; email: string; email_verified: boolean | string; exp: number; name?: string }

let keys: { at: number; ttl: number; list: (JsonWebKey & { kid: string })[] } | null = null;

async function googleKeys() {
  if (keys && Date.now() - keys.at < keys.ttl) return keys.list;
  const r = await fetch('https://www.googleapis.com/oauth2/v3/certs', { signal: AbortSignal.timeout(5000) });
  if (!r.ok) throw new Error('jwks');
  const maxAge = Number(/max-age=(\d+)/.exec(r.headers.get('cache-control') ?? '')?.[1] ?? 3600);
  const body = (await r.json()) as { keys: (JsonWebKey & { kid: string })[] };
  keys = { at: Date.now(), ttl: Math.min(maxAge, 86400) * 1000, list: body.keys };
  return keys.list;
}

const b64json = (s: string) => JSON.parse(Buffer.from(s, 'base64url').toString('utf8'));

export async function verifyGoogleToken(token: string, clientId: string): Promise<Claims | null> {
  if (!clientId || typeof token !== 'string' || token.length > 4096) return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  try {
    const header = b64json(parts[0]) as { alg: string; kid: string };
    if (header.alg !== 'RS256') return null;
    const jwk = (await googleKeys()).find((k) => k.kid === header.kid);
    if (!jwk) return null;
    const ok = verify('RSA-SHA256', Buffer.from(`${parts[0]}.${parts[1]}`), createPublicKey({ key: jwk, format: 'jwk' }), Buffer.from(parts[2], 'base64url'));
    if (!ok) return null;
    const c = b64json(parts[1]) as Claims;
    const iss = c.iss === 'accounts.google.com' || c.iss === 'https://accounts.google.com';
    const verified = c.email_verified === true || c.email_verified === 'true';
    if (!iss || c.aud !== clientId || c.exp * 1000 < Date.now() || !verified || !c.email || !c.sub) return null;
    return c;
  } catch {
    return null;
  }
}
