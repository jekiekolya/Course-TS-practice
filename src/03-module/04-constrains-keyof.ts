export function prop<T, U extends keyof T>(key: U, obj: T): T[U] {
  return obj[key];
}

const obj = { a: 1, b: 2, c: 3 };
prop('a', obj); // "a" | "b" | "c"
prop('b', obj);
