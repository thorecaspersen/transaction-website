import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from 'remotion';
import { hash } from '../sketch.js';
import { out, ramp } from '../motion.js';

const badges = [
  { file: 'app-store', ext: 'svg', size: { en: [360, 120], da: [360, 120] }, margin: { en: 0, da: 0 } },
  { file: 'google-play', ext: 'png', size: { en: [458, 178], da: [400, 155] }, margin: { en: -29, da: '-18px 0' } },
];

export const EndCard = ({ c, lang }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const pop = spring({ frame: f - 6, fps, config: { damping: 14, stiffness: 120, mass: 0.9 } });
  const rise = (at) => {
    const t = ramp(f, at, at + 26, out);
    return { opacity: t, transform: `translateY(${(1 - t) * 40}px)` };
  };
  const card = spring({ frame: f - 44, fps, config: { damping: 15, stiffness: 90 } });
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Img src={staticFile('icon-512.png')} style={{ width: 196, height: 196, borderRadius: 44, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)', transform: `scale(${pop})` }} />
      <div style={{ marginTop: 44, fontSize: 132, fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1, ...rise(14) }}>Transaction</div>
      <div style={{ marginTop: 22, fontSize: 44, fontWeight: 500, color: '#9ca3af', letterSpacing: '-0.01em', ...rise(22) }}>{c.tagline}</div>
      <div style={{ marginTop: 52, display: 'flex', alignItems: 'center', gap: 28, ...rise(32) }}>
        {badges.map((b) => (
          <Img key={b.file} src={staticFile(`badges/${b.file}-${lang}.${b.ext}`)} style={{ width: b.size[lang][0], height: b.size[lang][1], margin: b.margin[lang] }} />
        ))}
      </div>
      <div style={{ marginTop: 36, fontFamily: 'Mono', fontSize: 30, color: '#60a5fa', ...rise(40) }}>transaction.thore.me</div>
      <div style={{ position: 'absolute', left: 1530, top: 740, width: 300, height: 300, transform: `translate(${(1 - card) * 420}px, ${(1 - card) * 160}px) rotate(${(1 - card) * 30}deg)` }}>
        {[64, 84, 104, 124].flatMap((p) =>
          [0, 1, 2].map((k) => {
            const t = ramp(f, p + k * 2, p + k * 2 + 26, out);
            const n = hash(p * 3 + k);
            return t > 0 && t < 1 ? (
              <span key={`${p}-${k}`} style={{ position: 'absolute', left: 70 - t * (70 + n * 120), top: 150 + (n - 0.5) * 60 * t - k * 8, width: 8 + n * 8, height: 8 + n * 8, borderRadius: '50%', background: '#d1d5db', opacity: 1 - t }} />
            ) : null;
          })
        )}
        <Img src={staticFile('mascot.svg')} style={{ width: 300, transform: `scale(${1 + 0.035 * Math.max(0, Math.sin(((f - 60) / 20) * Math.PI)) * (f > 60 ? 1 : 0)})` }} />
      </div>
    </div>
  );
};
