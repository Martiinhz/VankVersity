let nota1 = parseFloat(prompt("Ingrese la nota 1"))
let nota2 = parseFloat(prompt("Ingrese la nota 2"))
let nota3 = parseFloat(prompt("Ingrese la nota 3"))
let nota4 = parseFloat(prompt("Ingrese la nota 4"))
let nota5 = parseFloat(prompt("Ingrese la nota 5"))

function calculadorNotas(nota1, nota2, nota3, nota4, nota5) {
    let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5
    if (promedio >= 3) {
        console.log(`El estudiante ha aprobado la materia su promedio fue: ${promedio}`);
    } else {
        console.log(`El estudiante no ha aprobado la materia su promedio fue: ${promedio}`);
    }
}
calculadorNotas(nota1, nota2, nota3, nota4, nota5);

