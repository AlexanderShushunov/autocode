import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { run } from 'jscodeshift/src/Runner.js';

const transformIndex = getTransformPath('addReexportToIndex')

const options = {
  dry: true,
  print: true,
  verbose: 1,
  extensions: 'ts',
  parser: 'ts',
  babel: true,
};

const res = await run(transformIndex, ['./example/index.ts'], {...options, componentName: 'BeerJs'});

console.log('res --', res);

function getWorkingDirPath(...tail) {
  const cwd = process.env.INIT_CWD || process.cwd();
  return path.join(cwd, ...tail);
}

function getTransformPath(transformName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(__dirname, 'transforms', `${transformName}.ts`);
}
