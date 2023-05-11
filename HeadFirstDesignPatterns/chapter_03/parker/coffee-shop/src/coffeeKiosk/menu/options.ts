import { Beverage } from "../interface/Beverage";
import { CondimentDecorator } from "../interface/CondimentDecorator";

export class Ice extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ' 아이스';
  }
  public cost(): number {
    return this.beverage.cost() + 0;
  }
}

export class Hot extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ' 핫';
  }
  public cost(): number {
    return this.beverage.cost() + 0;
  }
}

export class Shot extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ' 샷';
  }

  public cost(): number {
    return this.beverage.cost() + 500;
  }
}

export class WhippedCream extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();

    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ' 휘핑 크림';
  }

  public cost(): number {
    return this.beverage.cost() + 500;
  }
}
