import { h, FunctionComponent } from 'preact'

import imgAvifSrc from './itWorld.avif'
import imgWebpSrc from './itWorld.webp'
import imgJpegSrc from './itWorld.jpeg'

type Props = {
  alt: string
  className?: string
}

export const ItWorld: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
)
