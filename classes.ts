class Vehicle {
  public honk(): void {
    console.log('Beep');
  }

  constructor(public color: string) {}
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vroom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(12, 'red');
car.startDrivingProcess();
car.honk();
