// const numbers = [1, 2, 3, 4, 5];

// const str: string[] = ['qwe', 'qwe'];
// const str123: Array<string> = ['qwe', 'qwe'];
// str.push('asd');

// // -------------------------------------------
// interface CarNew {
//   wheels: number;
//   brand: string;
// }

// const cars: CarNew[] = [];
// cars.push({ wheels: 4, brand: 'Audi' });

// // --------------------------------------------------------
// const arrOfArr: number[][] = [[], []];
// arrOfArr.push([1, 2, 3]);

// // -----------------------------------------------------
// function logParams(arr: unknown[]): void {
//   arr.forEach(item => {
//     console.log(item);
//   });
// }

//  ----------------------------- New ---------------------------------

const numbers = [1, 2, 2, 3, 5, true, null];
const numbersNew: number[] = [1, 3];

const strings: string[] = [];
const strings2: Array<string> = [];

strings.push('12');

interface Car1 {
  wheels: number;
  brand: string;
}

const cars: Car1[] = [];
cars.push({ wheels: 5, brand: 'audi' });

const arrOfArr: string[][] = [];
arrOfArr.push(['1']);

function printArr(arr: unknown[]): void {
  arr.forEach(item => console.log(item));
}
