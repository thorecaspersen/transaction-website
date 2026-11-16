import { Easing, interpolate } from 'remotion';

export const out = Easing.bezier(0.16, 1, 0.3, 1);
export const inn = Easing.bezier(0.7, 0, 0.84, 0);
export const inOut = Easing.bezier(0.83, 0, 0.17, 1);

export const ramp = (f, a, b, ease = out) =>
  interpolate(f, [a, b], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp', easing: ease });

export const mix = (a, b, t) => a + (b - a) * t;

export const keys = (f, frames, values, ease = inOut) => {
  let v = values[0];
  for (let i = 1; i < frames.length; i++) v = mix(v, values[i], ramp(f, frames[i - 1], frames[i], ease));
  return v;
};
