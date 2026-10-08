// Configuração central do app. Edite aqui marca, preços, checkout e integrações.

export interface Review {
  title: string;
  text: string;
  name: string;
  place?: string;
  stars: number;
}

export type Currency = 'BRL' | 'USD' | 'EUR' | 'PLN' | 'TRY' | 'JPY' | 'KRW' | 'IDR';

export const CONFIG = {
  brand: 'CognitivAI',
  supportEmail: 'suport@cognitivai.online', // editável no admin (Integrações → Suporte)

  // Empresa responsável (rodapé, Termos e Privacidade).
  company: {
    name: 'XM GROUP LLC',
    address: '2335 East Atlantic Boulevard, Pompano Beach, FL 33062, USA',
    contactEmail: 'contact@cognitivai.online',
  },

  totalQuestions: 40,
  durationMin: 20,

  // Preços IGUAIS aos do produto no Connect (checkout "IQ Test · Venda 2x"): US$ 1 na hora (produto
  // "IQ Test") e, depois de 3 dias de teste, US$ 7 a cada 5 dias (produto "Tax AI"). Mudou lá, mude
  // aqui — o site precisa mostrar exatamente o que vai ser cobrado.
  // `anchor` (riscado) = US$ 5, o preço real cobrado até 07/10/2026. Preço "de" tem de ser um preço
  // que existiu de verdade (CDC, FTC, regras de anúncio da Meta).
  pricing: {
    trialDays: 3,
    periodDays: 5,
    // Moeda da cobrança. Preenchida, TODOS os idiomas mostram o preço nessa moeda (o produto do
    // Connect cobra em dólar). null = cada idioma usa a própria moeda da tabela abaixo.
    // Valores por moeda. Cada idioma usa uma moeda (veja src/i18n/index.tsx).
    // `anchor` = preço "de" riscado no checkout; deixe sem para não exibir.
    // Só use preço riscado e cronômetro se a oferta for real (a lei do consumidor proíbe desconto e prazo fictícios).
    chargeCurrency: 'USD' as Currency | null,
    currencies: {
      BRL: { today: 4.9, after: 49.9 },
      USD: { today: 1, after: 7, anchor: 5 },
      EUR: { today: 1.99, after: 29.99 },
      PLN: { today: 7.99, after: 119.99 },
      TRY: { today: 69.99, after: 999.99 },
      JPY: { today: 300, after: 4400 },
      KRW: { today: 2900, after: 42000 },
      IDR: { today: 29000, after: 449000 },
    } as Record<Currency, { today: number; after: number; anchor?: number }>,
    offerMinutes: 0, // cronômetro de oferta no checkout (0 = desligado)
  },

  // URL do checkout (HubPay, Stripe, etc.). Recebe ?ref=<sessão>&method=pix|card&lang=<idioma>&currency=<moeda>.
  // Vazio = modo demonstração: o botão libera o relatório direto, útil para testar o funil.
  // O checkout deve redirecionar de volta para /<idioma>/report?status=paid — em produção,
  // confirme o pagamento no servidor (webhook do gateway), porque um parâmetro na URL pode ser forjado.
  checkoutUrl: '',

  // Checkout embutido do Connect (Hub): o campo do cartão e a cobrança vêm do Connect, dentro da
  // nossa página. Com `checkout` preenchido, ele substitui o modo demonstração e o checkoutUrl.
  // O site precisa estar liberado em Connect → Checkout do site: https://cognitivai.online.
  connect: {
    script: 'https://pay.demiourgos.com.br/pay/embed/checkout-v1.js',
    api: 'https://api.demiourgos.com.br',
    checkout: 'iq-test-venda-2x-a4433d',
  },

  // Login com Google (opcional). Crie um "ID do cliente OAuth" do tipo Aplicativo Web no Google
  // Cloud, com as origens autorizadas (https://cognitivai.online e http://localhost:5180), e cole aqui.
  // Vazio = o botão do Google não aparece; o login por código no e-mail continua funcionando.
  googleClientId: '',

  // Endpoint que recebe POST JSON { email, iq, percentile, sessionId, lang, ... } na captura do
  // e-mail. Vazio = o e-mail fica só no navegador do visitante.
  leadWebhook: '',

  pixels: {
    meta: '',
    tiktok: '',
    // Microsoft Clarity (mapas de calor e gravação de sessões). Também editável no admin.
    clarity: 'yts08jnasd',
  },

  // Programa de indicação: quanto pagamos por cada pessoa indicada que vira assinante, na moeda
  // do país/idioma de quem indicou (a mesma tabela de moedas dos preços). A recompensa só é confirmada depois que o indicado passa do período de
  // teste e é cobrado (evita pagar por quem cancela no teste). `minPayout` = saque mínimo.
  referral: {
    enabled: true,
    rewards: { BRL: 15, USD: 5, EUR: 5, PLN: 20, TRY: 150, JPY: 700, KRW: 6500, IDR: 70000 } as Record<Currency, number>,
    minPayout: { BRL: 50, USD: 20, EUR: 20, PLN: 80, TRY: 600, JPY: 3000, KRW: 26000, IDR: 280000 } as Record<Currency, number>,
  },

  // Painel de administração (/admin): e-mails que podem entrar. Na versão simulada, o código de
  // acesso aparece na tela; em produção, a lista e o login precisam ficar no servidor.
  admin: {
    emails: ['admin@exemplo.com'],
  },

  // Calibração: a proporção ponderada de acertos é tratada como N(mean, sd) e convertida
  // para QI com média 100 e desvio padrão 15. Ajuste quando tiver dados reais.
  norms: { mean: 0.55, sd: 0.18 },

  // Avaliações REAIS de clientes. As seções de avaliações somem enquanto a lista estiver vazia.
  reviews: [] as Review[],
};

/** Moeda em que a pessoa é cobrada: a de CONFIG.pricing.chargeCurrency ou, sem ela, a do idioma. */
export const chargeCurrency = (local: Currency): Currency => CONFIG.pricing.chargeCurrency ?? local;
