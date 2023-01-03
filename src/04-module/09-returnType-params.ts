export {};
// -------------------------------- ReturnType ----------------------------------------------
function f1(arg: { x: number; y: string }) {
  return arg.x + arg.y;
}

type T1 = ReturnType<typeof f1>; // T1 = string

// -------------------------------- Parameters ----------------------------------------------
type T2 = Parameters<typeof f1>;

// [arg: {
//     x: number;
//     y: string;
// }]

// -------------------------------- ConstructorParameters ----------------------------------------------
class Car {
  constructor(brand: string, model: string) {}
}

type T3 = ConstructorParameters<typeof Car>;

// [brand: string, model: string]
