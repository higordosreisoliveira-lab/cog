import { type ReactNode, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { CONFIG } from '../config';
import { runtime } from '../lib/runtime';
import { useI18n } from '../i18n';
import { PUZZLES, matrixOptions } from '../lib/matrices';
import { track } from '../lib/track';
import { hadShell } from '../lib/shell';
import { MatrixCell } from '../components/MatrixCell';
import { CertificateCanvas } from '../components/CertificateCanvas';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { BellCurve, Room, Ring, domainTag } from '../components/charts';
import { Arrow, Aurora, ButtonLink, Checks, Container, Faq, Footer, Label, Logo, Panel, Stat } from '../components/ui';

const SAMPLE = { iq: 118, pct: 88, domains: { logic: 72, visual: 84, numeric: 61, memory: 90, speed: 47 } };
// Perguntas do FAQ sobre assinatura e cancelamento (posições em m.faq). Ficam só no checkout:
// a página inicial não fala de preço; a pessoa conhece a assinatura depois de fazer o teste.
const BILLING_FAQ = [2, 3];
const LETTERS = 'ABCDEF';
const start = () => track('StartTest');

function Header() {
  const { m, path } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`sticky top-0 z-30 border-b bg-white/85 backdrop-blur-md transition-colors ${scrolled ? 'border-line' : 'border-transparent'}`}>
      <Container className="flex h-16 items-center justify-between gap-3">
        <Logo />
        <nav className="hidden gap-8 text-[15px] text-ink-2 lg:flex">
          {([['#como', m.nav.how], ['#relatorio', m.nav.report], ['#faq', m.nav.faq]] as const).map(([href, label]) => (
            <a key={href} href={href} className="no-underline transition-colors hover:text-ink">{label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <LanguageSwitcher />
          <Link to={path('/login')} className="rounded-full px-3 py-2 text-[15px] text-ink-2 no-underline transition-colors hover:bg-soft hover:text-ink">{m.common.login}</Link>
          <span className="hidden sm:block"><ButtonLink to={path('/test?novo=1')} variant="cta" size="sm" onClick={start}>{m.common.startShort}</ButtonLink></span>
        </div>
      </Container>
    </header>
  );
}

// ---------- matriz interativa do topo ----------

const TRY_PUZZLE = 6; // forma de fora muda por linha; a de dentro, por coluna
const TRY_ORDER = [3, 0, 5, 1, 4, 2]; // ordem fixa das alternativas (0 = correta)

function TryMatrix() {
  const { m, path } = useI18n();
  const t = m.landing.try;
  const [pick, setPick] = useState<number | null>(null);
  const opts = matrixOptions(TRY_PUZZLE, TRY_ORDER);
  const correct = TRY_ORDER.indexOf(0);
  const solved = pick === correct;
  return (
    <Aurora className="sm:p-6">
      <div className="flex items-center justify-between gap-3 px-2 pt-1">
        <Label className="text-ink-2">{t.label}</Label>
        <Label className="hidden text-ink-2 sm:block">{t.level}</Label>
      </div>
      <div className="mt-3 grid items-center gap-3 sm:mt-4 sm:grid-cols-[1.1fr_1fr] sm:gap-4">
        <div className="float-card float-slow grid grid-cols-3 gap-1 p-2.5" aria-label={m.quiz.matrixAria}>
          {PUZZLES[TRY_PUZZLE].cells.slice(0, 8).map((c, i) => <div key={i} className="aspect-square p-1.5"><MatrixCell cell={c} /></div>)}
          <div className={`grid aspect-square place-items-center rounded-xl p-1.5 transition-colors ${solved ? 'bg-brand-50' : 'border-[1.5px] border-dashed border-brand/60'}`}>
            {solved ? <MatrixCell cell={opts[correct]} /> : <span className="font-mono text-2xl text-brand">?</span>}
          </div>
        </div>
        <div className="float-card p-3 sm:p-4">
          <p className="mb-3 px-1 text-sm font-medium text-ink">{t.prompt}</p>
          <div className="grid grid-cols-3 gap-2">
            {opts.map((c, i) => {
              const state = pick === i
                ? (i === correct ? 'ring-2 ring-good bg-good-50' : 'ring-2 ring-bad bg-bad-50')
                : 'ring-1 ring-line bg-soft/60 hover:bg-white hover:ring-brand/40';
              return (
                <button key={i} onClick={() => !solved && setPick(i)} aria-label={m.quiz.option(LETTERS[i])}
                  className={`relative aspect-square rounded-xl p-[14%] ring-inset transition ${state}`}>
                  <span className="absolute left-2 top-1 font-mono text-[10px] text-muted">{LETTERS[i]}</span>
                  <MatrixCell cell={c} />
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-3 flex min-h-12 flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 px-4 py-3 text-sm backdrop-blur-sm" aria-live="polite">
        {pick === null && <span className="text-muted">{t.idle}</span>}
        {pick !== null && !solved && <span className="text-ink-2"><b className="font-medium text-bad">{t.wrong}</b> {t.hint}</span>}
        {solved && (
          <>
            <span className="text-ink-2"><b className="font-medium text-good">{t.right}</b> {t.rightText}</span>
            <Link to={path('/test?novo=1')} onClick={start} className="inline-flex items-center gap-1.5 font-medium text-ink no-underline hover:text-brand">{t.cta} <Arrow /></Link>
          </>
        )}
      </div>
    </Aurora>
  );
}

// ---------- ilustrações de "como funciona" (sem texto traduzível além de números) ----------

function HowArt({ step, label }: { step: number; label: string }) {
  const delay = { animationDelay: `${step * 0.9}s` };
  if (step === 0) {
    // mini matriz: três padrões coloridos e o "?"
    const tile = (on: string, off: string) => (
      <div className="grid grid-cols-2 gap-0.5">
        <i className={`size-3 rounded-[3px] ${on}`} /><i className={`size-3 rounded-[3px] ${off}`} />
        <i className={`size-3 rounded-[3px] ${off}`} /><i className={`size-3 rounded-[3px] ${off}`} />
      </div>
    );
    return (
      <div className="float-card float-slow grid grid-cols-2 place-items-center gap-5 px-8 py-6" style={delay} aria-hidden="true">
        {tile('bg-brand', 'bg-brand/15')}
        {tile('bg-[#7c5cff]', 'bg-[#7c5cff]/15')}
        {tile('bg-good', 'bg-good/15')}
        <span className="grid size-8 place-items-center rounded-lg border-[1.5px] border-brand font-mono text-[13px] text-brand">?</span>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className="float-card float-slow w-[210px] px-4 pb-3 pt-3.5" style={delay} aria-hidden="true">
        <div className="flex items-baseline gap-1.5"><b className="font-mono text-[22px] font-medium tracking-[-0.03em]">120</b><span className="truncate text-[11.5px] text-muted">{label}</span></div>
        <svg viewBox="0 0 180 54" className="mt-1 w-full" fill="none">
          <path d="M4 50 C 40 50, 60 6, 90 6 S 140 50, 176 50" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 50 C 40 50, 60 6, 90 6 S 140 50, 176 50 Z" fill="var(--color-brand)" opacity="0.08" />
          <line x1="117" y1="20" x2="117" y2="52" stroke="var(--color-brand)" strokeWidth="1.5" />
          <circle cx="117" cy="20" r="3.5" fill="#fff" stroke="var(--color-brand)" strokeWidth="2" />
        </svg>
      </div>
    );
  }
  return (
    <div className="float-card float-slow w-[210px] px-4 py-4" style={delay} aria-hidden="true">
      <div className="mb-3 truncate text-[12px] font-medium">{label}</div>
      {[0.45, 0.62, 0.87].map((w) => (
        <div key={w} className="mb-2 h-1.5 rounded-full bg-brand/10 last:mb-0"><i className="block h-full rounded-full bg-brand" style={{ width: `${w * 100}%` }} /></div>
      ))}
    </div>
  );
}

// ---------- blocos ----------

function SectionTitle({ label, title, sub, center = false }: { label: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={center ? 'mx-auto max-w-[620px] text-center' : 'max-w-[560px]'}>
      <Label className="mb-4">{label}</Label>
      <h2 className="text-[32px] sm:text-[40px]">{title}</h2>
      {sub && <p className="mt-4 text-[17px] text-ink-2">{sub}</p>}
    </div>
  );
}

function Split({ reverse = false, text, visual }: { reverse?: boolean; text: ReactNode; visual: ReactNode }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className={reverse ? 'md:order-2' : ''}>{text}</div>
      <div className={reverse ? 'md:order-1' : ''}>{visual}</div>
    </div>
  );
}

export function Landing() {
  const { m, path, date } = useI18n();
  const L = m.landing;
  const START = path('/test?novo=1');

  useEffect(() => {
    document.title = `${m.meta.title} | ${CONFIG.brand}`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.meta.description);
  }, [m]);
  useEffect(() => { track('ViewContent', { content_name: 'landing' }); }, []);

  return (
    <>
      <Header />
      <main>
        {/* topo */}
        <section className="pb-20 pt-12 md:pb-28 md:pt-20">
          <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-16">
            <div className={hadShell ? '' : 'animate-in'}>
              <Label className="mb-5">{L.eyebrow}</Label>
              <h1 className="text-[42px] sm:text-[54px] lg:text-[60px]">{L.h1a}<br /><span className="text-muted">{L.h1b}</span></h1>
              <p className="mt-6 max-w-[480px] text-lg text-ink-2">{L.lead}</p>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
                <ButtonLink to={START} variant="cta" size="lg" className="w-full sm:w-auto" onClick={start}>{m.common.start} <Arrow /></ButtonLink>
                <span className="flex items-center gap-1.5 text-[13.5px] text-ink-2">
                  <svg className="size-4 text-cta" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></svg>
                  {L.note}
                </span>
              </div>
              <dl className="mt-12 grid max-w-[460px] grid-cols-3 divide-x divide-line border-t border-line pt-6">
                {([['40', L.facts.questions], ['16', L.facts.matrices], ['5', L.facts.skills]] as const).map(([n, l], i) => (
                  <div key={l} className={i ? 'pl-5' : 'pr-5'}>
                    <dt className="sr-only">{l}</dt>
                    <dd className="font-mono text-2xl font-medium">{n}</dd>
                    <dd className="text-[13px] text-muted">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mx-auto w-full max-w-[540px] animate-in [animation-delay:120ms] lg:max-w-none"><TryMatrix /></div>
          </Container>
        </section>

        {/* como funciona */}
        <section id="como" className="scroll-mt-16 border-t border-line py-20 md:py-28">
          <Container>
            <SectionTitle label={L.how.label} title={L.how.title} />
            <ol className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
              {L.how.steps.map((s, i) => (
                <li key={s.t}>
                  <Aurora className="grid h-[180px] place-items-center sm:h-[200px]">
                    <HowArt step={i} label={i === 1 ? L.report.stats[0] : L.map.label} />
                  </Aurora>
                  <div className="mt-5 inline-flex rounded-full bg-soft px-2.5 py-0.5 font-mono text-[12px] text-ink-2">0{i + 1}</div>
                  <h3 className="mt-3 text-xl">{s.t}</h3>
                  <p className="mt-2 text-[15px] text-ink-2">{s.d}</p>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* relatório */}
        <section id="relatorio" className="scroll-mt-16 py-20 md:py-28">
          <Container className="grid gap-24">
            <Split
              text={<><SectionTitle label={L.report.label} title={L.report.title} sub={L.report.sub} /><Checks className="mt-8" items={L.report.items} /></>}
              visual={
                <Panel label={L.report.panel}>
                  <BellCurve iq={SAMPLE.iq} tag={m.report.yourIq(SAMPLE.iq)} />
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    <Stat tone="soft" value={SAMPLE.iq} label={L.report.stats[0]} />
                    <Stat tone="soft" value={`${SAMPLE.pct}%`} label={L.report.stats[1]} />
                    <Stat tone="soft" value={`+${SAMPLE.iq - 100}`} label={L.report.stats[2]} />
                  </div>
                </Panel>
              }
            />
            {/* mapa cognitivo: um anel por habilidade, com o selo e o que ela mede */}
            <div>
              <SectionTitle center label={L.map.label} title={L.map.title} sub={L.map.sub} />
              <Aurora className="mt-10">
                <div className="grid gap-2.5 sm:gap-3 md:grid-cols-3">
                  {(['speed', 'logic', 'visual'] as const).map((k) => {
                    const v = SAMPLE.domains[k];
                    const tag = domainTag(v);
                    const d = m.domains[k];
                    return (
                      <div key={k} className="float-card p-5 sm:p-6">
                        <div className="flex items-center gap-4">
                          <Ring value={v} size={80} stroke={5} outOf={100} />
                          <div className="min-w-0">
                            <div className="text-[17px] font-semibold leading-tight tracking-[-0.01em]">{d.label}</div>
                            <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-medium ${tag.cls}`}>{m.domainTags[tag.key]}</span>
                          </div>
                        </div>
                        <p className="mt-4 text-[14.5px] text-ink-2">{d.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </Aurora>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Panel label={L.room.label}>
                <Room percentile={SAMPLE.pct} />
                <p className="mt-5 text-[15px] text-ink-2">{L.room.text(SAMPLE.iq, SAMPLE.pct)}</p>
              </Panel>
              <Panel label={L.cert.label}>
                <CertificateCanvas name={L.cert.sampleName} iq={SAMPLE.iq} date={date(Date.now())} id="000 000" />
                <p className="mt-5 text-[15px] text-ink-2">{L.cert.text}</p>
              </Panel>
            </div>
          </Container>
        </section>

        {CONFIG.reviews.length > 0 && (
          <section className="border-t border-line py-20 md:py-28">
            <Container>
              <SectionTitle label={L.reviews.label} title={L.reviews.title} />
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {CONFIG.reviews.map((r) => (
                  <figure key={r.name + r.title} className="rounded-3xl bg-soft p-6">
                    <div className="font-mono text-sm text-ink" aria-label={`${r.stars}/5`}>{'★'.repeat(r.stars)}<span className="text-[#cfd3db]">{'★'.repeat(5 - r.stars)}</span></div>
                    <blockquote className="mt-3"><p className="font-medium">{r.title}</p><p className="mt-1 text-[15px] text-ink-2">{r.text}</p></blockquote>
                    <figcaption className="mt-4 text-[13px] text-muted">{r.name}{r.place && ` · ${r.place}`}</figcaption>
                  </figure>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* dúvidas */}
        <section id="faq" className="scroll-mt-16 border-t border-line py-20 md:py-28">
          <Container className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionTitle label={L.faq.label} title={L.faq.title} />
            <Faq items={m.faq(runtime().supportEmail).filter((_, i) => !BILLING_FAQ.includes(i))} />
          </Container>
        </section>

        <section className="pb-24">
          <Container>
            <div className="rounded-[32px] bg-ink px-6 py-16 text-center text-white sm:py-20">
              <h2 className="text-[34px] sm:text-[46px]">{L.final.title}</h2>
              <p className="mx-auto mt-4 max-w-[440px] text-[17px] text-white/70">{L.final.sub}</p>
              <ButtonLink to={START} variant="cta" size="lg" className="mt-9" onClick={start}>{m.common.start} <Arrow /></ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
