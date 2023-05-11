
export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];
  prepare(): void {
    console.log('준비 중: ' + this.name);
    console.log('도우를 돌리는 중: ' + this.dough);
    console.log('소스를 뿌리는 중: ' + this.sauce);
    console.log('토핑을 올리는 중: ' + this.toppings);
  }

  bake(): void {
    console.log('175도에서 25분 간 굽기');
  }
  cut(): void {
    console.log('피자를 사선으로 자르기');
  }
  box(): void {
    console.log('상자에 피자 담기');
  }
  public getName(): string {
    return this.name;
  }
}

export class NYstyleCheesePizza extends Pizza {
  constructor() {
    super();
    super.name = '뉴욕 스타일 소스와 치즈 피자';
    super.dough = '씬 크러스트 도우';
    super.sauce = '마리나라 소스';

    this.toppings.push('잘게 썬 레지아노 치즈');
  }
}

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    super.name = '시카고 스타일 소스와 치즈 피자';
    super.dough = '아주 두꺼운 크러스트 도우';
    super.sauce = '플럼토마토 소스';

    this.toppings.push('잘게 썬 모짜렐라 치즈');
  }

  cut(): void {
    console.log('네모난 모양으로 자르기');
  }
}
