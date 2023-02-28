interface ICar {
  go(speed: number): void;
  maxSpeed?: number; // Have to require and used in the class
}

export class Car implements ICar {
  go(speed: number) {
    console.log('go', speed);
  }
  stop() {
    console.log('stop');
  }
}

const car = new Car();
car.go(12);
// car.maxSpeed = 54;
