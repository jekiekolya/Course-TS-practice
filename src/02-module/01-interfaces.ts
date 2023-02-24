// interface User {
//   readonly email: string;
//   readonly login: string;
//   password: string;
// }

// interface User {
//   isOnline?: boolean;
// }

// const user1: User = {
//   email: 'myEmail',
//   login: 'myLogin',
//   password: 'myPassword',
//   isOnline: false,
// };

interface User {
  readonly email: string;
  readonly login: string;
  password: string;
}

interface User {
  isOnline?: boolean;
}

const user1: User = {
  email: 'myEmail',
  login: 'MyLogin',
  password: 'MyPassword',
  isOnline: true,
};

// ---------------------------Expand WINDOW------------------
// interface Window {
//   isAuth?: boolean;
// }
// window.isAuth

// --------------------------Connecting interfaces--------------------
// interface Person {
//   readonly firstName: string;
//   lastName: string;
//   phone?: string;
//   yearOfBirth?: number;
// }

// interface Employee extends User, Person {
//   contractStart: Date;
// }

// export interface Developer extends Employee {
//   skills: string[];
//   phone: string; // change field
//   level?: 'junior' | 'middle' | 'senior';
//   say(): void; // methods
//   code?: (arg: string) => void; // methods
// }

interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends Person, User {
  contractStart: Date;
}

export interface Developer extends Employee {
  skills: string[];
  phone: string;
  level?: 'junior' | 'middle' | 'senior';
  say(): void;
  code?: (arg: string) => void;
}

// --------------------Implement interface to class ---------------------
// class MyNewClass implements Developer {

// }
