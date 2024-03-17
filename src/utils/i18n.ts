export function unprefixPath(path: string, prefix: string): string {
  return path.startsWith(`/${prefix}`) ? path.slice(prefix.length + 1) : path
}
