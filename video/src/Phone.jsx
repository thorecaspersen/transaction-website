import { Img, staticFile, useCurrentFrame } from 'remotion';
import { inn, inOut, keys, out, ramp } from './motion.js';

const W = 400;
const PAD = W * 0.026;
const SW = W - 2 * PAD;
const SH = (SW * 874) / 402;
const H = SH + 2 * PAD;

export const TAP = 506;

export const box = ([x, y, w, h]) => [PAD + (x * SW) / 100, PAD + (y * SH) / 100, (w * SW) / 100, (h * SH) / 100];

export const center = ([x, y, w, h]) => box([x + w / 2, y + h / 2, 0, 0]).slice(0, 2);

export const rigAt = (f) => ({
  x: keys(f, [64, 90, 96, 124, 342, 368, 432, 458, 884, 910], [1000, 1236, 1236, 1000, 1000, 1490, 1490, 1000, 1000, 1490], inOut),
  y: f < 44 ? 700 - 180 * ramp(f, 0, 44, out) : keys(f, [64, 90, 96, 124, 150, 176, 1004, 1042], [520, 512, 512, 520, 520, 540, 540, 1640], inOut),
  s: keys(f, [0, 44, 342, 368, 432, 458, 884, 910], [0.92, 1, 1, 0.9, 0.9, 1, 1, 0.9], inOut),
  r: keys(f, [64, 90, 96, 124], [0, 7, 7, 0], inOut),
  rx: keys(f, [0, 44, 1000, 1042], [18, 0, 0, 26], inOut),
  ry: keys(f, [0, 44, 64, 90, 96, 124, 156, 342, 368, 420, 432, 466, 1000, 1042], [-34, -12, -12, -28, -28, -8, 0, 0, -16, -10, -10, 0, 0, -22], inOut),
  o: ramp(f, 0, 18, out) * (1 - ramp(f, 1020, 1042, inn)),
});

export const toFrame = ([px, py], rig = rigAt(0)) => {
  const a = (rig.r * Math.PI) / 180;
  const dx = (px - W / 2) * rig.s;
  const dy = (py - H / 2) * rig.s;
  return [rig.x + dx * Math.cos(a) - dy * Math.sin(a), rig.y + dx * Math.sin(a) + dy * Math.cos(a)];
};

const green = '52, 211, 153';
const blue = '96, 165, 250';

const fill = [
  [16.9, 28.5, 78.1, 4.6],
  [26.1, 34.9, 68.9, 4.6],
  [51.5, 57.1, 43.5, 4.7],
  [5.0, 68.2, 58.0, 5.6],
];

const lunch = [
  [5.0, 28.7, 43.5, 4.6],
  [51.5, 28.7, 43.5, 4.6],
  [16.9, 35.1, 78.1, 4.6],
  [26.1, 41.5, 68.9, 4.6],
  [51.5, 63.7, 43.5, 4.7],
  [5.0, 74.8, 58.0, 5.6],
];

const squares = [5.0, 13.4, 40.7, 5.5];
const banner = [4.9, 11.9, 90.3, 4.6];

const steps = [
  [592, 'create-templates', 'create-trip'],
  [658, 'create-trip', 'shared-expense'],
  [792, 'shared-expense', 'group-owes'],
  [884, 'group-owes', 'list'],
  [950, 'list', 'languages'],
];

const inset = ([x, y, w, h], g = 0) => `inset(${y - g}% ${100 - x - w - g}% ${100 - y - h - g}% ${x - g}% round 9px)`;

const Shot = ({ name, x = 0, b = 1, blur = 0, o = 1, clip }) => (
  <Img className="ph-shot" src={staticFile(`shots/${name}.webp`)} style={{ transform: `translateX(${x}%)`, filter: `brightness(${b}) blur(${blur}px)`, opacity: o, clipPath: clip }} />
);

const Glow = ({ at: [x, y, w, h], t, rgb, grow = 0 }) =>
  t > 0 && (
    <span
      className="ph-hot"
      style={{
        left: `calc(${x}% - ${grow}px)`,
        top: `calc(${y}% - ${grow}px)`,
        width: `calc(${w}% + ${2 * grow}px)`,
        height: `calc(${h}% + ${2 * grow}px)`,
        boxShadow: `inset 0 0 0 2px rgba(${rgb}, ${t}), 0 0 ${22 * t}px rgba(${rgb}, ${0.45 * t})`,
      }}
    />
  );

const push = (f, start) => {
  const t = ramp(f, start, start + 22, out);
  return [{ x: -28 * t, b: 1 - 0.45 * t }, { x: 100 * (1 - t) }];
};

const Screen = ({ f }) => {
  if (f < 342) {
    const filled = f >= 188;
    return (
      <>
        <Shot name={filled ? 'create-hero' : 'create-empty'} />
        {!filled && fill.map((r, i) => <Shot key={i} name="create-hero" o={ramp(f, 150 + i * 9, 156 + i * 9)} clip={inset(r, 0.5)} />)}
        {fill.map((r, i) => (
          <Glow key={`g${i}`} at={r} t={ramp(f, 150 + i * 9, 156 + i * 9) - ramp(f, 166 + i * 9, 190 + i * 9)} rgb={green} />
        ))}
      </>
    );
  }
  if (f < 436) {
    const g = ramp(f, 354, 394, out);
    return (
      <>
        <Shot name="create-hero" />
        <Shot name="create-banner" o={ramp(f, 346, 358)} />
        {f >= 354 && <Glow at={banner} t={1 - g} grow={g * 14} rgb={green} />}
      </>
    );
  }
  if (f < 592) {
    const [a, b] = push(f, 436);
    const lit = ramp(f, TAP + 18, TAP + 40);
    return (
      <>
        <Shot name="create-banner" {...a} />
        <Shot name="create-templates" x={b.x} b={0.3 + 0.7 * lit} blur={1.4 * (1 - lit)} />
        <Shot name="create-templates" x={b.x} clip={inset(squares, 0.6)} />
        {lunch.map((r, i) => (
          <Shot key={i} name="create-templates" o={ramp(f, TAP + 2 + i * 3, TAP + 8 + i * 3)} clip={inset(r, 0.5)} />
        ))}
        {lunch.map((r, i) => (
          <Glow key={`g${i}`} at={r} t={ramp(f, TAP + 2 + i * 3, TAP + 8 + i * 3) - ramp(f, TAP + 16 + i * 3, TAP + 40 + i * 3)} rgb={blue} />
        ))}
      </>
    );
  }
  const [start, from, to] = steps.findLast(([s]) => f >= s);
  const [a, b] = push(f, start);
  return (
    <>
      <Shot name={from} {...a} />
      <Shot name={to} {...b} />
    </>
  );
};

export const PhoneRig = () => {
  const f = useCurrentFrame();
  if (f > 1042) return null;
  const { x, y, s, r, rx, ry, o } = rigAt(f);
  const turn = Math.min(1, (Math.abs(rx) + Math.abs(ry)) / 28);
  return (
    <>
      <div style={{ position: 'absolute', left: x - 560, top: y - 560, width: 1120, height: 1120, background: 'radial-gradient(closest-side, rgba(96, 165, 250, 0.13), rgba(96, 165, 250, 0))', opacity: o }} />
      <div style={{ position: 'absolute', left: x - W * 0.42 * s, top: y + (H / 2) * s + 14, width: W * 0.84 * s, height: 64 * s, background: 'radial-gradient(closest-side, rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0))', opacity: o * (1 - 0.4 * turn) }} />
      <div style={{ position: 'absolute', left: x - W / 2, top: y - H / 2, width: W, height: H, opacity: o, transform: `perspective(2400px) rotateX(${rx}deg) rotateY(${ry}deg) rotate(${r}deg) scale(${s})` }}>
        <div className="ph" style={{ '--ph-w': `${W}px` }}>
          <div className="ph-frame">
            <div className="ph-screen">
              <Screen f={f} />
              <span className="ph-island" />
              <span style={{ position: 'absolute', inset: 0, zIndex: 3, background: `linear-gradient(115deg, rgba(255, 255, 255, 0) ${36 - ry}%, rgba(255, 255, 255, 0.1) ${48 - ry}%, rgba(255, 255, 255, 0) ${60 - ry}%)`, opacity: turn }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
