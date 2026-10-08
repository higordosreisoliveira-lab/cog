import { Suspense, createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { Navigate, NavLink, Outlet, useLocation, useNavigate } from 'react-router';
import { CONFIG } from '../../config';
import { runtime } from '../../lib/runtime';
import { useI18n } from '../../i18n';
import { useAppMessages } from '../../i18n/lazy';
import type { AppMessages } from '../../i18n/app/pt';
import { account, hasAccess, welcome, type Account } from '../../lib/account';
import { LanguageSwitcher } from '../../components/LanguageSwitcher';
import { ButtonLink, Container, Logo } from '../../components/ui';

interface AppCtxValue {
  user: Account;
  setUser: (a: Account | null) => void;
  am: AppMessages;
}

const AppCtx = createContext<AppCtxValue | null>(null);

export function useApp(): AppCtxValue {
  const v = useContext(AppCtx);
  if (!v) throw new Error('useApp fora do AppLayout');
  return v;
}

// ---------- ícones ----------

const Icon = ({ d, className = 'size-5' }: { d: string; className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
);
const ICONS = {
  home: 'M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z',
  games: 'M7.5 7.5h9a4.5 4.5 0 0 1 4.5 4.5v1.75a3.25 3.25 0 0 1-5.9 1.9l-.85-1.15h-4.5l-.85 1.15A3.25 3.25 0 0 1 3 13.75V12a4.5 4.5 0 0 1 4.5-4.5zM8 10.5v3M6.5 12h3M15.5 11h.01M17.5 13h.01',
  courses: 'M12 6.75C10.6 5.6 8.6 5 4 5v13.25c4.6 0 6.6.6 8 1.75 1.4-1.15 3.4-1.75 8-1.75V5c-4.6 0-6.6.6-8 1.75zM12 6.75V20',
  tests: 'M9 4h6v3H9zM7 5.5H5.5v14.5h13V5.5H17M8.5 12l2 2 4-4',
  gift: 'M4 11h16v9H4zM3 7h18v4H3zM12 7v13M12 7C10.5 4 7 4 7 6s3 1 5 1zM12 7c1.5-3 5-3 5-1s-3 1-5 1z',
};

/** Atalho fixo no topo para o programa de indicação, com o valor por amigo na moeda da assinatura. */
function ReferralPill({ am }: { am: AppMessages }) {
  const { path, info } = useI18n();
  if (!CONFIG.referral.enabled) return null;
  const cur = info.currency; // moeda do país/idioma da pessoa
  const n = CONFIG.referral.rewards[cur];
  const reward = new Intl.NumberFormat(info.intl, { style: 'currency', currency: cur, maximumFractionDigits: Number.isInteger(n) ? 0 : 2 }).format(n);
  const label = am.referral.headerCta(reward);
  return (
    <NavLink to={path('/app/referrals')} aria-label={label} title={label}
      className={({ isActive }) => `inline-flex h-9 items-center gap-1.5 whitespace-nowrap rounded-full pl-2.5 pr-3 text-[13.5px] font-medium no-underline transition-colors ${isActive ? 'bg-brand text-white' : 'bg-brand-50 text-brand hover:bg-brand hover:text-white'}`}>
      <svg viewBox="0 0 24 24" className="size-[18px] flex-none" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICONS.gift} /></svg>
      <span className="lg:hidden">+{reward}</span>
      <span className="hidden lg:inline">{label}</span>
    </NavLink>
  );
}

function NavItems({ am, mobile = false }: { am: AppMessages; mobile?: boolean }) {
  const { path } = useI18n();
  const items = [
    { to: path('/app'), label: am.nav.home, icon: ICONS.home, end: true },
    { to: path('/app/games'), label: am.nav.games, icon: ICONS.games, end: false },
    { to: path('/app/courses'), label: am.nav.courses, icon: ICONS.courses, end: false },
    { to: path('/app/tests'), label: am.nav.tests, icon: ICONS.tests, end: false },
  ];
  if (mobile) {
    return (
      <>
        {items.map((it) => (
          <NavLink key={it.to} to={it.to} end={it.end}
            className={({ isActive }) => `flex flex-1 flex-col items-center gap-1 py-2 text-[11px] no-underline ${isActive ? 'text-ink' : 'text-muted'}`}>
            <Icon d={it.icon} />{it.label}
          </NavLink>
        ))}
      </>
    );
  }
  return (
    <>
      {items.map((it) => (
        <NavLink key={it.to} to={it.to} end={it.end}
          className={({ isActive }) => `group inline-flex items-center gap-2 rounded-full py-2 pl-3 pr-3.5 text-[15px] no-underline transition-colors ${isActive ? 'active bg-soft text-ink' : 'text-ink-2 hover:text-ink'}`}>
          <Icon d={it.icon} className="size-[18px] flex-none text-muted transition-colors group-hover:text-ink group-[.active]:text-brand" />
          {it.label}
        </NavLink>
      ))}
    </>
  );
}

/** Depois da compra: avisa que a conta está pronta e que a senha foi para o e-mail. Some ao fechar. */
function WelcomeBanner({ user, am }: { user: Account; am: AppMessages }) {
  const [w, setW] = useState(() => welcome.get());
  if (!w || w.email !== user.email) return null;
  const A = am.access;
  return (
    <Container className="pt-6 print:hidden">
      <div role="status" className="flex flex-col gap-4 rounded-3xl bg-good-50 p-5 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        <div className="min-w-0">
          <p className="font-semibold text-good">✓ {A.readyTitle}</p>
          <p className="mt-1.5 text-[14.5px] text-ink-2">{A.readyText(w.email)}</p>
          {w.password && <p className="mt-3 rounded-xl bg-white px-3.5 py-2.5 text-[13.5px] text-warn ring-1 ring-inset ring-warn/20">{A.readyDemo(w.password)}</p>}
        </div>
        <button onClick={() => { welcome.dismiss(); setW(null); }} className="flex-none self-start rounded-full bg-white px-4 py-2 text-[13.5px] font-medium ring-1 ring-inset ring-line hover:bg-soft">{A.gotIt}</button>
      </div>
    </Container>
  );
}

function ProfileMenu({ user, am }: { user: Account; am: AppMessages }) {
  const { path } = useI18n();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);
  const initials = (user.name || user.email).slice(0, 2).toUpperCase();
  const item = 'block w-full rounded-xl px-3 py-2.5 text-left text-[15px] no-underline transition-colors hover:bg-soft';
  return (
    <div ref={root} className="relative">
      <button onClick={() => setOpen((o) => !o)} aria-haspopup="menu" aria-expanded={open} aria-label={am.nav.account}
        className="grid size-10 place-items-center rounded-full bg-ink font-mono text-[12px] text-white transition-opacity hover:opacity-85">
        {initials}
      </button>
      {open && (
        <div role="menu" className="absolute right-0 top-12 z-50 w-64 animate-fade rounded-2xl bg-white p-1.5 shadow-[0_12px_40px_rgb(14_17_22/0.12)] ring-1 ring-line">
          <div className="border-b border-line px-3 pb-3 pt-2">
            <div className="truncate font-medium">{user.name}</div>
            <div className="truncate font-mono text-[12px] text-muted">{user.email}</div>
          </div>
          <div className="pt-1.5">
            <NavLink role="menuitem" to={path('/app/report')} className={item} onClick={() => setOpen(false)}>{am.nav.report}</NavLink>
            <NavLink role="menuitem" to={path('/app/referrals')} className={item} onClick={() => setOpen(false)}>{am.referral.nav}</NavLink>
            <NavLink role="menuitem" to={path('/app/settings')} className={item} onClick={() => setOpen(false)}>{am.nav.settings}</NavLink>
            <a role="menuitem" href={`mailto:${runtime().supportEmail}`} className={item}>{am.nav.support}</a>
            <button role="menuitem" className={`${item} text-bad`} onClick={async () => { await account.logout(); navigate(path()); }}>{am.nav.logout}</button>
          </div>
        </div>
      )}
    </div>
  );
}

function Expired({ am }: { am: AppMessages }) {
  const { path } = useI18n();
  return (
    <Container width={560} className="py-24 text-center">
      <h1 className="text-[32px]">{am.expired.title}</h1>
      <p className="mx-auto mt-4 max-w-[440px] text-ink-2">{am.expired.text}</p>
      <ButtonLink to={path('/checkout')} size="lg" className="mt-8">{am.expired.cta}</ButtonLink>
    </Container>
  );
}

/** Rota /:lang/app — exige login e fornece usuário e textos para as páginas internas. */
export function AppLayout() {
  const { path } = useI18n();
  const am = useAppMessages();
  const { pathname } = useLocation();
  const [user, setUser] = useState<Account | null | undefined>(undefined);
  useEffect(() => { account.me().then(setUser); }, []);

  if (user === undefined || !am) return <div className="min-h-dvh" />;
  if (!user) return <Navigate to={path(`/login?next=${encodeURIComponent(pathname)}`)} replace />;
  const blocked = !hasAccess(user) && !pathname.endsWith('/settings');

  return (
    <AppCtx.Provider value={{ user, setUser, am }}>
      <header className="sticky top-0 z-30 border-b border-line bg-white/85 backdrop-blur-md print:hidden">
        <Container className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <Logo to={path('/app')} />
            <nav className="hidden items-center gap-1 md:flex"><NavItems am={am} /></nav>
          </div>
          <div className="flex items-center gap-2">
            <ReferralPill am={am} />
            <LanguageSwitcher />
            <ProfileMenu user={user} am={am} />
          </div>
        </Container>
      </header>
      <main className="min-h-[70vh] pb-28 md:pb-20">
        <WelcomeBanner user={user} am={am} />
        {blocked ? <Expired am={am} /> : <Suspense fallback={<div className="min-h-[60vh]" />}><Outlet /></Suspense>}
      </main>
      <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-line bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md md:hidden print:hidden">
        <NavItems am={am} mobile />
      </nav>
    </AppCtx.Provider>
  );
}

/** Cabeçalho de página interna: título, subtítulo e ação opcional à direita. */
export function PageHead({ title, sub, back, right }: { title: ReactNode; sub?: ReactNode; back?: { to: string; label: string }; right?: ReactNode }) {
  return (
    <div className="pb-8 pt-10 md:pt-14">
      {back && (
        <NavLink to={back.to} className="mb-5 inline-flex items-center gap-1.5 text-sm text-ink-2 no-underline hover:text-ink">
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
          {back.label}
        </NavLink>
      )}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[32px] sm:text-[40px]">{title}</h1>
          {sub && <p className="mt-2 max-w-[620px] text-ink-2">{sub}</p>}
        </div>
        {right}
      </div>
    </div>
  );
}
