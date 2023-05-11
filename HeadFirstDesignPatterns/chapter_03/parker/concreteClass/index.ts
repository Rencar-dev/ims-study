import { Beverage, CondimentDecorator } from "../abstractClass";

export class Espresso extends Beverage {
  constructor() {
    super();

    this.description = '에스프레소';
  }

  public cost() {
    return 1.99;
  }
}

export class HouseBlend extends Beverage {
  constructor() {
    super();

    this.description = '하우스 블렌드 커피';
  }

  public cost() {
    return .89;
  }
}

export class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ', 모카';
  }

  public cost() {
    return this.beverage.cost() + .20;
  }
}