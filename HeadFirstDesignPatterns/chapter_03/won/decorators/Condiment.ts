import { Beverage } from "../abstracts/Beverage";

export abstract class Condiment extends Beverage{
  abstract beverage:Beverage
  abstract getDescription: () => string;
}
