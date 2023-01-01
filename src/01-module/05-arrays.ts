const numbers = [1, 2, 3, 4, 5];

const str: string[] = ['qwe', 'qwe'];
const str123: Array<string> = ['qwe', 'qwe'];
str.push('asd');

// -------------------------------------------
interface CarNew {
  wheels: number;
  brand: string;
}

const cars: CarNew[] = [];
cars.push({ wheels: 4, brand: 'Audi' });

// --------------------------------------------------------
const arrOfArr: number[][] = [[], []];
arrOfArr.push([1, 2, 3]);

// -----------------------------------------------------
function logParams(arr: unknown[]): void {
  arr.forEach(item => {
    console.log(item);
  });
}
