/*
Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario
dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber
cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.
*/
//entrada de datos
let edadActual = parseInt(prompt("Ingrese edad"));
let futuro = parseInt(prompt("Ingrese cantidad de años en el futuro"));
//proceso
let edadFutura = edadActual + futuro;
//salida
console.log("La edad futura es: ", edadFutura, " años");



