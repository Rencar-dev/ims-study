import { Condiment } from "../../decorators/Condiment";
import type { Beverage } from "../../abstracts/Beverage";
import { Accessary } from "../../decorators/Accessary";

export class Large extends Accessary {
  beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
  getDescription = () => {
    return this.beverage.getDescription() + "+라지";
  };
  cost(): number {
    return this.beverage.cost() + 200;
  }
}
