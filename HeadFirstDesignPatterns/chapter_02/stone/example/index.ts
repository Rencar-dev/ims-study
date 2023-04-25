import CurrentConditionsDisplay from './classes/CurrentConditionsDisplay'
import PressureDisplay from './classes/PressureDisplay'
import WeatherData from './classes/WeatherData'

const weatherData = new WeatherData()
const currentDisplay = new CurrentConditionsDisplay(weatherData)
const pressureDisplay = new PressureDisplay(weatherData)

weatherData.setMeasurements(20, 20, 20)
weatherData.setMeasurements(40, 30, 10)
weatherData.setMeasurements(10, 50, 40)

weatherData.remove(pressureDisplay)

weatherData.setMeasurements(70, 70, 70)
