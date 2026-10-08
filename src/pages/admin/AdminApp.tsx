// Painel de administração em /admin (só no endereço do app). Carregado sob demanda: não pesa no
// site dos clientes. Login com senha + verificação em duas etapas; a sessão é um cookie separado.
import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router';
import { CONFIG } from '../../config';
import { admin, adminAuth, type AdminMe, type Customer } from '../../lib/admin';
import { ApiError } from '../../lib/api';
import { runtime } from '../../lib/runtime';
import { Button } from '../../components/ui';
import { Overview } from './Overview';
import { CustomerDetail, Customers } from './Customers';
import { Payouts } from './Payouts';
import { AdminSettings } from './AdminSettings';
import { Integrations } from './Integrations';
import { Loading, errorText, inputCls, smallBtn, type AdminCtx } from './shared';

export default function AdminApp() {
  useEffect(() => { document.title = `Admin | ${CONFIG.brand}`; }, []);
  return (
    <Routes>
      <Route path="entrar" element={<AdminLogin />} />
      <Route element={<AdminLayout />}>
        <Route index element={<Overview />} />
        <Route path="clientes" element={<Customers />} />
        <Route path="clientes/:id" element={<CustomerDetail />} />
        <Route path="indicacoes" element={<Payouts />} />
        <Route path="integracoes" element={<Integrations />} />
        <Route path="config" element={<AdminSettings />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}

const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" className="size-[18px] flex-none" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const NAV = [
  { to: '/admin', label: 'Visão geral', end: true, icon: 'M4 13h6V4H4zM14 20h6v-9h-6zM14 4v4h6V4zM4 20h6v-4H4z' },
  { to: '/admin/clientes', label: 'Clientes', end: false, icon: 'M16 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM21 19v-1a4 4 0 0 0-3-3.85M15.5 3.15a3.5 3.5 0 0 1 0 6.7' },
  { to: '/admin/indicacoes', label: 'Indicações e saques', end: false, icon: 'M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7C10.5 4 7 4 7 6s3 1 5 1zM12 7c1.5-3 5-3 5-1s-3 1-5 1z' },
  { to: '/admin/integracoes', label: 'Integrações', end: false, icon: 'M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0zM12 16v5' },
  { to: '/admin/config', label: 'Conta e segurança', end: false, icon: 'M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6zM9 12l2 2 4-4' },
];

function AdminLayout() {
  const navigate = useNavigate();
  const [me, setMe] = useState<AdminMe | null | undefined>(undefined);
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const [listError, setListError] = useState('');
  const [toast, setToast] = useState<{ msg: string; tone: 'ok' | 'bad' } | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { adminAuth.me().then(setMe); }, []);
  const reloadMe = useCallback(() => { adminAuth.me().then((m) => { if (m) setMe(m); }); }, []);

  // Sessão expirada (12 h, ou 2 h sem uso) em qualquer chamada: volta para o login.
  const fail = useCallback((e: unknown) => {
    if (e instanceof ApiError && e.status === 401) setMe(null);
    return errorText(e);
  }, []);

  const refresh = useCallback(() => {
    admin.list().then((l) => { setCustomers(l); setListError(''); }).catch((e) => setListError(fail(e)));
  }, [fail]);
  useEffect(() => { if (me) refresh(); }, [me, refresh]);

  const notify = useCallback((msg: string, tone: 'ok' | 'bad' = 'ok') => {
    setToast({ msg, tone });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  if (me === undefined) return <div className="grid min-h-dvh place-items-center bg-soft"><Loading /></div>;
  if (!me) return <Navigate to="/admin/entrar" replace />;
  const ctx: AdminCtx = { me, customers, refresh, reloadMe, notify, fail };
  const siteUrl = runtime().siteUrl ?? '/';

  return (
    <div className="min-h-dvh bg-soft">
      <header className="sticky top-0 z-30 border-b border-line bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/admin" className="flex items-center gap-2 font-semibold tracking-[-0.02em] text-ink no-underline">
            <img src="/brand/logo-horizontal.svg" alt={CONFIG.brand} className="h-7 w-auto" />
            <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white">Admin</span>
          </Link>
          <div className="flex items-center gap-2 text-[13.5px]">
            <span className="hidden text-muted lg:inline">{me.email}</span>
            <a href={siteUrl} target="_blank" rel="noreferrer" className={smallBtn()}>Ver site</a>
            <button className={smallBtn()} onClick={async () => { await adminAuth.logout(); navigate('/admin/entrar', { replace: true }); }}>Sair</button>
          </div>
        </div>
        <nav className="mx-auto flex max-w-[1280px] gap-1 overflow-x-auto px-3 pb-2 md:hidden">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.end}
              className={({ isActive }) => `whitespace-nowrap rounded-full px-3.5 py-1.5 text-[13.5px] no-underline ${isActive ? 'bg-ink text-white' : 'text-ink-2'}`}>{n.label}</NavLink>
          ))}
        </nav>
      </header>

      <div className="mx-auto grid max-w-[1280px] gap-6 px-4 py-6 sm:px-6 md:grid-cols-[220px_minmax(0,1fr)] md:py-8">
        <aside className="hidden md:block">
          <nav className="sticky top-20 grid gap-1">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.end}
                className={({ isActive }) => `flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[14.5px] no-underline transition-colors ${isActive ? 'bg-white font-medium text-ink ring-1 ring-inset ring-line' : 'text-ink-2 hover:bg-white/60 hover:text-ink'}`}>
                <Icon d={n.icon} />{n.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <main className="min-w-0">
          {!me.totp && (
            <div className="mb-5 rounded-2xl bg-warn-50 px-4 py-3 text-[13.5px] text-warn">
              <strong className="font-semibold">Proteja o painel:</strong> ligue a verificação em duas etapas.{' '}
              <Link to="/admin/config" className="font-medium text-warn underline underline-offset-2">Ligar agora</Link>
            </div>
          )}
          {listError && (
            <div className="mb-5 rounded-2xl bg-bad-50 px-4 py-3 text-[13.5px] text-bad">
              {listError} <button className="ml-1 font-medium underline" onClick={refresh}>Tentar de novo</button>
            </div>
          )}
          <Outlet context={ctx} />
        </main>
      </div>

      {toast && (
        <div role="status" className={`fixed inset-x-4 bottom-4 z-50 mx-auto max-w-[420px] rounded-2xl px-4 py-3 text-center text-[14px] text-white shadow-lg ${toast.tone === 'ok' ? 'bg-ink' : 'bg-bad'}`}>{toast.msg}</div>
      )}
    </div>
  );
}

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [totp, setTotp] = useState('');
  const [needTotp, setNeedTotp] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    adminAuth.me().then((m) => { if (m) navigate('/admin', { replace: true }); else setChecked(true); });
  }, [navigate]);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setBusy(true);
    try {
      const r = await adminAuth.login(email, password, needTotp ? totp : undefined);
      if (r.needTotp) { setNeedTotp(true); setBusy(false); return; }
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(errorText(err));
      if (err instanceof ApiError && err.code === 'wrong_totp') setTotp('');
      setBusy(false);
    }
  };

  if (!checked) return <div className="grid min-h-dvh place-items-center bg-soft"><Loading /></div>;
  return (
    <div className="grid min-h-dvh place-items-center bg-soft px-4">
      <form onSubmit={submit} className="w-full max-w-[400px] rounded-3xl bg-white p-7 ring-1 ring-inset ring-line">
        <div className="flex items-center gap-2 font-semibold"><img src="/brand/logo-horizontal.svg" alt={CONFIG.brand} className="h-7 w-auto" />
          <span className="rounded-full bg-ink px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-white">Admin</span>
        </div>
        <h1 className="mt-6 text-[24px]">Entrar no painel</h1>
        {!needTotp ? (
          <>
            <label className="mt-5 block text-[13px] font-medium text-ink-2" htmlFor="adm-email">E-mail</label>
            <input id="adm-email" type="email" required autoFocus autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} className={`${inputCls} mt-1.5`} />
            <label className="mt-4 block text-[13px] font-medium text-ink-2" htmlFor="adm-pass">Senha</label>
            <input id="adm-pass" type="password" required autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${inputCls} mt-1.5`} />
          </>
        ) : (
          <>
            <p className="mt-2 text-[14.5px] text-ink-2">Digite o código de 6 dígitos do seu app autenticador.</p>
            <input inputMode="numeric" required autoFocus autoComplete="one-time-code" value={totp} onChange={(e) => setTotp(e.target.value.replace(/\D/g, '').slice(0, 6))} placeholder="000000"
              className={`${inputCls} mt-4 text-center font-mono tracking-[0.3em]`} aria-label="Código do app autenticador" />
          </>
        )}
        {error && <p role="alert" className="mt-3 text-[13.5px] text-bad">{error}</p>}
        <Button className="mt-5 w-full" disabled={busy}>{busy ? 'Entrando…' : 'Entrar'}</Button>
        {needTotp && (
          <button type="button" className="mt-3 w-full text-[13.5px] text-ink-2 underline underline-offset-2" onClick={() => { setNeedTotp(false); setTotp(''); setPassword(''); }}>Voltar</button>
        )}
      </form>
    </div>
  );
}
