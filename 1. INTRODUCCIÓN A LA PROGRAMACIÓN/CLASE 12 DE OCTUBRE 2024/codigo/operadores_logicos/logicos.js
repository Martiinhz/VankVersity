//operador &&
let edad = 21;
let sisben = 2
//tiene derecho a subsidio si es mayor de
//edad y su  sisben es menor que 3
let subsidio = edad >= 18 && sisben < 3;
console.log(subsidio);
//operador ||
//es habilitado si vive en Armenia O
//es mayor de edad
let edad2 = 17;
let ciudad = "Armenia";
let habilitado = ciudad == "Armenia" || edad2 >= 18;
console.log(habilitado);
//operador negacion
let estado = true;
let estadoNegacion = !estado;
console.log(estadoNegacion);
//negamos algo falso
let estado2 = false;
let estado2Negacion = !estado2;
console.log(estado2Negacion);



