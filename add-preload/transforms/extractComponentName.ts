export function extractComponentName(path: string) {
  const pathParts = path.split('/');
  return pathParts[pathParts.length - 2];
}
