import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { CONFIG } from '../../config';
import { streak, type SubStatus } from '../../lib/account';
import { admin, chargesOf, nextCharge, statusOf, wantsCancel, type CustomerAction, type CustomerFull } from '../../lib/admin';
import { computeResult } from '../../lib/session';
import type { TestText } from '../../content/schema';
import { runtime } from '../../lib/runtime';
import { Card, Loading, MoneyList, PageTitle, STATUS, StatusBadge, fmtDate, fmtDateTime, fmtMoney, inputCls, smallBtn, useAdmin } from './shared';

type Granted = { email: string; days: number; password: string | null; sent: boolean; created: boolean };

/** "Liberar acesso": cria a conta (se precisar) com acesso ativo, para teste, cortesia ou suporte. */
function GrantAccess({ onClose }: { onClose: () => void }) {
  const { refresh, notify, fail } = useAdmin();
  const [email, setEmail] = useState('');
  const [days, setDays] = useState(30);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<Granted | null>(null);
  const [copied, setCopied] = useState(false);
  const loginUrl = `${runtime().appUrl ?? window.location.origin}/pt-BR/login`;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const r = await admin.grantAccess(email.trim(), days);
      setDone({ email: email.trim().toLowerCase(), days: r.days, password: r.password, sent: r.sent, created: r.created });
      refresh();
    } catch (err) { notify(fail(err), 'bad'); }
    setBusy(false);
  };

  return (
    <Card title="Liberar acesso" className="mb-4" action={<button className="text-[13.5px] text-ink-2 underline underline-offset-2" onClick={onClose}>Fechar</button>}>
      {!done ? (
        <form onSubmit={submit} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_150px_auto] sm:items-end">
          <label className="block">
            <span className="text-[13px] font-medium text-ink-2">E-mail</span>
            <input type="email" required autoFocus value={email} onChange={(e) => setEmail(e.target.value)} placeholder="pessoa@exemplo.com" className={`${inputCls} mt-1.5`} />
          </label>
          <label className="block">
            <span className="text-[13px] font-medium text-ink-2">Acesso por</span>
            <select value={days} onChange={(e) => setDays(Number(e.target.value))} className={`${inputCls} mt-1.5`}>
              {[7, 30, 90, 365].map((d) => <option key={d} value={d}>{d} dias</option>)}
            </select>
          </label>
          <button className={`${smallBtn('primary')} h-11`} disabled={busy}>{busy ? 'Liberando…' : 'Liberar acesso'}</button>
          <p className="text-[12.5px] text-muted sm:col-span-3">Cria a conta se ela não existir, já com acesso ao app, sem cobrança. Conta nova recebe uma senha que aparece aqui uma vez (e vai por e-mail, se o HubMail estiver ligado).</p>
        </form>
      ) : (
        <div className="grid gap-3 text-[14px]">
          <p><strong className="font-semibold">Acesso liberado</strong> para {done.email} por {done.days} dias{done.created ? ' (conta nova)' : ''}.</p>
          {done.password ? (
            <>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-ink-2">Senha:</span>
                <code className="rounded-lg bg-soft px-3 py-1.5 font-mono text-[15px]">{done.password}</code>
                <button className={smallBtn()} onClick={() => { void navigator.clipboard?.writeText(done.password!); setCopied(true); }}>{copied ? 'Copiada' : 'Copiar'}</button>
              </div>
              <p className="text-[13px] text-warn">Anote agora: por segurança, essa senha não aparece de novo.{done.sent ? ' Ela também foi enviada por e-mail.' : ''}</p>
            </>
          ) : (
            <p className="text-[13px] text-ink-2">Essa conta já tinha senha, então ela continua a mesma. Se a pessoa não lembrar, abra o cliente e use "Enviar senha nova por e-mail".</p>
          )}
          <p className="text-[13px] text-ink-2">Entrar em: <a href={loginUrl} target="_blank" rel="noreferrer" className="font-mono text-ink">{loginUrl}</a></p>
          <div><button className={smallBtn()} onClick={() => { setDone(null); setEmail(''); setCopied(false); }}>Liberar outro</button></div>
        </div>
      )}
    </Card>
  );
}

type Filter = 'all' | SubStatus;

export function Customers() {
  const { customers } = useAdmin();
  const navigate = useNavigate();
  const [q, setQ] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [granting, setGranting] = useState(false);
  const all = useMemo(() => customers ?? [], [customers]);
  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: all.length, trial: 0, active: 0, canceled: 0, expired: 0 };
    for (const a of all) c[statusOf(a)]++;
    return c;
  }, [all]);
  if (!customers) return <><PageTitle title="Clientes" /><Loading /></>;

  const term = q.trim().toLowerCase();
  const list = all.filter((a) => (filter === 'all' || statusOf(a) === filter) && (!term || a.email.includes(term) || a.name.toLowerCase().includes(term) || a.subscription?.orderId?.toLowerCase().includes(term)));

  const exportCsv = () => {
    const head = ['email', 'nome', 'idioma', 'moeda', 'criado_em', 'status', 'qi', 'pedido', 'indicado_por', 'indicacoes'];
    const rows = list.map((a) => [a.email, a.name, a.lang, a.subscription?.currency ?? '', new Date(a.createdAt).toISOString(), statusOf(a), a.iqScore ?? '', a.subscription?.orderId ?? '', a.referredBy ?? '', a.referrals]);
    // Evita que planilhas executem fórmulas vindas de dados do cliente (=, +, -, @).
    const cell = (v: unknown) => { let s = String(v); if (/^[=+\-@]/.test(s)) s = `'${s}`; return `"${s.replace(/"/g, '""')}"`; };
    const csv = [head, ...rows].map((r) => r.map(cell).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([`﻿${csv}`], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `clientes-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageTitle title="Clientes" sub={`${all.length} contas`} right={
        <div className="flex gap-2">
          <button className={smallBtn('primary')} onClick={() => setGranting(true)}>Liberar acesso</button>
          <button className={smallBtn()} onClick={exportCsv} disabled={!list.length}>Exportar CSV</button>
        </div>
      } />
      {granting && <GrantAccess onClose={() => setGranting(false)} />}
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nome, e-mail ou pedido" aria-label="Buscar"
          className="h-11 w-full rounded-full bg-white px-5 outline-none ring-1 ring-inset ring-line focus:ring-2 focus:ring-brand lg:max-w-[340px]" />
        <div className="flex flex-wrap gap-1.5">
          {(['all', 'trial', 'active', 'canceled', 'expired'] as Filter[]).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-[13.5px] transition-colors ${filter === f ? 'bg-ink text-white' : 'bg-white text-ink-2 ring-1 ring-inset ring-line hover:text-ink'}`}>
              {f === 'all' ? 'Todos' : STATUS[f].label} <span className="ml-1 font-mono text-[11.5px] opacity-70">{counts[f]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-white ring-1 ring-inset ring-line">
        {list.length === 0 ? (
          <p className="p-6 text-[14px] text-ink-2">{all.length ? 'Nenhum cliente encontrado.' : 'Nenhum cliente ainda. Eles aparecem aqui assim que o Connect avisa a primeira compra.'}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-[14px]">
              <thead className="border-b border-line bg-soft/60 text-[12px] uppercase tracking-[0.06em] text-muted">
                <tr>
                  <th className="px-5 py-3 font-medium">Cliente</th>
                  <th className="px-3 py-3 font-medium">Desde</th>
                  <th className="px-3 py-3 font-medium">Assinatura</th>
                  <th className="px-3 py-3 font-medium">QI</th>
                  <th className="px-3 py-3 font-medium">Testes</th>
                  <th className="px-3 py-3 font-medium">Indicações</th>
                  <th className="px-5 py-3 font-medium">Pago até hoje (est.)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {list.map((a) => {
                  const paid: Partial<Record<string, number>> = {};
                  for (const c of chargesOf(a.subscription)) paid[c.currency] = (paid[c.currency] ?? 0) + c.amount;
                  return (
                    <tr key={a.id} onClick={() => navigate(`/admin/clientes/${a.id}`)} className="cursor-pointer transition-colors hover:bg-soft/60">
                      <td className="px-5 py-3">
                        <Link to={`/admin/clientes/${a.id}`} className="block text-ink no-underline">
                          <span className="block font-medium">{a.name || a.email.split('@')[0]}{wantsCancel(a) && <span className="ml-2 rounded bg-warn-50 px-1.5 py-px text-[11px] text-warn">pediu cancelamento</span>}</span>
                          <span className="block text-[12.5px] text-muted">{a.email}</span>
                        </Link>
                      </td>
                      <td className="px-3 py-3 text-[13px] text-ink-2">{fmtDate(a.createdAt)}</td>
                      <td className="px-3 py-3"><StatusBadge status={statusOf(a)} /></td>
                      <td className="px-3 py-3 font-mono">{a.iqScore ?? '—'}</td>
                      <td className="px-3 py-3 font-mono">{a.tests}</td>
                      <td className="px-3 py-3 font-mono">{a.referrals}</td>
                      <td className="px-5 py-3 font-mono text-[13px]"><MoneyList values={paid} /></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

// Títulos dos testes em português, carregados só quando o detalhe abre.
const testTitles = import.meta.glob<TestText>('../../content/tests/*/pt.ts', { import: 'default' });

function useTestTitles(ids: string[]) {
  const [titles, setTitles] = useState<Record<string, string>>({});
  const key = ids.join(',');
  useEffect(() => {
    let alive = true;
    Promise.all(ids.map(async (id) => [id, (await testTitles[`../../content/tests/${id}/pt.ts`]?.())?.title ?? id] as const))
      .then((pairs) => { if (alive) setTitles(Object.fromEntries(pairs)); });
    return () => { alive = false; };
  }, [key]); // eslint-disable-line react-hooks/exhaustive-deps
  return titles;
}

const Row = ({ k, children }: { k: string; children: React.ReactNode }) => (
  <div className="grid grid-cols-[130px_minmax(0,1fr)] gap-3 sm:grid-cols-[150px_minmax(0,1fr)]"><dt className="text-ink-2">{k}</dt><dd className="min-w-0 break-words">{children}</dd></div>
);

export function CustomerDetail() {
  const { refresh, notify, fail } = useAdmin();
  const navigate = useNavigate();
  const id = useParams().id ?? '';
  const [c, setC] = useState<CustomerFull | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const load = useCallback(() => { admin.get(id).then(setC).catch((e) => { fail(e); setC(null); }); }, [id, fail]);
  useEffect(load, [load]);
  const titles = useTestTitles(c ? Object.keys(c.account.tests) : []);

  if (c === undefined) return <Loading />;
  if (!c) {
    return (
      <Card>
        <p className="text-[14px] text-ink-2">Cliente não encontrado.</p>
        <Link to="/admin/clientes" className="mt-3 inline-block text-[14px] font-medium text-ink">← Voltar para clientes</Link>
      </Card>
    );
  }

  const act = async (action: CustomerAction, done: string, body?: Record<string, unknown>) => {
    setBusy(true);
    try {
      const r = await admin.act(c.id, action, body);
      notify(action === 'new-password' && r.sent === false ? 'Senha nova criada, mas o e-mail não está configurado (veja Integrações).' : done, action === 'new-password' && r.sent === false ? 'bad' : 'ok');
      load();
      refresh();
    } catch (e) { notify(fail(e), 'bad'); }
    setBusy(false);
  };

  const s = c.subscription;
  const st = statusOf(c);
  const a = c.account;
  const iq = a.iq?.finishedAt ? computeResult(a.iq) : null;
  const price = s ? CONFIG.pricing.currencies[s.currency] ?? CONFIG.pricing.currencies.USD : null;
  const charges = chargesOf(s);

  return (
    <>
      <Link to="/admin/clientes" className="mb-4 inline-flex text-[13.5px] text-ink-2 no-underline hover:text-ink">← Clientes</Link>
      <PageTitle title={c.name || c.email.split('@')[0]} sub={c.email} right={<StatusBadge status={st} />} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="grid content-start gap-6">
          <Card title="Assinatura">
            {s && price ? (
              <dl className="grid gap-2.5 text-[14px]">
                <Row k="Pedido no Connect">{s.orderId ? <span className="font-mono text-[13px]">{s.orderId}</span> : '—'}</Row>
                <Row k="Início">{fmtDate(s.startedAt)}</Row>
                <Row k="Fim do teste">{fmtDate(s.trialEndsAt)}</Row>
                {s.accessUntil && <Row k="Acesso até">{fmtDate(s.accessUntil)}</Row>}
                {(st === 'trial' || st === 'active') && <Row k="Próxima cobrança">{fmtDate(nextCharge(s))} · {fmtMoney(price.after, s.currency)}</Row>}
                {s.cancelRequestedAt && <Row k="Pediu cancelamento">{fmtDate(s.cancelRequestedAt)}</Row>}
                {s.canceledAt && <Row k="Cancelada em">{fmtDate(s.canceledAt)}</Row>}
                <Row k="Plano">{fmtMoney(price.today, s.currency)} por {CONFIG.pricing.trialDays} dias, depois {fmtMoney(price.after, s.currency)} a cada {CONFIG.pricing.periodDays} dias</Row>
              </dl>
            ) : <p className="text-[14px] text-ink-2">Sem assinatura.</p>}

            {wantsCancel(c) && (
              <p className="mt-4 rounded-2xl bg-warn-50 px-4 py-3 text-[13.5px] text-warn">Pediu para cancelar pelo app. Cancele no painel do Connect (pedido acima) e depois clique em "Marcar como cancelada".</p>
            )}
            <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
              {s && (st === 'trial' || st === 'active') && <button disabled={busy} className={smallBtn()} onClick={() => act('extend', 'Mais 7 dias de acesso.', { days: 7 })}>Dar mais 7 dias</button>}
              {s && (st === 'trial' || st === 'active') && <button disabled={busy} className={smallBtn()} onClick={() => { if (confirm(`Marcar a assinatura de ${c.email} como cancelada? A pessoa mantém o acesso até o fim do período. Lembre de cancelar também no Connect.`)) act('cancel', 'Assinatura marcada como cancelada.'); }}>Marcar como cancelada</button>}
              {s && st === 'canceled' && <button disabled={busy} className={smallBtn()} onClick={() => act('resume', 'Assinatura reativada.')}>Reativar</button>}
              {st === 'expired' && <button disabled={busy} className={smallBtn('primary')} onClick={() => { if (confirm(`Liberar 30 dias de acesso para ${c.email}, sem cobrança?`)) act('grant', 'Acesso liberado por 30 dias.', { days: 30 }); }}>Liberar 30 dias de acesso</button>}
            </div>
            <p className="mt-3 text-[12.5px] text-muted">Cobranças, reembolsos e cancelamentos de cartão são feitos no Connect. Ele avisa o site sozinho pelo webhook e a assinatura se atualiza aqui.</p>
          </Card>

          <Card title="Acesso à conta">
            <dl className="grid gap-2.5 text-[14px]">
              <Row k="Senha">{c.hasPassword ? 'Definida' : 'Ainda não'}</Row>
              <Row k="Google">{a.google ? a.google.email : 'Não conectado'}</Row>
              <Row k="E-mail de boas-vindas">{c.welcomeSentAt ? `Enviado em ${fmtDateTime(c.welcomeSentAt)}` : 'Não enviado'}</Row>
              <Row k="Idioma">{c.lang}</Row>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
              <button disabled={busy} className={smallBtn()} onClick={() => { if (confirm(`Criar uma senha nova para ${c.email} e enviar por e-mail? A senha atual deixa de funcionar e a pessoa sai de todos os aparelhos.`)) act('new-password', 'Senha nova enviada por e-mail.'); }}>Enviar senha nova por e-mail</button>
              <button disabled={busy} className={smallBtn()} onClick={() => act('logout-all', 'Desconectado de todos os aparelhos.')}>Desconectar de todos os aparelhos</button>
            </div>
            <p className="mt-3 text-[12.5px] text-muted">Por segurança, o painel nunca mostra a senha de ninguém.</p>
          </Card>

          {charges.length > 0 && (
            <Card title="Cobranças (estimadas)">
              <ul className="divide-y divide-line text-[14px]">
                {[...charges].reverse().map((ch) => (
                  <li key={ch.at} className="flex items-center justify-between gap-3 py-2.5">
                    <span>{ch.kind === 'trial' ? 'Período de teste' : 'Renovação'} <span className="ml-2 text-[12.5px] text-muted">{fmtDate(ch.at)}</span></span>
                    <span className="font-mono">{fmtMoney(ch.amount, ch.currency)}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <Card title="Indicações">
            <dl className="grid gap-2.5 text-[14px]">
              <Row k="Código"><span className="font-mono">{c.refCode}</span></Row>
              <Row k="Indicado por">{c.referredBy ? <span className="font-mono">{c.referredBy}</span> : '—'}</Row>
              <Row k="Indicou">{a.referrals.length} ({a.referrals.filter((r) => r.status === 'confirmed').length} confirmadas)</Row>
            </dl>
            {a.referrals.length > 0 && (
              <ul className="mt-4 divide-y divide-line border-t border-line text-[13.5px]">
                {a.referrals.map((r) => (
                  <li key={`${r.email}-${r.at}`} className="flex items-center justify-between gap-3 py-2">
                    <span className="truncate">{r.email}</span>
                    <span className="text-muted">{r.status === 'confirmed' ? 'Confirmada' : r.status === 'pending' ? 'No teste' : 'Cancelou no teste'}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        <div className="grid content-start gap-6">
          <Card title="Teste de QI">
            {iq ? (
              <div className="flex items-end gap-4">
                <div className="font-mono text-[44px] font-medium leading-none tracking-[-0.04em]">{iq.iq}</div>
                <div className="text-[13.5px] text-ink-2">Percentil {iq.percentile.toLocaleString('pt-BR')} · {iq.correct} de {iq.scored} acertos<br />{fmtDate(a.iq!.finishedAt!)}</div>
              </div>
            ) : <p className="text-[14px] text-ink-2">{c.iqScore ? `QI ${c.iqScore}` : 'Ainda não fez o teste.'}</p>}
          </Card>

          <Card title="Uso da área do cliente">
            <dl className="grid gap-2.5 text-[14px]">
              <div className="flex justify-between"><dt className="text-ink-2">Dias com atividade</dt><dd className="font-mono">{new Set(a.activity).size}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-2">Sequência atual</dt><dd className="font-mono">{streak(a)}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-2">Partidas de jogos</dt><dd className="font-mono">{Object.values(a.games).reduce((n, g) => n + g.plays, 0)}</dd></div>
              <div className="flex justify-between"><dt className="text-ink-2">Aulas concluídas</dt><dd className="font-mono">{Object.values(a.courses).reduce((n, cp) => n + cp.done.length, 0)}</dd></div>
            </dl>
            {Object.keys(a.tests).length > 0 && (
              <div className="mt-4 border-t border-line pt-4">
                <div className="mb-2 text-[12.5px] text-muted">Testes feitos</div>
                <ul className="grid gap-1.5 text-[13.5px]">
                  {Object.entries(a.tests).map(([tid, r]) => (
                    <li key={tid} className="flex justify-between gap-3"><span>{titles[tid] ?? tid}{r.alert && <span className="ml-2 rounded bg-bad-50 px-1.5 py-px text-[11px] text-bad">alerta</span>}</span><span className="text-muted">{fmtDate(r.completedAt)}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </Card>

          <Card title="Excluir conta">
            <p className="text-[13.5px] text-ink-2">Apaga a conta, os resultados e o progresso. Não cancela a cobrança no Connect. Não dá para desfazer.</p>
            <button disabled={busy} className={`${smallBtn('danger')} mt-4`} onClick={async () => {
              if (!confirm(`Excluir a conta ${c.email}? Não dá para desfazer.`)) return;
              try { await admin.remove(c.id); notify('Conta excluída.'); refresh(); navigate('/admin/clientes'); } catch (e) { notify(fail(e), 'bad'); }
            }}>Excluir conta</button>
          </Card>
        </div>
      </div>
    </>
  );
}
