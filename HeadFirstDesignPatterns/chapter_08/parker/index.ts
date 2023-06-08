abstract class CaffeinBeverage {
  /**
   * @summary template method, control how to make coffee
   */
  prepareRecipe() {
    this.boilWater();
    this.pourInCup();
    this.brew();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }

  public boilWater() {
    console.log('물을 끓인다.');
  }

  public pourInCup() {
    console.log('물을 따른다.');
  }

  abstract brew(): void;

  abstract addCondiments();

  /**
   * @summary hook
   */
  public customerWantsCondiments(): boolean {
    return true;
  }
}

class Coffee extends CaffeinBeverage {
  brew(): void {
    console.log('필터로 커피를 우려내는 중');
  }
  addCondiments(): void {
    console.log('우유와 설탕을 추가하는 중');
  }
}

class Tee extends CaffeinBeverage {
  brew(): void {
    console.log('티백으로 홍차를 우려내는 중');
  }

  addCondiments(): void {
    console.log('레몬을 넣는 중');
  }

  customerWantsCondiments() {
    return window.confirm('레몬을 넣을까요?');
  }
}
