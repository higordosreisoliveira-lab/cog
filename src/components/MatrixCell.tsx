import { useId } from 'react';
import { type Cell, type Fill, type Layer, LAYOUTS, SEGS, SIZE_R, dotXY, shapePoints } from '../lib/matrices';

const INK = '#141a2e';
const GRAY = '#c3c9d6';
const GUIDE = '#e3e6ee';

function fillOf(fill: Fill, hatchId: string) {
  if (fill === 'solid') return INK;
  if (fill === 'gray') return GRAY;
  if (fill === 'hatch') return `url(#${hatchId})`;
  return '#fff';
}

function LayerSvg({ layer, hatchId }: { layer: Layer; hatchId: string }) {
  if (layer.k === 'sh') {
    const lay = LAYOUTS[layer.n];
    const r = layer.n === 1 ? SIZE_R[layer.size] : lay.r;
    const sw = layer.n >= 5 ? 2.4 : 3;
    return (
      <>
        {lay.p.map(([cx, cy], i) => {
          const common = { fill: fillOf(layer.fill, hatchId), stroke: INK, strokeWidth: sw, strokeLinejoin: 'round' as const };
          if (layer.shape === 'circle') return <circle key={i} cx={cx} cy={cy} r={r} {...common} />;
          const pts = shapePoints(layer.shape, r).map(([x, y]) => `${(x + cx).toFixed(2)},${(y + cy).toFixed(2)}`).join(' ');
          return <polygon key={i} points={pts} transform={layer.rot ? `rotate(${layer.rot} ${cx} ${cy})` : undefined} {...common} />;
        })}
      </>
    );
  }
  if (layer.k === 'seg') {
    return (
      <>
        <rect x="20" y="20" width="60" height="60" fill="none" stroke={GUIDE} strokeWidth="1.5" strokeDasharray="3 4" />
        {layer.s.map((id) => {
          const [x1, y1, x2, y2] = SEGS[id];
          return <line key={id} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="4.5" strokeLinecap="round" />;
        })}
      </>
    );
  }
  return (
    <>
      {layer.p.map((p) => {
        const [x, y] = dotXY(p);
        return layer.fill === 'none'
          ? <circle key={p} cx={x} cy={y} r="10" fill="#fff" stroke={INK} strokeWidth="3" />
          : <circle key={p} cx={x} cy={y} r={layer.small ? 6 : 9} fill={INK} />;
      })}
    </>
  );
}

export function MatrixCell({ cell, className }: { cell: Cell; className?: string }) {
  const hatchId = `hatch${useId().replace(/:/g, '')}`;
  const needsHatch = cell.layers.some((l) => l.k === 'sh' && l.fill === 'hatch');
  const hasDots = cell.layers.some((l) => l.k === 'dot');
  return (
    <svg viewBox="0 0 100 100" className={className ?? 'h-full w-full'} aria-hidden="true">
      {needsHatch && (
        <defs>
          <pattern id={hatchId} patternUnits="userSpaceOnUse" width="5" height="5" patternTransform="rotate(45)">
            <rect width="5" height="5" fill="#fff" />
            <line x1="0" y1="0" x2="0" y2="5" stroke={INK} strokeWidth="2.2" />
          </pattern>
        </defs>
      )}
      {hasDots && Array.from({ length: 9 }, (_, p) => {
        const [x, y] = dotXY(p);
        return <circle key={`g${p}`} cx={x} cy={y} r="3" fill={GUIDE} />;
      })}
      {cell.layers.map((l, i) => <LayerSvg key={i} layer={l} hatchId={hatchId} />)}
    </svg>
  );
}
