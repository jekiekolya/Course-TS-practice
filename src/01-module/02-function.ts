function sum(a: number, b: number): number {
  return a + b;
}
const sum2 = (a: number, b: number): number => {
  return a + b;
};
const sum3 = function sum(a: number, b: number): number {
  return a + b;
};
sum(1, 5);

// ------------------------------------------------------------------------
function log(name: string, userId?: number): void {
  console.log(name);
}
log('Jo');

function createError(): never {
  throw new Error('error');
}

export function average(...array: number[]): number {
  const sum = array.reduce((acc, item) => acc + item, 0);
  return sum / array.length;
}
