import { h, FunctionComponent } from 'preact';

import { preloadImage } from '../../../../utils/preloadImage';

import imgAvifSrc from './itWorld.avif';
import imgWebpSrc from './itWorld.webp';
import imgJpegSrc from './itWorld.jpeg';

type Props = {
  alt: string;
  className?: string;
};

export const ItWorld: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
);

export function preloadItWorld() {
  return preloadImage({ avif: imgAvifSrc, webp: imgWebpSrc, other: imgJpegSrc });
}
