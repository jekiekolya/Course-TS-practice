export class Vehicle {
  public drive(speed: number): void {
    console.log('Current speed', speed);
  }
  public stop() {
    console.log('Stop');
  }

  private log(speed: number): void {
    console.log(speed);
  }

  protected altLog(text: string) {
    console.log(text.toUpperCase);
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed);
    this.altLog('Speed was changed');
  }
}

const car1 = new Car();
car1.drive(44);
car1.stop();
// car1.log(33); // is private and only accessible within class
