//matrículas
let arregloEstudiantes = [
    { nombre: "diego", edad: 18, matricula: "123", calificaciones: [1.9, 2.8, 4.8, 4.0, 5.0] },
    { nombre: "juan", edad: 18, matricula: "678", calificaciones: [4.1, 2.9, 3.3, 4.1, 2.5] },
    { nombre: "maria", edad: 18, matricula: "889", calificaciones: [4.1, 5.0, 3.1, 4.8, 3.2] }
];

function calcularPromedio(matricula) {
    let estudiante = arregloEstudiantes.find(est => est.matricula === matricula);

    if(!estudiante) {
        new Error("Estudiante no encontrado")
    }

    let suma = 0;
    let calificaciones = estudiante.calificaciones;
    for(let i=0; i<calificaciones.length; i++) {
        suma += calificaciones[i];
    }
    return suma/calificaciones.length;

}

let resultado = calcularPromedio("123");
console.log("Promedio calificaciones ", resultado);

const actualizarCalificaciones = (matricula, calificaciones) => {
    let estudiante = arregloEstudiantes.find(est => est.matricula == matricula);
    if(!estudiante){
        throw new Error("Estudiante no encontrado");
    }
    estudiante.calificaciones = calificaciones;
}

actualizarCalificaciones("678", [0, 2.9, 3.3, 4.1, 5]);
console.log(arregloEstudiantes);
