//el indexOf me permite saber 
//el índice de un elemento
//si hay dos elementos iguales, retorna el índice
//de la priemra coincidencia

let arreglo = ["java", "python", "ruby"];
console.log("índice de java ", arreglo.indexOf("java"));
console.log("índice de ruby ", arreglo.indexOf("ruby"));
//aca buscamos un elemento que no existe, por tanto obtenemos -1
console.log("índice de ruby ", arreglo.indexOf("c"));

