/*
Es una estructura de datos ordenada, indexada
que generalmente contiene elementos de un mismo
tipo(string, boolena, entero...). Los elementos
seacceden mediante un índice, siendo el índice del
primer elemento el 0, el del segundo elemento el 1 etc
Es una estructura iterable(se puede recorrer de manera
natural con un ciclo)
*/
//arreglo de números
let arreglo = [20, 4, 7, 8];
console.log(arreglo);
//lectura de elementos
let elemento0 = arreglo[0];
let elemento3 = arreglo[3];
console.log("Elemento 0", elemento0);
console.log("Elemento 3", elemento3);
console.log("Elemento 10", arreglo[10]);
console.log("Elemento -1", arreglo[-1]);
console.log("Elemento 4", arreglo[4]);
//longitud de un arreglo(cantidad de elementos de un arreglo) usamos .length
let longitudArreglo = arreglo.length;
console.log("Longitud arreglo: ", longitudArreglo);
let arregloVacio = [];
console.log("Longitud arreglo vacio: ", arregloVacio.length);
//escritura de elementos
//cambiamos el valor del elemento de indice1 por 33
arreglo[1] = 33;
console.log("Nuevo valor ", arreglo[1]);
console.log("Todo el arreglo ", arreglo);
//cambiamos el valor del elemento de índice 3 por 50
arreglo[3] = 80;
console.log("Todo el arreglo ", arreglo);
//agregación de elementos(método push)
//agregamos el 16 al arreglo
arreglo.push(16);
console.log("Nueva longitud del arreglo", arreglo.length);
console.log(arreglo);
//agregamos el -90
arreglo.push(-90);
console.log(arreglo);
//eliminación de elementos usando splice
//eliminamos el elemento de inidice 2
arreglo.splice(2, 1);
console.log(arreglo);
//eliminamos dos elementos a partir del inidice 1
arreglo.splice(1, 2);
console.log(arreglo);
//recorrido de arreglos
let arreglo2 = ["manzana", "pera", "limon", "banano"];
//mostrar todos los elementos del arreglo
/*
console.log(arreglo2[0]);
console.log(arreglo2[1]);
console.log(arreglo2[2]);
*/
for (let index = 0; index < arreglo2.length; index++) {
    console.log("index ", index);
    console.log("Elemento: ", arreglo2[index]); 
}
//otra forma de recorrer con ciclo foreach
arreglo2.forEach((elemento) => {
    console.log("Elemento: ", elemento);
})
//Copia de un arreglo

let arregloA = ["a", "b", "c"];
//copia no independiente de arregloA
let copiaA = arregloA;
copiaA.splice(2, 1);
console.log("Estado arregloA", arregloA);
//copia independiente
let copiaIndependiente = arregloA.slice();

















