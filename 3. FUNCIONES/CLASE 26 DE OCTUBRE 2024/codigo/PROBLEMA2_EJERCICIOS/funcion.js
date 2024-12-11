function volumenCubo(lado) {
    return lado ** 3;
}
let lado = parseFloat(prompt("Ingrese el lado del cubo:"));
console.log(`Volumen del cubo: ${volumenCubo(lado)}`);