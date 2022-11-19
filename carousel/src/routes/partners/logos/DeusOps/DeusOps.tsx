import { h, FunctionComponent } from 'preact';

import { preloadImage } from '../../../../utils/preloadImage';

import imgAvifSrc from './deusOps.avif';
import imgWebpSrc from './deusOps.webp';
import imgJpegSrc from './deusOps.jpeg';

type Props = {
  alt: string;
  className?: string;
};

export const DeusOps: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
);

export function preloadDeusOps() {
  return preloadImage({ avif: imgAvifSrc, webp: imgWebpSrc, other: imgJpegSrc });
}
