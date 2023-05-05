import { Condiment } from "../../decorators/Condiment";
import type { Beverage } from "../../abstracts/Beverage";

export class Mocha extends Condiment {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription = () => {
    return this.beverage.getDescription() + "+모카";
  };
  cost(): number {
    return this.beverage.cost() + 500;
  }
}
