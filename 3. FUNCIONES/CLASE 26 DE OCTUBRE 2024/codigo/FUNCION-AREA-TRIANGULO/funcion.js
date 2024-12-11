/*
FUNCION QUE TIENE COMO PARAMETROS
la base y la altura de un triángulo y
retorna su área
*/

function areaTriangulo(base, altura) {
    let area = base*altura / 2;
    return area;
}

//pedimos base y altura al usuario
let base = parseFloat(prompt("Ingrese base"));
let altura = parseFloat(prompt("Ingrese altura"));
//llalamos a la funcion
let area = areaTriangulo(base, altura);
console.log("El área del triángulo es: ", area);

