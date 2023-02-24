// // object
// const car: {
//   wheels: number;
//   brand: string;
//   type: string;
// } = {
//   wheels: 4,
//   brand: 'BMW',
//   type: 'sedan',
// };

// // Interface

// interface Car {
//   wheels: number;
//   brand: string;
//   type: string;

//   name?: string;
//   [key: string]: unknown;
// }

// const car1: Car = {
//   brand: 'Toyota',
//   type: '',
//   wheels: 4,
//   name: 'myCar',
//   isNew: 'no',
// };
// car1['go'] = true;

// -------------------------------------- NEW ------------------------------------
// Interface
interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
}

// object
const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
};

interface Car2 {
  wheels: number;
  brand: string;
  type: string;
  isNew: boolean;

  [key: string]: unknown;
}

const car2: Car2 = {
  wheels: 4,
  brand: 'audi',
  type: 'sedan',
  isNew: false,
  engine: 'd',
};

car2.color = 'red';
