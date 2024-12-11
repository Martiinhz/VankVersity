/*

Una función que recibe un arreglo de números y retorna la suma de los cuadrados de los elementos impares del arreglo
*/
const sumaCuadrados = (array) => {
  return array
    .filter(element => element % 2 !== 0)
    .map(element => element ** 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

let numerosArray = [5, 2, 3, 4];

console.log(sumaCuadrados(numerosArray));

