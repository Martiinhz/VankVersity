/*
La cadena está formada por una única base: Adenina (A), Timina (T), Citosina (C) o Guanina (G),
según se indique al momento de ejecutar el programa.
*/

//ejemplo de cadena de ADN
// "AAAGCCT" CUATRO BASES QUIMICAS
// "TTTTTTT", "GGGG"

let longitud = parseInt(prompt("Ingrese longitud ADN"));
let base = prompt("Ingrese base: A, G, C, T");
//acumuladora de caracteres
let cadenaADN = "";
for (let index = 1; index <= longitud; index++) {
    cadenaADN = cadenaADN + base;
}
console.log(cadenaADN);



