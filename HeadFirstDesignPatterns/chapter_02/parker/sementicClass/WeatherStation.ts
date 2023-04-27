import { WeatherData } from "./WeatherData";
import { CurrentConditionDisplay } from './CurrentConditionDisplay';
import { HeheConditionDisplay } from "./HeheConditionDisplay";
export class WeatherStation {
  constructor(
    public weatherData = new WeatherData()
  ) {
    const currentDisplay = new CurrentConditionDisplay(this.weatherData);

    const currentDisplay2 = new HeheConditionDisplay(this.weatherData);

    

    this.weatherData.setMeasurements(Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()));
      setInterval(()=>{
        this.weatherData.setMeasurements(Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random()));
        weatherData.removeObserver(currentDisplay);
      },500)
    // etc display... 

    
  }
}
