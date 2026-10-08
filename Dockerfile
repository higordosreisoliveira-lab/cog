# Build para a Hospedagem do Hub (escolha "Dockerfile" ao criar o site; porta 3000).
# O banco (SQLite) fica em /app/data, que o Hub guarda num volume que sobrevive a redeploy.
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# Confere tipos do site e do servidor, traduções e gera dist/ (site) e dist-server/ (API).
RUN npm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production \
    DATA_DIR=/app/data \
    PORT=3000
COPY package.json ./
COPY --from=build /app/dist ./dist
COPY --from=build /app/dist-server ./dist-server
RUN apk add --no-cache su-exec && mkdir -p /app/data
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD wget -qO- http://127.0.0.1:3000/api/health >/dev/null || exit 1
# O volume de /app/data pode chegar como root: ajusta o dono e roda o app como usuário comum (node).
CMD ["sh", "-c", "chown -R node:node /app/data 2>/dev/null; exec su-exec node node --disable-warning=ExperimentalWarning dist-server/server/index.js"]
