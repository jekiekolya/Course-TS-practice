type Bird = {
  fly: () => {};
};

type Fish = {
  swim: () => {};
};

function isBird(animal: Fish | Bird): animal is Bird {
  return (animal as Bird).fly !== undefined;
}

function move(animal: Fish | Bird) {
  // Check type with the help of operator IN
  if (isBird(animal)) {
    return animal.fly();
  }

  return animal.swim();
}
