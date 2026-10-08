import { type ComponentProps, type ReactNode, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

// ---------- botões ----------

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'cta';
type Size = 'sm' | 'md' | 'lg';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-[#2a303c] disabled:bg-[#c3c7d0] disabled:cursor-not-allowed',
  secondary: 'bg-white text-ink ring-1 ring-inset ring-line hover:ring-[#c9cdd6] hover:bg-soft/60',
  ghost: 'text-ink hover:bg-soft',
  light: 'bg-white text-ink hover:bg-soft',
  cta: 'bg-cta text-white shadow-[0_8px_20px_-8px_rgba(11,138,66,0.55)] hover:bg-cta-600 disabled:bg-[#c3c7d0] disabled:shadow-none disabled:cursor-not-allowed',
};
const SIZES: Record<Size, string> = { sm: 'h-10 px-4 text-sm', md: 'h-12 px-6 text-[15px]', lg: 'h-14 px-8 text-base' };

export const btn = (variant: Variant = 'primary', size: Size = 'md', extra = '') =>
  `inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium no-underline transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${extra}`;

export function Button({ variant, size, className = '', ...rest }: ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  return <button className={btn(variant, size, className)} {...rest} />;
}

export function ButtonLink({ variant, size, className = '', ...rest }: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return <Link className={btn(variant, size, className)} {...rest} />;
}

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

// ---------- marca ----------

/** Marca (cérebro com lâmpada), em public/brand/mark.svg. */
export function LogoMark({ className = 'h-7 w-auto' }: { className?: string }) {
  return <img src="/brand/mark.svg" alt="" width={1040} height={876} className={className} decoding="async" />;
}

/** Logo horizontal (marca + nome, "AI" em verde-água): public/brand/logo-horizontal.svg. */
export function Logo({ to }: { to?: string }) {
  const { path } = useI18n();
  return (
    <Link to={to ?? path()} className="inline-flex items-center no-underline" aria-label={CONFIG.brand}>
      <img src="/brand/logo-horizontal.svg" alt={CONFIG.brand} width={3550} height={876} className="h-[30px] w-auto sm:h-8" decoding="async" />
    </Link>
  );
}

// ---------- layout ----------

/** Largura máxima vem por `width` (e não por className) para não conflitar com a classe padrão. */
export const Container = ({ className = '', width = 1120, children }: { className?: string; width?: number; children: ReactNode }) => (
  <div className={`mx-auto w-full px-5 sm:px-8 ${className}`} style={{ maxWidth: width + 64 }}>{children}</div>
);

/** Rótulo pequeno em fonte mono, usado para nomear blocos e dados. */
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-muted ${className}`}>{children}</div>;
}

export function Check() {
  return (
    <svg viewBox="0 0 24 24" className="mt-[3px] size-[18px] flex-none" fill="none" stroke="#2d5bff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
  );
}

export function Checks({ items, className = '' }: { items: ReactNode[]; className?: string }) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((it, i) => <li key={i} className="flex items-start gap-3 text-ink-2"><Check />{it}</li>)}
    </ul>
  );
}

/** Fundo pastel animado (aurora) para emoldurar cartões brancos. */
export function Aurora({ className = '', children }: { className?: string; children: ReactNode }) {
  return <div className={`aurora rounded-[28px] p-3 sm:p-7 ${className}`}>{children}</div>;
}

/** Cartão branco sobre a aurora: o padrão das ilustrações e prévias do relatório. */
export function Panel({ label, className = '', children }: { label?: string; className?: string; children: ReactNode }) {
  return (
    <Aurora className={className}>
      <div className="float-card p-5 sm:p-6">
        {label && <Label className="mb-5">{label}</Label>}
        {children}
      </div>
    </Aurora>
  );
}

export function Stat({ value, label, tone = 'white', className = '' }: { value: ReactNode; label: string; tone?: 'white' | 'soft'; className?: string }) {
  return (
    <div className={`rounded-2xl p-4 ${tone === 'soft' ? 'bg-soft' : 'bg-white'} ${className}`}>
      <div className="font-mono text-[22px] font-medium tracking-[-0.02em] text-ink">{value}</div>
      <div className="mt-0.5 text-[13px] text-muted">{label}</div>
    </div>
  );
}

export function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="mx-auto max-w-[720px] border-t border-line">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-medium [&::-webkit-details-marker]:hidden">
            {it.q}
            <svg className="size-4 flex-none text-muted transition-transform duration-200 group-open:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
          </summary>
          <p className="max-w-[640px] pb-6 text-ink-2">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

// ---------- utilidades ----------

/** Fica true quando o elemento entra na tela (para animar só quando visível). */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (!('IntersectionObserver' in window)) { setSeen(true); return; }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(el);
    return () => io.disconnect();
  }, [seen, threshold]);
  return [ref, seen] as const;
}

export function Disclaimer({ className = '' }: { className?: string }) {
  const { m } = useI18n();
  return <p className={`text-[13px] leading-relaxed text-muted ${className}`}>{m.common.disclaimer}</p>;
}

export function Footer() {
  const { m, path } = useI18n();
  return (
    <footer className="border-t border-line py-12 text-sm text-muted">
      <Container className="grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
        <div className="grid max-w-[520px] gap-4">
          <Logo />
          <p className="text-[13px] leading-relaxed">{m.common.disclaimer}</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-ink-2">
          <Link to={path('/terms')} className="no-underline hover:text-ink">{m.common.terms}</Link>
          <Link to={path('/privacy')} className="no-underline hover:text-ink">{m.common.privacy}</Link>
          <a href={`mailto:${CONFIG.company.contactEmail}`} className="no-underline hover:text-ink">{m.common.contact}</a>
        </div>
        <div className="flex items-center justify-between gap-4 md:col-span-2">
          <p className="text-xs leading-relaxed">
            <span className="font-mono">© {new Date().getFullYear()} {CONFIG.brand}</span>
            <span className="block text-muted">{CONFIG.company.name} · {CONFIG.company.address}</span>
          </p>
          <LanguageSwitcher up />
        </div>
      </Container>
    </footer>
  );
}

export function Modal({ children, labelledBy }: { children: ReactNode; labelledBy?: string }) {
  return (
    <div className="fixed inset-0 z-50 grid animate-fade place-items-center bg-ink/40 p-5 backdrop-blur-[3px]">
      <div role="dialog" aria-modal="true" aria-labelledby={labelledBy} className="w-full max-w-[400px] animate-in rounded-3xl bg-white p-7 text-center">
        {children}
      </div>
    </div>
  );
}

/** Cabeçalho simples (só a marca), usado nas telas do funil. */
export function SimpleHeader({ right }: { right?: ReactNode }) {
  return (
    <header className="border-b border-line bg-white">
      <Container className="flex h-16 items-center justify-between gap-4"><Logo />{right}</Container>
    </header>
  );
}
