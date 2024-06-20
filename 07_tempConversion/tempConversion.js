const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * (5 / 9);
  const roundedTempC = parseFloat(tempC.toPrecision(3));

  return roundedTempC;
};

const convertToFahrenheit = function(tempC) {
  const f = tempC * ( 9 / 5) + 32;
  return f;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
