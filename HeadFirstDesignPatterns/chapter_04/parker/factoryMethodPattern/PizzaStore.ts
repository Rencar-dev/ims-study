import { ChicagoStyleCheesePizza, NYstyleCheesePizza, Pizza } from "./Pizza";

// abstract class
export abstract class PizzaStore {
  public orderPizza(type: string) {
    const pizza: Pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  // factory의 method가 abstract method로 바뀜
  protected abstract createPizza(type: string): Pizza;
}

// sub class 
export class NYPizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza!: Pizza;

    if (type === 'cheese') {
      pizza = new NYstyleCheesePizza();
    }
    // etc..
    return pizza;
  }
}
export class ChicagoPizzaStore extends PizzaStore {
  createPizza(type: string) {
    let pizza!: Pizza;

    if (type === 'cheese') {
      return new ChicagoStyleCheesePizza();
    }
    // etc.. 
    return pizza;
  }
}
