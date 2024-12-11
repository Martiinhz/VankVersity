// Función para generar una contraseña segura a partir de una palabra base
function generarContraseña(palabraBase) {
    const randomChars = "!@#$%^&*0123456789";
    let contraseña = palabraBase;

    // Agrega 4 caracteres aleatorios de `randomChars` a la palabra base
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * randomChars.length);
        contraseña += randomChars[randomIndex];
    }

    return contraseña;
}

// Función para imprimir la contraseña generada
function imprimirContraseña(contraseña) {
    console.log(`La contraseña generada es: ${contraseña}`);
}

// Ejecución del programa
console.log('Generando contraseña...');
imprimirContraseña(generarContraseña(palabraBase));
