interface PC {
  brand: string;
  year: number;
}

type MyPC = keyof PC;

const pc1: MyPC = 'brand';
const pc2: MyPC = 'year';

// -------------------------------------------------------

type MyTuple = keyof [number, string];
const value1: MyTuple = '0';
const value2: MyTuple = '1';
const value3: MyTuple = 'concat';
