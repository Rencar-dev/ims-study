import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;
  public abstract getDescription(): string;
}
