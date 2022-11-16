import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Mustache from 'mustache';

export async function makeComponent(imgName, componentName, componentDir) {
  await writeComponent(imgName, componentName, componentDir);
  await writeIndex(componentName, componentDir);
}

async function writeComponent(imgName, componentName, componentDir) {
  const template = await readTemplate('component');
  const component = Mustache.render(template, {
    imgName,
    componentName,
  });
  await fs.writeFile(path.join(componentDir, `${componentName}.tsx`), component);
}

async function writeIndex(componentName, componentDir) {
  const template = await readTemplate('index');
  const index = Mustache.render(template, {
    componentName,
  });
  await fs.writeFile(path.join(componentDir, `index.ts`), index);
}

async function readTemplate(templateName) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const templatePath = path.join(__dirname, `${templateName}.mustache`);
  const buff = await fs.readFile(templatePath);
  return buff.toString();
}
