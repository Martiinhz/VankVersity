let a = parseInt(prompt("Ingrese el primer número:"));
let b = parseInt(prompt("Ingrese el segundo número:"));

let mcm = (a * b) / (function gcd(x, y) {
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
})(a, b);

alert(`El MCM es: ${mcm}`);
