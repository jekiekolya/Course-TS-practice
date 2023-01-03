export {};

interface DataModel {
  id: string;
  title: string;
  elements: {
    header: {
      title: string;
      description: string;
      links: string[];
    };
    footer: {
      description: string;
      links: string[];
    };
    body: {
      title: string;
      content: {};
    };
  };
}

type T1 = DataModel['elements']['footer'];

// -----------------------------------------------------------
type someTuple = [number, string, boolean, ...string[]];
const arr: someTuple = [123, 'asd', true, 'asd', '123'];

type T2 = someTuple[0]; // T2 = number

// -----------------------------------------------------------
const sizes = ['small', 'medium', 'large'] as const; //  readonly ["small", "medium", "large"]

type T3 = typeof sizes[number]; //
