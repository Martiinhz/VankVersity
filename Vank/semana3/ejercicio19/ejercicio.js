const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

console.log('100°C en Fahrenheit:', celsiusToFahrenheit(100));
console.log('212°F en Celsius:', fahrenheitToCelsius(212));