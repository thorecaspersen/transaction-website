export const hash = (n) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const wobble = (seed, i, k) => hash(seed * 7.13 + i * 1.97 + k * 0.53) * 2 - 1;

const jitter = (pts, seed, amp) => pts.map(([x, y], i) => [x + wobble(seed, i, 1) * amp, y + wobble(seed, i, 2) * amp]);

const f = (n) => Math.round(n * 10) / 10;

export const spline = (pts, closed = false) => {
  const n = pts.length;
  const at = (i) => (closed ? pts[(i + n) % n] : pts[Math.max(0, Math.min(n - 1, i))]);
  let d = `M${f(pts[0][0])} ${f(pts[0][1])}`;
  for (let i = 0; i < (closed ? n : n - 1); i++) {
    const [p0, p1, p2, p3] = [at(i - 1), at(i), at(i + 1), at(i + 2)];
    d += `C${f(p1[0] + (p2[0] - p0[0]) / 6)} ${f(p1[1] + (p2[1] - p0[1]) / 6)} ${f(p2[0] - (p3[0] - p1[0]) / 6)} ${f(p2[1] - (p3[1] - p1[1]) / 6)} ${f(p2[0])} ${f(p2[1])}`;
  }
  return closed ? `${d}Z` : d;
};

const extend = (pts, closed) => (closed ? [...pts, pts[0], pts[1]] : pts);

const passes = [
  { amp: 1.1, width: 3.4, opacity: 0.92, shift: 0 },
  { amp: 2.2, width: 1.6, opacity: 0.5, shift: 1.2 },
  { amp: 3.2, width: 0.9, opacity: 0.35, shift: -1.4 },
];

export const strokes = (pts, { seed, closed = false, scale = 1 }) =>
  passes.map((p, k) => {
    const moved = jitter(extend(pts, closed), seed * 3 + k * 17, p.amp * scale).map(([x, y]) => [x + p.shift * scale, y - p.shift * scale * 0.6]);
    return { d: spline(moved, false), width: p.width * scale, opacity: p.opacity };
  });
