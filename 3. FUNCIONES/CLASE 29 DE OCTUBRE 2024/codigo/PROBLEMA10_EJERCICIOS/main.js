function sinVocales(cadena) {
    let cadena2 = String(cadena);
    let cadenaResultante = "";
    for (let i = 0; i <= cadena2.length; i++) {
        let letra = cadena2[i];
        if (letra !== "a" && letra !== "e" && letra !== "i" &&
            letra !== "o" && letra !== "u" &&
            letra !== "A" && letra !== "E" && letra !== "I" &&
            letra !== "O" && letra !== "U") {
            cadenaResultante += letra;
        }
    } return String(cadenaResultante);
}
console.log(sinVocales("arepa con huevo"));