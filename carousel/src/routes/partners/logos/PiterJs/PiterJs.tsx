import { h, FunctionComponent } from 'preact'

import imgAvifSrc from './piterJs.avif'
import imgWebpSrc from './piterJs.webp'
import imgJpegSrc from './piterJs.jpeg'

type Props = {
  alt: string
  className?: string
}

export const PiterJs: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
)
