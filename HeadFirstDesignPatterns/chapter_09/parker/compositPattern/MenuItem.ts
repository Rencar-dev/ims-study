import { MenuComponent } from "./MenuComponent";

export class MenuItem extends MenuComponent {
  constructor(private name: string = name, private price: number = price) {
    super();
  }

  public getName() {
    return this.name;
  }

  public getPrice() {
    return this.price;
  }

  public print() {
    console.log(this.getName() + '' + this.getPrice());
  }
}