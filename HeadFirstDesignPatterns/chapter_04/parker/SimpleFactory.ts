/**
 * 피자 객체 생성을 전담하는 클래스
 */
class SimplePizzaFactory {
  public createPizza(type: string) {
    if (type === 'cheese') {
      return new CheesePizza();
    }
    if (type === 'peperoni') {
      return new Peperoni();
    }
    if (type === 'clam') {
      return new Clam();
    }
    if (type === 'veggie') {
      return new Veggie();
    }
  }
}

class PizzaStore {
  factory: SimplePizzaFactory; // 구상 클래스에 의존

  constructor(factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  public orderPizza(type: string) {
    let pizza: Pizza;

    pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}