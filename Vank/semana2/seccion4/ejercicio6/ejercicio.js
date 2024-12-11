let dividendo = parseInt(prompt("Ingrese el dividendo:"));
let divisor = parseInt(prompt("Ingrese el divisor:"));

if (divisor === 0) {
    alert("El divisor no puede ser 0.");
} else {
    let cociente = 0;
    while (dividendo >= divisor) {
        dividendo -= divisor;
        cociente++;
    }
    alert(`Cociente: ${cociente}, Resto: ${dividendo}`);
}
