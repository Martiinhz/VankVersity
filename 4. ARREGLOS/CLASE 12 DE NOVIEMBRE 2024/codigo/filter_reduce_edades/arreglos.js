/*
Dado un array de objetos que representan personas con nombre y edad, filtra a las personas mayores de 18 años y luego calcula la suma de sus edades.
const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 19 },
  { nombre: "Marta", edad: 15 },
];

*/

const personas = [
  { nombre: "Ana", edad: 17 },
  { nombre: "Luis", edad: 22 },
  { nombre: "Carlos", edad: 19 },
  { nombre: "Marta", edad: 15 },
]
const sumaEdadesMayoresDeEdades = (personas) => personas.map(persona => persona.edad).
filter(edad => edad >= 18).
reduce((acomuladora, edad) => acomuladora += edad)

console.log(sumaEdadesMayoresDeEdades(personas));


