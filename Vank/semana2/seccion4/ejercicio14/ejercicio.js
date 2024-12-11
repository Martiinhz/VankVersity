function sumaDivisores(num) {
    let suma = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) suma += i;
    }
    return suma;
}

let num1 = parseInt(prompt("Ingrese el primer número:"));
let num2 = parseInt(prompt("Ingrese el segundo número:"));

let sonAmigos = sumaDivisores(num1) === num2 && sumaDivisores(num2) === num1;
alert(`¿Los números ${num1} y ${num2} son amigos? ${sonAmigos}`);
