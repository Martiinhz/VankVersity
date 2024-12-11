const calcularPromedio = (notas) => notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
const esAprobado = (promedio) => promedio >= 6;

function mostrarResultado(notas) {
    const promedio = calcularPromedio(notas); // Calcula el promedio usando calcularPromedio
    const aprobado = esAprobado(promedio); // Determina si aprueba usando esAprobado
    console.log(aprobado ? "Aprobado" : "Reprobado");
}

console.log('El estudiante ', mostrarResultado([7, 5, 8]));// Salida: "Aprobado"
console.log('El estudiante ', mostrarResultado([4, 5, 6]));// Salida: "Reprobado"
console.log('El estudiante ', mostrarResultado([6, 7, 8]));// Salida: "Aprobado"


