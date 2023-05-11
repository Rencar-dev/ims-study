import { Espresso, HouseBlend, Mocha } from "./concreteClass";

class StarBuzzCoffee {
  constructor(
    public beverage1 = new Espresso(),
    public beverage2 = new HouseBlend(),
  ) {

    console.log(beverage1.getDescription(), `$ ${beverage1.cost()}`);

    beverage2 = new Mocha(beverage2);
    beverage2 = new Mocha(beverage2);

    console.log(beverage2.getDescription(), `$ ${beverage2.cost()}`);
  }
}

const coffeeShop = new StarBuzzCoffee();
