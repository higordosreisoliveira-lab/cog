import { type ComponentType, Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router';
import { LangLayout, RootRedirect, detectLocale, useI18n } from './i18n';
import { Landing } from './pages/Landing';
import { Quiz } from './pages/Quiz';

// Quase todo acesso é pelo celular: a página inicial e o teste vêm no pacote principal; o resto
// (resultado, pagamento, área do cliente, admin) é baixado só quando a pessoa chega lá.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function page<M extends Record<K, ComponentType<any>>, K extends keyof M>(load: () => Promise<M>, name: K) {
  return lazy(() => load().then((m) => ({ default: m[name] })));
}

const Analyzing = page(() => import('./pages/Analyzing'), 'Analyzing');
const EmailCapture = page(() => import('./pages/EmailCapture'), 'EmailCapture');
const Checkout = page(() => import('./pages/Checkout'), 'Checkout');
const Report = page(() => import('./pages/Report'), 'Report');
const AppReport = page(() => import('./pages/Report'), 'AppReport');
const Verify = page(() => import('./pages/Verify'), 'Verify');
const Preview = page(() => import('./pages/Preview'), 'Preview');
const Legal = page(() => import('./pages/Legal'), 'Legal');
const Login = page(() => import('./pages/Login'), 'Login');
const AppLayout = page(() => import('./pages/app/AppLayout'), 'AppLayout');
const Home = page(() => import('./pages/app/Home'), 'Home');
const GamesList = page(() => import('./pages/app/Games'), 'GamesList');
const GamePage = page(() => import('./pages/app/Games'), 'GamePage');
const TestsList = page(() => import('./pages/app/Tests'), 'TestsList');
const TestRun = page(() => import('./pages/app/Tests'), 'TestRun');
const TestResult = page(() => import('./pages/app/Tests'), 'TestResult');
const CoursesList = page(() => import('./pages/app/Courses'), 'CoursesList');
const CoursePage = page(() => import('./pages/app/Courses'), 'CoursePage');
const LessonPage = page(() => import('./pages/app/Courses'), 'LessonPage');
const Settings = page(() => import('./pages/app/Settings'), 'Settings');
const Referrals = page(() => import('./pages/app/Referrals'), 'Referrals');
const RefCapture = page(() => import('./pages/app/Referrals'), 'RefCapture');

// Painel de administração: baixado só quando alguém abre /admin. As rotas internas não podem
// repetir nomes das rotas de /:lang (ex.: "login"), senão /:lang/login ganha a disputa.
// O pacote do funil (VITE_TARGET=site) nem inclui o painel de administração.
const AdminApp = import.meta.env.VITE_TARGET === 'site' ? null : lazy(() => import('./pages/admin/AdminApp'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => { if (!hash) window.scrollTo(0, 0); }, [pathname, hash]);
  return null;
}

// Página de "obrigado" configurada no Connect (https://cognitivai.online/user): segue para /report,
// que libera o relatório, cria a conta e entra na área do cliente.
function PostPayment() {
  const { search } = useLocation();
  const q = new URLSearchParams(search);
  const ok = !q.get('status') || q.get('status') === 'approved' || q.get('status') === 'trialing';
  if (ok) q.set('status', 'paid');
  return <Navigate to={`/${detectLocale()}/report?${q.toString()}`} replace />;
}

function LangHome() {
  const { path } = useI18n();
  return <Navigate to={path()} replace />;
}

// Todas as páginas ficam sob /:lang (ex.: /pt-BR/test, /en/app). A raiz manda para o idioma detectado.
// /:lang/app/* é a área do cliente (exige login).
export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-dvh" />}>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/r/:code" element={<RefCapture />} />
        <Route path="/user" element={<PostPayment />} />
        {AdminApp && <Route path="/admin/*" element={<Suspense fallback={<div className="min-h-dvh bg-soft" />}><AdminApp /></Suspense>} />}
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<Landing />} />
          <Route path="test" element={<Quiz />} />
          <Route path="analyzing" element={<Analyzing />} />
          <Route path="email" element={<EmailCapture />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="report" element={<Report />} />
          <Route path="login" element={<Login />} />
          <Route path="terms" element={<Legal kind="terms" />} />
          <Route path="privacy" element={<Legal kind="privacy" />} />
          <Route path="v/:token" element={<Verify />} />
          <Route path="preview" element={<Preview />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="report" element={<AppReport />} />
            <Route path="games" element={<GamesList />} />
            <Route path="games/:id" element={<GamePage />} />
            <Route path="tests" element={<TestsList />} />
            <Route path="tests/:id" element={<TestRun />} />
            <Route path="tests/:id/result" element={<TestResult />} />
            <Route path="courses" element={<CoursesList />} />
            <Route path="courses/:id" element={<CoursePage />} />
            <Route path="courses/:id/:lesson" element={<LessonPage />} />
            <Route path="settings" element={<Settings />} />
            <Route path="referrals" element={<Referrals />} />
            <Route path="*" element={<LangHome />} />
          </Route>
          <Route path="*" element={<LangHome />} />
        </Route>
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
