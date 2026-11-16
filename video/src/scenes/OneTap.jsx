import { useCurrentFrame } from 'remotion';
import { inOut, keys, out, ramp } from '../motion.js';
import { center, rigAt, TAP, toFrame } from '../Phone.jsx';
import { Canvas } from '../Pencil.jsx';
import { Lines } from '../Type.jsx';

const target = center([19.4, 13.4, 11.9, 5.4]);

export const OneTap = ({ c }) => {
  const f = useCurrentFrame();
  const [tx, ty] = toFrame(target, rigAt(f));
  const touch = ramp(f, TAP - 14, TAP - 3, out) * (1 - ramp(f, TAP + 5, TAP + 18, out));
  const press = keys(f, [TAP - 4, TAP, TAP + 6], [1, 0.8, 1], inOut);
  const ring = ramp(f, TAP, TAP + 24, out);
  return (
    <>
      <Lines lines={c.lunch[0]} at={450} end={TAP + 72} size={84} style={{ left: 128, top: 384 }} />
      <Lines lines={[c.lunch[1]]} at={TAP + 2} end={TAP + 76} size={84} accent={0} style={{ left: 128, top: 576, color: '#60a5fa' }} />
      <Canvas>
        <circle cx={tx} cy={ty} r={14 + ring * 64} fill="#ffffff" fillOpacity={0.16 * (1 - ring)} stroke="#ffffff" strokeWidth={3} strokeOpacity={(1 - ring) * 0.85} opacity={f >= TAP ? 1 : 0} />
        <circle cx={tx} cy={ty} r={(24 + (1 - touch) * 12) * press} fill="#ffffff" fillOpacity={0.32 * touch} stroke="#ffffff" strokeWidth={2} strokeOpacity={0.75 * touch} />
      </Canvas>
    </>
  );
};
