import { useEffect, useId, useState } from 'react';
import { DOMAIN_KEYS, type DomainKey } from '../lib/questions';
import { useI18n } from '../i18n';
import { useInView } from './ui';

const INK = '#0e1116';
const BRAND = '#2d5bff';
const MUTED = '#7c8394';
const LINE = '#e8eaef';

// Curva normal (média 100, DP 15) com a área até `iq` preenchida e um marcador.
export function BellCurve({ iq, height = 200, labels = true, tag = 'Você' }: { iq: number; height?: number; labels?: boolean; tag?: string }) {
  const gid = `curve${useId().replace(/:/g, '')}`;
  const { m } = useI18n();
  const width = 520, pad = 8, base = height - (labels ? 26 : 6), top = tag ? 34 : 10, min = 55, max = 145;
  const x = (v: number) => pad + ((v - min) / (max - min)) * (width - 2 * pad);
  const y = (v: number) => base - Math.exp(-((v - 100) ** 2) / (2 * 15 * 15)) * (base - top);
  const cut = Math.max(min, Math.min(max, iq));
  let d = '', area = '';
  for (let v = min; v <= max; v++) d += `${v === min ? 'M' : 'L'}${x(v).toFixed(1)},${y(v).toFixed(1)}`;
  for (let v = min; v <= cut; v++) area += `${v === min ? 'M' : 'L'}${x(v).toFixed(1)},${y(v).toFixed(1)}`;
  area += `L${x(cut).toFixed(1)},${base}L${x(min)},${base}Z`;
  const mx = x(cut), my = y(cut);
  const tagW = tag.length * 7.2 + 20;
  const tagX = Math.min(width - tagW / 2 - 2, Math.max(tagW / 2 + 2, mx));
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" role="img" aria-label={m.common.curveAria(iq)} className="overflow-visible">
      <defs>
        <linearGradient id={gid} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor={BRAND} stopOpacity=".16" />
          <stop offset="1" stopColor={BRAND} stopOpacity=".02" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={d} fill="none" stroke={BRAND} strokeWidth="2" />
      <line x1={pad} y1={base} x2={width - pad} y2={base} stroke={LINE} />
      {labels && [70, 85, 100, 115, 130].map((v) => (
        <text key={v} x={x(v)} y={height - 6} textAnchor="middle" fontSize="11" fontFamily="Geist Mono Variable, Geist Mono, monospace" fill={MUTED}>{v}</text>
      ))}
      <line x1={mx} y1={my} x2={mx} y2={base} stroke={INK} strokeWidth="1.25" strokeDasharray="3 3" />
      <circle cx={mx} cy={my} r="5" fill={INK} stroke="#fff" strokeWidth="2.5" />
      {tag && (
        <g transform={`translate(${tagX},${my - 20})`}>
          <rect x={-tagW / 2} y="-11" width={tagW} height="22" rx="11" fill={INK} />
          <text y="4" textAnchor="middle" fontSize="11.5" fontWeight="500" fontFamily="Geist Mono Variable, Geist Mono, monospace" fill="#fff">{tag}</text>
        </g>
      )}
    </svg>
  );
}

export function domainTag(v: number) {
  if (v >= 75) return { cls: 'bg-good-50 text-good', key: 'hi' as const };
  if (v >= 50) return { cls: 'bg-brand-50 text-brand', key: 'mid' as const };
  return { cls: 'bg-warn-50 text-warn', key: 'lo' as const };
}

export function Ring({ value, size = 64, stroke = 4, outOf }: { value: number; size?: number; stroke?: number; outOf?: number }) {
  const r = (size - stroke) / 2, C = 2 * Math.PI * r;
  const [ref, seen] = useInView<SVGSVGElement>();
  return (
    <div className="relative flex-none" style={{ width: size, height: size }}>
      <svg ref={ref} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={LINE} strokeWidth={stroke} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={BRAND} strokeWidth={stroke} strokeLinecap="round"
          strokeDasharray={C} strokeDashoffset={seen ? C * (1 - value / 100) : C} style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(.2,.8,.2,1)' }} />
      </svg>
      {outOf ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <span className="font-mono font-medium tracking-[-0.04em]" style={{ fontSize: Math.round(size * 0.32) }}>{value}</span>
          <span className="mt-1 font-mono text-[11px] text-muted">/{outOf}</span>
        </div>
      ) : (
        <div className="absolute inset-0 grid place-items-center font-mono text-[17px] font-medium">{value}</div>
      )}
    </div>
  );
}

/** Barras finas do mapa cognitivo. */
export function DomainBars({ values }: { values: Record<DomainKey, number> }) {
  const [ref, seen] = useInView<HTMLDivElement>();
  const { m } = useI18n();
  return (
    <div ref={ref} className="grid gap-5">
      {DOMAIN_KEYS.map((k) => {
        const v = values[k];
        const tag = domainTag(v);
        return (
          <div key={k}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <span className="font-medium">{m.domains[k].label}</span>
              <span className="flex items-center gap-2.5">
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${tag.cls}`}>{m.domainTags[tag.key]}</span>
                <span className="w-7 text-right font-mono text-sm">{v}</span>
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white">
              <i className="block h-full rounded-full bg-brand" style={{ width: seen ? `${v}%` : 0, transition: 'width 1.1s cubic-bezier(.2,.8,.2,1)' }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** 100 pessoas: as que ficam atrás de você em azul; você em preto. */
export function Room({ percentile }: { percentile: number }) {
  const behind = Math.max(0, Math.min(99, Math.floor(percentile)));
  const [ref, seen] = useInView<HTMLDivElement>();
  const [shown, setShown] = useState(0);
  const { m } = useI18n();
  useEffect(() => {
    if (!seen) return;
    let i = 0;
    const t = setInterval(() => { i += 5; setShown(Math.min(100, i)); if (i >= 100) clearInterval(t); }, 28);
    return () => clearInterval(t);
  }, [seen]);
  return (
    <div ref={ref} className="grid max-w-[300px] grid-cols-10 gap-[5px]" role="img" aria-label={m.report.roomAria(behind)}>
      {Array.from({ length: 100 }, (_, i) => (
        <i key={i} className={`aspect-square rounded-full transition-colors duration-300 ${
          i >= shown ? 'bg-[#dde0e7]' : i < behind ? 'bg-brand' : i === behind ? 'bg-ink ring-[3px] ring-white' : 'bg-[#dde0e7]'}`} />
      ))}
    </div>
  );
}
