const convertToCelsius = function(f) {
  let farenheit = (f - 32) * 5/9;
  let result = parseFloat(farenheit.toFixed(1));
  return result;
};

const convertToFahrenheit = function(c) {
  let celcius = (c * 9/5 + 32 );
  let result = parseFloat(celcius.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
