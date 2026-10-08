// Página pública que o QR code do certificado abre: confere no servidor se o certificado existe e
// mostra só o que já está impresso nele (nome, QI, data e número). Nada de e-mail ou dado da conta.
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { api } from '../lib/api';
import { Aurora, ButtonLink, Container, Footer, SimpleHeader } from '../components/ui';

interface Cert { name: string; iq: number; date: number; id: string }

export function Verify() {
  const { m, path, date } = useI18n();
  const V = m.verify;
  const token = useParams().token ?? '';
  const [cert, setCert] = useState<Cert | null | undefined>(undefined);

  useEffect(() => { document.title = `${V.title} | ${CONFIG.brand}`; }, [V.title]);
  useEffect(() => {
    let alive = true;
    api<{ certificate: Cert }>(`/certificates/${encodeURIComponent(token)}`)
      .then((r) => { if (alive) setCert(r.certificate); })
      .catch(() => { if (alive) setCert(null); });
    return () => { alive = false; };
  }, [token]);

  return (
    <>
      <SimpleHeader />
      <main className="py-12 md:py-20">
        <Container width={560}>
          <p className="text-center font-mono text-[12px] uppercase tracking-[0.12em] text-muted">{V.title}</p>
          <Aurora className="mt-6">
            <div className="float-card p-7 text-center sm:p-9" aria-live="polite">
              {cert === undefined ? (
                <div className="py-10 text-ink-2">{V.checking}</div>
              ) : cert ? (
                <>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-good-50 text-good" aria-hidden="true">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17 19 7.5" /></svg>
                  </span>
                  <h1 className="mt-5 text-[26px] sm:text-[30px]">{V.valid}</h1>
                  <p className="mx-auto mt-2 max-w-[400px] text-[14.5px] text-ink-2">{V.validSub(CONFIG.brand)}</p>
                  <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-line text-left text-[14.5px] ring-1 ring-inset ring-line">
                    {([[V.name, cert.name], [V.iq, String(cert.iq)], [V.date, date(cert.date)], ...(cert.id ? [[V.id, cert.id]] : [])] as [string, string][]).map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-4 bg-white px-5 py-3.5">
                        <dt className="shrink-0 text-ink-2">{k}</dt>
                        <dd className={`min-w-0 break-words text-right font-medium ${k === V.iq ? 'font-mono text-[22px] tracking-[-0.02em]' : ''}`}>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </>
              ) : (
                <>
                  <span className="mx-auto grid size-14 place-items-center rounded-full bg-bad-50 text-bad" aria-hidden="true">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M7 7l10 10M17 7 7 17" /></svg>
                  </span>
                  <h1 className="mt-5 text-[26px] sm:text-[30px]">{V.invalid}</h1>
                  <p className="mx-auto mt-2 max-w-[400px] text-[14.5px] text-ink-2">{V.invalidSub}</p>
                </>
              )}
            </div>
          </Aurora>
          <div className="mt-8 text-center">
            <ButtonLink to={path()} variant="cta" size="lg">{V.cta}</ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
