import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BR, DE, ES, FR, ID, IT, JP, KR, NL, PL, TR, US } from 'country-flag-icons/react/3x2';
import { LOCALES, useI18n } from '../i18n';

const FLAGS: Record<string, typeof BR> = { BR, US, ES, FR, DE, IT, NL, PL, TR, ID, JP, KR };

export function Flag({ country, className = 'h-[14px] w-[21px]' }: { country: string; className?: string }) {
  const F = FLAGS[country];
  return F ? <F className={`flex-none rounded-[3px] ring-1 ring-black/10 ${className}`} aria-hidden="true" /> : null;
}

/** Botão com a bandeira do idioma atual; abre a lista de idiomas. */
export function LanguageSwitcher({ align = 'right', up = false }: { align?: 'left' | 'right'; up?: boolean }) {
  const { lang, info, m } = useI18n();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!root.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [open]);

  const choose = (code: string) => {
    setOpen(false);
    if (code === lang) return;
    navigate(pathname.replace(new RegExp(`^/${lang}`), `/${code}`) + search + hash);
  };

  return (
    <div ref={root} className="relative">
      <button onClick={() => setOpen((o) => !o)} aria-haspopup="menu" aria-expanded={open} aria-label={`${m.common.language}: ${info.label}`}
        className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-sm text-ink-2 transition-colors hover:bg-soft hover:text-ink">
        <Flag country={info.flag} />
        <span className="font-mono text-[12px] uppercase">{info.code.split('-')[0]}</span>
        <svg className={`size-3 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 4.5 6 7.5l3-3" /></svg>
      </button>
      {open && (
        <div role="menu" aria-label={m.common.language}
          className={`absolute z-50 max-h-[min(70vh,440px)] w-56 animate-fade overflow-y-auto rounded-2xl bg-white p-1.5 shadow-[0_12px_40px_rgb(14_17_22/0.12)] ring-1 ring-line ${align === 'right' ? 'right-0' : 'left-0'} ${up ? 'bottom-12' : 'top-12'}`}>
          {LOCALES.map((l) => (
            <button key={l.code} role="menuitemradio" aria-checked={l.code === lang} onClick={() => choose(l.code)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] transition-colors ${l.code === lang ? 'bg-soft font-medium' : 'hover:bg-soft'}`}>
              <Flag country={l.flag} />
              <span className="flex-1">{l.label}</span>
              {l.code === lang && <svg className="size-4 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
