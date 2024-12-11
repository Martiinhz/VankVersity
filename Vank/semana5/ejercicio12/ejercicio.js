// Ejercicio 12
const estudiantes = [
  { nombre: "Juan", edad: 20, matrícula: "A001", calificaciones: [5, 4, 3] },
  { nombre: "Maria", edad: 22, matrícula: "A002", calificaciones: [4, 5, 5] },
];
function calcularPromedio(matricula) {
  const estudiante = estudiantes.find((e) => e.matrícula === matricula);
  return estudiante
    ? estudiante.calificaciones.reduce((a, b) => a + b) /
        estudiante.calificaciones.length
    : null;
}
function actualizarCalificaciones(matricula, nuevasCalificaciones) {
  const estudiante = estudiantes.find((e) => e.matrícula === matricula);
  if (estudiante) estudiante.calificaciones = nuevasCalificaciones;
}
console.log(calcularPromedio("A001"));
actualizarCalificaciones("A001", [5, 5, 5]);
console.log(estudiantes);
