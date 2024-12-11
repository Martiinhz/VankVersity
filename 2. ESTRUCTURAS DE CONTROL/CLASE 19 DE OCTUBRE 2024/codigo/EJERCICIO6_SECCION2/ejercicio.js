// 11. Programa que muestra el promedio de n números, deja de pedir números cuando se introduce 0
let sumaPromedio = 0;
let contadorPromedio = 0;
while (true) {
    let numero = parseFloat(prompt("Ingrese un número (0 para detener):"));
    if (numero === 0) break;
    sumaPromedio += numero;
    contadorPromedio++;
}
if (contadorPromedio > 0) {
    let promedio = sumaPromedio / contadorPromedio;
    console.log(`El promedio de los números ingresados es: ${promedio}`);
} else {
    console.log("No se ingresar")
}