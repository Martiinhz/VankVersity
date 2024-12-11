/*
Función que recibe un arreglo de números como argumento y retorna su promedio
*/

function promedioArreglo(arreglo){
    let contador = 0;
    for(let i = 0; i < arreglo.length; i++){
        contador += arreglo[i];
    }

    let resultado = contador / arreglo.length;
    return resultado;
}

const numeros = [1,2,3,4,5];
console.log("El primedio del arreglo es: ", promedioArreglo(numeros));