import PizzaStore from '..'
import ChicagoStyleCheesePizza from '../../Pizza/ChicagoStyleCheesePizza'

class ChicagoPizzaStore extends PizzaStore {
  createPizza = (type: string) => {
    switch (type) {
      case 'cheese':
        return new ChicagoStyleCheesePizza()
      default:
        return new ChicagoStyleCheesePizza()
    }
  }
}

export default ChicagoPizzaStore
