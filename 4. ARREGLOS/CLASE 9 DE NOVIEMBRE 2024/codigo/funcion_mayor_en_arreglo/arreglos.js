/*
Función que recibe un arreglo de números y retorna el mayor
*/

function mayor(arreglo) {
  //primero asumimos el mayor como el primer
  //elemento del arreglo
  let mayor = arreglo[0];
  for (let index = 0; index < arreglo.length; index++) {
    //buscamos un nuevo mayor...
    if (mayor < arreglo[index]) {
      //si encontramos un nuevo mayor, actualizamos el valor de la
      //variable mayor
      mayor = arreglo[index];
    }
  }

  return mayor
}

let arreglo = [22, 700, -6, 88, 30];
console.log("Mayor ", mayor(arreglo));
