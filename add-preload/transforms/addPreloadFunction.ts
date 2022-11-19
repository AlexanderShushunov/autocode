import { API, FileInfo } from 'jscodeshift';
import { extractComponentName } from './extractComponentName';

export default function addPreloadFunction(file: FileInfo, { j }: API) {
  const componentName = extractComponentName(file.path);
  const { statement } = j.template;
  const root = j(file.source);

  const importStatement = statement`import { preloadImage } from '../../../../utils/preloadImage'`;
  const firstImport = root.find(j.ImportDeclaration).at(0);
  firstImport.insertAfter(importStatement);

  const functionStatement = creatFunctionalStatement(j, componentName);
  const program = root.find(j.Program).at(0).nodes()[0];
  program.body.push(j.exportDeclaration(false, functionStatement));

  return root.toSource();
}

function creatFunctionalStatement(j: API['j'], componentName: string) {
  const { statement } = j.template;
  const preloadFunctionIdentifier = j.identifier(`preload${componentName}`);
  return j.functionDeclaration(
    preloadFunctionIdentifier,
    [],
    j.blockStatement([
      statement`preloadImage({ avif: imgAvifSrc, webp: imgWebpSrc, other: imgJpegSrc })`,
    ])
  );
}
