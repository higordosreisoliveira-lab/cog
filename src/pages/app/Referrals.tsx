import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { CONFIG } from '../../config';
import { useI18n } from '../../i18n';
import { captureRef, maskEmail, referralLink, referralSummary, requestPayout, type Account, type Payout } from '../../lib/account';
import { Button, Container, Label } from '../../components/ui';
import { PageHead, useApp } from './AppLayout';

/** Rota /r/:code — guarda quem indicou e manda para a página inicial no idioma da pessoa. */
export function RefCapture() {
  const { code } = useParams();
  if (code) captureRef(code);
  return <Navigate to="/" replace />;
}

function useMoney() {
  const { info } = useI18n();
  return (n: number, currency: Account['subscription']['currency']) =>
    new Intl.NumberFormat(info.intl, { style: 'currency', currency, maximumFractionDigits: ['JPY', 'KRW', 'IDR'].includes(currency) ? 0 : 2 }).format(n);
}

function CopyLink({ link }: { link: string }) {
  const { am } = useApp();
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(link); } catch {
      const ta = document.createElement('textarea'); ta.value = link; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-2xl bg-white py-2 pl-4 pr-2 ring-1 ring-inset ring-line">
      <svg className="size-4 flex-none text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></svg>
      <span className="min-w-0 flex-1 truncate font-mono text-[13.5px]">{link.replace(/^https?:\/\//, '')}</span>
      <Button size="sm" variant={copied ? 'secondary' : 'primary'} onClick={copy} aria-live="polite">{copied ? `✓ ${am.referral.copied}` : am.referral.copy}</Button>
    </div>
  );
}

/** Card compacto (início e relatório), no formato do "convide seus amigos". */
export function ReferralCard() {
  const { path, info } = useI18n();
  const { user, am } = useApp();
  const money = useMoney();
  if (!CONFIG.referral.enabled) return null;
  const R = am.referral;
  const reward = money(CONFIG.referral.rewards[info.currency], info.currency);
  return (
    <div className="grid items-center gap-5 rounded-3xl bg-[linear-gradient(150deg,#eef2ff,#f5f6f8_60%,#eef7f2)] p-6 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-10">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ink-2 ring-1 ring-inset ring-line">{R.badge}</span>
        <h3 className="mt-3 text-[22px]">{R.cardTitle}</h3>
        <p className="mt-2 text-[15px] text-ink-2">{R.cardText(reward)}</p>
        <Link to={path('/app/referrals')} className="mt-3 inline-block text-sm font-medium text-ink underline underline-offset-2 hover:text-brand">{R.details}</Link>
      </div>
      <CopyLink link={referralLink(user)} />
    </div>
  );
}

export function Referrals() {
  const { date, info } = useI18n();
  const { user, setUser, am } = useApp();
  const R = am.referral;
  const money = useMoney();
  const cur = info.currency; // a moeda segue o país/idioma da pessoa, como os preços
  const sum = referralSummary(user, cur);
  const link = referralLink(user);
  // Pix só existe no Brasil (real); nos outros países, só PayPal.
  const methods: Payout['method'][] = cur === 'BRL' ? ['pix', 'paypal'] : ['paypal'];
  const [picked, setMethod] = useState<Payout['method']>(methods[0]);
  const method = methods.includes(picked) ? picked : methods[0];
  const [dest, setDest] = useState('');
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  useEffect(() => { document.title = `${R.title} | ${CONFIG.brand}`; }, [R.title]);

  const shareText = R.shareText(CONFIG.brand);
  const shares = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${link}`)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(link)}` },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}` },
    { label: 'Telegram', href: `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(shareText)}` },
  ];

  const pay = async () => {
    setBusy(true);
    const a = await requestPayout(method, dest, cur);
    setBusy(false);
    if (a) { setUser({ ...a }); setDone(true); setDest(''); }
  };

  const statusCls = { pending: 'bg-brand-50 text-brand', confirmed: 'bg-good-50 text-good', canceled: 'bg-soft-2 text-muted' };

  return (
    <Container width={880}>
      <PageHead title={R.title} sub={R.sub(money(sum.reward, cur))} />

      <div className="rounded-3xl bg-[linear-gradient(150deg,#eef2ff,#f5f6f8_60%,#eef7f2)] p-5 sm:p-7">
        <Label className="mb-3">{R.badge}</Label>
        <CopyLink link={link} />
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Label className="mr-1">{R.share}</Label>
          {shares.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-3.5 py-1.5 text-[13px] text-ink no-underline ring-1 ring-inset ring-line transition hover:bg-soft">{s.label}</a>
          ))}
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        {[[R.statConfirmed, String(sum.confirmed)], [R.statBalance, money(sum.balance, cur)]].map(([l, v]) => (
          <div key={l} className="rounded-2xl bg-soft p-4">
            <div className="font-mono text-[22px] font-medium tracking-[-0.02em]">{v}</div>
            <div className="mt-0.5 text-[13px] text-muted">{l}</div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="mb-5 text-[22px]">{R.howTitle}</h2>
        <ol className="grid gap-6 md:grid-cols-3">
          {R.how.map((h, i) => (
            <li key={h} className="border-t border-ink pt-4">
              <div className="font-mono text-[12px] text-muted">0{i + 1}</div>
              <p className="mt-2 text-[15px] text-ink-2">{h}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-[22px]">{R.historyTitle}</h2>
        {sum.rows.length === 0 ? (
          <p className="rounded-2xl bg-soft px-5 py-6 text-[15px] text-ink-2">{R.empty}</p>
        ) : (
          <ul className="border-t border-line">
            {sum.rows.map((r) => (
              <li key={r.email + r.at} className="flex items-center justify-between gap-4 border-b border-line py-3.5 text-[14.5px]">
                <span className="min-w-0 truncate font-mono text-[13px]">{maskEmail(r.email)}</span>
                <span className="flex flex-none items-center gap-3">
                  <span className="hidden font-mono text-[12px] text-muted sm:inline">{date(r.at)}</span>
                  <span className={`rounded-full px-2.5 py-0.5 text-[12px] font-medium ${statusCls[r.status]}`}>{R.status[r.status]}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mt-12 rounded-3xl p-6 ring-1 ring-inset ring-line sm:p-7">
        <h2 className="text-[22px]">{R.payoutTitle}</h2>
        <p className="mt-2 text-[15px] text-ink-2">{R.payoutText(money(sum.min, cur))}</p>
        {methods.length > 1 ? (
          <div className="mt-5 inline-flex rounded-full bg-soft p-1">
            {methods.map((mm) => (
              <button key={mm} onClick={() => setMethod(mm)} className={`rounded-full px-4 py-2 text-sm transition ${method === mm ? 'bg-white font-medium shadow-sm' : 'text-ink-2'}`}>{R.method[mm]}</button>
            ))}
          </div>
        ) : (
          <Label className="mt-6">{R.method[method]}</Label>
        )}
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <input value={dest} onChange={(e) => setDest(e.target.value.slice(0, 120))} aria-label={R.method[method]}
            placeholder={method === 'pix' ? R.pixPlaceholder : R.paypalPlaceholder}
            className="h-12 w-full rounded-full bg-white px-5 outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand sm:flex-1" />
          <Button onClick={pay} disabled={busy || sum.balance < sum.min || !dest.trim()}>{R.request(money(sum.balance, cur))}</Button>
        </div>
        {done && <p className="mt-3 text-[13.5px] text-good">{R.requested}</p>}
        {sum.payouts.length > 0 && (
          <div className="mt-6">
            <Label className="mb-2">{R.payoutsTitle}</Label>
            <ul className="border-t border-line">
              {sum.payouts.map((p) => (
                <li key={p.at} className="flex items-center justify-between gap-4 border-b border-line py-3 text-[14px]">
                  <span className="font-mono text-[12.5px] text-muted">{date(p.at)}</span>
                  <span className="font-mono">{money(p.amount, p.currency)}</span>
                  <span className="text-[12.5px] text-ink-2">{R.payoutStatus[p.status]}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="mt-12">
        <h2 className="mb-4 text-[22px]">{R.rulesTitle}</h2>
        <ul className="grid gap-2.5 text-[14.5px] text-ink-2">
          {R.rules.map((rule) => <li key={rule} className="flex gap-3"><span className="mt-[9px] size-1.5 flex-none rounded-full bg-ink-2" />{rule}</li>)}
        </ul>
      </section>
    </Container>
  );
}
