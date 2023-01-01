type NestedNumbers = number | NestedNumbers[];

const numbersRecursive: NestedNumbers = [1, 2, [3, 4, [5, 6]]];
numbersRecursive.push(1);
numbersRecursive.push([1, [3]]);

// ---------------------JSON----------------------------
type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONPArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONPArray;

function isJSON(arg: JSONValue) {}
isJSON('wd');
// isJSON(()=>{})  // NOT allow
isJSON(123);
isJSON({ a: [234], v: { x: 1 } });
isJSON([1, { x: '' }]);
