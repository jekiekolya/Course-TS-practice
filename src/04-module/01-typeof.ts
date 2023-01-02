import { average } from '../01-module/02-function';
// --------------------------------------------------------------
export let str = 'Hello';
type TypeStr = typeof str; // type TypeStr = string

// --------------------------------------------------------------
type Fn = typeof average;
const getMaxNumber: Fn = function (...args) {
  return Math.max(...args);
};

getMaxNumber(1, 3, 5);

// ------------------------------------------------------------------
type ReturnFn = ReturnType<typeof average>; // number
