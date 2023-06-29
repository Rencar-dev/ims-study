import { MenuComponent } from "./MenuComponent";

export class Menu extends MenuComponent {
  private menuComponents: MenuComponent[] = [];

  constructor(private name: string = name, private price: number = price) {
    super();
  }

  public add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  };

  public remove(menuComponent: MenuComponent) {
    this.menuComponents = this.menuComponents.filter(
      component => component.getName() !== menuComponent.getName()
    );
  };

  public getChild(i: number) {
    return this.menuComponents[i];
  };

  public getName() {
    this.name;
  }

  public getPrice() {
    this.price;
  }

  public print() {
    for (const component of this.menuComponents) {
      component.print();
    }
  }
}