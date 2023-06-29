export abstract class MenuComponent {
  public add(menuComponent: MenuComponent) {
    throw new Error('unsupported operation');
  };

  public remove(menuComponent: MenuComponent) {
    throw new Error('unsupported operation');
  };

  public getChild(i: number) {
    throw new Error('unsupported operation');
  };

  public getName() {
    throw new Error('unsupported operation');
  }

  public getPrice() {
    throw new Error('unsupported operation');
  }

  public print() {
    throw new Error('unsupported operation');
  }
}