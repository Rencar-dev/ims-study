import { Beverage } from './coffeeKiosk/interface/Beverage';
import { Americano, CaféLatte, VanillaLatte } from './coffeeKiosk/menu/coffees';
import { Hot, Ice, Shot, WhippedCream } from './coffeeKiosk/menu/options';

export const beverages = [
  { name: '아메리카노', instance: new Americano() },
  { name: '카페 라떼', instance: new CaféLatte() },
  { name: '바닐라 라떼', instance: new VanillaLatte() },
] as const;

export const options = [
  {
    name: '온도 선택', isSelect: true, selectOptions: [
      { name: 'hot', instance: (beverage: Beverage) => new Hot(beverage) },
      { name: 'cold', instance: (beverage: Beverage) => new Ice(beverage) }
    ]
  },
  { name: '휘핑 크림', isSelect: false, instance: (beverage: Beverage) => new WhippedCream(beverage) },
  { name: '1 샷 추가', isSelect: false, instance: (beverage: Beverage) => new Shot(beverage) }
] as const;
