// Senhas (scrypt), tokens, segredos criptografados (AES-256-GCM) e TOTP (verificação em duas etapas).
import { createCipheriv, createDecipheriv, createHash, createHmac, randomBytes, randomInt, scrypt as scryptCb, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { ENV } from './env.js';

const scrypt = promisify(scryptCb) as (pw: string, salt: Buffer, len: number, opts: { N: number; r: number; p: number; maxmem: number }) => Promise<Buffer>;
const SCRYPT = { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };

export async function hashPassword(pw: string): Promise<string> {
  const salt = randomBytes(16);
  const key = await scrypt(pw, salt, 32, SCRYPT);
  return `scrypt$${SCRYPT.N}$${SCRYPT.r}$${SCRYPT.p}$${salt.toString('base64')}$${key.toString('base64')}`;
}

export async function verifyPassword(pw: string, stored: string | null | undefined): Promise<boolean> {
  // Sem senha guardada, faz o mesmo trabalho mesmo assim: o tempo de resposta não revela se a conta existe.
  const parts = (stored ?? '').split('$');
  const valid = parts.length === 6 && parts[0] === 'scrypt';
  const salt = valid ? Buffer.from(parts[4], 'base64') : randomBytes(16);
  const want = valid ? Buffer.from(parts[5], 'base64') : randomBytes(32);
  const opts = valid ? { N: Number(parts[1]), r: Number(parts[2]), p: Number(parts[3]), maxmem: SCRYPT.maxmem } : SCRYPT;
  const got = await scrypt(pw, salt, want.length, opts);
  return valid && timingSafeEqual(got, want);
}

export const randomToken = (bytes = 32) => randomBytes(bytes).toString('base64url');
export const sha256 = (s: string) => createHash('sha256').update(s).digest('hex');
export const hmacHex = (s: string) => createHmac('sha256', ENV.secretKey).update(s).digest('hex');
export const sixDigits = () => String(randomInt(100000, 1000000));
export const newId = () => randomBytes(12).toString('base64url');

export function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a), y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Senha inicial legível (10 caracteres, sem 0/O/1/l/I). */
export function readablePassword(len = 10) {
  const abc = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  return Array.from({ length: len }, () => abc[randomInt(abc.length)]).join('');
}

// ---------- segredos guardados no banco (chaves de integração) ----------

export function encrypt(plain: string): string {
  const iv = randomBytes(12);
  const c = createCipheriv('aes-256-gcm', ENV.secretKey, iv);
  const enc = Buffer.concat([c.update(plain, 'utf8'), c.final()]);
  return `v1.${iv.toString('base64')}.${c.getAuthTag().toString('base64')}.${enc.toString('base64')}`;
}

export function decrypt(blob: string): string {
  const [v, iv, tag, data] = blob.split('.');
  if (v !== 'v1') throw new Error('formato');
  const d = createDecipheriv('aes-256-gcm', ENV.secretKey, Buffer.from(iv, 'base64'));
  d.setAuthTag(Buffer.from(tag, 'base64'));
  return Buffer.concat([d.update(Buffer.from(data, 'base64')), d.final()]).toString('utf8');
}

// ---------- TOTP (RFC 6238), para o login do admin ----------

const B32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
export function base32(buf: Buffer) {
  let bits = 0, value = 0, out = '';
  for (const byte of buf) {
    value = (value << 8) | byte; bits += 8;
    while (bits >= 5) { out += B32[(value >>> (bits - 5)) & 31]; bits -= 5; }
  }
  if (bits > 0) out += B32[(value << (5 - bits)) & 31];
  return out;
}
function unbase32(s: string) {
  let bits = 0, value = 0;
  const out: number[] = [];
  for (const ch of s.replace(/=+$/, '').toUpperCase()) {
    const i = B32.indexOf(ch);
    if (i < 0) continue;
    value = (value << 5) | i; bits += 5;
    if (bits >= 8) { out.push((value >>> (bits - 8)) & 255); bits -= 8; }
  }
  return Buffer.from(out);
}
function hotp(secret: Buffer, counter: number) {
  const msg = Buffer.alloc(8);
  msg.writeBigUInt64BE(BigInt(counter));
  const h = createHmac('sha1', secret).update(msg).digest();
  const o = h[h.length - 1] & 15;
  const n = ((h[o] & 127) << 24) | (h[o + 1] << 16) | (h[o + 2] << 8) | h[o + 3];
  return String(n % 1_000_000).padStart(6, '0');
}
export const newTotpSecret = () => base32(randomBytes(20));
export function verifyTotp(secretB32: string, code: string, now = Date.now()) {
  const clean = code.replace(/\s/g, '');
  if (!/^\d{6}$/.test(clean)) return false;
  const key = unbase32(secretB32);
  const step = Math.floor(now / 30000);
  return [-1, 0, 1].some((d) => safeEqual(hotp(key, step + d), clean));
}
