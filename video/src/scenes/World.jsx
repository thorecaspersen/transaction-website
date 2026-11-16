import { useCurrentFrame } from 'remotion';
import { codes } from '../copy.js';
import { inn, ramp } from '../motion.js';
import { center, rigAt, toFrame } from '../Phone.jsx';
import { Canvas, loop, Pencil } from '../Pencil.jsx';
import { Lines } from '../Type.jsx';

const Flap = ({ text, next, t }) => {
  const half = (top, value, extra) => (
    <div style={{ position: 'absolute', left: 0, right: 0, height: 66, top: top ? 0 : 66, overflow: 'hidden', background: top ? '#243041' : '#1c2533', borderRadius: top ? '16px 16px 0 0' : '0 0 16px 16px', backfaceVisibility: 'hidden', ...extra }}>
      <div style={{ position: 'absolute', left: 0, right: 0, height: 132, top: top ? 0 : -66, lineHeight: '132px', textAlign: 'center' }}>{value}</div>
    </div>
  );
  return (
    <div style={{ position: 'relative', width: 184, height: 132, fontFamily: 'Mono', fontSize: 70, fontWeight: 700, color: '#f3f4f6', perspective: 600, boxShadow: '0 18px 30px -16px rgba(0,0,0,0.7)', borderRadius: 16 }}>
      {half(true, next)}
      {half(false, text)}
      {t < 0.5 && half(true, text, { transformOrigin: '50% 100%', transform: `rotateX(${-t * 180}deg)`, filter: `brightness(${1 - t * 0.8})` })}
      {t >= 0.5 && half(false, next, { transformOrigin: '50% 0', transform: `rotateX(${(1 - t) * 180}deg)`, filter: `brightness(${0.7 + (t - 0.5) * 0.6})` })}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 65, height: 3, background: '#0b1019' }} />
    </div>
  );
};

const landing = ['USD', 'EUR', 'GBP', 'JPY', 'THB'];

const board = (f, i) => {
  const start = 896 + i * 2;
  const flips = 9 + i * 2;
  const step = Math.max(0, Math.min(flips, Math.floor((f - start) / 3)));
  const t = f < start || step >= flips ? 0 : ((f - start) % 3) / 3;
  const pick = (k) => (k >= flips ? landing[i] : codes[(i * 7 + k * 3) % codes.length]);
  return { text: pick(step), next: pick(step + 1), t };
};

export const World = ({ c }) => {
  const f = useCurrentFrame();
  const gone = ramp(f, 1024, 1038, inn);
  const [lx, ly] = toFrame(center([9.5, 71.9, 25.0, 1.2]), rigAt(f));
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, transform: `translateY(${-gone * 80}px)`, opacity: 1 - gone }}>
        <div style={{ position: 'absolute', top: 290, left: 128, display: 'flex', gap: 18 }}>
          {landing.map((code, i) => {
            const t = ramp(f, 890 + i * 2, 908 + i * 2);
            return (
              <div key={code} style={{ opacity: t, transform: `translateY(${(1 - t) * 40}px)` }}>
                <Flap {...board(f, i)} />
              </div>
            );
          })}
        </div>
        <Lines lines={[c.world[0].join(' '), c.world[1].join(' ')]} at={906} stagger={46} size={130} style={{ left: 128, top: 470 }} />
      </div>
      <Canvas style={{ opacity: 1 - ramp(f, 944, 954, inn) }}>
        <Pencil pts={loop(lx, ly, 62, 24, { seed: 5, tilt: -3 })} draw={ramp(f, 918, 940)} seed={8} />
      </Canvas>
    </>
  );
};
