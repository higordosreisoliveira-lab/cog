import { type ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CONFIG } from '../../config';
import { runtime } from '../../lib/runtime';
import { LOCALES, useI18n } from '../../i18n';
import { account, accessUntil, nextCharge, subStatus } from '../../lib/account';
import { Flag } from '../../components/LanguageSwitcher';
import { Button, ButtonLink, Container, Modal } from '../../components/ui';
import { PageHead, useApp } from './AppLayout';
import { AccessPanel } from './Access';

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-[200px_minmax(0,1fr)] md:gap-10">
      <h2 className="text-lg">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export function Settings() {
  const { path, date, lang, info } = useI18n();
  const { user, setUser, am } = useApp();
  const S = am.settings;
  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [saved, setSaved] = useState(false);
  const [confirm, setConfirm] = useState<'cancel' | 'delete' | null>(null);
  const [busy, setBusy] = useState(false);
  useEffect(() => { document.title = `${S.title} | ${CONFIG.brand}`; }, [S.title]);

  const sub = user.subscription;
  const status = subStatus(sub);
  const until = accessUntil(sub);
  // Valor da renovação na moeda em que a assinatura é cobrada.
  const price = new Intl.NumberFormat(info.intl, { style: 'currency', currency: sub.currency }).format(CONFIG.pricing.currencies[sub.currency]?.after ?? 0);

  const saveName = async () => {
    const a = await account.update({ name: name.trim() || user.name });
    if (a) { setUser({ ...a }); setSaved(true); setTimeout(() => setSaved(false), 1800); }
  };
  const doCancel = async () => {
    setBusy(true);
    const a = await account.cancelSubscription();
    setBusy(false); setConfirm(null);
    if (a) setUser({ ...a });
  };
  const doResume = async () => {
    setBusy(true);
    const a = await account.resumeSubscription();
    setBusy(false);
    if (a) setUser({ ...a });
  };
  const doDelete = async () => {
    setBusy(true);
    await account.deleteAccount();
    navigate(path(), { replace: true });
  };

  const badge = { trial: 'bg-brand-50 text-brand', active: 'bg-good-50 text-good', canceled: 'bg-warn-50 text-warn', expired: 'bg-bad-50 text-bad' }[status];

  return (
    <Container width={880}>
      <PageHead title={S.title} />

      <Block title={S.profile}>
        <label htmlFor="set-name" className="mb-2 block text-sm font-medium">{S.name}</label>
        <div className="flex flex-col gap-2 sm:flex-row">
          <input id="set-name" value={name} onChange={(e) => setName(e.target.value.slice(0, 40))}
            className="h-12 w-full rounded-full bg-white px-5 outline-none ring-1 ring-inset ring-line transition focus:ring-2 focus:ring-brand sm:flex-1" />
          <Button variant="secondary" onClick={saveName} disabled={name.trim() === user.name}>{saved ? `✓ ${S.saved}` : S.save}</Button>
        </div>
        <p className="mt-2 text-[13px] text-muted">{S.nameHint}</p>
        <div className="mt-6 text-sm font-medium">{S.email}</div>
        <p className="mt-1 font-mono text-[14px] text-ink-2">{user.email}</p>
      </Block>

      <Block title={am.access.settingsTitle}>
        <AccessPanel />
      </Block>

      <Block title={S.language}>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {LOCALES.map((l) => (
            <button key={l.code} onClick={() => navigate(path('/app/settings').replace(`/${lang}/`, `/${l.code}/`))}
              className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-[14.5px] ring-inset transition ${l.code === lang ? 'bg-brand-50 ring-2 ring-brand' : 'ring-1 ring-line hover:bg-soft'}`}>
              <Flag country={l.flag} />{l.label}
            </button>
          ))}
        </div>
      </Block>

      <Block title={S.subscription}>
        <div className="rounded-3xl bg-soft p-6">
          <span className={`inline-block rounded-full px-2.5 py-1 text-[12px] font-medium ${badge}`}>{S.status[status]}</span>
          <div className="mt-4 grid gap-1.5 text-[15px] text-ink-2">
            {status === 'trial' && <p>{S.trialEnds(date(sub.trialEndsAt))}</p>}
            {(status === 'trial' || status === 'active') && <p>{S.nextCharge(price, date(nextCharge(sub)))}</p>}
            {status === 'canceled' && until && <p>{S.canceledUntil(date(until))}</p>}
            {status === 'expired' && <p>{S.expiredText}</p>}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {(status === 'trial' || status === 'active') && <Button variant="secondary" size="sm" onClick={() => setConfirm('cancel')}>{S.cancel}</Button>}
            {status === 'canceled' && <Button size="sm" onClick={doResume} disabled={busy}>{S.resume}</Button>}
            {status === 'expired' && <ButtonLink to={path('/checkout')} size="sm">{S.resubscribe}</ButtonLink>}
          </div>
        </div>
      </Block>

      <Block title={S.support}>
        <p className="text-[15px] text-ink-2">{S.supportText(runtime().supportEmail)}</p>
      </Block>

      <Block title={S.data}>
        <p className="text-[15px] text-ink-2">{S.deleteText}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button variant="secondary" size="sm" onClick={async () => { await account.logout(); navigate(path()); }}>{S.logout}</Button>
          <Button variant="ghost" size="sm" className="text-bad" onClick={() => setConfirm('delete')}>{S.delete}</Button>
        </div>
      </Block>

      {confirm === 'cancel' && (
        <Modal labelledBy="cancel-title">
          <h3 id="cancel-title" className="text-[22px]">{S.cancelTitle}</h3>
          <p className="mt-3 text-[15px] text-ink-2">{S.cancelText(date(nextCharge(sub)))}</p>
          <div className="mt-6 grid gap-2">
            <Button onClick={() => setConfirm(null)}>{S.keep}</Button>
            <Button variant="secondary" onClick={doCancel} disabled={busy}>{S.cancelConfirm}</Button>
          </div>
        </Modal>
      )}
      {confirm === 'delete' && (
        <Modal labelledBy="delete-title">
          <h3 id="delete-title" className="text-[22px]">{S.deleteTitle}</h3>
          <p className="mt-3 text-[15px] text-ink-2">{S.deleteText}</p>
          <div className="mt-6 grid gap-2">
            <Button variant="secondary" onClick={() => setConfirm(null)}>{S.goBack}</Button>
            <Button className="bg-bad! hover:opacity-90" onClick={doDelete} disabled={busy}>{S.deleteConfirm}</Button>
          </div>
        </Modal>
      )}
    </Container>
  );
}
