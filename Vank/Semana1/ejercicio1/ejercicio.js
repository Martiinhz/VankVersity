//Cree un programa que lea la edad de un usuario y muestre cuántos años tendrá el usuario dentro de tantos años como éste indique. Por ejemplo, si el usuario tiene 20 años y quiere saber cuántos años tendrá dentro de 15 años, el programa deberá mostrar que tendrá 35 años.

const edadActual = parseInt(prompt("Ingrese su edad: "));
const aniosF = parseInt(prompt("¿Cuántos años quiere calcular en el futuro? "));
const futuraEdad = edadActual + aniosF;

console.log(`Tendras ${futuraEdad} años en ${aniosF} años.`);
