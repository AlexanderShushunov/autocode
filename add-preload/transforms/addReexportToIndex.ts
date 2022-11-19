import { API, FileInfo } from 'jscodeshift';
import { extractComponentName } from './extractComponentName';

export default function addReexportToIndex(file: FileInfo, { j }: API) {
  const componentName = extractComponentName(file.path);
  const preloadFunctionIdentifier = j.identifier(`preload${componentName}`);
  return j(file.source)
    .find(j.ExportNamedDeclaration)
    .find(j.ExportSpecifier)
    .insertAfter(
      j.exportSpecifier.from({
        exported: preloadFunctionIdentifier,
        local: preloadFunctionIdentifier,
      })
    )
    .toSource();
}
