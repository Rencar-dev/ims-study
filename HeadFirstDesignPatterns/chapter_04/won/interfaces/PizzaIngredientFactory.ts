export type Dough = {};
export type Sauce = {};
export type Cheese = {};
export type Veggie = {};
export type Pepe = {};
export type Clam = {};

export interface PizzaIngredientFactory {
  createDough(): Dough;
  createSauce(): Sauce;
  createCheese(): Cheese;
  createVeggies(): Veggie[];
  createPepe(): Pepe;
  createClam(): Clam;
}
