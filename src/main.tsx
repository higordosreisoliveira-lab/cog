import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import { App } from './App';
import { initPixels } from './lib/track';
import './index.css';

// Tradução automática do navegador (Chrome, app do Facebook) troca os textos da página por conta
// própria; quando o React depois mexe nesses nós, o navegador lança "insertBefore/removeChild" e a
// tela fica em branco. Aqui, em vez de quebrar, a operação é ignorada (a página segue funcionando).
if (typeof Node === 'function' && Node.prototype) {
  const remove = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return remove.call(this, child) as T;
  };
  const insert = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return insert.call(this, node, ref) as T;
  };
}

initPixels();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
