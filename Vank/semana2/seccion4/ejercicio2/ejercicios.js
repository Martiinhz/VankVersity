let num = parseInt(prompt("Ingrese un número entre 0 y 999:"));

if (num < 0 || num > 999) {
    alert("El número debe estar entre 0 y 999.");
} else {
    let invertido = parseInt(num.toString().split("").reverse().join(""));
    let suma = num + invertido;
    let esReversible = suma.toString().split("").every(digito => parseInt(digito) % 2 !== 0);
    alert(`¿El número ${num} es reversible? ${esReversible}`);
}
