//version 1
function imprimirNumeros(n) {
    if (n < 1) {
        console.log("El número que ingresó no es valido");
    } else {
        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
    }
}

imprimirNumeros(200);
//version 2
console.log("----------------------------");
function NumCont(n) {
    for (let index = 1; index <= n; index++) {
        console.log("este es el resultado ", index);
    }
}
NumCont(15)