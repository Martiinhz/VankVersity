/*
Un arreglo bidimensional es un arreglo que contiene arreglos.
En un arreglo bidimensional se usan dos índices para acceder
a los elementos más internos.
*/
//arreglo de números
//acá nos fijamos que los elementos del arreglo son otros areglos
let arreglo = [[4, 6, 22], [99, 5, 22,], [1, -5, 9]]
//lectura
let primerElemento = arreglo[0];
let segundoElemento = arreglo[1];
console.log(primerElemento);
console.log(segundoElemento);
//leer los elementos más internos
//leer el elemento 6
let elemento6 = arreglo[0][1];
console.log("Elemento 6 ", elemento6);
//leer el elemento 6
let elementoMenos5 = arreglo[2][1];
console.log("Elemento -5 ", elementoMenos5);
//escritura
//cambiar el 99 por el 55
arreglo[1][0] = 55;
console.log("Todo el arreglo ", arreglo);
//cambiar el 9 por el 40
arreglo[2][2] = 40;
console.log("Todo el arreglo ", arreglo);
//agregar elementos con push
arreglo.push([7, 8, 4]);
console.log("Todo el arreglo ", arreglo);
//eliminar elementos
arreglo.splice(1, 1);
console.log("Todo el arreglo ", arreglo);
//recorrido de un arreglo bidimensional. Usamos dos ciclos
for (let i = 0; i < arreglo.length; i++) {
    
    for (let j = 0; j < arreglo[i].length; j++) {
        console.log(arreglo[i][j]);
    } 

}




























