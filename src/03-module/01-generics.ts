type TypeFactory<T> = T;
type myNumber = TypeFactory<number>; // type myNumber = number
type myBoolean = TypeFactory<boolean>; // type myBoolean = boolean

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
