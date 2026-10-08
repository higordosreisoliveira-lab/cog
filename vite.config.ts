import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

const API = process.env.API_URL ?? 'http://localhost:3000';

/** Em desenvolvimento, embute a mesma configuração pública que o servidor embute em produção. */
function devConfig(): Plugin {
  return {
    name: 'cognitivai-dev-config',
    apply: 'serve',
    async transformIndexHtml(html) {
      try {
        const cfg = await (await fetch(`${API}/api/config`, { signal: AbortSignal.timeout(1500) })).json();
        return html.replace('</head>', `<script id="cg-config" type="application/json">${JSON.stringify(cfg).replace(/</g, '\\u003c')}</script></head>`);
      } catch {
        return html; // servidor desligado: o site usa os valores padrão de src/config.ts
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), devConfig()],
  server: {
    proxy: { '/api': { target: API, changeOrigin: false } },
  },
  build: {
    sourcemap: false, // nada de .map no site publicado
  },
});
