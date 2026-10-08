import { useEffect } from 'react';
import { CONFIG } from '../config';
import { runtime } from '../lib/runtime';
import { useI18n } from '../i18n';
import { Container, Footer, SimpleHeader } from '../components/ui';

// Modelos para revisar com um advogado antes de publicar. Os trechos entre [colchetes] precisam ser preenchidos.
const company = `${CONFIG.company.name}, ${CONFIG.company.address}. ${CONFIG.company.contactEmail}`;

export function Legal({ kind }: { kind: 'terms' | 'privacy' }) {
  const { m, price } = useI18n();
  const doc = m.legal[kind];
  const sections = kind === 'terms'
    ? m.legal.terms.sections({ brand: CONFIG.brand, today: price.today, days: CONFIG.pricing.trialDays, after: price.after, period: price.period, email: runtime().supportEmail, company })
    : m.legal.privacy.sections({ email: runtime().supportEmail, company });

  useEffect(() => { document.title = `${doc.title} | ${CONFIG.brand}`; }, [doc.title]);

  return (
    <>
      <SimpleHeader />
      <main className="py-16 md:py-20">
        <Container width={720}>
          <h1 className="mb-12 text-[36px] sm:text-[44px]">{doc.title}</h1>
          {sections.map(([h, p]) => (
            <section key={h} className="border-t border-line py-7">
              <h2 className="mb-2 text-lg">{h}</h2>
              <p className="text-ink-2">{p}</p>
            </section>
          ))}
        </Container>
      </main>
      <Footer />
    </>
  );
}
