import sharp from 'sharp';

export async function convertToAVIF(src, dest) {
  return sharp(src)
    .toFormat('avif', { effort: 9, quality: 50 })
    .toFile(dest);
}

export async function convertToWebp(src, dest) {
  return sharp(src)
    .toFormat('webp', { effort: 6, quality: 80 })
    .toFile(dest);
}
