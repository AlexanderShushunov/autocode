#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs/promises';
import sharp from 'sharp';

main();

async function main() {
  const processing = (await fs.readdir(getFullPath()))
    .filter((file) => file.endsWith('.jpeg'))
    .map((file) => processImg(file));
  await Promise.all(processing);
}

async function processImg(initialImg) {
  const imgName = extractImgName(initialImg);

  await Promise.all([
    convertToAVIF(getFullPath(initialImg), getFullPath(`${imgName}.avif`)),
    convertToWebp(getFullPath(initialImg), getFullPath(`${imgName}.webp`)),
  ]);
}

async function convertToAVIF(src, dest) {
  return sharp(src)
    .toFormat('avif', { effort: 9, quality: 50 })
    .toFile(dest);
}

async function convertToWebp(src, dest) {
  return sharp(src)
    .toFormat('webp', { effort: 6, quality: 80 })
    .toFile(dest);
}

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}

function extractImgName(nameFromArg) {
  return nameFromArg.split('/').at(-1).split('.').at(0);
}