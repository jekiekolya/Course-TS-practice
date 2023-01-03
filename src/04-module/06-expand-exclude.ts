export {};
// ------------------------------------------------------ Exclude --------------------------------------------------
type T1 = Exclude<'a' | 'b' | 'c', 'c'>; // 'a' | 'b'
type T2 = Exclude<'a' | 'b' | 'c', 'b' | 'c'>; // "a"
type T3 = Exclude<number | string | (() => void), Function>; // string | number

type Status = 'success' | 'clientError' | 'ServerError' | 200 | 401 | 500;
type StringStatus = Exclude<Status, number>; // "success" | "clientError" | "ServerError"
type NumericStatus = Exclude<Status, string>; // 200 | 401 | 500

// ------------------------------------------------------ Extract --------------------------------------------------
type T11 = Extract<'a' | 'b' | 'c', 'c'>; // 'c'
type T22 = Extract<'a' | 'b' | 'c', 'b' | 'c' | 'qw'>; // 'b' | 'c'
type T33 = Extract<number | string | (() => void), number>; // number

interface Person {
  age: number;
  firstName: string;
  lastName: string;
  sex: 'male' | 'female';
  country: string;
}

type PersonName = Extract<keyof Person, 'firstName' | 'lastName'>;

// ------------------------------------------------------ NonNullable --------------------------------------------------
type T111 = NonNullable<string | number | null>; // string | number
type T222 = NonNullable<string | undefined | null>; // string
