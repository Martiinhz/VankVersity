//Cree un programa que realice la conversión de grados Celsius a Fahrenheit

const celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));
const fahrenheit = (celsius * 9 / 5) + 32;

console.log(`${celsius}°C equivalen a ${fahrenheit.toFixed(2)}°F`);
