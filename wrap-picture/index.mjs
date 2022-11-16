#!/usr/bin/env node
import path from 'node:path';
import sharp from 'sharp';

main();

async function main() {
  await processImg('beerJs.jpeg');
}

async function processImg(initialImg) {
  const imgName = extractImgName(initialImg);

  await Promise.all([
    convertToAVIF(getFullPath(initialImg), getFullPath(`${imgName}.avif`)),
  ]);
}

async function convertToAVIF(src, dest) {
  return sharp(src)
    .toFormat('avif', { effort: 9, quality: 50 })
    .toFile(dest);
}

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}

function extractImgName(nameFromArg) {
  return nameFromArg.split('/').at(-1).split('.').at(0);
}