import { h, FunctionComponent } from 'preact'

import imgAvifSrc from './webStack.avif'
import imgWebpSrc from './webStack.webp'
import imgJpegSrc from './webStack.jpeg'

type Props = {
  alt: string
  className?: string
}

export const WebStack: FunctionComponent<Props> = ({ alt, className }) => (
  <picture>
    <source type="image/avif" srcSet={imgAvifSrc} />
    <source type="image/webp" srcSet={imgWebpSrc} />
    <img class={className} src={imgJpegSrc} alt={alt} />
  </picture>
)
