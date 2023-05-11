import Mocha from './Beverage/CondimentDecorator/Mocha'
import Whip from './Beverage/CondimentDecorator/Whip'
import Espresso from './Beverage/Espresso'
import HouseBlend from './Beverage/HouseBlend'

const coffeSimulator = () => {
  const espresso = new Espresso()

  console.log(espresso.getDescription(), espresso.cost())

  const houseBlend = new HouseBlend()
  const houseBlendWithMocha = new Mocha(houseBlend)
  const houseBlendWithMochaWhip = new Whip(houseBlendWithMocha)

  console.log(
    houseBlendWithMochaWhip.getDescription(),
    houseBlendWithMochaWhip.cost()
  )
}

coffeSimulator()
