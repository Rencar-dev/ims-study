import { Beverage } from '../..'
import { Condiment } from '../../../../../won/decorators/Condiment'

class Mocha extends Condiment {
  beverage: Beverage

  constructor(beverage: Beverage) {
    super()

    this.beverage = beverage
  }

  getDescription = () => {
    return this.beverage.getDescription() + '+ 모카'
  }
  cost = () => {
    return this.beverage.cost() + 0.2
  }
}

export default Mocha
