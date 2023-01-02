// Create two variants: aliases and interfaces

// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle
// --------------------------------------------------------------------------------------------------
type Product = {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
};

type Vehicle = {
  wheels: number;
  year: number;
  brand: string;
};

type Car = {
  type: string;
  model: string;
} & Product &
  Vehicle;
// const carFromAlias: Car = {}

interface Product1 {
  price: number;
  isNew: boolean;
  isSale: boolean;
  title: string;
}

interface Vehicle1 {
  wheels: number;
  year: number;
  brand: string;
}

interface Car1 extends Product1, Vehicle1 {
  type: string;
  model: string;
}

// const carFromInterface: Car1 = {};

// --------------------------------------------------------------------------------------------------
// interface IProduct {
//   title: string,
//   price: number,
//   isNew: boolean,
//   isSale?: boolean,
// }

// interface IVehicle {
//   wheels: number,
//   year: number,
//   brand: string,
// }

// interface ICar extends IProduct, IVehicle {
//   type: string,
//   model: string,
// }

// // const icar1: ICar = {}

// type Product = {
//   title: string,
//   price: number,
//   isNew: boolean,
//   isSale?: boolean,
// }

// type Vehicle = {
//   wheels: number,
//   year: number,
//   brand: string,
// }

// type Car = Product & Vehicle & {
//   type: string,
//   model: string,
// }

// // const car1: Car = {}

export {};
