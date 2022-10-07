import { Car } from "./car.js";
export class WishList {
  constructor() {
    (this.list = []), (this.nextId = 0);
  }

  add(make, model, year) {
    let newCar = new Car(this.nextId++, make, model, year);
    this.list.push(newCar);
  }

  remove(carId) {
    console.log(this.list, carId);
    this.list = this.list.filter(car => car.id !== carId);
  }
}
