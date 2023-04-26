import { WeatherData } from "./WeatherData";
import { CurrentConditions } from "./displays/CurrentCondition";
import { NoNoConditions } from "./displays/CurrentCondition copy";

(() => {
  const weatherData = new WeatherData();
  new CurrentConditions(weatherData);
  new NoNoConditions(weatherData);

  setInterval(() => {
    weatherData.setMeasurements({
      humidity: Math.round(Math.random()*1000),
      pressure: Math.round(Math.random()*1000),
      temperature: Math.round(Math.random()*1000),
    });
  }, 1000);
})();
