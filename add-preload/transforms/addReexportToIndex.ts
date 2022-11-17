import { API, FileInfo } from "jscodeshift";
import { TransformOptions } from "./TransformOptions";

export default function addReexportToIndex(
  file: FileInfo,
  { j }: API,
  { componentName }: TransformOptions
) {
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
