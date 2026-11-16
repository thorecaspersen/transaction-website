import { Composition } from 'remotion';
import { Film } from './Film.jsx';

export const Root = () => (
  <>
    <Composition id="film-en" component={Film} defaultProps={{ lang: 'en' }} durationInFrames={1200} fps={30} width={1920} height={1080} />
    <Composition id="film-da" component={Film} defaultProps={{ lang: 'da' }} durationInFrames={1200} fps={30} width={1920} height={1080} />
  </>
);
