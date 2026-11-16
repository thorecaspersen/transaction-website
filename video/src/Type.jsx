import { useCurrentFrame } from 'remotion';
import { inn, ramp } from './motion.js';

export const Lines = ({ lines, at, end, size = 96, accent = -1, color = '#f3f4f6', stagger = 4, style }) => {
  const f = useCurrentFrame();
  return (
    <div style={{ position: 'absolute', fontSize: size, fontWeight: 800, lineHeight: 1, letterSpacing: '-0.035em', color, ...style }}>
      {lines.map((line, i) => {
        const t = ramp(f, at + i * stagger, at + i * stagger + 24);
        const e = end == null ? 0 : ramp(f, end + i * 2, end + i * 2 + 14, inn);
        return (
          <div key={i} style={{ overflow: 'hidden', padding: '0.06em 0.1em 0.16em', margin: '-0.06em -0.1em -0.16em' }}>
            <div style={{ transform: `translateY(${(1 - t) * 1.25 - e * 1.25}em) rotate(${(1 - t) * 3}deg)`, transformOrigin: style?.textAlign === 'center' ? '50% 100%' : '0 100%', color: i === accent ? undefined : color }}>
              {line}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const Mono = ({ children, style }) => (
  <div style={{ fontFamily: 'Mono, monospace', fontSize: 18, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', ...style }}>{children}</div>
);
