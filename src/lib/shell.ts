// O servidor manda o topo da página inicial pronto no HTML (scripts/build-shell.ts). Se ele veio,
// a página inicial não anima a entrada do topo, para não "piscar" quando o React assume.
export const hadShell = typeof document !== 'undefined' && !!document.querySelector('#root > [data-shell]');
