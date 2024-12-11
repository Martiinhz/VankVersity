let numero = parseInt(prompt("Ingrese un número para verificar si es perfecto:"));
let sumaDivisores = 0;

for (let i = 1; i <= numero / 2; i++) {
    if (numero % i === 0) sumaDivisores += i;
}

alert(`¿El número ${numero} es perfecto? ${sumaDivisores === numero}`);
