import { AbsoluteFill, Sequence, useCurrentFrame } from 'remotion';
import '../../shared/static/phone.css';
import './film.css';
import './fonts.js';
import { copy } from './copy.js';
import { PhoneRig } from './Phone.jsx';
import { EndCard } from './scenes/EndCard.jsx';
import { Logged } from './scenes/Logged.jsx';
import { OneTap } from './scenes/OneTap.jsx';
import { Pay, Terminal } from './scenes/Pay.jsx';
import { Trip } from './scenes/Trip.jsx';
import { World } from './scenes/World.jsx';

export const Film = ({ lang }) => {
  const c = copy[lang];
  const f = useCurrentFrame();
  return (
    <AbsoluteFill className={`film lang-${lang}`}>
      <AbsoluteFill style={{ background: 'radial-gradient(70% 90% at 50% 45%, #18223a 0%, #0f1626 55%, #0a0f1a 100%)' }} />
      {f < 162 && <Terminal />}
      <PhoneRig />
      {f < 162 && <Pay c={c} />}
      {f >= 176 && f < 444 && <Logged c={c} />}
      {f >= 444 && f < 600 && <OneTap c={c} />}
      {f >= 596 && f < 892 && <Trip c={c} />}
      {f >= 884 && f < 1044 && <World c={c} />}
      <Sequence from={1044}>
        <EndCard c={c} lang={lang} />
      </Sequence>
    </AbsoluteFill>
  );
};
