/*
Función que tiene dos parámetros,  el primero es un arreglo de nombres y el segundo un nombre a buscar en el arreglo. Si el nombre se encuentra en el arreglo la función debe retornar true, de lo contrario false
*/

let nombres =["Camila", "Javier", "Patricia"];
let nombre = "Camila";

function buscarNombre(nombres, nombre){
    return nombres.indexOf(nombre) !== -1;
}

console.log(buscarNombre(nombres, nombre));