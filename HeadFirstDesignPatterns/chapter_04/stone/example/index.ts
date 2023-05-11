import ChicagoPizzaStore from './PizzaStore/ChicagoPizzaStore'
import NYPizzaStore from './PizzaStore/NYPizzaStore'

const pizzaSimulator = () => {
  const nyStore = new NYPizzaStore()
  const chicagoStore = new ChicagoPizzaStore()

  const ethanPizza = nyStore.orderPizza('cheese')

  console.log('에단이 주문한 ' + ethanPizza?.getName())

  console.log('--------------')

  const joelPizza = chicagoStore.orderPizza('cheese')

  console.log('조엘이 주문한 ' + joelPizza.getName())
}

pizzaSimulator()
