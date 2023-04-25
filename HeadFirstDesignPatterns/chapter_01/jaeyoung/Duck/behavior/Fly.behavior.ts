export interface FlyBehavior {
  fly: () => void;
}
export class FlyWithWings implements FlyBehavior {
  public fly() {
    console.log('날고 있어요!!');
  }
}
class FlyNoWay implements FlyBehavior {
  public fly() {
    console.log('저는 못 날아요');
  }
}