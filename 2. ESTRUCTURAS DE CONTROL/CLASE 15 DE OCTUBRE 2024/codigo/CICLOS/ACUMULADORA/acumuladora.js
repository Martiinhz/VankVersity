//Una variable acumuladora, nos sirve para acumular
//valres, por ejemplo, acumular goles, acumular monedas
//en un videojuego, acumular notas..

//Programa que muestra la suma de los primeros
//n numeros naturales
//variable acumuladora
let acumuladora = 0;
//variable control del ciclo
let control = 1;
let n = parseInt(prompt("Ingrese n mayor que 1"));
while (control <= n) {
    acumuladora = acumuladora + control;
    control++;
}
console.log("Valor acumulado: ", acumuladora);
