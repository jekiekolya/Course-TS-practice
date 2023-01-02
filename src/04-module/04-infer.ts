function createObjFromTuple(tuple: [string, string]) {
  const [key, value] = tuple;

  return {
    [key]: value,
  };
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any
  ? First
  : never;

const myTuple: FirstArg<typeof createObjFromTuple> = ['str1', 'str2'];

createObjFromTuple(myTuple);
// -----------------------------------------------------------------------------------------
type ConstructorFirstArg<T> = T extends {
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

class Computer {
  constructor(brand: string) {}
}

let brand: ConstructorFirstArg<typeof Computer>; // string
let dateArg: ConstructorFirstArg<typeof Date>; // string | number | Date
let WindowArg: ConstructorFirstArg<typeof Window>; // unknown

export {};

// -----------------------------------------------------------------------------------------
type R = {
  a: string;
};

type MyType1<T> = T extends R ? R : never;
type Type1 = MyType1<{ b: number }>; // Never

type MyType2<T> = T extends infer R ? R : never;
type Type2 = MyType2<{ b: number }>; // { b: number }

type MyType3<T> = T;
type Type3 = MyType3<{ b: number }>;

// ---------------------------------------------------------------------------
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Type4 = ReturnType<() => '1212'>;
