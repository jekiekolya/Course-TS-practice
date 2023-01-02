export function createTuple<T>(first: T) {
  return function <U>(second: U): [T, U] {
    return [first, second];
  };
}

const createSecondIndex = createTuple(1);
const newTuple = createSecondIndex('Jon');

const createSecondIndex2 = createTuple<number>(1);
const newTuple2 = createSecondIndex2<string>('Jon');
