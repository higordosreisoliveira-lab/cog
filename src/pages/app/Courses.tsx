import { type ReactNode, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import { account } from '../../lib/account';
import { COURSES, findCourse, useCourseText, useCourseTexts } from '../../content/catalog';
import { Arrow, Button, ButtonLink, Container, Label } from '../../components/ui';
import { PageHead, useApp } from './AppLayout';

function useTitle(title: string) {
  useEffect(() => { document.title = `${title} | ${CONFIG.brand}`; }, [title]);
}

function Progress({ done, total }: { done: number; total: number }) {
  return (
    <div className="h-1 overflow-hidden rounded-full bg-soft-2">
      <i className="block h-full rounded-full bg-brand transition-[width] duration-500" style={{ width: `${(done / total) * 100}%` }} />
    </div>
  );
}

export function CoursesList() {
  const { path } = useI18n();
  const { user, am } = useApp();
  const courses = useCourseTexts();
  useTitle(am.courses.title);
  return (
    <Container>
      <PageHead title={am.courses.title} sub={am.courses.sub} />
      {courses && (
        <div className="grid gap-3 sm:grid-cols-2">
          {COURSES.filter((st) => courses[st.id]).map((st) => {
            const id = st.id;
            const c = courses[id];
            const done = user.courses[id]?.done.length ?? 0;
            const total = st.lessons.length;
            const minutes = st.lessons.reduce((a, l) => a + l.minutes, 0);
            return (
              <Link key={id} to={path(`/app/courses/${id}`)} className="group flex flex-col rounded-3xl p-6 no-underline ring-1 ring-inset ring-line transition-colors hover:bg-soft/60 sm:p-7">
                <div className="flex items-center justify-between gap-4 font-mono text-[12px] text-muted">
                  <span className="uppercase tracking-[0.08em]">{am.courses.skills[st.skill]}</span>
                  <span>{am.courses.lessons(total)} · {am.courses.minutes(minutes)}</span>
                </div>
                <div className="mt-4 text-xl font-semibold tracking-[-0.02em]">{c.title}</div>
                <p className="mt-1 flex-1 text-[15px] text-ink-2">{c.desc}</p>
                <div className="mt-6"><Progress done={done} total={total} /></div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-mono text-[12px] text-muted">{done === total ? am.courses.completed : am.courses.progress(done, total)}</span>
                  <span className="font-medium group-hover:text-brand">{done === 0 ? am.courses.start : done === total ? am.courses.review : am.courses.continue} →</span>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </Container>
  );
}

export function CoursePage() {
  const { id } = useParams();
  const { path } = useI18n();
  const { user, am } = useApp();
  const st = findCourse(id);
  const c = useCourseText(st?.id ?? '');
  useTitle(c ? c.title : am.courses.title);
  if (!st) return <Navigate to={path('/app/courses')} replace />;
  if (!c) return <div className="min-h-[60vh]" />;
  const done = new Set(user.courses[st.id]?.done ?? []);
  const nextLesson = st.lessons.find((l) => !done.has(l.id)) ?? st.lessons[0];

  return (
    <Container width={760}>
      <PageHead back={{ to: path('/app/courses'), label: am.courses.back }} title={c.title} sub={c.desc} />
      <div className="rounded-3xl bg-soft p-6 sm:p-7">
        <Label className="mb-2">{am.courses.outcome}</Label>
        <p className="text-[17px]">{c.outcome}</p>
        <div className="mt-6"><Progress done={done.size} total={st.lessons.length} /></div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[12px] text-muted">{am.courses.progress(done.size, st.lessons.length)}</span>
          <ButtonLink to={path(`/app/courses/${st.id}/${nextLesson.id}`)}>{done.size === 0 ? am.courses.start : done.size === st.lessons.length ? am.courses.review : am.courses.continue} <Arrow /></ButtonLink>
        </div>
      </div>
      <ol className="mt-8 border-t border-line">
        {st.lessons.map((l, i) => (
          <li key={l.id} className="border-b border-line">
            <Link to={path(`/app/courses/${st.id}/${l.id}`)} className="flex items-center gap-4 py-4 no-underline transition-colors hover:bg-soft/60">
              <span className={`grid size-8 flex-none place-items-center rounded-full font-mono text-[12px] ${done.has(l.id) ? 'bg-good-50 text-good' : 'bg-soft text-muted'}`}>
                {done.has(l.id) ? '✓' : i + 1}
              </span>
              <span className="min-w-0 flex-1">{c.lessons[i].title}</span>
              <span className="flex-none font-mono text-[12px] text-muted">{am.courses.minutes(l.minutes)}</span>
            </Link>
          </li>
        ))}
      </ol>
    </Container>
  );
}

/** Renderiza o "markdown leve" das aulas: parágrafos, "## " subtítulos, "- " listas e **negrito**. */
function RichText({ source }: { source: string }) {
  const inline = (text: string): ReactNode[] => text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i} className="font-semibold text-ink">{part.slice(2, -2)}</strong> : part);
  const blocks = source.trim().split(/\n\s*\n/);
  return (
    <div className="grid gap-5 text-[17px] leading-[1.7] text-ink-2">
      {blocks.map((b, i) => {
        const lines = b.split('\n').map((l) => l.trim()).filter(Boolean);
        if (lines[0]?.startsWith('## ')) {
          return (
            <div key={i}>
              <h2 className="mb-3 mt-4 text-[22px] text-ink">{lines[0].slice(3)}</h2>
              {lines.length > 1 && <p>{inline(lines.slice(1).join(' '))}</p>}
            </div>
          );
        }
        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={i} className="grid gap-2">
              {lines.map((l) => <li key={l} className="flex gap-3"><span className="mt-[11px] size-1.5 flex-none rounded-full bg-brand" /><span>{inline(l.slice(2))}</span></li>)}
            </ul>
          );
        }
        return <p key={i}>{inline(lines.join(' '))}</p>;
      })}
    </div>
  );
}

export function LessonPage() {
  const { id, lesson } = useParams();
  const { path } = useI18n();
  const { user, setUser, am } = useApp();
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);
  const st = findCourse(id);
  const c = useCourseText(st?.id ?? '');
  const idx = st ? st.lessons.findIndex((l) => l.id === lesson) : -1;
  useTitle(c && idx >= 0 ? c.lessons[idx].title : am.courses.title);
  useEffect(() => { setShowAnswer(false); window.scrollTo(0, 0); }, [lesson]);

  if (!st) return <Navigate to={path('/app/courses')} replace />;
  if (idx < 0) return <Navigate to={path(`/app/courses/${st.id}`)} replace />;
  if (!c) return <div className="min-h-[60vh]" />;

  const L = c.lessons[idx];
  const isDone = user.courses[st.id]?.done.includes(st.lessons[idx].id) ?? false;
  const prev = st.lessons[idx - 1];
  const next = st.lessons[idx + 1];

  const complete = () => {
    const a = account.markLesson(st.id, st.lessons[idx].id, true);
    if (a) setUser({ ...a });
    navigate(path(next ? `/app/courses/${st.id}/${next.id}` : `/app/courses/${st.id}`));
  };

  return (
    <Container width={720}>
      <PageHead back={{ to: path(`/app/courses/${st.id}`), label: c.title }} title={L.title}
        sub={`${am.courses.lessonOf(idx + 1, st.lessons.length)} · ${am.courses.minutes(st.lessons[idx].minutes)}`} />
      <article><RichText source={L.body} /></article>

      <section className="mt-12 rounded-3xl bg-soft p-6 sm:p-7">
        <Label className="mb-3">{am.courses.practice}</Label>
        <p className="text-[17px]">{L.practice.question}</p>
        {showAnswer && <p className="mt-4 animate-in border-t border-line pt-4 text-[15.5px] text-ink-2">{L.practice.answer}</p>}
        <Button variant="secondary" size="sm" className="mt-5" onClick={() => setShowAnswer((v) => !v)}>{showAnswer ? am.courses.hideAnswer : am.courses.showAnswer}</Button>
      </section>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        {prev ? (
          <ButtonLink to={path(`/app/courses/${st.id}/${prev.id}`)} variant="ghost">← {am.courses.previous}</ButtonLink>
        ) : <span />}
        <div className="flex flex-wrap items-center gap-3">
          {isDone && <span className="font-mono text-[12px] text-good">✓ {am.courses.done}</span>}
          <Button onClick={complete}>{next ? (isDone ? am.courses.next : am.courses.markDone) : am.courses.finish} <Arrow /></Button>
        </div>
      </div>
    </Container>
  );
}
