import { Observer } from "./interface/Observer";
import type { Subject } from "./interface/Subject";

export class WeatherData implements Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }
  removeObserver(o: Observer) {
    this.observers = this.observers.filter((_o) => _o.id === o.id);
  }
  notifyObserver() {
    this.observers.forEach((observer) => {
      observer.update({
        humidity: this.humidity,
        pressure: this.humidity,
        temp: this.temperature,
      });
    });
  }

  onChangeMeasurements() {
    this.notifyObserver();
  }

  setMeasurements({
    temperature,
    humidity,
    pressure,
  }: {
    temperature: number;
    humidity: number;
    pressure: number;
  }) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.onChangeMeasurements();
  }
}
