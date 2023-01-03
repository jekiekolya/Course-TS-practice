export {};

// -------------------------------------------------------- Record -----------------------------------
type Named = Record<string, number>; // { [x: string]: number }

type Brands = 'apple' | 'lenovo' | 'hp';
type BrandNamed = Record<Brands, string>; // { apple: string; lenovo: string; hp: string; }

// -------------------------------------------------------- Pick -----------------------------------
interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>;
const todo1: SimpleTodo = {
  id: 'qwerty',
  title: 'hello',
  completed: true,
};

// -------------------------------------------------------- Omit -----------------------------------
type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>;
const todo2: SimpleTodo2 = {
  id: 'qwerty',
  title: 'hello',
  completed: true,
};
