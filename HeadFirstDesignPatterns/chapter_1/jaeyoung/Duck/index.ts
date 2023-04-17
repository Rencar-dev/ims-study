import { FlyBehavior } from "./behavior/Fly.behavior";
import { QuackBehavior } from "./behavior/quack.behavior";

export abstract class Duck {
  abstract flyBehavior: FlyBehavior;
  abstract quackBehavior: QuackBehavior;

  public Duck() { }

  public abstract display(): void;

  public performFly() {
    this.flyBehavior.fly();
  }

  public performQuack() {
    this.quackBehavior.quack();
  }

  public swim() {
    console.log('모든 오리는 물에 뜹니다. 가짜 오리도 뜨죠');
  }
}