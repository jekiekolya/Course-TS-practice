type MyBoolean = false | true;

//  [string, string][]
type Pair = [string, string];
type Pairs = Pair[];

type DiffCar = {
  wheels: number;
  brand: string;
  type: string;

  name?: string;
  [key: string]: unknown;
};
