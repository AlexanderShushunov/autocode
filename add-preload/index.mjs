import path from 'node:path';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { run } from 'jscodeshift/src/Runner.js';

const transformIndex = getTransformPath('addReexportToIndex');
const transformComponent = getTransformPath('addPreloadFunction');

main();

async function main() {
  const dirs = (
    await Promise.all(
      (
        await fs.readdir(getFullPath())
      ).map(async (file) => {
        const isDir = (await fs.lstat(getFullPath(file))).isDirectory();
        return isDir ? file : undefined;
      })
    )
  ).filter(Boolean);
  await Promise.all([processIndexes(dirs), processComponents(dirs)]);
}

const options = {
  dry: true,
  print: true,
  verbose: 1,
  babel: true,
};

async function processIndexes(dirs) {
  await run(
    transformIndex,
    dirs.map((dir) => getFullPath(dir, 'index.ts')),
    {
      ...options,
      extensions: 'ts',
      parser: 'ts',
    }
  );
}

async function processComponents(dirs) {
  await run(
    transformComponent,
    dirs.map((dir) => getFullPath(dir, `${dir}.tsx`)),
    {
      ...options,
      extensions: 'tsx',
      parser: 'tsx',
    }
  );
}

function getFullPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}

function getTransformPath(transformName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, 'transforms', `${transformName}.ts`);
}
