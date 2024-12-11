//FUNCIONES FLECHA
//funcion que retorna un saludo
//esta función solo tiene una instrucción
//por lo tanto no es necesario poner llaves
//ni retorno
const saludo = () => "Hola VankVersity";
console.log(saludo());

//funcion flecha con parametros
console.log("----------------------");
const suma = (a, b) => a + b;
let resultado = suma(2, 6);
console.log(resultado);
/*
VERSION NORMAL
function name(a, b) {
    return a + b;
}
*/
//Funcion flecha con mas de una instruccion
//funcion flecha que devuelve el area y perimetro dada la base y altura de un rectangulo
const areaPerimetro = (base, altura) => {
    let area = base * altura;
    let perimetro = 2*(base + altura);
    return `Area: ${area} Perimetro: ${perimetro}`
}
let areaPerimetroRec = areaPerimetro(1,3);
console.log(areaPerimetroRec);




