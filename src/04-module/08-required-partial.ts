export {};

interface Todo {
  readonly id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: number;
}

// -------------------------------- Readonly ----------------------------------------------
type ReadonlyTodo = Readonly<Todo>;
// {
//     readonly id: string;
//     readonly title: string;
//     readonly description?: string | undefined;
//     readonly completed: boolean;
//     readonly createdAt?: number | undefined;
// }

// -------------------------------- Partial -----------------------------------------------
type PartialTodo = Partial<Todo>;

// {
//     readonly id?: string | undefined;
//     title?: string | undefined;
//     description?: string | undefined;
//     completed?: boolean | undefined;
//     createdAt?: number | undefined;
// }

// -------------------------------- Required -----------------------------------------------
type RequiredTodo = Required<Todo>;

// {
//     readonly id: string;
//     title: string;
//     description: string;
//     completed: boolean;
//     createdAt: number;
// }
