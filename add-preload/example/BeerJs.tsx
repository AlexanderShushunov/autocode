import { h, FunctionComponent } from 'preact';

import imgAvifSrc from './beerJs.avif';
import imgWebpSrc from './beerJs.webp';
import imgJpegSrc from './beerJs.jpeg';

type Props = {
  alt: string;
  className?: string;
};

export const BeerJs: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
);
