export abstract class Beverage {
  protected description = '제목 없음';

  public getDescription() {
    return this.description;
  }

  public abstract cost(): number;
}

export abstract class CondimentDecorator extends Beverage {
  beverage!: Beverage;
  public abstract getDescription(): string;
}
