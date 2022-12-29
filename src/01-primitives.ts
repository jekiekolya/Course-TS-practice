// ------numbers------
let x = 10;
// let y = 1233n;
let z = NaN;

// ------strings------
let str1 = 'Hello world';
let str2: string = '';
let sym = Symbol('xxx');
// let d = sym + str1;

// ------boolean------
let o = true;
o = false;
// o = 1;

// ------nothing------
let h: undefined = undefined;
let g: null = null;

// LITERAL - constant
const num = 108;

// UNIVERSAL - ANY
let variable: any = 1;
variable = '';

let xx: unknown = 2;
String(xx);
console.log(xx);

if (typeof xx === 'string') xx.toUpperCase();
