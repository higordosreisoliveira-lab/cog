// Baixa em segundo plano as telas que vêm depois do teste, para a troca ser instantânea no celular.
export const loadFunnel = () =>
  Promise.all([import('../pages/Analyzing'), import('../pages/EmailCapture'), import('../pages/Checkout')]);
