import { Beverage } from "../../abstracts/Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    super.description = "하우스 블렌디드";
  }
  cost(): number {
    return 1500;
  }
}
