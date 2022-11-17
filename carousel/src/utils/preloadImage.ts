import { detectImageFormatSupport } from './detectImageFormatSupport';

export async function preloadImage({
  avif,
  webp,
  other,
}: {
  avif: string;
  webp: string;
  other: string;
}) {
  const supportedFormats = await detectImageFormatSupport();
  let href = other;
  if (supportedFormats.includes('avif')) {
    href = avif;
  } else if (supportedFormats.includes('webp')) {
    href = webp;
  }
  appendLinkTag(href);
}

function appendLinkTag(href: string) {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = href;
  document.head.appendChild(link);
}
