import { WeatherData } from "../WeatherData";
import { Display } from "../interface/Display";
import { Observer } from "../interface/Observer";

export class CurrentConditions implements Observer, Display {
  id: string = 'CurrentConditions';
  temperature:number = 0;
  humidity:number = 0;

  constructor(private weatherData:WeatherData){
    this.weatherData.registerObserver(this);
  }

  display() {
    console.log('CURRENT CONDITIONS',this.temperature,this.humidity,'%')
  }
  update({
    temp,
    humidity,
    pressure,
  }: {
    temp: number;
    humidity: number;
    pressure: number;
  }) {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }
}
