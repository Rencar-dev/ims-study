import { Mocha } from "./classes/addon/Mocha";
import { Whip } from "./classes/addon/Whip";
import { Espresso } from "./classes/drinks/Espresso";
import { HouseBlend } from "./classes/drinks/HouseBlend";
(() => {
  const espresso = new Espresso();
  const addMocha = new Mocha(espresso)
  const addMochaSquare = new Mocha(addMocha)
  console.log(espresso.getDescription(),espresso.cost())
  console.log(addMocha.getDescription(),addMocha.cost())
  console.log(addMochaSquare.getDescription(),addMochaSquare.cost())


  const hb = new HouseBlend();
  const hbWhip = new Whip(espresso)
  const hbWhipWhip = new Mocha(hbWhip)
  console.log(hb.getDescription(),hb.cost())
  console.log(hbWhip.getDescription(),hbWhip.cost())
  console.log(hbWhipWhip.getDescription(),hbWhipWhip.cost())

  // https://www.npmjs.com/package/inversify

})();
