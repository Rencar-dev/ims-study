import DisplayElement from '../../interfaces/DisplayElment'
import Obsever from '../../interfaces/Observer'
import WeatherData from '../WeatherData'

class CurrentConditionsDisplay implements Obsever, DisplayElement {
  private temperature
  private humidity
  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    this.weatherData.register(this)
  }

  update(temp: number, humidity: number, pressure: number) {
    this.temperature = temp
    this.humidity = humidity

    this.display()
  }

  display() {
    console.log(`현재 상태: 온도 ${this.temperature}F, 습도: ${this.humidity}%`)
  }
}

export default CurrentConditionsDisplay
