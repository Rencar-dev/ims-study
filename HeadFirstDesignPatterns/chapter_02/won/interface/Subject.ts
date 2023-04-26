import type { Observer } from "./Observer";

export interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObserver();
}
