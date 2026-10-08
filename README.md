# CognitivAI — teste de QI online

Funil de teste de QI no formato do myiq.com: landing → teste com 40 perguntas → "calculando seu QI" → captura de e-mail → checkout → relatório completo com certificado. Em 12 idiomas, com seletor de bandeira.

Stack: Vite + React 19 + TypeScript + Tailwind CSS 4 + React Router. Fontes Geist e Geist Mono.

## Rodar

```bash
npm install
npm run seed         # cria admin e cliente de teste locais (senhas em data/credenciais-locais.txt)
npm run dev:server   # API + banco local em http://localhost:3000
npm run dev          # site em http://localhost:5180 (o /api vai para a porta 3000)
npm run build        # confere tipos (site e servidor) e traduções, gera dist/ e dist-server/
```

O servidor (`server/`) é Node 24 puro, sem dependências: API, banco SQLite (`node:sqlite`), webhook do
Connect, e-mails pelo HubMail e o site. Roda em dois modos (`SERVE_MODE`): **app** (padrão; API, banco,
área do cliente e admin) e **site** (só o funil, sem banco, usando a API do `APP_URL`).

## Idiomas

Toda URL começa com o idioma: `/pt-BR`, `/en`, `/es`, `/fr`, `/de`, `/it`, `/nl`, `/pl`, `/tr`, `/id`, `/ja`, `/ko`. A raiz `/` manda para o idioma salvo ou o do navegador (inglês se nenhum bater). Para anúncios por país, aponte direto para o prefixo (ex.: `https://seusite.com/es`).

- Textos: `src/i18n/locales/<idioma>.ts`. O português (`pt.ts`) é a fonte; o tipo `Messages` sai dele e o TypeScript acusa qualquer texto faltando nos outros.
- Lista de idiomas, bandeira e moeda de cada um: `LOCALES` em `src/i18n/index.tsx`.
- **Adicionar um idioma:** copie `pt.ts` para `xx.ts`, traduza mantendo a ordem das listas (as respostas certas dependem da posição), e adicione o idioma em `LOCALES` e `LOADERS`. A bandeira vem do pacote `country-flag-icons` (adicione o país em `FLAGS`, em `src/components/LanguageSwitcher.tsx`).
- Cada idioma é baixado só quando usado.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Marca, preços por moeda, checkout, webhook de leads, pixels, avaliações | `src/config.ts` |
| Estrutura das perguntas (tipo, resposta certa, peso) | `src/lib/questions.ts` |
| Textos de tudo, inclusive perguntas e palavras de memória | `src/i18n/locales/*.ts` |
| Matrizes visuais (16 modelos; cada sessão gera variações por semente com `makePuzzle`) | `src/lib/matrices.ts` |
| Perguntas alternativas do teste de QI (sorteadas por sessão) | `src/lib/qbank.ts` + textos em `src/content/qbank/<idioma>.ts` |
| Pontuação e conversão para QI | `src/lib/session.ts` (`computeResult`, `CONFIG.norms`) |
| Certificado | `src/lib/certificate.ts` |
| Cores e fontes (tokens do Tailwind) | `src/index.css` |

## Área do cliente (depois da compra)

Depois do pagamento, a conta é criada com o e-mail da compra e a pessoa entra direto em `/:lang/app`. Para voltar depois, ela usa **Entrar** (`/:lang/login`): digita o e-mail e recebe um código de 6 dígitos.

| Rota | O que tem |
| --- | --- |
| `/app` | Início: QI, sequência de dias, treino do dia (3 jogos), curso para continuar, testes |
| `/app/report` | Relatório completo (curva, mapa cognitivo, certificado, posição, pensadores, respostas, PDF, indicação, outros testes) |
| `/app/games`, `/app/games/:id` | 6 jogos com recorde salvo: Sudoku, 2048, memória, sequência, Schulte, cálculo rápido |
| `/app/tests`, `/app/tests/:id`, `/app/tests/:id/result` | 19 testes em 5 categorias (personalidade, relacionamentos, trabalho, bem-estar, neurodivergência): personalidade, inteligência emocional, carreira, forças, arquétipos, autoconfiança, TDAH, autismo, dopamina, ansiedade, estresse, humor deprimido, burnout, estilo de amor, apego, síndrome do impostor, valores no trabalho, procrastinação, gestão do tempo |
| `/app/courses`, `/app/courses/:id/:lesson` | 9 cursos curtos com exercícios: matrizes, memória, lógica, foco, inteligência emocional, confiança no trabalho, criatividade, decisões, resolução de problemas |
| `/app/referrals` | Indique e ganhe: link pessoal, indicações, saldo e saque |
| `/app/settings` | Nome, idioma, assinatura (cancelar/reativar), suporte, excluir conta |

Login, assinatura e indicações ficam no servidor (`server/routes-user.ts`); o navegador só chama a API (`src/lib/account.ts`, `src/lib/api.ts`). A sessão é um cookie HttpOnly válido em `.cognitivai.online`.

## Painel de administração (`/admin`)

Só em `app.cognitivai.online/admin` (no funil, `/admin` não existe). Login com e-mail + senha e verificação em duas etapas (app autenticador). O primeiro admin vem de `ADMIN_EMAIL`/`ADMIN_PASSWORD` na primeira subida; em desenvolvimento, `npm run seed`.

| Tela | O que tem |
| --- | --- |
| Visão geral | Pedidos de cancelamento para fazer no Connect, clientes, em teste, pagantes, conversão teste → pago, receita estimada (30 dias, MRR, total), novos clientes por dia, funil de vendas |
| Clientes | Busca (nome, e-mail, pedido), filtro por status, CSV; detalhe com assinatura, acesso (senha/Google), cobranças, QI, testes, uso, indicações; ações: mais 7 dias, marcar como cancelada, reativar, liberar acesso, enviar senha nova, desconectar aparelhos, excluir |
| Indicações e saques | Saques para pagar (marcar como pago / recusar), quem mais indica, saques pagos |
| Integrações | Connect (URL e segredo do webhook, checkout, últimos avisos), HubMail (2 gatilhos + e-mail de teste), login com Google (passo a passo), Clarity/Meta/TikTok, e-mail de suporte |
| Conta e segurança | Verificação em duas etapas, troca de senha, registro de todas as ações |

### Depois do pagamento e login

- Checkout: o Connect embutido na página (`CONFIG.connect`, `src/components/ConnectPay.tsx`). Só funciona no domínio liberado em Connect → Checkout do site (`https://cognitivai.online`); em `npm run dev` há um botão "Simular pagamento aprovado".
- Pagou: a pessoa vai direto para o relatório dentro da área do cliente, já logada com o e-mail da compra. A página de obrigado do Connect (`/user`) leva ao mesmo lugar.
- A conta nasce com uma **senha aleatória enviada por e-mail** (gatilho do HubMail). Em desenvolvimento, sem HubMail configurado, a senha aparece no aviso "Sua conta está pronta".
- Login (`/:lang/login`): e-mail + senha; **Google** (entra direto se o e-mail do Google for o da compra; aparece quando o ID do cliente é colado em Admin → Integrações); e código de 6 dígitos por e-mail em "Esqueci a senha". Trocar senha e conectar o Google: Configurações → Acesso.
- Preços: iguais ao produto do Connect, em dólar para todos os idiomas (`CONFIG.pricing`, `chargeCurrency`).
- Quem confirma a venda é o webhook do Connect (assinatura verificada); o `?status=paid` da URL não libera nada sozinho.
- Certificado: o QR code abre `/:lang/v/<código>`, que confere no servidor e mostra nome, QI e data.

### Hospedagem (Hub): dois repositórios

| Repositório | Domínio | Modo | Banco |
| --- | --- | --- | --- |
| github.com/higorreiskz/QI | cognitivai.online | `SERVE_MODE=site` (teste, venda, relatório) | não |
| github.com/higorreiskz/appqi | app.cognitivai.online | `SERVE_MODE=app` (área do cliente, admin, API) | `/app/data` |

O código-fonte fica **só aqui**. Para atualizar os dois repositórios: `node scripts/export-repos.mjs` (gera `../cognitivai-github/QI` e `../cognitivai-github/appqi`, cada um com seu Dockerfile, README e `.env.example`), depois commit e push em cada pasta. As variáveis e o passo a passo estão no README de cada repositório.

### Programa de indicação

- Link pessoal: `/r/CODIGO`. Vale por 30 dias depois do clique; o último link clicado vence.
- Valor por indicação e saque mínimo, por moeda: `CONFIG.referral` em `src/config.ts`. A moeda segue o país/idioma da pessoa (como os preços); o saldo conta indicações, então continua certo se ela trocar de idioma.
- Saque por Pix só aparece em reais (Brasil); nos outros países, só PayPal.
- A recompensa só é confirmada quando o indicado passa do período de teste e é cobrado. Autoindicação é ignorada.
- As regras aparecem na página "Indique e ganhe"; inclua-as também nos termos de uso.

Textos da área do cliente: `src/i18n/app/<idioma>.ts`.

### Testes e cursos

Cada teste ou curso é uma pasta, carregada só quando a pessoa abre:

- `src/content/tests/<id>/structure.ts` — dimensões, itens (com `reverse`), pontos da escala, tipo de resultado (`profile`, `top`, `screen` com faixas, `quadrant`), alerta de ajuda urgente, **formato de resposta** e tarefas interativas.
- `src/content/tests/<id>/<idioma>.ts` — textos (`pt.ts` é a fonte). Mesma ideia em `src/content/courses/<id>/`.
- Ordem na lista: `TEST_ORDER` e `COURSE_ORDER` em `src/content/catalog.ts`. O formato de tudo está em `src/content/schema.ts`.

Formatos de resposta (`input` na estrutura; componentes em `src/pages/app/TestInputs.tsx`):

| `input` | Como aparece | Usado em |
| --- | --- | --- |
| `circles` | Círculos de concordância, maiores nas pontas | personalidade, EQ, autismo, autoconfiança, amor, apego, arquétipos |
| `slider` | Régua arrastável (frequência) | TDAH, dopamina, estresse, burnout, impostor, procrastinação |
| `cards` | Cartões grandes com barras de intensidade | carreira, ansiedade, humor deprimido, gestão do tempo |
| `stars` | Estrelas de 1 a 5 | forças, valores no trabalho |
| `list` | Opções empilhadas (padrão) | — |

Tarefas interativas (`tasks`): `gonogo` (atenção: tocar em toda letra menos o X; no TDAH) e `delay` ("agora ou depois?", escolhas de recompensa; na dopamina). O resultado delas aparece na página de resultado em "Tarefas práticas".

### Variações do teste de QI

Cada sessão nova sorteia (`newSession` em `src/lib/session.ts`):

- uma semente por matriz (`matrixSeeds`): `makePuzzle(i, semente)` gera outra matriz com a mesma regra e dificuldade, validada (só uma alternativa obedece à regra);
- uma pergunta por posição do banco (`variants`): 15 posições têm 4 alternativas além da original.

O relatório mostra exatamente as perguntas que a pessoa viu. Sessões antigas, sem esses campos, continuam com as perguntas originais. Se mudar o gerador de matrizes, as sementes antigas passam a desenhar outras matrizes (a pontuação continua certa, mas a revisão de respostas mostraria uma matriz diferente).

`npm run check:i18n` confere estrutura e traduções de tudo isso (site, app, cada teste/curso e o banco de perguntas).

## Rotas

- `/:lang` landing
- `/:lang/test` quiz (`?novo=1` começa do zero; sem o parâmetro, retoma de onde parou)
- `/:lang/analyzing` progresso com 5 perguntas em modal (2 de memória contam pontos)
- `/:lang/email` captura do e-mail (POST em `CONFIG.leadWebhook`, se configurado)
- `/:lang/checkout` resumo e pagamento → `CONFIG.checkoutUrl?ref=<sessão>&method=pix|card&lang=..&currency=..`
- `/:lang/report` relatório completo (exige pagamento; o retorno do checkout é `/:lang/report?status=paid`)
- `/:lang/terms`, `/:lang/privacy`

Sem `checkoutUrl`, o app roda em **modo demonstração**: o botão de pagar libera o relatório direto. O botão de Pix só aparece para quem paga em reais.

## Como a pontuação funciona

37 itens valem pontos, cada um com peso por dificuldade. A proporção ponderada de acertos é tratada como uma normal `N(0,55; 0,18)` e convertida para a escala de QI (média 100, DP 15), limitada entre 65 e 150. Exemplos: ~20% de acerto (chute) ≈ QI 71; ~55% ≈ 100; ~75% ≈ 115; ~90% ≈ 129. Ajuste `CONFIG.norms` quando tiver dados reais dos participantes.

## Antes de abrir as vendas

- **HubMail**: os dois gatilhos (senha de acesso e código de login). Sem eles o cliente não recebe a senha.
- **Connect**: webhook cadastrado com a URL do admin e o segredo colado em Integrações.
- **Google**: ID do cliente OAuth em Integrações (opcional, mas pedido).
- **Revisão das traduções por falantes nativos**, principalmente das perguntas.
- **Avaliações reais** em `CONFIG.reviews` (a seção fica oculta enquanto estiver vazia).
- **Termos e privacidade** revisados por um advogado nos países onde for vender.
