//pop para eliminar el último elemento
let nombres = ["Maria", "Raul", "Pedro"]
nombres.pop()
console.log("Arreglo completo ", nombres);
//shift
let array = [88, 99, 3];
let firstElement = array.shift()
console.log("Primer elemento eliminado ", firstElement);
console.log("Arreglo completo ", array);
//map. Realiza operaciones sobre los elementos del
//arreglo
let edades = [20, 55, 70, 3, 88];
let edadesSumadas10 = edades.map(element => element + 10);
console.log("Nuevo arreglo .map ", edadesSumadas10);
//map con cadenas

//tomar un arreglo de nombres y obtener uno con los nombres en mayusculas sin .map
//PROGRAMACIÓN IMPERATIVA - NOS INDICA LOS PASOS A SEGUIR Y COMO SE HACEN
function convertirNombresAMayusculas(array) {
    let nombresMayusculas = [];
    for (let i = 0; i < array.length; i++) {
        nombresMayusculas.push(array[i].toUpperCase());
    }
    return nombresMayusculas;
}
console.log("Nombres mayusculas sin .map ", convertirNombresAMayusculas(nombres));
//VARION CON .map
//PROGRAMACION DECLARATIVA: INDICA QUÉ SE QUIERE HACER SIN INDICAR LOS PASOS DETALLADAMENTE
let nuevoArreglo = nombres.map(element => element.toUpperCase())
console.log("Nuevo arreglo map Upper ", nuevoArreglo);

//Filter. Nos devuelve un nuevo arreglo con los elementos del arreglo
//original que cumplan cierto criterio
let arreglo2 = [1, 6, -7, 8, 55];
let newArray = arreglo2.filter(element => element > 2);
console.log("Arreglo filtrado con mayores que 2", newArray);
//función que recibe un arreglo de números enteros y retorna un nuevo arreglo pero con los números impares
//VERSION IMPERATIVA
function enteros(numeros){
    let impares=[]
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2!==0){
            impares.push(numeros[i])
        }
    }
    return impares
}
//VERION DECLARATIVA
function obtenerImparesDeclarativo(numeros) {
    return numeros.filter(numero => numero % 2 !== 0);
  }

//reduce. Trabaja con una acumuladora para acumular datos referentes a los elementos del arreglo
let array3 = [3, 1, 0, 4];
let sum = array3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Luego del reduce ", sum);

//Función que recibe un arreglo y retorna la suma de los elementos del arreglo
//VERSION DECLARATIVA
function suma(arreglo) {
    return arreglo.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

//VERSION IMPERATIVA
function sumarElementos(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
    }
    return suma;
  }




