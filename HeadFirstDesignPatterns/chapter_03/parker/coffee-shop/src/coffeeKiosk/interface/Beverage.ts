export abstract class Beverage {
  protected description = '음료 설명을 추가할 것';

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}