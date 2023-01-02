const myNumber = 2;
const numberIsPositive = myNumber > 0 ? 'yes' : 'no';
// ----------------------------------------------------------
interface StringRecord {
  [key: string]: string;
}

interface DateRecord {
  [key: string]: Date;
}

type MyRecord<T> = T extends string ? StringRecord : DateRecord;

type Obj1 = MyRecord<string>;
type Obj2 = MyRecord<number>;

const obj1: Obj1 = {
  text: 'str',
};

const obj2: Obj2 = {
  date: new Date(),
};

export {};
