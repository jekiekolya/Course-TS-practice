function logPoint(point: { x: number; y: number }): void {
  console.log(`Coordinate: x: ${point.x}, y: ${point.y}`);
}

const obg1 = {
  x: 1,
  y: 2,
  z: 3,
};

logPoint(obg1);

// ------------------------------------------------

function printName(user: { firstName: string; lastName?: string }): void {
  console.log('hello:', user.firstName);

  if (user.lastName) {
    console.log('Welcome:', user.lastName.toUpperCase());
  }
}

printName({ firstName: 'Jack' });
printName({ firstName: 'Jack', lastName: 'Crocodile' });
