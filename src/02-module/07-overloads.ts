function add(a: number, b: number): number;
function add(a: string, b: string): string;

// function add(a: number | string, b: number | string): number | string {
//   return a + b;
// }

function add(a: any, b: any): any {
  return a + b;
}

add(1, 1);
add('1', '1');

// ------------------------------------------------------------------------------------------
type asyncCB = (res: number) => number;

function asyncSum(a: number, b: number): Promise<number>;
function asyncSum(a: number, b: number, cb: asyncCB): number;
function asyncSum(a: number, b: number, cb?: asyncCB): any {
  const result = a + b;
  if (cb) {
    return cb(result);
  }
  return Promise.resolve(result);
}

asyncSum(1, 2);
