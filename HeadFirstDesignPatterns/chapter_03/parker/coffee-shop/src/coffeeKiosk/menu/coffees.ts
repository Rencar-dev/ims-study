import { Beverage } from "../interface/Beverage";

export class VanillaLatte extends Beverage {
  constructor() {
    super();
    this.description = '바닐라 라떼';
  }

  cost() {
    return 4_500;
  }
}

export class CaféLatte extends Beverage {
  constructor() {
    super();
    this.description = '카페 라떼';
  }

  cost() {
    return 4_000;
  }
}

export class Americano extends Beverage {
  constructor() {
    super();
    this.description = '아메리카노';
  }

  cost() {
    return 3_500;
  }
}