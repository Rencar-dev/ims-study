"use strict";
exports.__esModule = true;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = [];
    }
    WeatherData.prototype.register = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.remove = function (observer) {
        this.observers = this.observers.filter(function (currentObserver) { return currentObserver !== observer; });
    };
    WeatherData.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            return observer.update(_this.temperature, _this.humidty, _this.pressure);
        });
    };
    WeatherData.prototype.measurementsChanged = function () {
        this.notify();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidty = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports["default"] = WeatherData;
