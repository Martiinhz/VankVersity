//Las contadoras se usan para
//contar por ejemplo, el número
//de datos en un promedio a calcular

//Programa que pide n numeros y calcula su promedio
//control del ciclo
let control = 1;
//creamos una cumuladora para la suma de los datos
let acumuladora = 0;
let n = parseInt(prompt("Ingrese n"));
//contadora
let contadora = 0;
while (control <= n) {
    let numero = parseInt(prompt("Ingrese número"));
    acumuladora = acumuladora + numero;
    contadora++;
    control++;
}
let promedio = acumuladora / contadora;