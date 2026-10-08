import { useEffect, useMemo } from 'react';
import { Link } from 'react-router';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import { classify, computeResult } from '../../lib/session';
import { streak } from '../../lib/account';
import { gamesOfTheDay } from '../../games/registry';
import { COURSES, TESTS, useCourseTexts, useTestTexts } from '../../content/catalog';
import { BellCurve } from '../../components/charts';
import { Arrow, Aurora, ButtonLink, Container, Label } from '../../components/ui';
import { useApp } from './AppLayout';
import { GameCard } from './Games';

// Testes em destaque na página inicial (os demais ficam em Testes).
const HOME_TESTS = ['personality', 'adhd', 'dopamine'];

function SectionHead({ title, sub, to, more }: { title: string; sub?: string; to?: string; more?: string }) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-[22px] sm:text-[24px]">{title}</h2>
        {sub && <p className="mt-1 text-[15px] text-muted">{sub}</p>}
      </div>
      {to && more && <Link to={to} className="inline-flex flex-none items-center gap-1.5 text-sm text-ink-2 no-underline hover:text-ink">{more} <Arrow /></Link>}
    </div>
  );
}

export function Home() {
  const { m, path, info } = useI18n();
  const { user, am } = useApp();
  const H = am.home;
  const courses = useCourseTexts();
  const tests = useTestTexts(HOME_TESTS);
  const r = useMemo(() => (user.iq?.finishedAt ? computeResult(user.iq) : null), [user.iq]);
  const days = streak(user);
  const todays = gamesOfTheDay();
  useEffect(() => { document.title = `${am.nav.home} | ${CONFIG.brand}`; }, [am.nav.home]);

  // curso para continuar: o último mexido que ainda não terminou, senão o primeiro
  const courseNext = COURSES.map((st) => ({ id: st.id, skill: st.skill, p: user.courses[st.id], total: st.lessons.length }))
    .filter((c) => (c.p?.done.length ?? 0) < c.total)
    .sort((a, b) => (b.p?.done.length ?? 0) - (a.p?.done.length ?? 0))[0];

  const dateLine = new Date().toLocaleDateString(info.intl, { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <Container>
      <div className="pb-8 pt-10 md:pt-14">
        <p className="font-mono text-[12px] uppercase tracking-[0.08em] text-muted">{dateLine}</p>
        <h1 className="mt-2 text-[34px] sm:text-[42px]">{H.greeting(user.name)}</h1>
      </div>

      {/* QI + sequência */}
      <Aurora>
      <div className="grid gap-2.5 sm:gap-3 md:grid-cols-[1.4fr_1fr]">
        <div className="float-card p-5 sm:p-7">
          {r ? (
            <div className="grid items-center gap-6 sm:grid-cols-[auto_1fr]">
              <div>
                <Label className="mb-2">{H.iqLabel}</Label>
                <div className="font-mono text-[64px] font-medium leading-none tracking-[-0.05em]">{r.iq}</div>
                <p className="mt-2 text-sm text-ink-2">{m.classes[classify(r.iq)].label}</p>
              </div>
              <div>
                <BellCurve iq={r.iq} height={120} labels={false} tag="" />
                <div className="mt-4 flex flex-wrap gap-2">
                  <ButtonLink to={path('/app/report')} size="sm">{H.iqCta}</ButtonLink>
                  <ButtonLink to={path('/test?novo=1')} size="sm" variant="secondary">{H.retake}</ButtonLink>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Label className="mb-2">{H.iqLabel}</Label>
              <p className="text-ink-2">{H.noIq}</p>
              <ButtonLink to={path('/test?novo=1')} size="sm" className="mt-4">{H.takeTest}</ButtonLink>
            </div>
          )}
        </div>
        <div className="float-card flex flex-col justify-between p-5 sm:p-7">
          <div>
            <div className="font-mono text-[44px] font-medium leading-none tracking-[-0.04em]">{days}</div>
            <p className="mt-2 font-medium">{H.streak(days)}</p>
          </div>
          <div className="mt-5 flex gap-1.5" aria-hidden="true">
            {Array.from({ length: 7 }, (_, i) => {
              const d = new Date(Date.now() - (6 - i) * 86400000).toISOString().slice(0, 10);
              return <span key={d} className={`h-2 flex-1 rounded-full ${user.activity.includes(d) ? 'bg-brand' : 'bg-soft-2'}`} />;
            })}
          </div>
          <p className="mt-3 text-[13px] text-muted">{H.streakHint}</p>
        </div>
      </div>
      </Aurora>

      {/* treino do dia */}
      <section className="mt-14">
        <SectionHead title={H.todayTitle} sub={H.todaySub} to={path('/app/games')} more={H.seeAll} />
        <div className="grid gap-3 md:grid-cols-3">
          {todays.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </section>

      {/* curso */}
      {courses && courseNext && courses[courseNext.id] && (
        <section className="mt-14">
          <SectionHead title={H.continueTitle} to={path('/app/courses')} more={H.seeAll} />
          <Link to={path(`/app/courses/${courseNext.id}`)} className="group flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-soft p-6 no-underline sm:p-7">
            <div className="min-w-0 flex-1">
              <Label className="mb-2">{am.courses.skills[courseNext.skill]}</Label>
              <div className="text-xl font-semibold tracking-[-0.02em]">{courses[courseNext.id].title}</div>
              <p className="mt-1 text-[15px] text-ink-2">{courses[courseNext.id].desc}</p>
              <div className="mt-4 h-1 max-w-[320px] overflow-hidden rounded-full bg-white">
                <i className="block h-full rounded-full bg-brand" style={{ width: `${((courseNext.p?.done.length ?? 0) / courseNext.total) * 100}%` }} />
              </div>
              <p className="mt-2 font-mono text-[12px] text-muted">{am.courses.progress(courseNext.p?.done.length ?? 0, courseNext.total)}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-colors group-hover:bg-[#2a303c]">
              {(courseNext.p?.done.length ?? 0) > 0 ? am.courses.continue : am.courses.start} <Arrow />
            </span>
          </Link>
        </section>
      )}

      {/* testes */}
      {tests && (
        <section className="mt-14">
          <SectionHead title={H.testsTitle} to={path('/app/tests')} more={H.seeAll} />
          <div className="grid gap-3 md:grid-cols-3">
            {TESTS.filter((st) => HOME_TESTS.includes(st.id) && tests[st.id]).map((st) => {
              const id = st.id;
              const done = user.tests[id];
              return (
                <Link key={id} to={path(done ? `/app/tests/${id}/result` : `/app/tests/${id}`)} className="flex flex-col rounded-3xl p-6 no-underline ring-1 ring-inset ring-line transition-colors hover:bg-soft/60">
                  <div className="font-mono text-[12px] text-muted">{am.tests.minutes(...st.minutes)}</div>
                  <div className="mt-3 text-lg font-semibold tracking-[-0.02em]">{tests[id].title}</div>
                  <p className="mt-1 flex-1 text-[14.5px] text-ink-2">{tests[id].desc}</p>
                  <span className={`mt-5 text-sm font-medium ${done ? 'text-good' : 'text-ink'}`}>{done ? am.tests.viewResult : am.tests.start} →</span>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </Container>
  );
}
