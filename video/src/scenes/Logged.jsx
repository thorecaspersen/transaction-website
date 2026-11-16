import { useCurrentFrame } from 'remotion';
import { inn, ramp } from '../motion.js';
import { box, rigAt, toFrame } from '../Phone.jsx';
import { Canvas } from '../Pencil.jsx';
import { Lines, Mono } from '../Type.jsx';

const spots = [
  { rect: box([5.0, 13.3, 90.0, 4.8]), y: 250 },
  { rect: box([5.0, 22.1, 90.0, 4.6]), y: 370 },
  { rect: box([26.1, 34.9, 68.9, 4.6]), y: 490 },
  { rect: box([5.0, 41.3, 90.0, 4.8]), y: 610 },
  { rect: box([5.0, 68.2, 89.8, 5.6]), y: 730 },
];

const green = '#34d399';

export const Callout = ({ spot, label, value, at, end, f, color = green }) => {
  const rig = rigAt(f);
  const [x, y, w, h] = spot.rect;
  const [ax, ay] = toFrame([x + w, y + h / 2], rig);
  const [rx, ry] = toFrame([x, y], rig);
  const ring = ramp(f, at, at + 16);
  const line = ramp(f, at + 6, at + 20);
  const text = ramp(f, at + 12, at + 34);
  const gone = ramp(f, end, end + 12, inn);
  const lx = 1286;
  const elbow = `M${ax} ${ay}H${ax + 44}L${lx - 24} ${spot.y}H${lx - 8}`;
  return (
    <>
      <Canvas>
        <rect x={rx - 4} y={ry - 4} width={w + 8} height={h + 8} rx={10} fill={color} fillOpacity={0.08 * ring * (1 - gone)} stroke={color} strokeWidth={2.5} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - ring - gone} opacity={ring > 0 && gone < 1 ? 1 : 0} />
        <path d={elbow} fill="none" stroke={color} strokeWidth={2} strokeOpacity={0.85} pathLength={1} strokeDasharray="1 1" strokeDashoffset={1 - line - gone} opacity={line > 0 && gone < 1 ? 1 : 0} />
        <circle cx={ax} cy={ay} r={5 * ring * (1 - gone)} fill={color} />
      </Canvas>
      <div style={{ position: 'absolute', left: lx, top: spot.y - 44 }}>
        <div style={{ overflow: 'hidden' }}>
          <Mono style={{ color, transform: `translateY(${(1 - text) * 110 - gone * 110}%)` }}>{label}</Mono>
        </div>
        <div style={{ overflow: 'hidden', paddingBottom: 8 }}>
          <div style={{ fontSize: 50, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, transform: `translateY(${(1 - text) * 110 - gone * 110}%)` }}>{value}</div>
        </div>
      </div>
    </>
  );
};

export const Logged = ({ c }) => {
  const f = useCurrentFrame();
  return (
    <>
      <Lines lines={c.rest} at={178} end={324} size={84} style={{ left: 128, top: 410 }} />
      {spots.map((s, i) => (
        <Callout key={i} spot={s} label={c.callouts[i][0]} value={c.callouts[i][1]} at={196 + i * 10} end={324 + i * 2} f={f} />
      ))}
      <Lines lines={c.logged} at={352} end={424} size={200} accent={1} stagger={10} style={{ left: 128, top: 330, color: green }} />
    </>
  );
};
