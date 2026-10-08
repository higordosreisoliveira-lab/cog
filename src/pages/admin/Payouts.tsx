import { useState } from 'react';
import { Link } from 'react-router';
import { admin } from '../../lib/admin';
import { Card, Loading, PageTitle, fmtDate, fmtMoney, smallBtn, useAdmin } from './shared';

export function Payouts() {
  const { customers, refresh, notify, fail } = useAdmin();
  const [busy, setBusy] = useState<string | null>(null);
  if (!customers) return <><PageTitle title="Indicações e saques" /><Loading /></>;

  const payouts = customers.flatMap((c) => c.payouts.map((p) => ({ ...p, customerId: c.id, email: c.email, name: c.name || c.email.split('@')[0] }))).sort((x, y) => y.at - x.at);
  const pending = payouts.filter((p) => p.status === 'requested');
  const paid = payouts.filter((p) => p.status === 'paid');
  const ranking = customers.filter((c) => c.referrals > 0).sort((x, y) => y.referrals - x.referrals).slice(0, 10);

  const mark = async (id: string, action: 'paid' | 'reject') => {
    setBusy(id);
    try {
      await admin.payout(id, action);
      notify(action === 'paid' ? 'Saque marcado como pago.' : 'Saque recusado. As indicações voltaram ao saldo.');
      refresh();
    } catch (e) { notify(fail(e), 'bad'); }
    setBusy(null);
  };

  return (
    <>
      <PageTitle title="Indicações e saques" sub="Pedidos de saque do programa de indicação e quem mais indica." />

      <Card title={`Saques para pagar (${pending.length})`}>
        {pending.length === 0 ? (
          <p className="text-[14px] text-ink-2">Nenhum saque pendente.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-[14px]">
              <thead className="text-[12px] uppercase tracking-[0.06em] text-muted">
                <tr><th className="py-2 font-medium">Cliente</th><th className="py-2 font-medium">Valor</th><th className="py-2 font-medium">Para</th><th className="py-2 font-medium">Pedido em</th><th className="py-2" /></tr>
              </thead>
              <tbody className="divide-y divide-line">
                {pending.map((p) => (
                  <tr key={p.id}>
                    <td className="py-3"><Link to={`/admin/clientes/${p.customerId}`} className="text-ink">{p.name}</Link><div className="text-[12.5px] text-muted">{p.email}</div></td>
                    <td className="py-3 font-mono">{fmtMoney(p.amount, p.currency)}<div className="text-[12px] text-muted">{p.referrals} {p.referrals === 1 ? 'indicação' : 'indicações'}</div></td>
                    <td className="py-3"><span className="text-[12.5px] text-muted">{p.method === 'pix' ? 'Pix' : 'PayPal'}</span><div className="font-mono text-[13px]">{p.dest}</div></td>
                    <td className="py-3 text-[13px] text-ink-2">{fmtDate(p.at)}</td>
                    <td className="py-3">
                      <div className="flex justify-end gap-2">
                        <button disabled={busy === p.id} className={smallBtn('primary')} onClick={() => { if (confirm(`Confirmar que você já pagou ${fmtMoney(p.amount, p.currency)} para ${p.email}?`)) mark(p.id!, 'paid'); }}>Marcar como pago</button>
                        <button disabled={busy === p.id} className={smallBtn()} onClick={() => { if (confirm('Recusar este saque? As indicações voltam para o saldo da pessoa.')) mark(p.id!, 'reject'); }}>Recusar</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-4 text-[12.5px] text-muted">O pagamento em si (Pix ou PayPal) é feito fora do painel. Depois de pagar, marque aqui para a pessoa ver o saque como pago.</p>
      </Card>

      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <Card title="Quem mais indica">
          {ranking.length === 0 ? <p className="text-[14px] text-ink-2">Ninguém indicou ainda.</p> : (
            <ol className="divide-y divide-line text-[14px]">
              {ranking.map((c, i) => (
                <li key={c.id} className="flex items-center gap-3 py-2.5">
                  <span className="w-5 font-mono text-[12px] text-muted">{i + 1}</span>
                  <Link to={`/admin/clientes/${c.id}`} className="min-w-0 flex-1 truncate text-ink">{c.name || c.email.split('@')[0]} <span className="text-[12.5px] text-muted">{c.email}</span></Link>
                  <span className="font-mono text-[13px]">{c.referrals}</span>
                </li>
              ))}
            </ol>
          )}
          <p className="mt-3 text-[12.5px] text-muted">Número de pessoas indicadas. Abra o cliente para ver quais já foram confirmadas.</p>
        </Card>

        <Card title="Saques pagos">
          {paid.length === 0 ? <p className="text-[14px] text-ink-2">Nenhum saque pago ainda.</p> : (
            <ul className="divide-y divide-line text-[14px]">
              {paid.map((p) => (
                <li key={p.id} className="flex items-center justify-between gap-3 py-2.5">
                  <span className="min-w-0 truncate">{p.name} <span className="text-[12.5px] text-muted">{fmtDate(p.at)}</span></span>
                  <span className="font-mono">{fmtMoney(p.amount, p.currency)}</span>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </>
  );
}
