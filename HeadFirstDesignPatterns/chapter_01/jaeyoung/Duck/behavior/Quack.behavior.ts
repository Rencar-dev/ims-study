export interface QuackBehavior {
  quack: () => void;
}
export class Quack implements QuackBehavior {
  public quack() {
    console.log("꽥");
  }
}
class MuteQuack implements QuackBehavior {
  public quack() {
    console.log('<< 조용~ >>');
  }
}
class Squeak implements QuackBehavior {
  public quack() {
    console.log('삑');
  }
}