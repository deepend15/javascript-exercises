const convertToCelsius = function(fahrenheitTemp) {
  let celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  let celsiusTempRounded = Math.round(celsiusTemp * 10) / 10;
  return celsiusTempRounded;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitTemp = (celsiusTemp * (9 / 5) + 32);
  let fahrenheitTempRounded = Math.round(fahrenheitTemp * 10) / 10;
  return fahrenheitTempRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
