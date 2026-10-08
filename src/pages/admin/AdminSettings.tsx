// Conta do admin e segurança: senha, verificação em duas etapas e registro de tudo que foi feito no painel.
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import qrcode from 'qrcode-generator';
import { CONFIG, type Currency } from '../../config';
import { admin, adminAuth, type AuditEntry } from '../../lib/admin';
import { Card, Loading, PageTitle, fmtDateTime, fmtMoney, inputCls, smallBtn, useAdmin } from './shared';

const CURRENCIES = Object.keys(CONFIG.pricing.currencies) as Currency[];

const ACTIONS: Record<string, string> = {
  'admin.login': 'Entrou no painel',
  'admin.login_failed': 'Tentativa de login errada',
  'admin.totp_failed': 'Código de duas etapas errado',
  'admin.password_change': 'Trocou a senha do painel',
  'admin.totp_enabled': 'Ligou a verificação em duas etapas',
  'admin.totp_disabled': 'Desligou a verificação em duas etapas',
  'customer.extend': 'Deu mais dias de acesso',
  'customer.cancel': 'Marcou assinatura como cancelada',
  'customer.resume': 'Reativou assinatura',
  'customer.grant': 'Liberou acesso',
  'customer.grant_access': 'Liberou acesso por e-mail',
  'customer.new-password': 'Enviou senha nova',
  'customer.logout-all': 'Desconectou cliente dos aparelhos',
  'customer.delete': 'Excluiu conta',
  'payout.paid': 'Marcou saque como pago',
  'payout.reject': 'Recusou saque',
  'integrations.update': 'Alterou integrações',
  'integrations.test-mail': 'Enviou e-mail de teste',
  'login.password': 'Cliente entrou com senha',
  'login.code': 'Cliente entrou com código',
  'login.google': 'Cliente entrou com Google',
  'purchase.claim': 'Cliente entrou depois da compra',
  'password.change': 'Cliente trocou a senha',
  'account.delete': 'Cliente excluiu a conta',
  'payout.request': 'Cliente pediu saque',
  'subscription.cancel_request': 'Cliente pediu cancelamento',
  'subscription.resume_request': 'Cliente desistiu de cancelar',
};

function QrSvg({ text }: { text: string }) {
  const svg = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    return qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
  }, [text]);
  return <div className="size-44 rounded-2xl bg-white p-1 ring-1 ring-inset ring-line [&>svg]:size-full" dangerouslySetInnerHTML={{ __html: svg }} />;
}

export function AdminSettings() {
  const { me, notify, fail, reloadMe } = useAdmin();
  const [entries, setEntries] = useState<AuditEntry[] | null>(null);
  useEffect(() => { admin.audit().then(setEntries).catch((e) => { fail(e); setEntries([]); }); }, [fail]);

  // ---- senha ----
  const [cur, setCur] = useState('');
  const [next, setNext] = useState('');
  const [busy, setBusy] = useState(false);
  const changePassword = async (e: FormEvent) => {
    e.preventDefault();
    if (next.length < 12) return notify('A senha nova precisa de pelo menos 12 caracteres.', 'bad');
    setBusy(true);
    try {
      await adminAuth.changePassword(cur, next);
      setCur(''); setNext('');
      notify('Senha trocada. Os outros aparelhos foram desconectados.');
    } catch (err) { notify(fail(err), 'bad'); }
    setBusy(false);
  };

  // ---- duas etapas ----
  const [setup, setSetup] = useState<{ secret: string; otpauth: string } | null>(null);
  const [code, setCode] = useState('');
  const [totpOn, setTotpOn] = useState(me.totp);
  const startTotp = async () => { try { setSetup(await adminAuth.totpSetup()); } catch (err) { notify(fail(err), 'bad'); } };
  const confirmTotp = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (totpOn) { await adminAuth.totpDisable(code); setTotpOn(false); notify('Verificação em duas etapas desligada.'); }
      else { await adminAuth.totpEnable(code); setTotpOn(true); setSetup(null); notify('Verificação em duas etapas ligada.'); }
      setCode('');
      reloadMe();
    } catch (err) { notify(fail(err), 'bad'); }
  };

  return (
    <>
      <PageTitle title="Conta e segurança" sub={me.email} />

      <div className="grid gap-6 xl:grid-cols-2">
        <Card title="Verificação em duas etapas" action={<span className={`rounded-full px-2.5 py-0.5 text-[12px] font-medium ${totpOn ? 'bg-good-50 text-good' : 'bg-warn-50 text-warn'}`}>{totpOn ? 'Ligada' : 'Desligada'}</span>}>
          <p className="text-[13.5px] text-ink-2">Além da senha, o login pede um código do app autenticador do seu celular (Google Authenticator, Microsoft Authenticator, 1Password…). Mesmo que alguém descubra a senha, não entra.</p>
          {!totpOn && !setup && <button className={`${smallBtn('primary')} mt-4`} onClick={startTotp}>Ligar agora</button>}
          {!totpOn && setup && (
            <div className="mt-4 grid gap-4 sm:grid-cols-[auto_minmax(0,1fr)]">
              <QrSvg text={setup.otpauth} />
              <div className="text-[13.5px] text-ink-2">
                <p>1. No app autenticador, leia o QR code.</p>
                <p className="mt-2">Não dá para ler? Digite esta chave:</p>
                <code className="mt-1 block break-all rounded-xl bg-soft px-3 py-2 font-mono text-[12.5px] text-ink">{setup.secret}</code>
                <p className="mt-3">2. Digite o código de 6 dígitos que aparecer:</p>
              </div>
            </div>
          )}
          {(totpOn || setup) && (
            <form onSubmit={confirmTotp} className="mt-4 flex gap-2">
              <input inputMode="numeric" autoComplete="one-time-code" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="000000" aria-label="Código do app autenticador"
                className={`${inputCls} max-w-[160px] text-center font-mono tracking-[0.3em]`} />
              <button className={smallBtn(totpOn ? 'danger' : 'primary')} disabled={code.length !== 6}>{totpOn ? 'Desligar' : 'Confirmar'}</button>
            </form>
          )}
        </Card>

        <Card title="Trocar senha do painel">
          <form onSubmit={changePassword} className="grid gap-3">
            <input type="password" autoComplete="current-password" required value={cur} onChange={(e) => setCur(e.target.value)} placeholder="Senha atual" aria-label="Senha atual" className={inputCls} />
            <input type="password" autoComplete="new-password" required minLength={12} value={next} onChange={(e) => setNext(e.target.value)} placeholder="Senha nova (mínimo 12 caracteres)" aria-label="Senha nova" className={inputCls} />
            <div className="flex justify-end"><button className={smallBtn('primary')} disabled={busy}>Trocar senha</button></div>
          </form>
          <p className="mt-3 text-[12.5px] text-muted">5 senhas erradas seguidas bloqueiam o login por 30 minutos. A sessão do painel expira em 12 horas (ou 2 horas sem uso).</p>
        </Card>

        <Card title="Registro de ações" className="xl:col-span-2">
          {!entries ? <Loading /> : entries.length === 0 ? <p className="text-[14px] text-ink-2">Nada registrado ainda.</p> : (
            <div className="max-h-[420px] overflow-auto">
              <table className="w-full min-w-[600px] text-left text-[13.5px]">
                <thead className="sticky top-0 bg-white text-[12px] uppercase tracking-[0.06em] text-muted"><tr><th className="py-2 font-medium">Quando</th><th className="py-2 font-medium">Quem</th><th className="py-2 font-medium">O quê</th><th className="py-2 font-medium">Alvo</th><th className="py-2 font-medium">IP</th></tr></thead>
                <tbody className="divide-y divide-line">
                  {entries.map((e, i) => (
                    <tr key={i} className={e.action.includes('failed') ? 'text-bad' : ''}>
                      <td className="whitespace-nowrap py-2 pr-3 text-muted">{fmtDateTime(e.at)}</td>
                      <td className="py-2 pr-3">{e.actor ?? '—'}</td>
                      <td className="py-2 pr-3">{ACTIONS[e.action] ?? e.action}</td>
                      <td className="max-w-[220px] truncate py-2 pr-3 text-ink-2">{e.target ?? ''}</td>
                      <td className="py-2 font-mono text-[12px] text-muted">{e.ip ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        <Card title="Preços (referência)">
          <p className="mb-3 text-[13px] text-ink-2">Cobrado em {CONFIG.pricing.chargeCurrency ?? 'moeda local'}: teste de {CONFIG.pricing.trialDays} dias, depois renovação a cada {CONFIG.pricing.periodDays} dias. O preço de verdade é o do produto no Connect.</p>
          <p className="font-mono text-[14px]">{fmtMoney(CONFIG.pricing.currencies.USD.today, 'USD')} hoje · {fmtMoney(CONFIG.pricing.currencies.USD.after, 'USD')} a cada {CONFIG.pricing.periodDays} dias</p>
        </Card>

        <Card title="Programa de indicação">
          <p className="mb-3 text-[13px] text-ink-2">{CONFIG.referral.enabled ? 'Ligado.' : 'Desligado.'} A moeda segue o país de quem indica. Pix só para o Brasil.</p>
          <table className="w-full text-left text-[13.5px]">
            <thead className="text-[12px] uppercase tracking-[0.06em] text-muted"><tr><th className="py-1.5 font-medium">Moeda</th><th className="py-1.5 font-medium">Por indicação</th><th className="py-1.5 font-medium">Saque mínimo</th></tr></thead>
            <tbody className="divide-y divide-line font-mono text-[12.5px]">
              {CURRENCIES.map((c) => (
                <tr key={c}><td className="py-1.5">{c}</td><td className="py-1.5">{fmtMoney(CONFIG.referral.rewards[c], c)}</td><td className="py-1.5">{fmtMoney(CONFIG.referral.minPayout[c], c)}</td></tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
}
