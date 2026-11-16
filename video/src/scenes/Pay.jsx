import { useCurrentFrame } from 'remotion';
import { inn, out, ramp } from '../motion.js';
import { Canvas } from '../Pencil.jsx';
import { Lines } from '../Type.jsx';

const TX = 1390;
const TY = 300;
const TS = 1.15;
const READER = [96, 92];

const arcs = [0, 1, 2, 3].map((i) => {
  const r = 14 + i * 13;
  const a = (50 * Math.PI) / 180;
  const x = (READER[0] + Math.cos(a) * r).toFixed(1);
  const dy = Math.sin(a) * r;
  return `M${x} ${(READER[1] - dy).toFixed(1)}A${r} ${r} 0 0 1 ${x} ${(READER[1] + dy).toFixed(1)}`;
});

const keypad = Array.from({ length: 12 }, (_, i) => [46 + (i % 3) * 56, 196 + Math.floor(i / 3) * 40]);

export const Terminal = () => {
  const f = useCurrentFrame();
  const t = ramp(f, 34, 62, out) - ramp(f, 132, 158, inn);
  const paid = ramp(f, 94, 108, out);
  return (
    <div style={{ position: 'absolute', left: TX + (1 - t) * 640, top: TY, width: 250 * TS, height: 410 * TS, opacity: t, filter: 'drop-shadow(0 36px 44px rgba(2, 6, 23, 0.6))' }}>
      <svg viewBox="0 0 250 410" width="100%" height="100%">
        <defs>
          <linearGradient id="tm-body" x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#3b4252" />
            <stop offset="1" stopColor="#161b25" />
          </linearGradient>
          <linearGradient id="tm-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#111827" />
            <stop offset="1" stopColor="#05070c" />
          </linearGradient>
        </defs>
        <rect width="250" height="410" rx="38" fill="url(#tm-body)" />
        <rect x="1" y="1" width="248" height="408" rx="37" fill="none" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="2" />
        <rect x="26" y="28" width="198" height="128" rx="14" fill="url(#tm-glass)" />
        <g fill="none" stroke="#f3f4f6" strokeWidth="6" strokeLinecap="round" opacity={1 - paid}>
          {arcs.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g opacity={paid} transform={`translate(125 92) scale(${0.6 + 0.4 * paid})`}>
          <circle r="36" fill="#34d399" />
          <path d="M-16 1 -5 12 17 -11" fill="none" stroke="#06281d" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - paid} />
        </g>
        {keypad.map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x} y={y} width="44" height="26" rx="7" fill="rgba(255, 255, 255, 0.09)" />
        ))}
        <rect x="60" y="376" width="130" height="6" rx="3" fill="rgba(0, 0, 0, 0.45)" />
      </svg>
    </div>
  );
};

export const Pay = ({ c }) => {
  const f = useCurrentFrame();
  const wave = (k) => ramp(f, 88 + k * 5, 120 + k * 5, out);
  const [cx, cy] = [TX + READER[0] * TS, TY + READER[1] * TS];
  return (
    <>
      <Lines lines={c.pay} at={14} end={146} size={84} style={{ left: 128, top: 436 }} />
      <Canvas>
        <circle cx={cx} cy={cy} r={30 + wave(0) * 90} fill="#bfdbfe" fillOpacity={0.22 * (1 - wave(0))} opacity={f > 88 ? 1 : 0} />
        {[0, 1, 2].map((k) => (
          <circle key={k} cx={cx} cy={cy} r={20 + wave(k) * 150} fill="none" stroke="#93c5fd" strokeWidth={4 * (1 - wave(k))} opacity={(1 - wave(k)) * (f > 88 + k * 5 ? 1 : 0)} />
        ))}
      </Canvas>
    </>
  );
};

