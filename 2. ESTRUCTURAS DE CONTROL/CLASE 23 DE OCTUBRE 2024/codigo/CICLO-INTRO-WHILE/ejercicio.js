//UN CICLO NOS SIRVE PARA REPETIR
//INSTRUCCIONES
//EL CICLO WHILE SE USA CUANDO NO SABEMOS
//RL NUMERO DE REPETICIONES A EJECUTAR
//depende de una condición para ejecutarse
//la condición puede depender de una variable
//entera, string, boolean

//siempre debe garantizarse que la condición
//alguna vez no se cumpla, esto se hace manipulando
//la variable control del ciclo
console.log("---while 10 Hola Vankversity ------");

let control = 1;
while (control <= 10) {
    console.log("Hola Vankversity");
    control++;
}

console.log("---while que no se ejecuta------");
let control2 = 20
while (control2 <= 10) {
    console.log("Hola Vankversity");
    control2++;
}

console.log("----numeros multiplos de 7 entre 10 y 700 en orden descendente---------------");

let control3 = 700;
while (control3 >= 10) {
    if (control3 % 7 == 0) {
        console.log(control3);
    }
    control3--;
}
