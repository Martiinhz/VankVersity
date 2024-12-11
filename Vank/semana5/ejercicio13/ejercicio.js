// Ejercicio 13
const citas = {
  12345: { nombre: "Juan", dia: "Lunes", hora: "10:00 AM" },
};
const documento = prompt("Ingrese su documento:");
if (citas[documento]) {
  console.log(
    `Nombre: ${citas[documento].nombre}, Día: ${citas[documento].dia}, Hora: ${citas[documento].hora}`
  );
  const cambiar = confirm("¿Desea cambiar su cita?");
  if (cambiar) {
    citas[documento].dia = prompt("Ingrese el nuevo día:");
    citas[documento].hora = prompt("Ingrese la nueva hora:");
    console.log("Cita actualizada:", citas[documento]);
  }
}
