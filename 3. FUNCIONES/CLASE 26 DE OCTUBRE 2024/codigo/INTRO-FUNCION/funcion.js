/*
Las funciones nos permiten reciclar
código. Hacen que el código sea mucho más legible.
Hacen que sea más fácil hacer los cambios en un 
programa.
*/

//Crear la funcion f(x) = 2x + 1 en Javascript

function f(x) {
    //cuerpo de la función
    let resultado = 2*x + 1;
    //el return marca el fin de la función
    //y se encarga de devolver un valor
    //funcional
    return resultado;
}

let retorno1 = f(2);
console.log("Resultado de la función :", retorno1);

let retorno2 = f(5);
console.log("Resultado de la función :", retorno2);

