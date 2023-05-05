import { Beverage } from "../abstracts/Beverage";

export class Decaffein extends Beverage {
  constructor() {
    super();
    super.description = "디카페인";
  }
  cost(): number {
    return 4000;
  }
}
