const operacion = (a, b, operacion) => {
    switch (operacion) {
        case 'suma':
            return a + b;
        case 'resta':
            return a - b;
        case 'multiplicacion':
            return a * b;
        case 'division':
            if (b === 0) {
                throw new Error("No se puede dividir por cero.");
            }
            return a / b;
        default:
            throw new Error("Operación inválida.");
    }
}; 

console.log('el resultado de la suma es:', operacion(5, 3, 'suma'));
console.log('el resultado de la resta es:', operacion(5, 3, 'resta'));
console.log('el resultado de la multiplicacion es:', operacion(5, 3, 'multiplicacion'));
console.log('el resultado de la division es:', operacion(5, 3, 'division'));
console.log('el resultado de la division por cero es:', operacion(5, 0, 'division')); // Error: No se puede dividir por cero.
console.log('el resultado de una operacion invalida es:', operacion(5, 3, 'invalida')); // Error: Operación inválida.
