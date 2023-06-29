import { Menu } from "./Menu";
import { MenuItem } from "./MenuItem";
import { Waitress } from "./Waitress";

const dinnerMenu = new Menu('저녁 메뉴', 100);
const cafeMenu = new Menu('카페 메뉴', 200);

const allMenus = new Menu('전체 메뉴', 3000);

allMenus.add(dinnerMenu);
allMenus.add(cafeMenu);


dinnerMenu.add(new MenuItem(
  '파스타', 100
));
dinnerMenu.add(cafeMenu);


cafeMenu.add(new MenuItem(
  '아이스크림', 200
));
cafeMenu.add(new MenuItem(
  '주스', 300
));

const waitress = new Waitress(allMenus);

waitress.printMenu();