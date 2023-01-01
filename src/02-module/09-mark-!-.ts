export let word: string | null = null;
const num = 10;

if (num > 5) {
  word = 'abc';
}

console.log(word!.toLowerCase());

// -------------------------------------------

function printName(name?: string) {
  const fullName: string = name!;
}

// ------------------------------------------
interface Person {
  name: string;
  age: number;
}

function printName2(person?: Person) {
  console.log(person!.name);
  console.log(person?.name);
}

// -------------------------------------------------------
