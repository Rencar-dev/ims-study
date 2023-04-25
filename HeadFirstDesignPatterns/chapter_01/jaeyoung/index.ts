import { Duck } from './Duck';
import { FlyWithWings } from './Duck/behavior/Fly.behavior';
import { Quack } from './Duck/behavior/quack.behavior';

class MallardDuck extends Duck {
  quackBehavior = new Quack();
  flyBehavior = new FlyWithWings();

  public display() {
    console.log('저는 물오리 입니다.');
  }
}

class MiniDuckSimulator {
  constructor(
    public mallard = new MallardDuck()
  ) {
    mallard.performQuack();
    mallard.performFly();
  }
}

new MiniDuckSimulator();