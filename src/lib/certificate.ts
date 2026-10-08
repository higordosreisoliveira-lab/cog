import type QrFactory from 'qrcode-generator';
import { CONFIG } from '../config';
import type { Messages } from '../i18n/locales/pt';

/** verifyUrl: endereço da página de verificação (vai no QR code). Sem ele, o QR leva ao site. */
export interface CertificateData { name: string; iq: number; date: string; id: string; verifyUrl?: string }

// Logo horizontal (public/brand/logo-horizontal.svg), carregada como imagem; o certificado
// redesenha quando ela chega (veja whenLogoReady).
const LOGO_RATIO = 3550 / 876;
let logoImg: HTMLImageElement | null = null;
let logoLoading: Promise<void> | null = null;
export const whenLogoReady = () => (logoLoading ??= new Promise<void>((resolve) => {
  const im = new Image();
  im.onload = () => { logoImg = im; resolve(); };
  im.onerror = () => resolve();
  im.src = '/brand/logo-horizontal.svg';
}));

function drawLogo(c: CanvasRenderingContext2D, x: number, y: number, h: number) {
  if (logoImg) c.drawImage(logoImg, x, y, h * LOGO_RATIO, h);
}

// A biblioteca do QR vem num pedaço separado (a landing abre rápido no celular); o certificado
// redesenha quando ela chega (veja whenQrReady).
let qrcode: typeof QrFactory | null = null;
let qrLoading: Promise<void> | null = null;
export const whenQrReady = () => (qrLoading ??= import('qrcode-generator').then((m) => { qrcode = m.default; }));

function drawQr(c: CanvasRenderingContext2D, text: string, x: number, y: number, size: number) {
  if (!qrcode) return;
  const qr = qrcode(0, 'M');
  qr.addData(text);
  qr.make();
  const n = qr.getModuleCount();
  const cell = size / n;
  c.fillStyle = '#0e1116';
  for (let r = 0; r < n; r++) for (let col = 0; col < n; col++) {
    if (qr.isDark(r, col)) c.fillRect(Math.floor(x + col * cell), Math.floor(y + r * cell), Math.ceil(cell), Math.ceil(cell));
  }
}

const INK = '#0e1116';
const MUTED = '#7c8394';
const LINE = '#e3e6ec';
const BRAND = '#2d5bff';

// Desenha o certificado num <canvas> 1600x1130 (pronto para baixar como PNG).
export function drawCertificate(canvas: HTMLCanvasElement, { name, iq, date, id, verifyUrl }: CertificateData, t: Messages['certificate']) {
  const W = 1600, H = 1130;
  canvas.width = W;
  canvas.height = H;
  const c = canvas.getContext('2d');
  if (!c) return;
  const sans = (w: number, s: number) => `${w} ${s}px "Geist Variable", Geist, system-ui, sans-serif`;
  const mono = (w: number, s: number) => `${w} ${s}px "Geist Mono Variable", "Geist Mono", ui-monospace, monospace`;
  const spaced = (text: string, x: number, y: number, gap: number, align: 'left' | 'center' | 'right') => {
    const widths = [...text].map((ch) => c.measureText(ch).width + gap);
    const total = widths.reduce((a, b) => a + b, 0) - gap;
    let cx = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
    c.textAlign = 'left';
    [...text].forEach((ch, i) => { c.fillText(ch, cx, y); cx += widths[i]; });
  };

  c.fillStyle = '#ffffff';
  c.fillRect(0, 0, W, H);
  c.strokeStyle = LINE;
  c.lineWidth = 2;
  c.strokeRect(56, 56, W - 112, H - 112);

  // marca
  drawLogo(c, 112, 108, 76);

  // QR code de verificação (canto superior direito) e o número embaixo
  const qrSize = 150, qx = W - 120 - qrSize, qy = 100;
  c.fillStyle = '#ffffff'; c.fillRect(qx - 8, qy - 8, qrSize + 16, qrSize + 16);
  drawQr(c, verifyUrl || (typeof location !== 'undefined' ? location.origin : 'https://cognitivai.online'), qx, qy, qrSize);
  c.fillStyle = MUTED; c.font = mono(500, 18);
  spaced(`${t.no} ${id}`, qx + qrSize / 2, qy + qrSize + 34, 1, 'center');

  // corpo
  c.fillStyle = MUTED; c.font = mono(500, 24);
  spaced(t.title, W / 2, 330, 6, 'center');

  c.fillStyle = MUTED; c.font = sans(400, 30); c.textAlign = 'center';
  c.fillText(t.awardedTo, W / 2, 410);

  c.fillStyle = INK;
  let size = 92;
  c.font = sans(600, size);
  while (c.measureText(name).width > W - 400 && size > 44) { size -= 4; c.font = sans(600, size); }
  c.fillText(name, W / 2, 510);

  c.fillStyle = '#3f4654';
  const line = t.line(CONFIG.brand);
  let lineSize = 30;
  c.font = sans(400, lineSize);
  while (c.measureText(line).width > W - 280 && lineSize > 20) { lineSize -= 2; c.font = sans(400, lineSize); }
  c.fillText(line, W / 2, 600);

  c.fillStyle = BRAND; c.font = sans(600, 190);
  c.fillText(String(iq), W / 2, 800);

  // rodapé
  c.strokeStyle = LINE; c.lineWidth = 2;
  c.beginPath(); c.moveTo(120, 900); c.lineTo(W - 120, 900); c.stroke();
  c.fillStyle = MUTED; c.font = mono(500, 20);
  spaced(t.date, 120, 950, 3, 'left');
  spaced(t.scale, W / 2, 950, 3, 'center');
  spaced(t.code, W - 120, 950, 3, 'right');
  c.fillStyle = INK; c.font = sans(500, 30);
  c.textAlign = 'left'; c.fillText(date, 120, 1000);
  c.textAlign = 'center'; c.fillText(t.scaleValue, W / 2, 1000);
  c.textAlign = 'right'; c.fillText(id, W - 120, 1000);
}

export const fmtTime = (ms: number) => {
  const s = Math.max(0, Math.floor(ms / 1000));
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
};
