type TypeFactory<T> = T;
type MyString = TypeFactory<string>; // type MyString = string
type MyNumber = TypeFactory<number>; // type MyNumber = number

type NewTypeFactory<T, U> = T | U;
type MrUnion = NewTypeFactory<string, boolean>; // type MrUnion = string | boolean

// ------------------------------------------------------
function toArray<T>(...arg: T[]): T[] {
  return arg;
}
// ------- arrow
const arrowToArray = <T>(...arg: T[]): T[] => {
  return arg;
};
// -------------

toArray(1, 2, 3);
toArray<number>(1, 2, 3);

toArray('1', '2', '3');
toArray<string>('1', '2', '3');

// ----------------------Interface--------------------
interface ModelData<T> {
  title: string;
  value: T;
}

const obj1: ModelData<number[]> = {
  title: 'My obj',
  value: [1, 23],
};

// ------------------------
