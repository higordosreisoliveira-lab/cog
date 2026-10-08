// E-mails pelo HubMail, via "gatilho": POST na URL do gatilho com o token em x-hubmail-token.
// O assunto e o corpo do template no HubMail usam as variáveis que mandamos já traduzidas:
//   {{assunto}} {{titulo}} {{mensagem}} {{destaque}} {{botao}} {{link}} {{rodape}} {{nome}}
// Assim um gatilho só serve para os 12 idiomas.
import { ENV } from './env.js';
import { getIntegrations } from './settings.js';

type Kind = 'welcome' | 'code';
interface Texts { subject: string; title: string; message: string; button: string; footer: string }

const BRAND = 'CognitivAI';
const T: Record<string, Record<Kind, Texts>> = {
  'pt-BR': {
    welcome: { subject: `Seu acesso à ${BRAND}`, title: 'Sua conta está pronta', message: 'Use este e-mail e a senha abaixo para entrar quando quiser. Se preferir, entre com o Google usando este mesmo e-mail. Você pode trocar a senha em Configurações.', button: 'Entrar na minha conta', footer: 'Se você não fez esta compra, responda este e-mail.' },
    code: { subject: `Seu código de acesso à ${BRAND}`, title: 'Seu código de acesso', message: 'Use o código abaixo para entrar. Ele vale por 10 minutos.', button: 'Abrir a página de login', footer: 'Se você não pediu este código, pode ignorar este e-mail.' },
  },
  en: {
    welcome: { subject: `Your ${BRAND} access`, title: 'Your account is ready', message: 'Use this email and the password below to sign in anytime. You can also continue with Google using this same email. You can change your password in Settings.', button: 'Sign in to my account', footer: 'If you didn’t make this purchase, reply to this email.' },
    code: { subject: `Your ${BRAND} sign-in code`, title: 'Your sign-in code', message: 'Use the code below to sign in. It’s valid for 10 minutes.', button: 'Open the sign-in page', footer: 'If you didn’t request this code, you can ignore this email.' },
  },
  es: {
    welcome: { subject: `Tu acceso a ${BRAND}`, title: 'Tu cuenta está lista', message: 'Usa este correo y la contraseña de abajo para entrar cuando quieras. También puedes continuar con Google usando este mismo correo. Puedes cambiar la contraseña en Configuración.', button: 'Entrar a mi cuenta', footer: 'Si no hiciste esta compra, responde a este correo.' },
    code: { subject: `Tu código de acceso a ${BRAND}`, title: 'Tu código de acceso', message: 'Usa el código de abajo para entrar. Es válido por 10 minutos.', button: 'Abrir la página de acceso', footer: 'Si no pediste este código, puedes ignorar este correo.' },
  },
  fr: {
    welcome: { subject: `Votre accès à ${BRAND}`, title: 'Votre compte est prêt', message: 'Utilisez cet e-mail et le mot de passe ci-dessous pour vous connecter quand vous voulez. Vous pouvez aussi continuer avec Google en utilisant cette même adresse. Vous pouvez changer le mot de passe dans les paramètres.', button: 'Me connecter', footer: 'Si vous n’avez pas effectué cet achat, répondez à cet e-mail.' },
    code: { subject: `Votre code de connexion ${BRAND}`, title: 'Votre code de connexion', message: 'Utilisez le code ci-dessous pour vous connecter. Il est valable 10 minutes.', button: 'Ouvrir la page de connexion', footer: 'Si vous n’avez pas demandé ce code, ignorez cet e-mail.' },
  },
  de: {
    welcome: { subject: `Dein Zugang zu ${BRAND}`, title: 'Dein Konto ist bereit', message: 'Melde dich jederzeit mit dieser E-Mail-Adresse und dem Passwort unten an. Du kannst auch mit Google weitermachen, wenn es dieselbe Adresse ist. Das Passwort kannst du in den Einstellungen ändern.', button: 'Zu meinem Konto', footer: 'Wenn du diesen Kauf nicht getätigt hast, antworte auf diese E-Mail.' },
    code: { subject: `Dein Anmeldecode für ${BRAND}`, title: 'Dein Anmeldecode', message: 'Melde dich mit dem Code unten an. Er ist 10 Minuten gültig.', button: 'Anmeldeseite öffnen', footer: 'Wenn du diesen Code nicht angefordert hast, kannst du diese E-Mail ignorieren.' },
  },
  it: {
    welcome: { subject: `Il tuo accesso a ${BRAND}`, title: 'Il tuo account è pronto', message: 'Usa questa email e la password qui sotto per accedere quando vuoi. Puoi anche continuare con Google usando lo stesso indirizzo. Puoi cambiare la password nelle impostazioni.', button: 'Accedi al mio account', footer: 'Se non hai effettuato questo acquisto, rispondi a questa email.' },
    code: { subject: `Il tuo codice di accesso a ${BRAND}`, title: 'Il tuo codice di accesso', message: 'Usa il codice qui sotto per accedere. È valido per 10 minuti.', button: 'Apri la pagina di accesso', footer: 'Se non hai richiesto questo codice, puoi ignorare questa email.' },
  },
  nl: {
    welcome: { subject: `Je toegang tot ${BRAND}`, title: 'Je account is klaar', message: 'Log wanneer je wilt in met dit e-mailadres en het wachtwoord hieronder. Je kunt ook doorgaan met Google als het hetzelfde adres is. Je kunt het wachtwoord wijzigen bij Instellingen.', button: 'Naar mijn account', footer: 'Heb je deze aankoop niet gedaan? Beantwoord dan deze e-mail.' },
    code: { subject: `Je inlogcode voor ${BRAND}`, title: 'Je inlogcode', message: 'Gebruik de code hieronder om in te loggen. Hij is 10 minuten geldig.', button: 'Inlogpagina openen', footer: 'Heb je deze code niet aangevraagd? Dan kun je deze e-mail negeren.' },
  },
  pl: {
    welcome: { subject: `Twój dostęp do ${BRAND}`, title: 'Twoje konto jest gotowe', message: 'Zaloguj się w dowolnej chwili tym adresem e-mail i hasłem poniżej. Możesz też użyć Google z tym samym adresem. Hasło zmienisz w ustawieniach.', button: 'Przejdź do konta', footer: 'Jeśli to nie był twój zakup, odpowiedz na tę wiadomość.' },
    code: { subject: `Twój kod logowania do ${BRAND}`, title: 'Twój kod logowania', message: 'Użyj poniższego kodu, aby się zalogować. Jest ważny przez 10 minut.', button: 'Otwórz stronę logowania', footer: 'Jeśli nie prosiłeś o ten kod, zignoruj tę wiadomość.' },
  },
  tr: {
    welcome: { subject: `${BRAND} erişimin`, title: 'Hesabın hazır', message: 'Bu e-posta ve aşağıdaki şifreyle istediğin zaman giriş yapabilirsin. Aynı e-postaysa Google ile de devam edebilirsin. Şifreyi Ayarlar’dan değiştirebilirsin.', button: 'Hesabıma gir', footer: 'Bu satın alma işlemini sen yapmadıysan bu e-postayı yanıtla.' },
    code: { subject: `${BRAND} giriş kodun`, title: 'Giriş kodun', message: 'Giriş yapmak için aşağıdaki kodu kullan. 10 dakika geçerlidir.', button: 'Giriş sayfasını aç', footer: 'Bu kodu sen istemediysen bu e-postayı yok sayabilirsin.' },
  },
  id: {
    welcome: { subject: `Akses ${BRAND} kamu`, title: 'Akunmu sudah siap', message: 'Gunakan email ini dan kata sandi di bawah untuk masuk kapan saja. Kamu juga bisa lanjut dengan Google memakai email yang sama. Kata sandi bisa diganti di Pengaturan.', button: 'Masuk ke akunku', footer: 'Jika kamu tidak melakukan pembelian ini, balas email ini.' },
    code: { subject: `Kode masuk ${BRAND} kamu`, title: 'Kode masukmu', message: 'Gunakan kode di bawah untuk masuk. Kode berlaku 10 menit.', button: 'Buka halaman masuk', footer: 'Jika kamu tidak meminta kode ini, abaikan email ini.' },
  },
  ja: {
    welcome: { subject: `${BRAND}のログイン情報`, title: 'アカウントの準備ができました', message: 'このメールアドレスと下記のパスワードで、いつでもログインできます。同じメールアドレスのGoogleアカウントでもログインできます。パスワードは設定から変更できます。', button: 'アカウントにログイン', footer: 'お心当たりのないご購入の場合は、このメールに返信してください。' },
    code: { subject: `${BRAND}のログインコード`, title: 'ログインコード', message: '下記のコードでログインしてください。有効期限は10分です。', button: 'ログインページを開く', footer: 'このコードをリクエストしていない場合は、このメールを無視してください。' },
  },
  ko: {
    welcome: { subject: `${BRAND} 로그인 정보`, title: '계정이 준비됐어요', message: '이 이메일과 아래 비밀번호로 언제든 로그인할 수 있어요. 같은 이메일의 Google 계정으로도 로그인할 수 있어요. 비밀번호는 설정에서 바꿀 수 있어요.', button: '내 계정으로 가기', footer: '본인이 구매하지 않았다면 이 이메일에 답장해 주세요.' },
    code: { subject: `${BRAND} 로그인 코드`, title: '로그인 코드', message: '아래 코드로 로그인하세요. 10분 동안 유효해요.', button: '로그인 페이지 열기', footer: '코드를 요청하지 않았다면 이 이메일은 무시하셔도 돼요.' },
  },
};

export const LANGS = Object.keys(T);
export const cleanLang = (l: unknown) => (typeof l === 'string' && LANGS.includes(l) ? l : getIntegrations().hubmail.defaultLang || 'pt-BR');

export const mailConfigured = (kind: Kind) => {
  const h = getIntegrations().hubmail;
  return kind === 'welcome' ? !!(h.welcomeUrl && h.welcomeToken) : !!(h.codeUrl && h.codeToken);
};

/**
 * Manda o e-mail. Devolve true se o HubMail aceitou. Sem gatilho configurado: em desenvolvimento
 * mostra o conteúdo no terminal; em produção registra o aviso e devolve false.
 */
export async function sendMail(kind: Kind, to: string, lang: string, vars: { highlight: string; name?: string; dedupe?: string }): Promise<boolean> {
  const t = (T[lang] ?? T['pt-BR'])[kind];
  const h = getIntegrations().hubmail;
  const url = kind === 'welcome' ? h.welcomeUrl : h.codeUrl;
  const token = kind === 'welcome' ? h.welcomeToken : h.codeToken;
  const loginUrl = `${ENV.appUrl || ENV.siteUrl || 'http://localhost:5180'}/${lang}/login`;
  const body = { email: to, nome: vars.name ?? '', assunto: t.subject, titulo: t.title, mensagem: t.message, destaque: vars.highlight, botao: t.button, link: loginUrl, rodape: t.footer, idioma: lang, ...(vars.dedupe ? { envioId: vars.dedupe } : {}) };
  if (!url || !token) {
    if (!ENV.prod) console.log(`[e-mail não configurado] ${kind} → ${to}: ${t.subject} | ${vars.highlight}`);
    else console.warn(`[e-mail] gatilho "${kind}" não configurado no admin; e-mail para ${to.replace(/(.{2}).*@/, '$1•••@')} não saiu.`);
    return false;
  }
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-hubmail-token': token },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    if (r.status === 202 || r.status === 200) return true;
    console.warn(`[e-mail] HubMail respondeu ${r.status} para o gatilho "${kind}".`);
    return false;
  } catch (e) {
    console.warn(`[e-mail] falha ao chamar o HubMail (${kind}):`, (e as Error).message);
    return false;
  }
}
