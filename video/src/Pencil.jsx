import { useCurrentFrame } from 'remotion';
import { hash, strokes } from './sketch.js';

export const Pencil = ({ pts, seed = 1, draw = 1, color = '#ece6da', scale = 1 }) => {
  const tick = Math.floor(useCurrentFrame() / 3);
  return (
    <g>
      {strokes(pts, { seed: tick * 19 + seed, scale }).map((s, i) => (
        <path key={i} d={s.d} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - draw} fill="none" stroke={color} strokeWidth={s.width} strokeOpacity={s.opacity} strokeLinecap="round" strokeLinejoin="round" />
      ))}
    </g>
  );
};

export const loop = (cx, cy, rx, ry, { turns = 1.12, tilt = -4, seed = 3, n = 2, steps = 30 } = {}) => {
  const a0 = -2.2;
  const t = (tilt * Math.PI) / 180;
  const shape = (v) => Math.sign(v) * Math.abs(v) ** (2 / n);
  return Array.from({ length: steps + 1 }, (_, i) => {
    const a = a0 + (i / steps) * turns * Math.PI * 2;
    const k = 1 + (hash(seed + i) - 0.5) * 0.06 + (i / steps) * 0.05;
    const x = shape(Math.cos(a)) * rx * k;
    const y = shape(Math.sin(a)) * ry * k;
    return [cx + x * Math.cos(t) - y * Math.sin(t), cy + x * Math.sin(t) + y * Math.cos(t)];
  });
};

export const Canvas = ({ children, style }) => (
  <svg width="1920" height="1080" style={{ position: 'absolute', left: 0, top: 0, overflow: 'visible', ...style }}>
    {children}
  </svg>
);
