import DisplayElement from '../../interfaces/DisplayElment'
import Obsever from '../../interfaces/Observer'
import WeatherData from '../WeatherData'

class PressureDisplay implements Obsever, DisplayElement {
  private pressure: number
  private weatherData: WeatherData

  constructor(weatherData: WeatherData) {
    this.weatherData = weatherData
    this.weatherData.register(this)
  }

  update(temp: number, humidity: number, pressure: number) {
    this.pressure = pressure

    this.display()
  }

  display() {
    console.log(`현재 압력: ${this.pressure}`)
  }
}

export default PressureDisplay
