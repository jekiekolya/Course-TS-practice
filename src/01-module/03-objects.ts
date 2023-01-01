// object
const car: {
  wheels: number;
  brand: string;
  type: string;
} = {
  wheels: 4,
  brand: 'BMW',
  type: 'sedan',
};

// Interface

interface Car {
  wheels: number;
  brand: string;
  type: string;

  name?: string;
  [key: string]: unknown;
}

const car1: Car = {
  brand: 'Toyota',
  type: '',
  wheels: 4,
  name: 'myCar',
  isNew: 'no',
};
car1['go'] = true;
