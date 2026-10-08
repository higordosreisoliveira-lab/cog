import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { drawCertificate, whenLogoReady, whenQrReady, type CertificateData } from '../lib/certificate';
import { useI18n } from '../i18n';

export const CertificateCanvas = forwardRef<HTMLCanvasElement, CertificateData & { className?: string }>(
  function CertificateCanvas({ className = '', ...data }, ref) {
    const canvas = useRef<HTMLCanvasElement>(null);
    useImperativeHandle(ref, () => canvas.current!);
    const { name, iq, date, id, verifyUrl } = data;
    const labels = useI18n().m.certificate;
    useEffect(() => {
      const draw = () => canvas.current && drawCertificate(canvas.current, { name, iq, date, id, verifyUrl }, labels);
      draw();
      // O canvas só usa a Geist depois que ela carrega; força o carregamento e redesenha.
      Promise.all([
        document.fonts?.load('600 40px "Geist Variable"'),
        document.fonts?.load('500 20px "Geist Mono Variable"'),
      ]).then(draw, draw);
      whenQrReady().then(draw, () => {});
      whenLogoReady().then(draw);
    }, [name, iq, date, id, verifyUrl, labels]);
    return <canvas ref={canvas} className={`h-auto w-full rounded-2xl bg-white ring-1 ring-line ${className}`} aria-label={`${labels.title} · ${name}`} />;
  },
);
