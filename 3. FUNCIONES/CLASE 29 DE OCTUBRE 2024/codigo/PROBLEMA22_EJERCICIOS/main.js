function calcularPromedio(nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3
    return promedio
}

function esAprobado(promedio) {
    return promedio >= 6;
}

function mostrarResultado(aprobado) {
    if (aprobado == true) {
        console.log("El estudiante aprobó")
    } else {
        console.log("El estudiante no aprobó")
    }
}

let nota1 = 7;
let nota2 = 5;
let nota3 = 9;

console.log(mostrarResultado(esAprobado(calcularPromedio(nota1, nota2, nota3))));



