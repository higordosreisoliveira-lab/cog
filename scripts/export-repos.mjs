// Gera as duas pastas que vão para o GitHub, a partir deste projeto, numa pasta à parte:
//   ../cognitivai-github/QI     → funil (teste + página de venda), cognitivai.online      (SERVE_MODE=site)
//   ../cognitivai-github/appqi  → área do cliente + admin + API + banco, app.cognitivai.online (SERVE_MODE=app)
// O código é o mesmo; muda o Dockerfile, o README e as variáveis de cada um.
// Uso: node scripts/export-repos.mjs   (depois: commit e push em cada pasta)
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve, relative, sep } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const OUT = resolve(ROOT, '..', 'cognitivai-github');
const MARK = '.cognitivai-export'; // só limpamos pastas criadas por este script

// Windows não diferencia maiúsculas: "QI" e "qi" são a mesma pasta. Nunca mexe no próprio projeto.
const same = (a, b) => a.toLowerCase() === b.toLowerCase();
const inside = (child, parent) => child.toLowerCase().startsWith(parent.toLowerCase() + sep);
function assertSafe(dest) {
  if (same(dest, ROOT) || inside(dest, ROOT) || inside(ROOT, dest)) throw new Error(`Destino inseguro (é ou contém o projeto): ${dest}`);
  if (existsSync(dest) && readdirSync(dest).some((f) => f !== '.git') && !existsSync(join(dest, MARK))) {
    throw new Error(`A pasta ${dest} já existe e não foi criada por este script. Nada foi apagado.`);
  }
}
const SKIP = new Set(['node_modules', 'dist', 'dist-site', 'dist-server', 'data', '.claude', '.git', '.vscode']);
const SKIP_FILES = [/^\.env(\..*)?$/, /\.log$/, /^export-repos\.mjs$/, /\.tar\.gz$/, /\.zip$/];

function copyTree(dest) {
  assertSafe(dest);
  if (!existsSync(dest)) mkdirSync(dest, { recursive: true });
  // Limpa tudo menos o .git (o histórico do repositório continua).
  for (const f of readdirSync(dest)) if (f !== '.git') rmSync(join(dest, f), { recursive: true, force: true });
  cpSync(ROOT, dest, {
    recursive: true,
    filter: (src) => {
      const rel = relative(ROOT, src);
      if (!rel) return true;
      const parts = rel.split(sep);
      if (parts.some((p) => SKIP.has(p))) return false;
      const name = parts[parts.length - 1];
      return !SKIP_FILES.some((re) => re.test(name));
    },
  });
}

const GITIGNORE = `node_modules
dist
dist-site
dist-server
data
.env
.env.*
!.env.example
*.log
.DS_Store
.cognitivai-export
`;

const DOCKERIGNORE = `node_modules
dist
dist-site
dist-server
data
.env
.env.*
.git
*.log
`;

const HEALTH = 'HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD wget -qO- http://127.0.0.1:3000/api/health >/dev/null || exit 1';

const TARGETS = {
  QI: {
    dockerfile: `# Funil da CognitivAI (cognitivai.online): teste, página de venda e relatório.
# Hospedagem do Hub: escolha "Dockerfile" ao criar o site; porta 3000. Não precisa de volume.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Pacote do funil: sem o painel de administração.
ENV VITE_TARGET=site
RUN npm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production \\
    SERVE_MODE=site \\
    PORT=3000
COPY package.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/dist-server ./dist-server
USER node
EXPOSE 3000
${HEALTH}
CMD ["node", "--disable-warning=ExperimentalWarning", "dist-server/server/index.js"]
`,
    env: `# Variáveis do FUNIL (Hospedagem do Hub → site → Variáveis). Nenhuma é segredo.
SITE_URL=https://cognitivai.online
APP_URL=https://app.cognitivai.online
TRUST_PROXY=1
# Opcional: hosts extras liberados na política de segurança (separados por espaço)
# CSP_EXTRA_HOSTS=
`,
    readme: `# CognitivAI · Funil (cognitivai.online)

Teste de QI, página de venda (checkout do Connect) e relatório. Este repositório roda em
**modo funil** (\`SERVE_MODE=site\`): não tem banco de dados. Tudo que é conta, compra e
configuração mora no app (**appqi**, \`app.cognitivai.online\`), e o funil conversa com a API dele.

## Subir na Hospedagem do Hub
1. Novo Site → este repositório → branch \`main\` → **Dockerfile** → porta **3000**.
2. Variáveis (veja \`.env.example\`): \`SITE_URL\`, \`APP_URL\`, \`TRUST_PROXY=1\`.
3. Domínio: \`cognitivai.online\` (e \`www\`) com o proxy da Cloudflare ligado. Marque como canônico.
4. Suba o **appqi** antes (ou junto): a configuração (checkout, pixels, Google) vem de lá.

## Como funciona
- A página recebe a configuração pública do app (\`APP_URL/api/config\`, atualizada a cada minuto),
  então mudanças feitas no admin valem aqui sem publicar de novo.
- Depois do pagamento, o funil confirma a compra na API do app; a pessoa entra logada em
  \`app.cognitivai.online\` (cookie em \`.cognitivai.online\`).
- \`/admin\` não existe neste domínio. Sem source maps, sem arquivos ocultos, cabeçalhos de segurança (CSP, HSTS…).

## Desenvolvimento
\`\`\`bash
npm install
npm run dev          # site em http://localhost:5180
npm run dev:server   # API em http://localhost:3000 (modo app, com banco local)
\`\`\`
O código é o mesmo do **appqi**; as duas pastas são geradas a partir do projeto principal.
`,
  },
  appqi: {
    dockerfile: `# App da CognitivAI (app.cognitivai.online): área do cliente, admin, API, webhook do Connect e banco.
# Hospedagem do Hub: escolha "Dockerfile" ao criar o site; porta 3000.
# O banco (SQLite) fica em /app/data, que o Hub guarda num volume que sobrevive a redeploy.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production \\
    SERVE_MODE=app \\
    DATA_DIR=/app/data \\
    PORT=3000
COPY package.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/dist-server ./dist-server
RUN apk add --no-cache su-exec && mkdir -p /app/data
EXPOSE 3000
${HEALTH}
# O volume de /app/data pode chegar como root: ajusta o dono e roda o app como usuário comum (node).
CMD ["sh", "-c", "chown -R node:node /app/data 2>/dev/null; exec su-exec node node --disable-warning=ExperimentalWarning dist-server/server/index.js"]
`,
    env: `# Variáveis do APP (Hospedagem do Hub → site → Variáveis). Guarde os valores reais só no Hub.
# Obrigatório: 32+ caracteres aleatórios. Gere com:  node -e "console.log(require('crypto').randomBytes(32).toString('base64url'))"
APP_SECRET=
SITE_URL=https://cognitivai.online
APP_URL=https://app.cognitivai.online
COOKIE_DOMAIN=.cognitivai.online
TRUST_PROXY=1
DATA_DIR=/app/data
# Primeiro admin (só na primeira subida). Depois de entrar: troque a senha, ligue as 2 etapas e APAGUE ADMIN_PASSWORD.
ADMIN_EMAIL=
ADMIN_PASSWORD=
`,
    readme: `# CognitivAI · App (app.cognitivai.online)

Área do cliente (relatório, jogos, testes, cursos, indicações), painel de administração, API,
webhook do Connect e banco de dados (SQLite em \`/app/data\`). Roda em **modo app** (\`SERVE_MODE=app\`).
O funil (\`cognitivai.online\`) fica no repositório **QI** e usa a API deste app.

## Subir na Hospedagem do Hub
1. Novo Site → este repositório → branch \`main\` → **Dockerfile** → porta **3000**.
2. Variáveis (veja \`.env.example\`): \`APP_SECRET\` (obrigatório), \`SITE_URL\`, \`APP_URL\`,
   \`COOKIE_DOMAIN=.cognitivai.online\`, \`TRUST_PROXY=1\`, \`DATA_DIR=/app/data\`, e na primeira vez
   \`ADMIN_EMAIL\` + \`ADMIN_PASSWORD\` (12+ caracteres).
3. Domínio: \`app.cognitivai.online\` com o proxy da Cloudflare ligado.
4. Entre em \`https://app.cognitivai.online/admin\`, troque a senha, ligue a verificação em duas
   etapas e apague \`ADMIN_PASSWORD\` das variáveis.
5. Admin → **Integrações**:
   - **Connect**: copie a URL do webhook, cadastre no Connect e cole o segredo (\`whsec_…\`).
   - **HubMail**: dois gatilhos (senha de acesso e código de login), URL + token de cada.
     Sem isso o cliente não recebe a senha nem o código de "Esqueci a senha".
   - **Google**: ID do cliente OAuth (passo a passo na própria tela).
   - **Pixels**: Clarity já vem com \`yts08jnasd\`; Meta/TikTok opcionais.

## Segurança
- Senhas com scrypt; sessão em cookie HttpOnly (o JavaScript não lê); admin com cookie separado,
  só neste domínio, 12 h de validade (2 h sem uso), bloqueio após 5 erros e verificação em duas etapas.
- Proteção contra requisição forjada (cabeçalho + origem), CORS liberado só para o funil e nunca para o admin.
- Chaves das integrações criptografadas com \`APP_SECRET\` (trocar o segredo = colar as chaves de novo).
- Webhook do Connect com assinatura verificada (Standard Webhooks) e sem repetição.
- Sem source maps, sem arquivos ocultos, \`noindex\` em todo o app, CSP/HSTS/X-Frame-Options.
- Todas as ações do admin ficam no registro (Admin → Conta e segurança).

## Observações
- O Connect não tem API de cancelamento: pedidos de cancelamento feitos no app aparecem na
  Visão geral do admin para você cancelar no Connect e marcar como cancelado.
- Backup: o banco inteiro é \`/app/data/cognitivai.db\` (+ arquivos \`-wal\`/\`-shm\`).

## Desenvolvimento
\`\`\`bash
npm install
npm run seed         # cria admin e cliente de teste locais (senhas em data/credenciais-locais.txt)
npm run dev:server   # API em http://localhost:3000
npm run dev          # site em http://localhost:5180
\`\`\`
`,
  },
};

for (const name of Object.keys(TARGETS)) assertSafe(join(OUT, name)); // confere tudo antes de mexer
for (const [name, t] of Object.entries(TARGETS)) {
  const dest = join(OUT, name);
  copyTree(dest);
  writeFileSync(join(dest, MARK), 'Pasta gerada por scripts/export-repos.mjs do projeto CognitivAI.\n');
  writeFileSync(join(dest, 'Dockerfile'), t.dockerfile);
  writeFileSync(join(dest, '.env.example'), t.env);
  writeFileSync(join(dest, 'README.md'), t.readme);
  writeFileSync(join(dest, '.gitignore'), GITIGNORE);
  writeFileSync(join(dest, '.dockerignore'), DOCKERIGNORE);
  console.log(`✓ ${name} → ${dest}`);
}
