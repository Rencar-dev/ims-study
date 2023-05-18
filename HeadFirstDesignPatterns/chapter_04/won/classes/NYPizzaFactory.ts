import { Cheese, Clam, Dough, Pepe, PizzaIngredientFactory, Sauce, Veggie } from "../interfaces/PizzaIngredientFactory";

export class NYPizzaFactory implements PizzaIngredientFactory {
  createDough(): Dough {
    throw new Error("Method not implemented.");
  }
  createSauce(): Sauce {
    throw new Error("Method not implemented.");
  }
  createCheese(): Cheese {
    throw new Error("Method not implemented.");
  }
  createVeggies(): Veggie[] {
    throw new Error("Method not implemented.");
  }
  createPepe(): Pepe {
    throw new Error("Method not implemented.");
  }
  createClam(): Clam {
    throw new Error("Method not implemented.");
  }
}
