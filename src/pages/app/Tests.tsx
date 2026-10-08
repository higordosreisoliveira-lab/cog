import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { isCarelessTest } from '../../lib/careless';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import { classify, computeResult } from '../../lib/session';
import { account, type TestResultData, type TestTasks } from '../../lib/account';
import { CardsInput, CirclesInput, DelayTask, GoNoGoTask, ListInput, SliderInput, StarsInput } from './TestInputs';
import { TESTS, findTest, scoreTest, useTestText, useTestTexts } from '../../content/catalog';
import type { TestCategory, TestStructure, TestText } from '../../content/schema';
import { Arrow, Button, ButtonLink, Container, Label } from '../../components/ui';
import { PageHead, useApp } from './AppLayout';

function useTitle(title: string) {
  useEffect(() => { document.title = `${title} | ${CONFIG.brand}`; }, [title]);
}

// Ícones de linha, um por tema.
const ICON_PATHS: Record<TestStructure['icon'], string> = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 20a8 8 0 0 1 16 0',
  heart: 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z',
  briefcase: 'M4 8h16v11H4zM9 8V5h6v3M4 13h16',
  smile: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.5 14.5a4.5 4.5 0 0 0 7 0M9 10h.01M15 10h.01',
  diamond: 'M6 4h12l3 5-9 11L3 9zM3 9h18M9 4l3 16M15 4l-3 16',
  compass: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z',
  cloud: 'M7 18a4 4 0 0 1-.5-8 6 6 0 0 1 11.5 1.5A3.5 3.5 0 0 1 17.5 18zM9 21v-1M13 21v-1',
  trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  pulse: 'M3 12h4l2-6 4 12 2-6h6',
  link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1',
  battery: 'M3 8h15v8H3zM21 11v2M6 11v2',
  hourglass: 'M7 3h10M7 21h10M8 3c0 5 8 5 8 9s-8 4-8 9M16 3c0 5-8 5-8 9s8 4 8 9',
  mask: 'M4 6c5 2 11 2 16 0v5a8 8 0 0 1-16 0zM9 11h.01M15 11h.01M9 15a4 4 0 0 0 6 0',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
  timer: 'M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 9v4l2 2M10 2h4',
  brain: 'M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 0V4.5A2.5 2.5 0 0 0 9 4zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 0',
  puzzle: 'M10 4h4v3a2 2 0 1 0 4 0V4h2v6h-3a2 2 0 1 0 0 4h3v6h-6v-3a2 2 0 1 0-4 0v3H4v-6h3a2 2 0 1 0 0-4H4V4z',
  leaf: 'M5 19c0-8 6-14 15-14 0 9-6 15-14 15M5 19l7-7',
};

export function TestIcon({ icon, className = '' }: { icon: TestStructure['icon']; className?: string }) {
  return (
    <span className={`grid size-11 flex-none place-items-center rounded-2xl bg-brand-50 text-brand ${className}`}>
      <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={ICON_PATHS[icon]} /></svg>
    </span>
  );
}

const CATEGORIES: (TestCategory | 'all')[] = ['all', 'personality', 'relationships', 'work', 'wellbeing', 'neuro'];

export function TestsList() {
  const { m, path, date } = useI18n();
  const { user, am } = useApp();
  const texts = useTestTexts();
  const [cat, setCat] = useState<TestCategory | 'all'>('all');
  const iq = useMemo(() => (user.iq?.finishedAt ? computeResult(user.iq) : null), [user.iq]);
  useTitle(am.tests.title);
  const shown = TESTS.filter((t) => cat === 'all' || t.category === cat);

  return (
    <Container>
      <PageHead title={am.tests.title} sub={am.tests.sub} />
      <div className="-mt-2 mb-6 flex gap-2 overflow-x-auto pb-1" role="tablist">
        {CATEGORIES.filter((c) => c === 'all' || TESTS.some((t) => t.category === c)).map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`flex-none rounded-full px-4 py-2 text-sm transition-colors ${cat === c ? 'bg-ink text-white' : 'bg-soft text-ink-2 hover:bg-soft-2'}`}>
            {am.tests.categories[c]}
          </button>
        ))}
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cat === 'all' && (
          <div className="flex flex-col rounded-3xl bg-soft p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-white font-mono text-[15px] font-medium text-brand">{am.tests.iqShort}</span>
              {iq && <span className="rounded-full bg-good-50 px-2.5 py-0.5 text-[12px] font-medium text-good">✓ {iq.iq}</span>}
            </div>
            <div className="mt-4 text-lg font-semibold tracking-[-0.02em]">{am.tests.iqTitle}</div>
            <div className="mt-1 font-mono text-[12px] text-muted">{am.tests.questions(40)} · ~20 min</div>
            <p className="mt-2 flex-1 text-[14.5px] text-ink-2">{am.tests.iqDesc}</p>
            {iq && <p className="mt-2 text-[13px] text-muted">{m.classes[classify(iq.iq)].label} · {am.tests.completedOn(date(user.iq!.finishedAt!))}</p>}
            <div className="mt-5 flex flex-wrap gap-2">
              {iq && <ButtonLink to={path('/app/report')} size="sm">{am.tests.viewResult}</ButtonLink>}
              <ButtonLink to={path('/test?novo=1')} size="sm" variant={iq ? 'secondary' : 'primary'}>{iq ? am.tests.retake : am.tests.start}</ButtonLink>
            </div>
          </div>
        )}
        {shown.map((st) => {
          const t = texts?.[st.id];
          const done = user.tests[st.id];
          return (
            <Link key={st.id} to={path(done ? `/app/tests/${st.id}/result` : `/app/tests/${st.id}`)}
              className="group flex flex-col rounded-3xl p-6 no-underline ring-1 ring-inset ring-line transition-colors hover:bg-soft/60">
              <div className="flex items-start justify-between gap-3">
                <TestIcon icon={st.icon} />
                {done && <span className="rounded-full bg-good-50 px-2.5 py-0.5 text-[12px] font-medium text-good">✓</span>}
              </div>
              <div className="mt-4 text-lg font-semibold tracking-[-0.02em]">{t?.title ?? '…'}</div>
              <div className="mt-1 font-mono text-[12px] text-muted">{am.tests.questions(st.items.length)} · {am.tests.minutes(...st.minutes)}</div>
              <p className="mt-2 flex-1 text-[14.5px] text-ink-2">{t?.desc}</p>
              {done && <p className="mt-2 text-[13px] text-muted">{am.tests.completedOn(date(done.completedAt))}</p>}
              <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${done ? 'text-good' : 'group-hover:text-brand'}`}>{done ? am.tests.viewResult : am.tests.start} <Arrow /></span>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}

export function TestRun() {
  const { id } = useParams();
  const { path } = useI18n();
  const st = findTest(id);
  if (!st) return <Navigate to={path('/app/tests')} replace />;
  return <TestRunner key={st.id} st={st} />;
}

function TestRunner({ st }: { st: TestStructure }) {
  const { path } = useI18n();
  const { setUser, am } = useApp();
  const navigate = useNavigate();
  const t = useTestText(st.id);
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [locked, setLocked] = useState(false);
  const [tasks, setTasks] = useState<TestTasks>({});
  const [careless, setCareless] = useState(false);
  useTitle(t?.title ?? am.tests.title);

  // Tarefa interativa pendente antes da pergunta atual (se houver).
  const pendingTask = (st.tasks ?? []).find((task) => task.after === i && !tasks[task.kind]);

  // Tempo de cada resposta, para pegar quem responde sem ler a frase.
  const shownAt = useRef(Date.now());
  const times = useRef<{ ms: number; chars: number }[]>([]);
  useEffect(() => { shownAt.current = Date.now(); }, [i, pendingTask, started]);

  const finish = useCallback((ans: number[], tk: TestTasks) => {
    const a = account.saveTest(st.id, scoreTest(st, ans), Object.keys(tk).length ? tk : undefined);
    if (a) setUser({ ...a });
    navigate(path(`/app/tests/${st.id}/result`), { replace: true });
  }, [st, setUser, navigate, path]);

  const choose = useCallback((choice: number) => {
    if (locked) return;
    setLocked(true);
    const next = [...answers];
    next[i] = choice;
    setAnswers(next);
    times.current[i] = { ms: Date.now() - shownAt.current, chars: t?.items[i]?.length ?? 80 };
    if (isCarelessTest(times.current.slice(0, i + 1))) {
      setTimeout(() => { setLocked(false); setCareless(true); }, 250);
      return;
    }
    setTimeout(() => {
      setLocked(false);
      if (i + 1 < st.items.length) { setI(i + 1); return; }
      finish(next, tasks);
    }, st.input && st.input !== 'list' ? 380 : 220);
  }, [answers, i, st, locked, finish, tasks, t]);

  const restart = () => {
    setCareless(false);
    setAnswers([]);
    setTasks({});
    times.current = [];
    setI(0);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!started || pendingTask || careless) return;
    const h = (e: KeyboardEvent) => {
      const n = Number(e.key);
      if (n >= 1 && n <= st.scale.length) choose(n - 1);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [started, choose, st.scale.length, pendingTask, careless]);

  if (!t) return <div className="min-h-[60vh]" />;

  if (!started) {
    return (
      <Container width={640}>
        <PageHead back={{ to: path('/app/tests'), label: am.tests.back }} title={t.title} sub={`${am.tests.questions(st.items.length)} · ${am.tests.minutes(...st.minutes)}`} />
        <p className="text-[17px] text-ink-2">{t.intro}</p>
        <p className="mt-6 text-[13.5px] text-muted">{t.note}</p>
        <Button size="lg" className="mt-10" onClick={() => setStarted(true)}>{am.tests.start} <Arrow /></Button>
      </Container>
    );
  }

  if (careless) {
    return (
      <Container width={640}>
        <div role="alertdialog" aria-labelledby="careless-title" className="animate-in py-16 text-center md:py-24">
          <div className="mx-auto mb-6 grid size-14 place-items-center rounded-2xl bg-warn-50 text-warn">
            <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 5 10 5 10 9s-10 4-10 9M17 3c0 5-10 5-10 9s10 4 10 9" /></svg>
          </div>
          <h1 id="careless-title" className="text-[26px] sm:text-[30px]">{am.tests.carelessTitle}</h1>
          <p className="mx-auto mb-9 mt-4 max-w-[440px] text-ink-2">{am.tests.carelessText}</p>
          <Button size="lg" onClick={restart}>{am.tests.carelessCta}</Button>
        </div>
      </Container>
    );
  }

  if (pendingTask) {
    return (
      <Container width={640}>
        <div className="py-14 md:py-20">
          {pendingTask.kind === 'delay'
            ? <DelayTask am={am} onDone={(r) => setTasks((tk) => ({ ...tk, delay: r }))} />
            : <GoNoGoTask am={am} onDone={(r) => setTasks((tk) => ({ ...tk, gonogo: r }))} />}
        </div>
      </Container>
    );
  }

  const value = answers[i];
  const Input = { list: ListInput, circles: CirclesInput, slider: SliderInput, cards: CardsInput, stars: StarsInput }[st.input ?? 'list'];
  return (
    <Container width={640}>
      <div className="pt-10 md:pt-14">
        <div className="flex items-center justify-between gap-4 font-mono text-[13px] text-muted">
          <span>{am.tests.progress(i + 1, st.items.length)}</span>
          <Link to={path('/app/tests')} className="no-underline hover:text-ink">{am.tests.exit}</Link>
        </div>
        <div className="mt-3 h-0.5 overflow-hidden rounded-full bg-soft-2"><i className="block h-full bg-brand transition-[width] duration-300" style={{ width: `${(i / st.items.length) * 100}%` }} /></div>
      </div>
      <div key={i} className="animate-in py-12 md:py-16">
        <h1 className="min-h-[3.2em] text-center text-[24px] leading-[1.25] sm:text-[28px]">{t.items[i]}</h1>
        <div className="mt-10"><Input key={i} labels={t.scale} value={value} onPick={choose} am={am} /></div>
        {i > 0 && <button onClick={() => setI(i - 1)} className="mt-8 text-sm text-ink-2 underline underline-offset-2 hover:text-ink">{am.tests.previous}</button>}
      </div>
    </Container>
  );
}

export function TestResult() {
  const { id } = useParams();
  const { path } = useI18n();
  const { user } = useApp();
  const st = findTest(id);
  if (!st) return <Navigate to={path('/app/tests')} replace />;
  const data = user.tests[st.id];
  if (!data) return <Navigate to={path(`/app/tests/${st.id}`)} replace />;
  return <ResultView st={st} data={data} />;
}

function DimCard({ dim, v, am, showExamples = true }: { dim: TestText['dims'][string]; v: number; am: ReturnType<typeof useApp>['am']; showExamples?: boolean }) {
  return (
    <div className="rounded-3xl bg-soft p-6">
      <div className="flex items-baseline justify-between gap-4">
        <div className="text-lg font-semibold tracking-[-0.02em]">{dim.label}</div>
        <div className="font-mono text-lg">{v}</div>
      </div>
      <div className="mt-3">
        <div className="relative h-1.5 rounded-full bg-white"><i className="absolute inset-y-0 left-0 rounded-full bg-brand" style={{ width: `${v}%` }} /></div>
        <div className="mt-1.5 flex justify-between font-mono text-[11px] text-muted"><span>{am.tests.low}</span><span>{am.tests.high}</span></div>
      </div>
      <p className="mt-4 text-[14.5px] text-ink-2">{dim.desc}</p>
      <p className="mt-2 text-[15px]">{v >= 50 ? dim.high : dim.low}</p>
      <Label className="mb-2 mt-5">{am.tests.tips}</Label>
      <ul className="grid gap-1.5 text-[14.5px] text-ink-2">
        {dim.tips.map((tip) => <li key={tip} className="flex gap-3"><span className="mt-[9px] size-1.5 flex-none rounded-full bg-brand" />{tip}</li>)}
      </ul>
      {showExamples && dim.examples && <p className="mt-4 text-[14px] text-ink">{dim.examples.join(' · ')}</p>}
    </div>
  );
}

function ResultView({ st, data }: { st: TestStructure; data: TestResultData }) {
  const { path, date } = useI18n();
  const { am } = useApp();
  const t = useTestText(st.id);
  useTitle(t?.resultTitle ?? am.tests.title);
  if (!t) return <div className="min-h-[60vh]" />;
  const scores = data.scores;
  const ranked = [...st.dims].sort((a, b) => scores[b] - scores[a]);
  const band = data.band && t.bands ? t.bands[data.band] : null;
  const bandIdx = st.bands && data.band ? st.bands.findIndex((b) => b.key === data.band) : -1;
  const back = path('/app/tests');

  return (
    <Container width={880}>
      <PageHead back={{ to: back, label: am.tests.back }} title={t.resultTitle} sub={t.resultIntro} />
      <p className="-mt-4 mb-10 font-mono text-[12px] text-muted">{am.tests.completedOn(date(data.completedAt))}</p>

      {data.alert && t.alert && (
        <section role="alert" className="mb-8 rounded-3xl bg-bad-50 p-6 ring-1 ring-inset ring-bad/30">
          <div className="font-semibold text-bad">{am.tests.alertTitle}</div>
          <p className="mt-2 text-[15.5px] leading-relaxed text-ink">{t.alert}</p>
        </section>
      )}

      {st.result === 'screen' && band && (
        <section className="mb-12 rounded-3xl p-6 ring-1 ring-inset ring-line sm:p-8">
          <Label className="mb-3">{am.tests.yourResult}</Label>
          <div className="text-[28px] font-semibold tracking-[-0.02em]">{band.label}</div>
          {data.total !== undefined && data.max !== undefined && (
            <>
              <div className="mt-5 flex gap-1" aria-hidden="true">
                {st.bands!.map((b, k) => <i key={b.key} className={`h-2 flex-1 rounded-full ${k <= bandIdx ? 'bg-brand' : 'bg-soft-2'}`} />)}
              </div>
              <p className="mt-2 font-mono text-[12px] text-muted">{am.tests.points(data.total, data.max)}</p>
            </>
          )}
          <p className="mt-5 text-[16px] leading-relaxed text-ink-2">{band.text}</p>
        </section>
      )}

      {st.result === 'quadrant' && band && st.quadrant && (
        <section className="mb-12 grid items-center gap-8 rounded-3xl p-6 ring-1 ring-inset ring-line sm:p-8 md:grid-cols-[1fr_220px]">
          <div>
            <Label className="mb-3">{am.tests.yourStyle}</Label>
            <div className="text-[28px] font-semibold tracking-[-0.02em]">{band.label}</div>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-2">{band.text}</p>
          </div>
          <div className="relative aspect-square rounded-2xl bg-soft" aria-hidden="true">
            <div className="absolute inset-x-0 top-1/2 h-px bg-line" /><div className="absolute inset-y-0 left-1/2 w-px bg-line" />
            <span className="absolute size-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand ring-4 ring-white"
              style={{ left: `${scores[st.quadrant.x]}%`, bottom: `${scores[st.quadrant.y]}%` }} />
            <span className="absolute bottom-1.5 right-2 font-mono text-[10px] text-muted">{t.dims[st.quadrant.x].label} →</span>
            <span className="absolute left-2 top-1.5 font-mono text-[10px] text-muted">↑ {t.dims[st.quadrant.y].label}</span>
          </div>
        </section>
      )}

      {st.result === 'top' && (
        <section className="mb-14">
          <h2 className="mb-5 text-[22px]">{am.tests.topTitle}</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {ranked.slice(0, 3).map((d, k) => {
              const dim = t.dims[d];
              return (
                <div key={d} className={`flex flex-col rounded-3xl p-6 ${k === 0 ? 'bg-ink text-white' : 'bg-soft'}`}>
                  <div className={`font-mono text-[12px] ${k === 0 ? 'text-white/60' : 'text-muted'}`}>0{k + 1} · {scores[d]}/100</div>
                  <div className="mt-3 text-xl font-semibold tracking-[-0.02em]">{dim.label}</div>
                  <p className={`mt-2 text-[14.5px] ${k === 0 ? 'text-white/75' : 'text-ink-2'}`}>{dim.desc}</p>
                  {dim.examples && <p className={`mt-4 text-[14px] ${k === 0 ? 'text-white/90' : 'text-ink'}`}>{dim.examples.join(' · ')}</p>}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {st.dims.length > 1 && (
        <section>
          <h2 className="mb-5 text-[22px]">{st.result === 'top' ? am.tests.allTitle : am.tests.dimsTitle}</h2>
          <div className="grid grid-cols-1 gap-2">
            {(st.result === 'top' ? ranked : st.dims).map((d) => <DimCard key={d} dim={t.dims[d]} v={scores[d]} am={am} showExamples={st.result !== 'top'} />)}
          </div>
        </section>
      )}
      {st.dims.length === 1 && <DimCard dim={t.dims[st.dims[0]]} v={scores[st.dims[0]]} am={am} />}

      {data.tasks && (data.tasks.delay || data.tasks.gonogo) && (
        <section className="mt-10">
          <h2 className="mb-5 text-[22px]">{am.tests.tasksTitle}</h2>
          <div className="grid gap-2 sm:grid-cols-2">
            {data.tasks.delay && (
              <div className="rounded-3xl bg-soft p-6">
                <Label className="mb-2">{am.tests.delay.resultTitle}</Label>
                <div className="font-mono text-[28px] font-medium">{data.tasks.delay.now}/{data.tasks.delay.total}</div>
                <p className="mt-2 text-[15px]">{am.tests.delay.result(data.tasks.delay.now, data.tasks.delay.total)}</p>
                <p className="mt-2 text-[14.5px] text-ink-2">{data.tasks.delay.now >= 3 ? am.tests.delay.high : am.tests.delay.low}</p>
              </div>
            )}
            {data.tasks.gonogo && (
              <div className="rounded-3xl bg-soft p-6">
                <Label className="mb-2">{am.tests.gonogo.resultTitle}</Label>
                <div className="font-mono text-[28px] font-medium">{data.tasks.gonogo.rt} ms</div>
                <p className="mt-2 text-[15px]">{am.tests.gonogo.result(data.tasks.gonogo.impulse, data.tasks.gonogo.missed, data.tasks.gonogo.rt)}</p>
                <p className="mt-2 text-[13px] text-muted">{am.tests.gonogo.note}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {t.help && (
        <section className="mt-10 rounded-3xl bg-brand-50 p-6">
          <div className="font-semibold">{am.tests.helpTitle}</div>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{t.help}</p>
        </section>
      )}

      <p className="mt-10 text-[13px] text-muted">{t.note}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        <ButtonLink to={path(`/app/tests/${st.id}`)} variant="secondary">{am.tests.retake}</ButtonLink>
        <ButtonLink to={back} variant="ghost">{am.tests.back}</ButtonLink>
      </div>
    </Container>
  );
}
