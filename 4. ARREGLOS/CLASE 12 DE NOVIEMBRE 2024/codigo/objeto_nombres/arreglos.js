/*
Dado un array de objetos que representan personas {nombre: ---, edad: ---}, modifica el array para que contenga solo los nombres de las personas.
*/

let infoUsuarios = [ 
  {nombre: "Pepe", edad: 19},
  {nombre: "Maria", edad: 30},
  {nombre: "Pablo", edad: 45}
 ]
 //se debe obtener ["Pepe", "Maria", "Pablo"]
 let modificado = infoUsuarios.map(info => info.nombre)
 console.log(modificado);
 
