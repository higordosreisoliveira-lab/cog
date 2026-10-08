import { type ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import { Link, Navigate, useSearchParams } from 'react-router';
import { CONFIG } from '../config';
import { useI18n } from '../i18n';
import { DOMAIN_KEYS, QUESTIONS, type DomainKey } from '../lib/questions';
import { choiceView, matrixOf } from '../lib/variants';
import { useQbankText } from '../lib/qbankText';
import { type Result, type Session, classify, computeResult, correctIndex, loadSession, saveSession } from '../lib/session';
import { fmtTime } from '../lib/certificate';
import { BellCurve, Ring, Room, domainTag } from '../components/charts';
import { CertificateCanvas } from '../components/CertificateCanvas';
import { MatrixCell } from '../components/MatrixCell';
import { Aurora, Button, ButtonLink, Checks, Container, Disclaimer, Label, Stat } from '../components/ui';
import { account } from '../lib/account';
import { runtime } from '../lib/runtime';
import { ConfirmingPayment, usePurchaseClaim } from './PurchaseClaim';
import { useApp } from './app/AppLayout';
import { ReferralCard } from './app/Referrals';
import { TESTS, useTestTexts } from '../content/catalog';

export function Report() {
  const { path } = useI18n();
  const [params] = useSearchParams();
  const [s] = useState(loadSession);
  const claim = usePurchaseClaim();
  const orderId = params.get('pedido') ?? s?.orderId ?? '';
  const returning = params.get('status') === 'paid' || !!s?.paid;
  const started = useRef(false);

  // Volta do pagamento (página de obrigado do Connect ou do nosso checkout): confirma no servidor e
  // entra no app. Quem confirma a venda é o webhook do Connect, nunca o parâmetro da URL.
  useEffect(() => {
    if (started.current || !s?.finishedAt || !s.email || !returning || !orderId) return;
    started.current = true;
    if (!s.paid) saveSession({ ...s, paid: true, orderId });
    void claim.run(orderId, s.email, { ...s, paid: true });
  }, [s, returning, orderId, claim]);

  if (!s || !s.finishedAt) return <Navigate to={path('/test')} replace />;
  if (!returning || !orderId) return <Navigate to={path('/checkout')} replace />;
  return <div className="min-h-dvh"><ConfirmingPayment state={claim.state === 'idle' ? 'confirming' : claim.state} /></div>;
}

/** Relatório dentro da área do cliente. */
export function AppReport() {
  const { path, lang } = useI18n();
  const { user, setUser } = useApp();
  if (!user.iq || !user.iq.finishedAt) return <Navigate to={path('/test?novo=1')} replace />;
  return (
    <ReportView s={user.iq} defaultName={user.name}
      verifyUrl={user.certToken ? `${runtime().siteUrl ?? window.location.origin}/${lang}/v/${user.certToken}` : undefined}
      onChange={(n) => { const a = account.saveIq(n); if (a) setUser({ ...a }); }}
      afterSummary={<div className="grid gap-2"><PdfCard /><ReferralCard /></div>}
      afterAll={<BeyondTests />} />
  );
}

/** "Guarde seu relatório completo": usa a impressão do navegador (Salvar como PDF). */
function PdfCard() {
  const { am } = useApp();
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-soft p-5 sm:p-6 print:hidden">
      <div>
        <p className="font-medium">{am.report.pdfTitle}</p>
        <p className="mt-1 text-[14.5px] text-ink-2">{am.report.pdfText}</p>
      </div>
      <Button onClick={() => window.print()}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" /></svg>
        {am.report.pdfCta}
      </Button>
    </div>
  );
}

const BEYOND_TESTS = ['personality', 'eq', 'career'];

/** "Vá além do seu QI": os outros testes, no fim do relatório. */
function BeyondTests() {
  const { path } = useI18n();
  const { user, am } = useApp();
  const tests = useTestTexts(BEYOND_TESTS);
  if (!tests) return null;
  return (
    <section className="border-t border-line py-14 print:hidden">
      <h2 className="text-[26px] sm:text-[30px]">{am.report.beyondTitle}</h2>
      <p className="mt-2 max-w-[620px] text-ink-2">{am.report.beyondSub}</p>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {TESTS.filter((st) => BEYOND_TESTS.includes(st.id) && tests[st.id]).map((st) => {
          const id = st.id;
          const done = user.tests[id];
          return (
            <Link key={id} to={path(done ? `/app/tests/${id}/result` : `/app/tests/${id}`)} className="group flex flex-col rounded-3xl p-6 no-underline ring-1 ring-inset ring-line transition-colors hover:bg-soft/60">
              <span className="font-mono text-[12px] text-muted">{am.tests.minutes(...st.minutes)}</span>
              <span className="mt-3 text-lg font-semibold tracking-[-0.02em]">{tests[id].title}</span>
              <span className="mt-1 flex-1 text-[14.5px] text-ink-2">{tests[id].desc}</span>
              <span className={`mt-5 text-sm font-medium ${done ? 'text-good' : 'group-hover:text-brand'}`}>{done ? am.tests.viewResult : am.tests.start} →</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Section({ id, title, sub, children }: { id?: string; title: ReactNode; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="grid scroll-mt-20 grid-cols-1 gap-6 border-t border-line py-14 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12">
      <div>
        <h2 className="text-[24px] sm:text-[26px]">{title}</h2>
        {sub && <p className="mt-2 text-[15px] text-muted">{sub}</p>}
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function ReportView({ s, onChange, defaultName, verifyUrl, afterSummary, afterAll }: { s: Session; onChange: (s: Session) => void; defaultName?: string; verifyUrl?: string; afterSummary?: ReactNode; afterAll?: ReactNode }) {
  const { m, path } = useI18n();
  const R = m.report;
  const r = useMemo(() => computeResult(s), [s]);
  const cls = m.classes[classify(r.iq)];
  const diff = r.iq - 100;
  const pct = Math.round(r.percentile);
  const top = Math.max(1, Math.round(100 - r.percentile));
  useEffect(() => { document.title = `${R.title} | ${CONFIG.brand}`; }, [R.title]);

  return (
    <>

      <div>
        <Container width={1000}>
          {/* resumo */}
          <section className="pb-14 pt-12 md:pt-16">
            <div className="mx-auto max-w-[640px] text-center">
              <h1 className="text-[32px] sm:text-[40px]">{R.title}</h1>
              <p className="mt-3 text-ink-2">{R.sub}</p>
            </div>
            <Aurora className="mt-8">
            <div className="float-card px-3 pb-3 pt-5 sm:px-6 sm:pt-6"><BellCurve iq={r.iq} height={230} tag={R.yourIq(r.iq)} /></div>
            <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
              {[
                { l: R.betterThan, v: `${pct}%`, t: R.betterThanText(pct), hl: false },
                { l: R.score, v: String(r.iq), t: R.range(cls.label), hl: true },
                { l: diff >= 0 ? R.aboveAvg : R.belowAvg, v: diff >= 0 ? `+${diff}` : String(diff), t: R.diffText(diff), hl: false },
              ].map((c) => (
                <div key={c.l} className={`float-card p-5 ${c.hl ? 'ring-2 ring-brand/25' : ''}`}>
                  <div className="text-sm font-medium">{c.l}</div>
                  <div className="mt-1 font-mono text-[34px] font-medium tracking-[-0.03em] text-brand">{c.v}</div>
                  <p className="mt-1 text-[13.5px] text-ink-2">{c.t}</p>
                </div>
              ))}
            </div>
            </Aurora>
            <div className="mt-2 rounded-3xl p-5 ring-1 ring-inset ring-line">
              <p className="font-medium">{R.meaning}</p>
              <p className="mt-1.5 text-[15px] text-ink-2">{R.meaningText(r.iq, pct, cls.text)}</p>
            </div>
            {afterSummary && <div className="mt-2">{afterSummary}</div>}
          </section>

          <Section title={R.mapTitle} sub={R.mapSub}>
            <Aurora>
            <div className="grid grid-cols-1 gap-2.5 sm:gap-3">
              {DOMAIN_KEYS.map((k) => {
                const v = r.domains[k];
                const tag = domainTag(v);
                const d = m.domains[k];
                return (
                  <div key={k} className="float-card grid items-center gap-5 p-5 sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)] sm:gap-8 sm:p-7">
                    <div className="flex items-center gap-5">
                      <Ring value={v} size={84} stroke={5} />
                      <div className="min-w-0">
                        <div className="text-[17px] font-semibold leading-tight tracking-[-0.01em]">{d.label}</div>
                        <span className={`mt-2 inline-block rounded-full px-2.5 py-0.5 text-[11.5px] font-medium ${tag.cls}`}>{m.domainTags[tag.key]}</span>
                      </div>
                    </div>
                    <div className="grid gap-3 text-[14.5px] leading-relaxed text-ink-2">
                      <p>{d.desc}</p>
                      <p className="text-ink">{R.youScored(v)} {d[tag.key]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            </Aurora>
          </Section>

          <CertificateSection s={s} r={r} onChange={onChange} defaultName={defaultName} verifyUrl={verifyUrl} />

          <section className="grid items-center gap-10 border-t border-line py-14 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="text-[28px] sm:text-[34px]">{R.posTitle}</h2>
              <p className="mt-3 text-[16px] text-ink-2">{R.posSub}</p>
              <Checks className="mt-7" items={R.posItems} />
            </div>
            <div className="rounded-[28px] bg-[linear-gradient(150deg,#eef2ff,#f5f6f8_55%,#eef7f2)] p-4 sm:p-6">
              <div className="rounded-3xl bg-white p-5 sm:p-6">
                <Label className="mb-4">{R.rankLabel}</Label>
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-2xl bg-soft p-4">
                    <div className="text-[13px] text-ink-2">{R.population}</div>
                    <div className="mt-1 font-mono text-[26px] font-medium tracking-[-0.03em] text-brand">{r.percentile >= 50 ? R.top(top) : `${pct}%`}</div>
                  </div>
                  <div className="rounded-2xl bg-soft p-4">
                    <div className="text-[13px] text-ink-2">{R.roomLabel}</div>
                    <div className="mt-1 font-mono text-[26px] font-medium tracking-[-0.03em] text-brand">{top}º</div>
                  </div>
                </div>
                <div className="mt-5"><Room percentile={r.percentile} /></div>
                <p className="mt-5 text-[15px]">{R.rankText(pct)}</p>
                <p className="mt-3 border-t border-line pt-3 text-[12.5px] text-muted">{R.posNote}</p>
              </div>
            </div>
          </section>

          <Thinkers domains={r.domains} />

          <Section title={R.profileTitle} sub={R.profileSub}>
            <div className="grid gap-2 sm:grid-cols-2">
              {QUESTIONS.map((q, i) => {
                if (q.type !== 'likert') return null;
                const a = s.answers[i]?.choice;
                const agrees = a !== undefined && a <= 1;
                const t = m.traits[q.trait];
                return (
                  <div key={i} className="rounded-3xl bg-soft p-5">
                    <div className="font-medium">{t.label}</div>
                    <div className="mt-1 font-mono text-[11.5px] text-muted">{R.youAnswered}: {a !== undefined ? m.quiz.likert[a] : '—'}</div>
                    <p className="mt-3 text-[14.5px] text-ink-2">{agrees ? t.hi : t.lo}</p>
                  </div>
                );
              })}
            </div>
          </Section>

          <AnswersSection s={s} r={r} />

          {afterAll}

          <div className="border-t border-line py-12 text-center">
            <Disclaimer className="mx-auto max-w-[620px]" />
            <ButtonLink to={path('/test?novo=1')} variant="secondary" className="mt-6">{m.common.retake}</ButtonLink>
          </div>
        </Container>
      </div>
    </>
  );
}

function CertificateSection({ s, r, onChange, defaultName, verifyUrl }: { s: Session; r: Result; onChange: (s: Session) => void; defaultName?: string; verifyUrl?: string }) {
  const { m, date } = useI18n();
  const R = m.report;
  const canvas = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState(s.name || defaultName || (s.email ? s.email.split('@')[0] : ''));
  const shown = name.trim() || m.landing.cert.sampleName;
  const shareText = R.shareText(CONFIG.brand, r.iq);
  const url = runtime().siteUrl ?? window.location.origin;

  const persist = () => { if (name.trim() !== s.name) onChange({ ...s, name: name.trim() }); };
  const download = () => {
    persist();
    canvas.current?.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = `${CONFIG.brand.toLowerCase()}-iq-${r.iq}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    }, 'image/png');
  };

  const shares = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${url}`)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(url)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
  ];

  return (
    <Section id="certificado" title={R.certTitle} sub={R.certSub}>
      <Aurora>
        <div className="float-card overflow-hidden p-1.5 sm:p-2"><CertificateCanvas ref={canvas} name={shown} iq={r.iq} date={date(s.finishedAt ?? Date.now())} id={s.certificateId} verifyUrl={verifyUrl} /></div>
      </Aurora>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <input value={name} onChange={(e) => setName(e.target.value.slice(0, 40))} onBlur={persist}
          placeholder={R.certPlaceholder} aria-label={R.certPlaceholder}
          className="h-12 w-full rounded-full bg-white px-5 outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand sm:flex-1" />
        <Button onClick={download}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" /></svg>
          {R.certDownload}
        </Button>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <Label className="mr-2">{R.share}</Label>
        {shares.map((sh) => (
          <a key={sh.label} href={sh.href} target="_blank" rel="noopener noreferrer"
            className="rounded-full px-3.5 py-1.5 text-[13px] text-ink no-underline ring-1 ring-inset ring-line transition hover:bg-soft">{sh.label}</a>
        ))}
      </div>
    </Section>
  );
}

function AnswersSection({ s, r }: { s: Session; r: Result }) {
  const { m } = useI18n();
  const R = m.report;
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const items = all ? r.items : r.items.slice(0, 8);
  const accuracy = r.scored ? Math.round((r.correct / r.scored) * 100) : 0;

  return (
    <Section id="respostas" title={R.answersTitle} sub={R.answersSub(r.scored)}>
      <div className="mb-4 grid grid-cols-3 gap-2">
        <Stat tone="soft" value={`${r.correct}/${r.scored}`} label={R.correctCount} />
        <Stat tone="soft" value={`${accuracy}%`} label={R.accuracy} />
        <Stat tone="soft" value={r.durationMs ? fmtTime(r.durationMs) : '—'} label={R.totalTime} />
      </div>
      <div className="grid grid-cols-1 border-t border-line">
        {items.map((it, n) => (
          <AnswerRow key={it.index} s={s} index={it.index} n={n + 1} ok={it.ok} ms={it.ms} open={open === it.index} onToggle={() => setOpen(open === it.index ? null : it.index)} />
        ))}
        {all && r.memoryChecks.filter((c) => c.answered).map((c) => (
          <div key={c.key} className="flex items-center gap-3 border-b border-line py-3.5 text-[14.5px]">
            <span className="w-8 flex-none font-mono text-[11px] text-muted">+</span>
            <span className="min-w-0 flex-1">{c.key === 'number' ? R.numberCheck : R.word2Check}: <span className="font-medium">{c.key === 'number' ? s.number : m.words2[s.word2]}</span>
              {!c.ok && <span className="text-muted"> ({R.youChose(c.key === 'number' ? (s.extra.number ?? '—') : (s.extra.word2 !== undefined ? m.words2[s.extra.word2] : '—'))})</span>}
            </span>
            <span className={`flex-none font-mono text-[12px] ${c.ok ? 'text-good' : 'text-bad'}`}>{c.ok ? R.correct : R.wrong}</span>
          </div>
        ))}
      </div>
      {!all && r.items.length > 8 && (
        <div className="mt-5 text-center"><Button variant="secondary" onClick={() => setAll(true)}>{R.seeAll(r.scored)}</Button></div>
      )}
    </Section>
  );
}

function AnswerRow({ s, index, n, ok, ms, open, onToggle }: { s: Session; index: number; n: number; ok: boolean; ms: number; open: boolean; onToggle: () => void }) {
  const { m } = useI18n();
  const R = m.report;
  const q = QUESTIONS[index];
  const text = m.questions[index];
  const qb = useQbankText();
  const chosen = s.answers[index]?.choice;
  const correct = correctIndex(s, index)!;

  let prompt = '';
  let opts: string[] = [];
  if (q.type === 'choice') {
    const view = choiceView(s, index, text, qb);
    prompt = view ? (view.sequence ? `${view.prompt} ${view.sequence}` : view.prompt) : '';
    opts = view?.options ?? [];
  }
  else if (q.type === 'span') { prompt = R.spanPrompt(s.spans[index].ask + 1, s.spans[index].digits.join(' ')); opts = s.spans[index].options.map(String); }
  else if (q.type === 'recall') { prompt = m.quiz.recall; opts = s.recallOptions.map((w) => m.words1[w]); }
  else if (q.type === 'matrix') { prompt = R.matrixPrompt(q.puzzle + 1); }

  return (
    <div className="border-b border-line">
      <button onClick={onToggle} aria-expanded={open} className="flex w-full items-center gap-3 py-3.5 text-left text-[14.5px] transition-colors hover:bg-soft/60">
        <span className="w-8 flex-none font-mono text-[11px] text-muted">{String(n).padStart(2, '0')}</span>
        <span className="min-w-0 flex-1 truncate">{prompt}</span>
        <span className={`flex-none font-mono text-[12px] ${ok ? 'text-good' : 'text-bad'}`}>{ok ? R.correct : R.wrong}</span>
        <span className="hidden w-10 flex-none text-right font-mono text-[11px] text-muted sm:block">{Math.max(1, Math.round(ms / 1000))}s</span>
        <svg className={`size-3.5 flex-none text-muted transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M3 4.5 6 7.5l3-3" /></svg>
      </button>
      {open && (
        <div className="pb-5 pl-11 text-[14px]">
          {q.type === 'matrix' ? (
            <div className="flex flex-wrap items-start gap-5">
              <div className="grid w-[156px] grid-cols-3 gap-0.5 rounded-2xl bg-soft p-2">
                {matrixOf(s, q.puzzle).cells.slice(0, 8).map((c, k) => <div key={k} className="aspect-square p-0.5"><MatrixCell cell={c} /></div>)}
                <div className="grid aspect-square place-items-center rounded-lg border border-dashed border-brand font-mono text-brand">?</div>
              </div>
              {([[R.yourAnswer, chosen, ok], [R.rightAnswer, correct, true]] as const).map(([label, idx, good]) => (
                <div key={label}>
                  <div className="mb-1.5 font-mono text-[11px] text-muted">{label}</div>
                  <div className={`size-[72px] rounded-2xl bg-white p-2 ring-2 ring-inset ${good ? 'ring-good' : 'ring-bad'}`}>
                    {idx !== undefined && <MatrixCell cell={matrixOf(s, q.puzzle).options[idx]} />}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-1">
              <div><span className="text-muted">{R.yourAnswer}: </span><span className={`font-medium ${ok ? 'text-good' : 'text-bad'}`}>{chosen !== undefined ? opts[chosen] : '—'}</span></div>
              {!ok && <div><span className="text-muted">{R.rightAnswer}: </span><span className="font-medium text-good">{opts[correct]}</span></div>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Pensadores associados a cada área do mapa cognitivo (estilo de raciocínio, não pontuação).
type ThinkerId = 'descartes' | 'pascal' | 'lovelace' | 'leonardo' | 'galileo' | 'escher' | 'gauss' | 'euler' | 'ramanujan' | 'mozart' | 'tesla' | 'mezzofanti' | 'vonneumann' | 'devi' | 'capablanca';
const THINKERS: Record<DomainKey, ThinkerId[]> = {
  logic: ['descartes', 'pascal', 'lovelace'],
  visual: ['leonardo', 'galileo', 'escher'],
  numeric: ['gauss', 'euler', 'ramanujan'],
  memory: ['mozart', 'tesla', 'mezzofanti'],
  speed: ['vonneumann', 'devi', 'capablanca'],
};

function Thinkers({ domains }: { domains: Record<DomainKey, number> }) {
  const { m } = useI18n();
  const F = m.report.figures;
  const best = DOMAIN_KEYS.reduce((a, b) => (domains[b] > domains[a] ? b : a));
  const ids = THINKERS[best];
  const [sel, setSel] = useState(0);
  const p = F.people[ids[sel]];
  const initials = p.name.split(' ').filter((w) => w[0] && w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase()).map((w) => w[0]).slice(0, 2).join('');
  return (
    <section className="border-t border-line py-14">
      <div className="grid overflow-hidden rounded-[28px] bg-ink text-white md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,0.9fr)]">
        <div className="relative grid min-h-[220px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#2a3350,#0e1116_70%)]">
          <svg viewBox="0 0 120 120" className="absolute size-[260px] opacity-[0.07]" aria-hidden="true">
            {[0, 1, 2].flatMap((r) => [0, 1, 2].map((c) => <rect key={`${r}${c}`} x={10 + c * 36} y={10 + r * 36} width="28" height="28" rx="6" fill="#fff" />))}
          </svg>
          <div key={ids[sel]} className="relative grid size-28 animate-fade place-items-center rounded-full bg-white/10 font-mono text-[34px] tracking-[-0.03em] ring-1 ring-white/20">{initials}</div>
        </div>
        <div className="p-7 sm:p-9">
          <div className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-white/55">{F.label}</div>
          <h2 className="mt-3 text-[24px] sm:text-[28px]">{F.title}</h2>
          <p className="mt-3 text-[15px] text-white/70">{F.sub(m.domains[best].label)}</p>
          <p key={`t-${ids[sel]}`} className="mt-6 animate-fade text-[15.5px] leading-relaxed text-white/90">{p.text}</p>
        </div>
        <div className="border-t border-white/10 p-7 sm:p-9 md:border-l md:border-t-0">
          <ul className="divide-y divide-white/10">
            {ids.map((id, i) => (
              <li key={id}>
                <button onClick={() => setSel(i)} aria-pressed={i === sel}
                  className={`flex w-full items-baseline justify-between gap-4 py-3 text-left text-[14.5px] transition-colors ${i === sel ? 'text-white' : 'text-white/55 hover:text-white/80'}`}>
                  <span className={i === sel ? 'font-medium' : ''}>{F.people[id].name}</span>
                  <span className="flex-none font-mono text-[12px]">{F.people[id].years}</span>
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] leading-relaxed text-white/45">{F.note}</p>
        </div>
      </div>
    </section>
  );
}
