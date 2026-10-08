import { useEffect, useMemo, useState } from 'react';
import type { Currency } from '../../config';
import { Link } from 'react-router';
import { FUNNEL, admin, metrics, statusOf, wantsCancel } from '../../lib/admin';
import { Card, Kpi, Loading, MoneyList, PageTitle, StatusBadge, fmtDate, fmtDay, fmtMoney, useAdmin } from './shared';

const FUNNEL_LABEL: Record<(typeof FUNNEL)[number], string> = {
  ViewContent: 'Visitou a página',
  StartTest: 'Clicou em começar',
  CompleteTest: 'Terminou o teste',
  Lead: 'Deixou o e-mail',
  InitiateCheckout: 'Abriu o checkout',
  AddPaymentInfo: 'Clicou em pagar',
  Purchase: 'Comprou',
};

export function Overview() {
  const { customers, fail } = useAdmin();
  const [f, setF] = useState<Record<string, number> | null>(null);
  useEffect(() => { admin.funnel(30).then(setF).catch((e) => { fail(e); setF({}); }); }, [fail]);
  const list = useMemo(() => customers ?? [], [customers]);
  const m = useMemo(() => metrics(list), [list]);
  // Moedas não se somam sem câmbio: os cartões mostram uma moeda por vez (a com mais clientes primeiro).
  const currencies = useMemo(() => {
    const n: Partial<Record<Currency, number>> = {};
    for (const c of list) if (c.subscription) n[c.subscription.currency] = (n[c.subscription.currency] ?? 0) + 1;
    return (Object.keys(n) as Currency[]).sort((a, b) => (n[b] ?? 0) - (n[a] ?? 0));
  }, [list]);
  const [picked, setCur] = useState<Currency | null>(null);
  if (!customers) return <><PageTitle title="Visão geral" /><Loading /></>;

  const cur = picked && currencies.includes(picked) ? picked : currencies[0] ?? 'USD';
  const money = (o: Partial<Record<Currency, number>>) => fmtMoney(o[cur] ?? 0, cur);
  const maxDaily = Math.max(1, ...m.daily.map((d) => d.signups));
  const paying = m.byStatus.active + m.byStatus.canceled;
  const cancels = list.filter(wantsCancel);
  const fv = (k: string) => f?.[k] ?? 0;

  return (
    <>
      <PageTitle title="Visão geral" sub="Clientes, assinaturas, receita e funil de vendas." />

      {cancels.length > 0 && (
        <Card className="mb-6 bg-warn-50! ring-warn/20!" title={`Pedidos de cancelamento (${cancels.length})`}>
          <p className="-mt-2 mb-3 text-[13.5px] text-ink-2">Essas pessoas pediram para cancelar pelo app. Cancele a assinatura no painel do Connect e depois marque como cancelada aqui no cliente.</p>
          <ul className="divide-y divide-warn/15 text-[14px]">
            {cancels.slice(0, 8).map((c) => (
              <li key={c.id} className="flex items-center justify-between gap-3 py-2">
                <Link to={`/admin/clientes/${c.id}`} className="min-w-0 truncate text-ink">{c.email}</Link>
                <span className="flex-none text-[12.5px] text-muted">pediu em {fmtDate(c.subscription!.cancelRequestedAt!)}</span>
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Kpi label="Clientes" value={m.total} hint={`+${m.new7} nos últimos 7 dias`} />
        <Kpi label="Em período de teste" value={m.byStatus.trial} hint="Ainda não foram cobrados" />
        <Kpi label="Assinantes pagantes" value={paying} hint={`${m.byStatus.active} ativos · ${m.byStatus.canceled} cancelaram, com acesso até o fim do período`} />
        <Kpi label="Teste → assinatura paga" value={m.trialToPaid === null ? '—' : `${m.trialToPaid}%`} hint="De quem já passou do período de teste" />
      </div>

      {currencies.length > 1 && (
        <div className="mt-6 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-[13px] text-muted">Receita em</span>
          {currencies.map((c) => (
            <button key={c} onClick={() => setCur(c)}
              className={`rounded-full px-3 py-1 font-mono text-[12.5px] transition-colors ${c === cur ? 'bg-ink text-white' : 'bg-white text-ink-2 ring-1 ring-inset ring-line hover:text-ink'}`}>{c}</button>
          ))}
        </div>
      )}
      <div className={`${currencies.length > 1 ? 'mt-2' : 'mt-3'} grid gap-3 lg:grid-cols-3`}>
        <Kpi label="Receita nos últimos 30 dias (estimada)" value={money(m.revenue30)} hint="Valor do teste + renovações, pelos preços atuais" />
        <Kpi label="Receita recorrente mensal (MRR)" value={money(m.mrr)} hint="Assinaturas ativas, convertidas para 30 dias" />
        <Kpi label="Receita total (estimada)" value={money(m.revenueAll)} hint="Os valores exatos ficam no Connect e no Zoio" />
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Novos clientes por dia" action={<span className="text-[12.5px] text-muted">últimos 14 dias</span>}>
          <div className="flex h-44 items-end gap-1.5">
            {m.daily.map((d, i) => (
              <div key={d.day} title={`${fmtDay(d.day)}: ${d.signups}`} className="group flex min-w-0 flex-1 flex-col items-center gap-1.5">
                <span className="font-mono text-[11px] text-muted opacity-0 transition-opacity group-hover:opacity-100">{d.signups}</span>
                <div className="w-full rounded-t-md bg-brand/85 transition-colors group-hover:bg-brand" style={{ height: `${(d.signups / maxDaily) * 120 + (d.signups ? 4 : 2)}px`, opacity: d.signups ? 1 : 0.25 }} />
                <span className={`font-mono text-[10px] text-muted ${i % 2 ? 'invisible' : ''}`}>{fmtDay(d.day)}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card title="Funil de vendas" action={<span className="text-[12.5px] text-muted">últimos 30 dias</span>}>
          {!f ? <Loading /> : fv('ViewContent') === 0 ? (
            <p className="text-[14px] text-ink-2">Ainda não há visitas registradas. O funil conta os eventos da landing até a compra (sem guardar dado pessoal).</p>
          ) : (
            <div className="grid gap-2.5">
              {FUNNEL.map((e, i) => {
                const v = fv(e);
                const prev = i ? fv(FUNNEL[i - 1]) : v;
                const pctTotal = (v / fv('ViewContent')) * 100;
                return (
                  <div key={e}>
                    <div className="mb-1 flex items-baseline justify-between gap-3 text-[13.5px]">
                      <span>{FUNNEL_LABEL[e]}</span>
                      <span className="font-mono text-[12.5px] text-ink-2">
                        {v.toLocaleString('pt-BR')}
                        {i > 0 && <span className="ml-2 text-muted" title="da etapa anterior">· {prev ? Math.round((v / prev) * 100) : 0}%</span>}
                      </span>
                    </div>
                    <div className="h-2.5 rounded-full bg-soft"><div className="h-full rounded-full bg-ink" style={{ width: `${Math.max(1.5, Math.min(100, pctTotal))}%` }} /></div>
                  </div>
                );
              })}
              <p className="mt-2 text-[12.5px] text-muted">Conversão total da visita à compra: {((fv('Purchase') / fv('ViewContent')) * 100).toFixed(1).replace('.', ',')}%</p>
            </div>
          )}
        </Card>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <Card title="Clientes recentes" action={<Link to="/admin/clientes" className="text-[13.5px] font-medium text-ink">Ver todos →</Link>}>
          {list.length === 0 ? (
            <p className="text-[14px] text-ink-2">Nenhum cliente ainda. Eles aparecem aqui assim que o Connect avisa a primeira compra.</p>
          ) : (
            <ul className="divide-y divide-line">
              {list.slice(0, 6).map((c) => (
                <li key={c.id}>
                  <Link to={`/admin/clientes/${c.id}`} className="flex items-center gap-3 py-3 text-ink no-underline hover:bg-soft/60">
                    <span className="grid size-9 flex-none place-items-center rounded-full bg-soft font-mono text-[12px] uppercase">{(c.name || c.email).slice(0, 2)}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-[14.5px] font-medium">{c.name || c.email.split('@')[0]}</span>
                      <span className="block truncate text-[12.5px] text-muted">{c.email}</span>
                    </span>
                    <span className="hidden font-mono text-[12.5px] text-ink-2 sm:block">QI {c.iqScore ?? '—'}</span>
                    <span className="hidden text-[12.5px] text-muted sm:block">{fmtDate(c.createdAt)}</span>
                    <StatusBadge status={statusOf(c)} />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Card>

        <Card title="Indicações" action={<Link to="/admin/indicacoes" className="text-[13.5px] font-medium text-ink">Abrir →</Link>}>
          <dl className="grid gap-3 text-[14px]">
            <div className="flex justify-between"><dt className="text-ink-2">Clientes que vieram por indicação</dt><dd className="font-mono">{list.filter((c) => c.referredBy).length}</dd></div>
            <div className="flex justify-between border-t border-line pt-3"><dt className="text-ink-2">Saques para pagar</dt><dd className="font-mono">{m.payoutsPending.count}</dd></div>
            <div className="flex justify-between"><dt className="text-ink-2">Valor a pagar</dt><dd className="text-right font-mono"><MoneyList values={m.payoutsPending.byCurrency} /></dd></div>
          </dl>
        </Card>
      </div>
    </>
  );
}
