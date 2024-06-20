const convertToCelsius = function(tempF) {
  const tempC = (tempF - 32) * (5 / 9);
  return tempC;
};

const convertToFahrenheit = function(temp) {
  // const f = temp * ( 9 / 5) + 32;
  // return f;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
