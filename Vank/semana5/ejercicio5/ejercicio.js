// Ejercicio 5
const usuarios = {
  183344: "habilitado",
  354625: "habilitado",
  6762442: "inhabilitado",
  88552: "inhabilitado",
  438276: "habilitado",
};
let habilitados = 0;
for (const clave in usuarios) {
  if (usuarios[clave] === "habilitado") habilitados++;
}
console.log(`Usuarios habilitados: ${habilitados}`);
