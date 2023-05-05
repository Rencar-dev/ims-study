import { Beverage } from "../abstracts/Beverage";

export abstract class Accessary extends Beverage{
  abstract beverage:Beverage
  abstract getDescription: () => string;
}
