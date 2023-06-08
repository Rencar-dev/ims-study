# Template Method Pattern  

> 알고리즘의 골격을 정의한다. 템플릿 메소드를 사용하면 알고리즘의 일부 단계를 서브클래스에서 구현할 수 있으며, 알고리즘의 구조는 그대로 유지하면서 알고리즘의 특정 단계를 서브클래스에서 재정의할 수도 있다.



아래 코드에서 `hook`을 사용하여 추상 메서드인 `addCondiments`의 실행여부를 결정하고 있는데, 이를 사용한 `Tee` 클래스의 생김새만을 놓고 보면 어떤 순서로 실행될 지 전혀 알 수 없다는 점에서 `super` 클래스의 템플릿 메서드에서 강력하게 실행 순서를 제어하고 있다는 것을 알 수 있다. 이렇게 알고리즘들의 실행 순서를 강력하게 제어할 수 있다는 장점에도 불구하고 상속을 사용하므로 `super` 클래스에서 작성한 메서드가 모든 sub 클래스에 영향이 가는 상속의 고질적인 문제점으로인해 추상화를 신중하게 해야할 것 같다.

``` ts 
abstract class CaffeinBeverage {
  // template method
  prepareRecipe() {
    this.boilWater();
    this.pourInCup();
    this.brew();
    if (this.customerWantsCondiments()) {
      this.addCondiments();
    }
  }
  
  // hook
  public customerWantsCondiments(): boolean {
    return true;
  }
  
  ...
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