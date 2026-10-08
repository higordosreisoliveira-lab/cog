// Peças comuns do painel de administração (só em português: é uma ferramenta interna).
import type { ReactNode } from 'react';
import { useOutletContext } from 'react-router';
import type { Currency } from '../../config';
import type { SubStatus } from '../../lib/account';
import type { AdminMe, Customer } from '../../lib/admin';
import { ApiError } from '../../lib/api';

export interface AdminCtx {
  me: AdminMe;
  /** Lista de clientes (null enquanto carrega). */
  customers: Customer[] | null;
  refresh: () => void;
  /** Relê os dados do admin logado (ex.: depois de ligar a verificação em duas etapas). */
  reloadMe: () => void;
  /** Mostra um aviso rápido no rodapé. */
  notify: (msg: string, tone?: 'ok' | 'bad') => void;
  /** Trata erro da API (sessão expirada leva ao login) e devolve a mensagem para a tela. */
  fail: (e: unknown) => string;
}
export const useAdmin = () => useOutletContext<AdminCtx>();

const ERRORS: Record<string, string> = {
  network: 'Sem conexão com o servidor.',
  unauthorized: 'Sua sessão expirou. Entre de novo.',
  wrong_credentials: 'E-mail ou senha incorretos.',
  wrong_totp: 'Código do app autenticador incorreto.',
  locked: 'Muitas tentativas erradas. Espere 30 minutos e tente de novo.',
  rate_limited: 'Muitas tentativas. Espere alguns minutos.',
  weak_password: 'A senha precisa de pelo menos 12 caracteres.',
  invalid_url: 'Endereço inválido: use um link completo começando com https://.',
  invalid_input: 'Confira os dados preenchidos.',
  not_found: 'Não encontrado (talvez já tenha sido alterado).',
  no_subscription: 'Este cliente não tem assinatura.',
  already_enabled: 'A verificação em duas etapas já está ligada.',
  forbidden: 'Acesso bloqueado por segurança. Recarregue a página.',
};
export const errorText = (e: unknown) => {
  if (e instanceof ApiError) return ERRORS[e.code] ?? (e.status === 429 ? ERRORS.rate_limited : `Erro ${e.status || ''} (${e.code}).`);
  return 'Algo deu errado. Tente de novo.';
};

export const Loading = ({ label = 'Carregando…' }: { label?: string }) => (
  <div role="status" className="flex items-center gap-3 py-6 text-[14px] text-ink-2">
    <span className="size-4 animate-spin rounded-full border-2 border-line border-t-ink" aria-hidden="true" />{label}
  </div>
);

const NO_CENTS: Currency[] = ['JPY', 'KRW', 'IDR'];
export const fmtMoney = (n: number, c: Currency) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: c, maximumFractionDigits: NO_CENTS.includes(c) ? 0 : 2 }).format(n);
export const fmtDate = (ts: number) => new Date(ts).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
export const fmtDateTime = (ts: number) => new Date(ts).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
export const fmtDay = (day: string) => new Date(`${day}T12:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

/** Valores em várias moedas, sem conversão (não inventamos câmbio). Maior primeiro. */
export function MoneyList({ values, empty = '—', className = '' }: { values: Partial<Record<Currency, number>>; empty?: string; className?: string }) {
  const rows = (Object.entries(values) as [Currency, number][]).filter(([, v]) => v > 0).sort((a, b) => b[1] - a[1]);
  if (!rows.length) return <span className={className}>{empty}</span>;
  return <span className={className}>{rows.map(([c, v]) => fmtMoney(v, c)).join(' · ')}</span>;
}

export const STATUS: Record<SubStatus, { label: string; cls: string }> = {
  trial: { label: 'Em teste', cls: 'bg-brand-50 text-brand' },
  active: { label: 'Ativa', cls: 'bg-good-50 text-good' },
  canceled: { label: 'Cancelada', cls: 'bg-warn-50 text-warn' },
  expired: { label: 'Encerrada', cls: 'bg-soft-2 text-muted' },
};

export function StatusBadge({ status }: { status: SubStatus }) {
  const s = STATUS[status];
  return <span className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-0.5 text-[12px] font-medium ${s.cls}`}>{s.label}</span>;
}

export function Card({ title, action, className = '', children }: { title?: ReactNode; action?: ReactNode; className?: string; children: ReactNode }) {
  return (
    <section className={`rounded-3xl bg-white p-5 ring-1 ring-inset ring-line sm:p-6 ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          {title && <h2 className="text-[17px] font-semibold tracking-[-0.01em]">{title}</h2>}
          {action}
        </div>
      )}
      {children}
    </section>
  );
}

export function Kpi({ label, value, hint }: { label: string; value: ReactNode; hint?: ReactNode }) {
  return (
    <div className="rounded-3xl bg-white p-5 ring-1 ring-inset ring-line">
      <div className="text-[13px] text-muted">{label}</div>
      <div className="mt-2 font-mono text-[28px] font-medium leading-none tracking-[-0.03em]">{value}</div>
      {hint && <div className="mt-2 text-[12.5px] text-ink-2">{hint}</div>}
    </div>
  );
}

export function PageTitle({ title, sub, right }: { title: string; sub?: string; right?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-[26px] sm:text-[30px]">{title}</h1>
        {sub && <p className="mt-1 text-[14.5px] text-ink-2">{sub}</p>}
      </div>
      {right}
    </div>
  );
}

export const inputCls = 'h-11 w-full rounded-xl bg-white px-4 text-[14.5px] outline-none ring-1 ring-inset ring-line transition placeholder:text-muted focus:ring-2 focus:ring-brand';

export const smallBtn = (tone: 'default' | 'primary' | 'danger' = 'default') =>
  `inline-flex h-9 items-center justify-center rounded-full px-4 text-[13.5px] font-medium transition-colors disabled:opacity-40 ${
    tone === 'primary' ? 'bg-ink text-white hover:bg-ink-2' : tone === 'danger' ? 'bg-bad-50 text-bad hover:bg-bad hover:text-white' : 'bg-soft text-ink hover:bg-soft-2'
  }`;
