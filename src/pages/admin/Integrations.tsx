// Integrações editáveis pelo admin: pagamento (Connect), e-mails (HubMail), login com Google,
// pixels/análise e suporte. Segredos nunca voltam inteiros: o painel mostra só os 4 últimos caracteres.
import { useEffect, useState, type ReactNode } from 'react';
import { integrations, type IntegrationsInfo, type IntegrationValues, admin, type WebhookEvent } from '../../lib/admin';
import { ApiError } from '../../lib/api';
import { runtime } from '../../lib/runtime';
import { Card, Loading, PageTitle, fmtDateTime, inputCls, smallBtn, useAdmin } from './shared';

type Section = keyof IntegrationValues;
type Draft = { [S in Section]: Record<string, string> };

const MAIL_LANGS = ['pt-BR', 'en', 'es', 'fr', 'de', 'it', 'nl', 'pl', 'tr', 'id', 'ja', 'ko'];
const MAIL_VARS = ['assunto', 'titulo', 'mensagem', 'destaque', 'botao', 'link', 'rodape', 'nome'];

const FIELD_ERRORS: Record<string, string> = {
  'connect.checkout': 'Use só o identificador do checkout (letras, números e hífen).',
  'google.clientId': 'O ID do cliente termina em .apps.googleusercontent.com.',
  'pixels.meta': 'O ID do pixel da Meta tem só números.',
  'pixels.tiktok': 'O ID do pixel do TikTok tem letras e números.',
  'pixels.clarity': 'O ID do projeto do Clarity tem letras e números (ex.: yts08jnasd).',
  'support.email': 'E-mail inválido.',
};

function Status({ ok, yes = 'Configurado', no = 'Falta configurar' }: { ok: boolean; yes?: string; no?: string }) {
  return <span className={`whitespace-nowrap rounded-full px-2.5 py-0.5 text-[12px] font-medium ${ok ? 'bg-good-50 text-good' : 'bg-warn-50 text-warn'}`}>{ok ? yes : no}</span>;
}

function Field({ label, hint, children }: { label: string; hint?: ReactNode; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-[13px] font-medium text-ink-2">{label}</span>
      <div className="mt-1.5">{children}</div>
      {hint && <span className="mt-1.5 block text-[12.5px] text-muted">{hint}</span>}
    </label>
  );
}

function CopyBox({ value }: { value: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <code className="min-w-0 flex-1 truncate rounded-xl bg-soft px-4 py-2.5 font-mono text-[13px]">{value}</code>
      <button type="button" className={smallBtn()} onClick={() => { void navigator.clipboard?.writeText(value); setDone(true); setTimeout(() => setDone(false), 1500); }}>{done ? 'Copiado' : 'Copiar'}</button>
    </div>
  );
}

const Steps = ({ children }: { children: ReactNode }) => (
  <ol className="grid list-decimal gap-1.5 pl-5 text-[13.5px] text-ink-2 marker:text-muted">{children}</ol>
);

export function Integrations() {
  const { me, notify, fail } = useAdmin();
  const [info, setInfo] = useState<IntegrationsInfo | null>(null);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [saving, setSaving] = useState<Section | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [hooks, setHooks] = useState<WebhookEvent[] | null>(null);
  const [testTo, setTestTo] = useState(me.email);

  const load = () => integrations.get().then((r) => { setInfo(r); setDraft(blankSecrets(r.values)); }).catch((e) => notify(fail(e), 'bad'));
  useEffect(() => { void load(); admin.webhooks().then(setHooks).catch(() => setHooks([])); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!info || !draft) return <><PageTitle title="Integrações" /><Loading /></>;

  const set = (s: Section, k: string, v: string) => setDraft({ ...draft, [s]: { ...draft[s], [k]: v } });
  const save = async (s: Section, clear: string[] = []) => {
    setSaving(s);
    setFieldError(null);
    try {
      await integrations.save({ [s]: draft[s] }, clear);
      await load();
      notify(clear.length ? 'Removido.' : 'Salvo. Já vale para os próximos visitantes.');
    } catch (e) {
      if (e instanceof ApiError && typeof e.data.field === 'string') setFieldError(e.data.field);
      notify(e instanceof ApiError && e.code === 'invalid_format' ? FIELD_ERRORS[String(e.data.field)] ?? 'Formato inválido.' : fail(e), 'bad');
    }
    setSaving(null);
  };
  const v = info.values;
  const err = (f: string) => fieldError === f ? <span className="text-bad">{FIELD_ERRORS[f] ?? 'Valor inválido: confira o endereço (precisa começar com https://).'}</span> : null;

  // Campo secreto: vazio mantém o valor atual; o botão "remover" apaga.
  const secret = (s: Section, k: string, label: string, hint?: ReactNode) => {
    const current = (v[s] as Record<string, string>)[k];
    return (
      <Field label={label} hint={<>{current ? <>Atual: <span className="font-mono">{current}</span>. Deixe vazio para manter. </> : null}{hint}</>}>
        <div className="flex gap-2">
          <input type="password" autoComplete="new-password" spellCheck={false} value={draft[s][k] ?? ''} onChange={(e) => set(s, k, e.target.value)} placeholder={current ? 'Manter o atual' : 'Cole aqui'} className={inputCls} />
          {current && <button type="button" className={smallBtn()} disabled={saving === s} onClick={() => { if (confirm(`Remover ${label.toLowerCase()}?`)) void save(s, [`${s}.${k}`]); }}>Remover</button>}
        </div>
      </Field>
    );
  };
  const text = (s: Section, k: string, label: string, hint?: ReactNode, placeholder = '') => (
    <Field label={label} hint={<>{err(`${s}.${k}`)}{err(`${s}.${k}`) && hint ? ' ' : ''}{hint}</>}>
      <input spellCheck={false} value={draft[s][k] ?? ''} onChange={(e) => set(s, k, e.target.value)} placeholder={placeholder} className={inputCls} />
    </Field>
  );
  const saveBtn = (s: Section) => (
    <div className="mt-5 flex justify-end border-t border-line pt-4">
      <button className={smallBtn('primary')} disabled={saving === s} onClick={() => save(s)}>{saving === s ? 'Salvando…' : 'Salvar'}</button>
    </div>
  );

  const testMail = async (kind: 'welcome' | 'code') => {
    try {
      const r = await integrations.testMail(kind, testTo, draft.hubmail.defaultLang || 'pt-BR');
      notify(r.ok ? `E-mail de teste enviado para ${testTo}.` : 'O HubMail não aceitou o envio. Confira a URL e o token do gatilho.', r.ok ? 'ok' : 'bad');
    } catch (e) { notify(fail(e), 'bad'); }
  };

  return (
    <>
      <PageTitle title="Integrações" sub="Pagamento, e-mails, login com Google e pixels. As mudanças valem na hora, sem publicar o site de novo." />

      <div className="grid gap-6">
        {/* ---------- Connect ---------- */}
        <Card title="Pagamento: Connect" action={<Status ok={info.status.connectWebhook} yes="Webhook ligado" no="Falta o segredo do webhook" />}>
          <p className="mb-4 text-[13.5px] text-ink-2">Quando alguém paga, o Connect avisa o site por webhook. É isso que cria a conta da pessoa, libera o app e manda a senha por e-mail.</p>
          <div className="grid gap-4">
            <Field label="URL do webhook (cole no Connect)"><CopyBox value={info.webhookUrl} /></Field>
            <Steps>
              <li>No Connect, abra o produto do teste de QI → <strong className="font-medium text-ink">Webhooks</strong> → adicionar.</li>
              <li>Cole a URL acima e marque os eventos de pedido e assinatura (aprovado, em teste, renovado, cancelado, reembolsado, não pago).</li>
              <li>Copie o <strong className="font-medium text-ink">segredo de assinatura</strong> (começa com <span className="font-mono">whsec_</span>) e cole abaixo.</li>
            </Steps>
            {secret('connect', 'webhookSecret', 'Segredo do webhook', 'Sem ele o site recusa qualquer aviso de pagamento (ninguém consegue fingir uma compra).')}
            <div className="grid gap-4 md:grid-cols-2">
              {text('connect', 'checkout', 'Checkout', 'Identificador do checkout no Connect.', 'iq-test-venda-…')}
              {text('connect', 'api', 'Endereço da API', undefined, 'https://api.demiourgos.com.br')}
            </div>
            {text('connect', 'script', 'Script do checkout', 'Só mude se o Connect pedir.', 'https://pay.demiourgos.com.br/pay/embed/checkout-v1.js')}
          </div>
          {saveBtn('connect')}

          <div className="mt-2">
            <div className="mb-2 text-[13px] font-medium text-ink-2">Últimos avisos recebidos</div>
            {!hooks ? <Loading /> : hooks.length === 0 ? <p className="text-[13.5px] text-muted">Nenhum aviso ainda. Faça um pedido de teste no Connect para conferir.</p> : (
              <ul className="max-h-64 divide-y divide-line overflow-y-auto rounded-2xl bg-soft/60 px-4 text-[13px]">
                {hooks.slice(0, 30).map((h) => (
                  <li key={h.id} className="flex items-center justify-between gap-3 py-2">
                    <span className="min-w-0 truncate font-mono">{h.event}</span>
                    <span className="flex flex-none items-center gap-2">
                      <span className={h.status === 'ok' || h.status === 'test' ? 'text-good' : h.status === 'error' ? 'text-bad' : 'text-muted'} title={h.error ?? ''}>{h.status}</span>
                      <span className="text-muted">{fmtDateTime(h.received_at)}</span>
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Card>

        {/* ---------- HubMail ---------- */}
        <Card title="E-mails: HubMail" action={<Status ok={info.status.mailWelcome && info.status.mailCode} yes="Os dois gatilhos ligados" no={info.status.mailWelcome || info.status.mailCode ? 'Falta um gatilho' : 'Falta configurar'} />}>
          <p className="mb-4 text-[13.5px] text-ink-2">O site manda dois e-mails: a <strong className="font-medium text-ink">senha de acesso</strong> depois da compra e o <strong className="font-medium text-ink">código de login</strong> ("Esqueci a senha"). Cada um é um gatilho no HubMail.</p>
          <Steps>
            <li>No HubMail, crie um template com estas variáveis (o site já manda o texto traduzido no idioma da pessoa):
              <span className="mt-1.5 flex flex-wrap gap-1.5">{MAIL_VARS.map((x) => <code key={x} className="rounded-md bg-soft px-1.5 py-0.5 font-mono text-[12px] text-ink">{`{{${x}}}`}</code>)}</span>
              <span className="mt-1 block text-[12.5px] text-muted"><span className="font-mono">destaque</span> é a senha ou o código; <span className="font-mono">link</span> leva para a página de login.</span>
            </li>
            <li>Crie dois gatilhos usando esse template (pode ser o mesmo nos dois) e copie a URL e o token de cada um.</li>
          </Steps>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="grid content-start gap-4 rounded-2xl bg-soft/60 p-4">
              <div className="flex items-center justify-between gap-2 text-[14px] font-medium">Senha de acesso (boas-vindas) <Status ok={info.status.mailWelcome} yes="Ligado" no="Desligado" /></div>
              {text('hubmail', 'welcomeUrl', 'URL do gatilho', undefined, 'https://…')}
              {secret('hubmail', 'welcomeToken', 'Token do gatilho')}
            </div>
            <div className="grid content-start gap-4 rounded-2xl bg-soft/60 p-4">
              <div className="flex items-center justify-between gap-2 text-[14px] font-medium">Código de login <Status ok={info.status.mailCode} yes="Ligado" no="Desligado" /></div>
              {text('hubmail', 'codeUrl', 'URL do gatilho', undefined, 'https://…')}
              {secret('hubmail', 'codeToken', 'Token do gatilho')}
            </div>
          </div>
          <div className="mt-4 max-w-[320px]">
            <Field label="Idioma padrão" hint="Usado quando não dá para saber o idioma da pessoa.">
              <select value={draft.hubmail.defaultLang} onChange={(e) => set('hubmail', 'defaultLang', e.target.value)} className={inputCls}>
                {MAIL_LANGS.map((l) => <option key={l} value={l}>{l}</option>)}
              </select>
            </Field>
          </div>
          {saveBtn('hubmail')}
          <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-end">
            <Field label="Enviar e-mail de teste para"><input type="email" value={testTo} onChange={(e) => setTestTo(e.target.value)} className={inputCls} /></Field>
            <button className={smallBtn()} disabled={!info.status.mailWelcome} onClick={() => testMail('welcome')}>Testar senha de acesso</button>
            <button className={smallBtn()} disabled={!info.status.mailCode} onClick={() => testMail('code')}>Testar código</button>
          </div>
        </Card>

        {/* ---------- Google ---------- */}
        <Card title="Login com Google" action={<Status ok={info.status.google} yes="Ligado" no="Desligado" />}>
          <p className="mb-4 text-[13.5px] text-ink-2">Com o ID preenchido, aparece o botão "Continuar com o Google" no login e nas configurações da conta. Se o e-mail do Google for o mesmo da compra, a pessoa entra direto.</p>
          <Steps>
            <li>Abra o <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noreferrer" className="font-medium text-ink">Google Cloud → Credenciais</a> (crie um projeto "CognitivAI" se ainda não tiver).</li>
            <li>Em <strong className="font-medium text-ink">Tela de consentimento OAuth</strong>: tipo Externo, nome CognitivAI, seu e-mail de suporte, e publique o app ("Em produção").</li>
            <li>Em <strong className="font-medium text-ink">Criar credenciais → ID do cliente OAuth</strong>: tipo <em>Aplicativo da Web</em>.</li>
            <li>Em <strong className="font-medium text-ink">Origens JavaScript autorizadas</strong>, adicione:
              <span className="mt-1.5 grid gap-1">{originsFor(info.webhookUrl).map((o) => <code key={o} className="w-fit rounded-md bg-soft px-1.5 py-0.5 font-mono text-[12px] text-ink">{o}</code>)}</span>
              <span className="mt-1 block text-[12.5px] text-muted">Não precisa de URI de redirecionamento.</span>
            </li>
            <li>Copie o <strong className="font-medium text-ink">ID do cliente</strong> e cole abaixo.</li>
          </Steps>
          <div className="mt-5">{text('google', 'clientId', 'ID do cliente', undefined, '1234567890-abc….apps.googleusercontent.com')}</div>
          {saveBtn('google')}
        </Card>

        <div className="grid gap-6 xl:grid-cols-2">
          {/* ---------- Pixels ---------- */}
          <Card title="Pixels e análise">
            <div className="grid gap-4">
              {text('pixels', 'clarity', 'Microsoft Clarity (ID do projeto)', 'Mapas de calor e gravações de sessão. Campos de texto chegam mascarados.', 'yts08jnasd')}
              {text('pixels', 'meta', 'Pixel da Meta (ID)', undefined, '1234567890123456')}
              {text('pixels', 'tiktok', 'Pixel do TikTok (ID)', undefined, 'C1ABCDEF2GH3IJ')}
              <p className="text-[12.5px] text-muted">Se o Zoio já envia as vendas para a Meta/TikTok pelo servidor, deixe esses pixels vazios para não contar a mesma venda duas vezes. O painel de administração nunca carrega pixel.</p>
            </div>
            {saveBtn('pixels')}
          </Card>

          {/* ---------- Suporte ---------- */}
          <Card title="Suporte">
            {text('support', 'email', 'E-mail de suporte', 'Aparece no rodapé, na ajuda e nos e-mails.', 'suporte@cognitivai.online')}
            {saveBtn('support')}
          </Card>
        </div>
      </div>
    </>
  );
}

/** Rascunho do formulário: segredos começam vazios (vazio = manter o atual). */
function blankSecrets(v: IntegrationValues): Draft {
  const d = structuredClone(v) as unknown as Draft;
  d.connect.webhookSecret = '';
  d.hubmail.welcomeToken = '';
  d.hubmail.codeToken = '';
  return d;
}

/** Origens para o Google: o endereço do app e o do site (sem o caminho). */
function originsFor(webhookUrl: string) {
  const out = new Set<string>();
  const { siteUrl, appUrl } = runtime();
  for (const u of [appUrl, siteUrl, webhookUrl]) { try { if (u) out.add(new URL(u).origin); } catch { /* ignora */ } }
  if (![...out].some((o) => o.includes('cognitivai.online'))) { out.add('https://cognitivai.online'); out.add('https://app.cognitivai.online'); }
  return [...out];
}
