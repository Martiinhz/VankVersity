/*En un almacén de electrodomésticos se venden éstos a crédito y de contado. Si el cliente
compra a crédito, el valor del electrodoméstico aumenta en un 5% por cada mes que dure el
crédito. Cree un programa para un almacén donde el administrador ingrese el precio de un
electrodoméstico y el plazo en meses para pagarlo a crédito y muestre el valor fijo de las cuotas
mensuales que deberá pagar por el electrodoméstico.*/

const precio = parseFloat(prompt("Ingrese el precio del electrodoméstico: "));
const meses = parseInt(prompt("Ingrese el plazo en meses: "));
const precioCredito = precio * Math.pow(1.05, meses);
const cuotaMensual = precioCredito / meses;

console.log(`El precio total a crédito es: ${precioCredito.toFixed(2)}`);
console.log(`La cuota mensual será: ${cuotaMensual.toFixed(2)}`);
