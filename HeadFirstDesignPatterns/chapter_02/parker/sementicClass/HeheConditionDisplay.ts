import { DisplayElement } from "../interface/DisplayElement";
import { Observer } from "../interface/Observer";
import { WeatherData } from "./WeatherData";

export class HeheConditionDisplay implements Observer, DisplayElement {
  private temperature!: number;
  private humidity!: number;
  public weatherData!: WeatherData;

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObserver(this);
  }

  public update(temperature: number, humidity: number, pressure: number) { // 타입 자동완성 무엇..
    this.temperature = temperature;
    this.humidity = humidity;
    this.display();
  }

  public display() {
    console.log(
      `HeheConditionDisplay 현재 상태: 온도 ${this.temperature} F, 습도 ${this.humidity}%`
    );
  }
}
