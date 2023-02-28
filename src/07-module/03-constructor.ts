export class Vehicle {
  // private createdAt: Date;
  constructor(private createdAt: Date) {}

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
  // public color: string;
  // protected maxSpeed: number;

  constructor(public readonly color: string, protected maxSpeed: number) {
    super(new Date());
    // this.color = color;
    // this.maxSpeed = maxSpeed;
  }

  getInfo() {
    console.log(this.color, this.maxSpeed);
  }
}

const car = new Car('red', 200);
//  car.color = ''
