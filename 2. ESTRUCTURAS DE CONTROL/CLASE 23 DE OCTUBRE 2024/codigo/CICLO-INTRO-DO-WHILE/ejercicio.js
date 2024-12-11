//UN CICLO NOS SIRVE PARA REPETIR
//INSTRUCCIONES
//Usamos do-while cuando requerimos ejecutar
//el bloque de instrucciones por lo menos
//una vez
/*
Programa que pide letras indefinidamente
hasta que se ingrese la z
*/
//version con do-while
/*
console.log("-----solución con do while-------");

let letra;
do {
    letra = prompt("Ingrese letra");
    console.log(letra);
} while (letra != "z");

console.log("-----solución con while-------");
//version con while
let letra2 = prompt("Ingrese letra");
console.log(letra2);
while (letra2 != "z") {
    letra2 = prompt("Ingrese letra");
    console.log(letra2);
}
    */
//Crear un programa que pida datos de
//registro a un usuario, edad, estatura
//peso. El programa debe pedir indefinidamente
//los datos del registro en caso de que
//alguno no cumpla. Para poder registrarse
// al edad debe ser de una persona mayor de edad, la estaura superior a 1.75 m, y el peso entre 75 y 100 kg
/*
//version 1
let edad;
let estatura;
let peso;
do {
    edad = parseInt(prompt("ingrese edad"))
    estatura = parseFloat(prompt("ingrese estatura"))
    peso = parseFloat(prompt("ingrese peso"))
} while (edad < 18 || estatura < 1.75 || (peso < 75 || peso > 100));
console.log("registrado exitosamente");
*/

//version 2 con negación
/*
let edad;
let estatura;
let peso;
do {
    edad = parseInt(prompt("ingrese edad"))
    estatura = parseFloat(prompt("ingrese estatura"))
    peso = parseFloat(prompt("ingrese peso"))
} while (!(edad >= 18) || !(estatura >= 1.75) || !(peso >= 75 && peso <= 100));
console.log("registrado exitosamente");
*/
//version 3
let edad;
let estatura;
let peso;
do {
    edad = parseInt(prompt("ingrese edad"))
    estatura = parseFloat(prompt("ingrese estatura"))
    peso = parseFloat(prompt("ingrese peso"))
} while (!(edad >= 18 && estatura >= 1.75 && (peso >= 75 && peso <= 100)));
console.log("registrado exitosamente");



