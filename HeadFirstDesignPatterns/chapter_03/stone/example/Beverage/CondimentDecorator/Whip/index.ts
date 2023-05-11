import { Beverage } from '../..'
import { Condiment } from '../../../../../won/decorators/Condiment'

class Whip extends Condiment {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()

    this.beverage = beverage
  }

  getDescription = () => {
    return this.beverage.getDescription() + '+ 휘핑'
  }
  cost = () => {
    return this.beverage.cost() + 0.2
  }
}

export default Whip
