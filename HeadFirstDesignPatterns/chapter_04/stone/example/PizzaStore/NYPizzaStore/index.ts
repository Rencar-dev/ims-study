import PizzaStore from '..'
import NYStyleCheesePizza from '../../Pizza/NYStyleCheesePizza'
import NYStyleClamPizza from '../../Pizza/NYStyleClamPizza'

class NYPizzaStore extends PizzaStore {
  createPizza = (type: string) => {
    switch (type) {
      case 'cheese':
        return new NYStyleCheesePizza()
      case 'clam':
        return new NYStyleClamPizza()
      default:
        return new NYStyleCheesePizza()
    }
  }
}

export default NYPizzaStore
