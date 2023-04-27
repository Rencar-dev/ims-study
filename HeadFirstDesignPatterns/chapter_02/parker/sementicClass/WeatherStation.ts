import { WeatherData } from "./WeatherData";
import { CurrentConditionDisplay } from './CurrentConditionDisplay';
export class WeatherStation {
  constructor(
    public weatherData = new WeatherData()
  ) {
    const currentDisplay = new CurrentConditionDisplay(this.weatherData);
    // etc display... 

    this.weatherData.setMeasurements(80, 65, 30.4);
  }
}
