import { h, FunctionComponent } from 'preact';

import { preloadImage } from '../../../../utils/preloadImage';

import imgAvifSrc from './mathRandom.avif';
import imgWebpSrc from './mathRandom.webp';
import imgJpegSrc from './mathRandom.jpeg';

type Props = {
  alt: string;
  className?: string;
};

export const MathRandom: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
);

export function preloadMathRandom() {
  return preloadImage({ avif: imgAvifSrc, webp: imgWebpSrc, other: imgJpegSrc });
}
