const convertToCelsius = function(temperature) {
  // celsius from fahrenheit 
  let celsiusTemperature = (temperature - 32) * (5 / 9);
  let rounded1 = Math.round(celsiusTemperature * 10) / 10;
   return rounded1;
};
convertToCelsius(32);
const convertToFahrenheit = function(temperature) {
  // fahrenheit from celius
  let fahrenheitTemperature = (temperature * (9 / 5) + 32);
  let rounded1 = Math.round(fahrenheitTemperature * 10) / 10;
    return rounded1;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
