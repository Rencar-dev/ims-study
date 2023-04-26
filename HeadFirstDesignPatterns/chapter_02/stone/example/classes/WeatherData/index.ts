import Obsever from '../../interfaces/Observer'
import Subject from '../../interfaces/Subject'

class WeatherData implements Subject {
  private observers: Obsever[]
  private temperature: number
  private humidty: number
  private pressure: number

  constructor() {
    this.observers = []
  }

  register(observer: Obsever) {
    this.observers.push(observer)
  }

  remove(observer: Obsever) {
    this.observers = this.observers.filter(
      (currentObserver) => currentObserver !== observer
    )
  }

  notify() {
    this.observers.forEach((observer) =>
      observer.update(this.temperature, this.humidty, this.pressure)
    )
  }

  measurementsChanged() {
    this.notify()
  }

  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature
    this.humidty = humidity
    this.pressure = pressure

    this.measurementsChanged()
  }
}

export default WeatherData
