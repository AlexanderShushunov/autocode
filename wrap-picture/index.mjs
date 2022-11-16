#!/usr/bin/env node
import path from 'node:path';
import fs from 'node:fs/promises';
import { makeComponent } from './makeComponent.mjs';
import { convertToAVIF, convertToWebp } from './convertImgTo.mjs';

main();

async function main() {
  const processing = (await fs.readdir(getFullPath()))
    .filter((file) => file.endsWith('.jpeg'))
    .map((file) => processImg(file));
  await Promise.all(processing);
}

async function processImg(initialImg) {
  const imgName = extractImgName(initialImg);
  const componentName = capitalize(imgName);
  const componentDir = getFullPath(componentName);

  await fs.mkdir(componentDir);

  await Promise.all([
    fs.copyFile(getFullPath(initialImg), path.join(componentDir, `${imgName}.jpeg`)),
    convertToAVIF(getFullPath(initialImg), path.join(componentDir, `${imgName}.avif`)),
    convertToWebp(getFullPath(initialImg), path.join(componentDir, `${imgName}.webp`)),
    makeComponent(imgName, componentName, componentDir),
  ]);
}

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}

function extractImgName(nameFromArg) {
  return nameFromArg.split('/').at(-1).split('.').at(0);
}
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
