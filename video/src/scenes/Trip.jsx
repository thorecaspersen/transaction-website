import { useCurrentFrame } from 'remotion';
import { inn, ramp } from '../motion.js';
import { box, center, rigAt, toFrame } from '../Phone.jsx';
import { Canvas, loop, Pencil } from '../Pencil.jsx';
import { Lines, Mono } from '../Type.jsx';
import { Callout } from './Logged.jsx';

const people = { you: '#60a5fa', dig: '#60a5fa', Maria: '#f472b6', Jonas: '#fbbf24' };

const rows = [
  { rect: box([6.5, 31.2, 87.0, 6.2]), y: 390, color: '#34d399' },
  { rect: box([6.5, 39.0, 87.0, 6.2]), y: 510, color: '#fbbf24' },
  { rect: box([6.5, 46.8, 87.0, 6.2]), y: 630, color: '#9ca3af' },
];

export const Trip = ({ c }) => {
  const f = useCurrentFrame();
  const rig = rigAt(f);
  const [ax, ay] = toFrame(center([9.5, 65.6, 6.0, 1.3]), rig);
  const [bx, by] = toFrame(center([76.5, 72.8, 15.2, 3.2]), rig);
  return (
    <>
      <Lines lines={c.turns[0]} at={602} end={650} size={84} style={{ left: 128, top: 456 }} />
      <Lines lines={c.turns[1]} at={664} end={706} size={84} style={{ left: 128, top: 456 }} />
      <Mono style={{ position: 'absolute', left: 1286, top: 300, color: '#9ca3af', opacity: ramp(f, 604, 628) * (1 - ramp(f, 704, 718, inn)) }}>{c.trip}</Mono>
      <Canvas>
        <line x1={1398} y1={386} x2={1398} y2={386 + 240 * (ramp(f, 664, 688) * 0.5 + ramp(f, 678, 702) * 0.5)} stroke="#374151" strokeWidth={3} opacity={1 - ramp(f, 704, 718, inn)} />
      </Canvas>
      {c.days.map(([day, who], i) => {
        const t = ramp(f, [608, 664, 678][i], [632, 688, 702][i]);
        const gone = ramp(f, 704 + i * 2, 718 + i * 2, inn);
        return (
          <div key={who} style={{ position: 'absolute', left: 1286, top: 360 + i * 120, display: 'flex', alignItems: 'center', gap: 22, opacity: t * (1 - gone), transform: `translateY(${(1 - t) * 40 - gone * 40}px)` }}>
            <Mono style={{ color: '#9ca3af', width: 64 }}>{day}</Mono>
            <span style={{ width: 52, height: 52, borderRadius: 26, background: people[who], color: '#111827', display: 'grid', placeItems: 'center', fontSize: 24, fontWeight: 800, transform: `scale(${0.4 + 0.6 * t})` }}>{who[0].toUpperCase()}</span>
            <span style={{ fontSize: 54, fontWeight: 800, letterSpacing: '-0.03em' }}>{who}</span>
          </div>
        );
      })}
      <Lines lines={c.roughly} at={718} end={786} size={150} style={{ left: 128, top: 380 }} />
      <Canvas style={{ opacity: 1 - ramp(f, 784, 796, inn) }}>
        <Pencil pts={loop(ax, ay, 44, 24, { seed: 9, tilt: -6 })} draw={ramp(f, 730, 752)} seed={2} />
        <Pencil pts={loop(bx, by, 54, 30, { seed: 13, tilt: 4 })} draw={ramp(f, 742, 764)} seed={6} />
      </Canvas>
      <Lines lines={c.adds} at={802} end={872} size={84} style={{ left: 128, top: 456 }} />
      {rows.map((s, i) => (
        <Callout key={i} spot={s} label={c.owes[i][0]} value={c.owes[i][1]} at={808 + i * 10} end={870 + i * 2} f={f} color={s.color} />
      ))}
    </>
  );
};
