// function sum(a: number, b: number): number {
//   return a + b;
// }
// const sum2 = (a: number, b: number): number => {
//   return a + b;
// };
// const sum3 = function sum(a: number, b: number): number {
//   return a + b;
// };
// sum(1, 5);

// // ------------------------------------------------------------------------
// function log(name: string, userId?: number): void {
//   console.log(name);
// }
// log('Jo');

// function createError(): never {
//   throw new Error('error');
// }

export function average(...array: number[]): number {
  const sum = array.reduce((acc, item) => acc + item, 0);
  return sum / array.length;
}

// ---------------------------------- NEW ---------------------------------
function newSum(a: number, b: number): number {
  return a + b;
}

newSum(1, 2);

function logHello(name: string): void {
  console.log(name);
}

function logUserHello(name: string, userId?: string): void {
  console.log(`Hello ${name} your id - ${userId || '1'}`);
}

logUserHello('Jon');

function crash(): never {
  throw new Error('Bad request!');
}

const averageNew = (...numbers: number[]): number => {
  const sum = numbers.reduce((acc, item) => acc + item, 0);

  return sum / numbers.length;
};

let repeat;
