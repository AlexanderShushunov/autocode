declare module '*.css' {
  const mapping: Record<string, string>;
  export default mapping;
}

declare module '*.jpeg' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string
  export default value
}

declare module '*.avif' {
  const value: string
  export default value
}