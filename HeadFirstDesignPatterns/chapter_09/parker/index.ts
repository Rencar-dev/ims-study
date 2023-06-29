// Iterator pattern
class MenuItem {
  constructor(
    private name: string = name,
    private cost: number = cost,
  ) { }

  public getName() {
    return this.name;
  }

  public getCost() {
    return this.cost;
  }
}

class PancakeHouseMenu {
  private menuItems: MenuItem[] = [];

  constructor() {
    this.menuItems.push(new MenuItem('A PanCake', 100));
    this.menuItems.push(new MenuItem('B PanCake', 200));
  }

  getMenuItems() {
    return this.menuItems;
  }

  public createIterator() {
    return this.menuItems[Symbol.iterator]();
  }
}
type Return = {
  value: MenuItem;
  done: boolean;
};

class Waitress {
  constructor(
    private pancakeMenu: PancakeHouseMenu
  ) { }

  // 1. next 직접 사용


  // public printMenu() {
  //   const pancakeIterator = this.pancakeMenu.createIterator();
  //   let cur: IteratorResult<MenuItem>;

  //   while (!(cur = pancakeIterator.next()).done) {
  //     const menuItem = cur.value;

  //     console.log(menuItem.getName());
  //   }
  // }

  // 2. 향상된 for 문
  public printMenu() {
    for (const menuItem of this.pancakeMenu.createIterator()) {
      console.log(menuItem.getName());
    }
  }
}

const pancakeHouseMenu = new PancakeHouseMenu();
const waitress = new Waitress(pancakeHouseMenu);

waitress.printMenu();