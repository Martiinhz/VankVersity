// Ejercicio 11
const continentes = {
  Europa: ["España", "Francia", "Italia", "Alemania", "Grecia"],
  Asia: ["China", "Japón", "India", "Corea del Sur", "Tailandia"],
  América: ["EE.UU.", "Canadá", "México", "Argentina", "Brasil"],
};
const continente = prompt("Ingrese el nombre de un continente:");
console.log(continentes[continente] || "Continente no disponible");
