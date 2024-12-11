function operacion(n1, n2, operacion) {
    let resultado;
    switch (operacion) {
        case "suma":
            resultado = n1 + n2
            break;
        case "resta":
            resultado = n1 - n2
            break;
        case "multiplicacion":
            resultado = n1 * n2
            break;
        case "division":

            resultado = n1 / n2
            break;

    }
    return resultado
}

console.log(operacion(8, 3, "suma"))