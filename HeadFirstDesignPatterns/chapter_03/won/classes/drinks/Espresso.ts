import { Beverage } from "../../abstracts/Beverage";

export class Espresso extends Beverage {
  constructor() {
    super();
    super.description = "에스프레소";
  }
  cost(): number {
    return 2000;
  }
}
