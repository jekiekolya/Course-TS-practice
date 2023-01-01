type Union1 = 'a' | 's' | 'd' | 'f';
type Union2 = 'a' | 's' | 'd' | 'q';

type AllUnion12 = Union1 | Union2; // "a" | "s" | "d" | "f" | "q"
type OnlyUnion12 = Union1 & Union2; // "a" | "s" | "d"

type Union3 = { a: string; b: string; c: number } & {
  x: string;
  y: string;
  z: number;
}; // a, b, c, x, y, z

// ---------------------------- Extends Types -------------------

type User = {
  readonly email: string;
  readonly login: string;
  password: string;
};

type Person = {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
};

type Employee = {
  contractStart: Date;
} & User &
  Person; // Extends Types

type Developer = {
  skills: string[];
  phone: string; // change field
  level?: 'junior' | 'middle' | 'senior';
  say(): void; // methods
  code?: (arg: string) => void; // methods
} & Employee; // Extends Types
