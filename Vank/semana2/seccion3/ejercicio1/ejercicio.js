// Solicitar longitud de la cadena al usuario
let longitud = parseInt(prompt("Ingrese la longitud de la cadena:"));
let base = prompt(
  "Ingrese la base única para generar la cadena (A, T, C, G):"
).toUpperCase();

if (["A", "T", "C", "G"].includes(base)) {
  let cadena = "";
  for (let i = 0; i < longitud; i++) {
    cadena += base;
  }
  alert(`Cadena generada: ${cadena}`);
} else {
  alert("Error: La base debe ser una de las siguientes: A, T, C, G.");
}
