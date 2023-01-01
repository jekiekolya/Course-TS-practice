function ex1(x?: string | number) {
  if (typeof x === 'string') {
    x.toUpperCase();
  } else if (typeof x === 'number') {
    x.toFixed(2);
  } else if (x === undefined) {
    console.log('x = undefined');
  } else {
    x; // NEVER
  }
}

// ------------------------------------------------------------
function ex2(x: string | string[] | null) {
  if (x && typeof x === 'object') {
    x.concat(['1', '2']);
  } else if (typeof x === 'string') {
    x.toUpperCase();
  } else {
    x; // NULL
  }
}

// ------------------------------------------------------------
function ex3(x: number[] | Date) {
  // choose type DATE
  if (x instanceof Date) {
    x.getDay();
  } else {
    x.concat([1, 2]);
  }
}

// ------------------------------------------------------------
type Bird = {
  fly: () => {};
};

type Fish = {
  swim: () => {};
};

function move(animal: Fish | Bird) {
  // Check type with the help of operator IN
  if ('fly' in animal) {
    return animal.fly();
  }

  return animal.swim();
}
