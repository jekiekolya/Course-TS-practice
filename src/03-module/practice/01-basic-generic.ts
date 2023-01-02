export function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

append(1, [123, 123]);
// append('1', [123, 123])
