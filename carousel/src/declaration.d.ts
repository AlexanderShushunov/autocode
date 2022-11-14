declare module '*.css' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}
