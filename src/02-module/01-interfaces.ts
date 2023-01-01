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
  login: 'myLogin',
  password: 'myPassword',
  isOnline: false,
};

// ---------------------------Expand WINDOW------------------
// interface Window {
//   isAuth?: boolean;
// }
// window.isAuth

// --------------------------Connecting interfaces--------------------
interface Person {
  readonly firstName: string;
  lastName: string;
  phone?: string;
  yearOfBirth?: number;
}

interface Employee extends User, Person {
  contractStart: Date;
}

export interface Developer extends Employee {
  skills: string[];
  phone: string; // change field
  level?: 'junior' | 'middle' | 'senior';
  say(): void; // methods
  code?: (arg: string) => void; // methods
}

// --------------------Implement interface to class ---------------------
// class MyNewClass implements Developer {

// }
