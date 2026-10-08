// Banco SQLite (node:sqlite, sem dependências). Um arquivo em DATA_DIR, que na Hospedagem do Hub
// fica em /app/data e sobrevive a redeploy. Faça backup desse arquivo.
import { DatabaseSync } from 'node:sqlite';
import { join } from 'node:path';
import { ENV } from './env.js';

export const db = new DatabaseSync(join(ENV.dataDir, 'cognitivai.db'));
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  PRAGMA busy_timeout = 5000;

  -- Clientes. Senha só como hash (scrypt). "data" guarda o progresso: QI, jogos, testes, cursos.
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    name TEXT NOT NULL DEFAULT '',
    lang TEXT NOT NULL DEFAULT 'pt-BR',
    password_hash TEXT,
    google_sub TEXT UNIQUE,
    google_email TEXT,
    ref_code TEXT NOT NULL UNIQUE,
    referred_by TEXT,
    currency TEXT NOT NULL DEFAULT 'USD',
    iq_score INTEGER,
    cert_token TEXT UNIQUE,              -- código longo e aleatório da página de verificação do certificado
    data TEXT NOT NULL DEFAULT '{}',
    welcome_sent_at INTEGER,
    failed_logins INTEGER NOT NULL DEFAULT 0,
    locked_until INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  -- Assinatura de cada cliente, atualizada pelos avisos (webhooks) do Connect.
  CREATE TABLE IF NOT EXISTS subscriptions (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    state TEXT NOT NULL,                 -- trial | active | canceled | expired
    started_at INTEGER NOT NULL,
    trial_ends_at INTEGER NOT NULL,
    access_until INTEGER,                -- até quando tem acesso (vem do Connect)
    canceled_at INTEGER,
    cancel_requested_at INTEGER,         -- pedido feito no app, a confirmar no Connect
    currency TEXT NOT NULL,
    connect_order_id TEXT,
    connect_subscription_id TEXT,
    updated_at INTEGER NOT NULL
  );

  -- Pedidos que chegaram pelo webhook. "claim" liga o pedido ao navegador de quem pagou.
  CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL COLLATE NOCASE,
    status TEXT NOT NULL,
    amount REAL,
    currency TEXT,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    claim_hash TEXT,
    claimed_at INTEGER,
    demo INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  -- Administradores: tabela separada dos clientes, de propósito.
  CREATE TABLE IF NOT EXISTS admins (
    id TEXT PRIMARY KEY,
    email TEXT NOT NULL UNIQUE COLLATE NOCASE,
    password_hash TEXT NOT NULL,
    totp_secret TEXT,                    -- criptografado
    failed_logins INTEGER NOT NULL DEFAULT 0,
    locked_until INTEGER,
    last_login_at INTEGER,
    created_at INTEGER NOT NULL
  );

  -- Sessões: só o hash do token fica no banco.
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    kind TEXT NOT NULL,                  -- user | admin
    subject_id TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    expires_at INTEGER NOT NULL,
    last_seen INTEGER NOT NULL,
    ip TEXT,
    ua TEXT
  );
  CREATE INDEX IF NOT EXISTS sessions_subject ON sessions(kind, subject_id);

  CREATE TABLE IF NOT EXISTS login_codes (
    email TEXT PRIMARY KEY COLLATE NOCASE,
    code_hash TEXT NOT NULL,
    expires_at INTEGER NOT NULL,
    attempts INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS payouts (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount REAL NOT NULL,
    currency TEXT NOT NULL,
    referrals INTEGER NOT NULL,
    method TEXT NOT NULL,
    dest TEXT NOT NULL,
    status TEXT NOT NULL,                -- requested | paid
    created_at INTEGER NOT NULL,
    paid_at INTEGER
  );

  -- Funil: contagem por dia e evento (sem dado pessoal).
  CREATE TABLE IF NOT EXISTS events (
    day TEXT NOT NULL,
    name TEXT NOT NULL,
    count INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY (day, name)
  );

  CREATE TABLE IF NOT EXISTS webhook_events (
    id TEXT PRIMARY KEY,
    event TEXT,
    received_at INTEGER NOT NULL,
    status TEXT NOT NULL,
    error TEXT,
    payload TEXT
  );

  -- Integrações configuradas no admin. Valores secretos ficam criptografados.
  CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS audit (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    at INTEGER NOT NULL,
    actor TEXT,
    action TEXT NOT NULL,
    target TEXT,
    detail TEXT,
    ip TEXT
  );
`);

type Row = Record<string, unknown>;
export const one = <T = Row>(sql: string, ...args: (string | number | null)[]) => db.prepare(sql).get(...args) as T | undefined;
export const all = <T = Row>(sql: string, ...args: (string | number | null)[]) => db.prepare(sql).all(...args) as T[];
export const run = (sql: string, ...args: (string | number | null)[]) => db.prepare(sql).run(...args);

export function tx<T>(fn: () => T): T {
  db.exec('BEGIN IMMEDIATE');
  try { const r = fn(); db.exec('COMMIT'); return r; } catch (e) { db.exec('ROLLBACK'); throw e; }
}

export function audit(actor: string | null, action: string, target: string | null, detail: unknown, ip: string | null) {
  run('INSERT INTO audit (at, actor, action, target, detail, ip) VALUES (?, ?, ?, ?, ?, ?)',
    Date.now(), actor, action, target, detail === undefined ? null : JSON.stringify(detail).slice(0, 2000), ip);
}

// Limpeza periódica: sessões vencidas, códigos velhos, log de webhook com mais de 90 dias.
export function housekeeping() {
  const now = Date.now();
  run('DELETE FROM sessions WHERE expires_at < ?', now);
  run('DELETE FROM login_codes WHERE expires_at < ?', now - 3600_000);
  run('DELETE FROM webhook_events WHERE received_at < ?', now - 90 * 86400_000);
}
