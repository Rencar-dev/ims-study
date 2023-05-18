export abstract class Beverage {
  description = "제목없음";

  getDescription = () => {
    return this.description;
  };
  abstract cost(): number;
}
