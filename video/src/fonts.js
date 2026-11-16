import { continueRender, delayRender, staticFile } from 'remotion';

const faces = [
  ['Display', 'schibsted-grotesk-latin-wght-normal.woff2'],
  ['Mono', 'jetbrains-mono-latin-wght-normal.woff2'],
];

const handle = delayRender('fonts');

Promise.all(
  faces.map(([family, file]) =>
    new FontFace(family, `url(${staticFile(`fonts/${file}`)})`, { weight: '100 900' }).load().then((face) => document.fonts.add(face))
  )
).then(() => continueRender(handle));
