import { Beverage } from "../../abstracts/Beverage";

export class DarkRoast extends Beverage {
  constructor() {
    super();
    super.description = "다크로스트";
  }
  cost(): number {
    return 3500;
  }
}
