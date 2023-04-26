"use strict";
exports.__esModule = true;
var PressureDisplay = /** @class */ (function () {
    function PressureDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.register(this);
    }
    PressureDisplay.prototype.update = function (temp, humidity, pressure) {
        this.pressure = pressure;
        this.display();
    };
    PressureDisplay.prototype.display = function () {
        console.log("\uD604\uC7AC \uC555\uB825: " + this.pressure);
    };
    return PressureDisplay;
}());
exports["default"] = PressureDisplay;
