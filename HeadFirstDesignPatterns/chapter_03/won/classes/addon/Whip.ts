import { Condiment } from "../../decorators/Condiment";
import type { Beverage } from "../../abstracts/Beverage";

export class Whip extends Condiment {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription = () => {
    return this.beverage.getDescription() + "+휘핑크림";
  };
  cost(): number {
    return this.beverage.cost() + 300;
  }
}
