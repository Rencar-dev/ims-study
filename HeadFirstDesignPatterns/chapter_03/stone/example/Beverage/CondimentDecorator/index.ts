import { Beverage } from '..'

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage

  abstract getDescription: () => string
}
