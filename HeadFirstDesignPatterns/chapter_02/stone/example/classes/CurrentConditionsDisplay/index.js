"use strict";
exports.__esModule = true;
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.register(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("\uD604\uC7AC \uC0C1\uD0DC: \uC628\uB3C4 " + this.temperature + "F, \uC2B5\uB3C4: " + this.humidity + "%");
    };
    return CurrentConditionsDisplay;
}());
exports["default"] = CurrentConditionsDisplay;
