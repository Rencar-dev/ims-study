import { NYPizzaStore } from './PizzaStore';


const pizza = new NYPizzaStore().orderPizza('cheese');

console.log(pizza.getName());
