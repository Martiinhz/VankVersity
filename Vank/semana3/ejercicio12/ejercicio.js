function evaluarAprobacion(notas) {
    const promedio = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
    return promedio >= 3 ? "Aprobado" : "Reprobado";
}


console.log('el estudiante fue:', evaluarAprobacion([8, 7, 9, 6, 5])); // Aprobado
console.log('el estudiante fue:', evaluarAprobacion([2, 2, 2, 2, 2])); // Reprobado


// En esta solución, la función 'evaluarAprobacion' calcula el 
// promedio de las notas dadas y devuelve el resultado como un string 
// "Aprobado" o "Reprobado". La constante 'promedio' es calculada utilizando 
// la función reduce() de JavaScript. La función también se ejecuta en un ejemplo con notas aprobadas y reprobadas.
