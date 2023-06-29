import { MenuComponent } from "./MenuComponent";

export class Waitress {
  constructor(private allMenus: MenuComponent) {
  }

  public printMenu() {
    this.allMenus.print();
  }
}