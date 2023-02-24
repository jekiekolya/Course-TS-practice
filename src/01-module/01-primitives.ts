// // ------numbers------
// let x = 10;
// // let y = 1233n;
// let z = NaN;

// // ------strings------
// let str1 = 'Hello world';
// let str2: string = '';
// let sym = Symbol('xxx');
// // let d = sym + str1;

// // ------boolean------
// let o = true;
// o = false;
// // o = 1;

// // ------nothing------
// let h: undefined = undefined;
// let g: null = null;

// // LITERAL - constant
// const num = 108;

// // UNIVERSAL - ANY
// let variable: any = 1;
// variable = '';

// let xx: unknown = 2;
// String(xx);
// console.log(xx);

// if (typeof xx === 'string') xx.toUpperCase();

// ------------------------------- NEW -------------------------------

// number
let x: number = 10.1;
let y = 123123;
let z = NaN;

// string
let str1: string;
str1 = '123';
let str2 = 'Hello';
let str3: string = 'World';

let symbol: Symbol = Symbol('123d');
// let d = symbol + 123;

// boolean
let o = true;
o = false;

// nothing
let h = undefined;
let g = null;

let h1: undefined = undefined;
let g1: null = null;

// literal
const num: 104 = 104;
const num1 = 104;
const strNew = 'aws';

// Universal
let mm: any = 1;
mm = 'aws';
mm = [];
mm = 123;
mm.toUpperCase();
// unknown
let xx: unknown = 12;
xx = 'sdf';
if (typeof xx === 'string') {
  xx.toUpperCase();
}
