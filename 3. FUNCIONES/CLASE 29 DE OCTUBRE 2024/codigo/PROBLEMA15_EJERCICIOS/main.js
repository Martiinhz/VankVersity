function generarContraseña (n){
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let contrasena = "";

    for(let i = 0; i < n; i++){
        const valoresAleatorios = Math.floor(Math.random()*caracteres.length);
        contrasena += caracteres[valoresAleatorios];
    }

    console.log(contrasena);
    return contrasena;
}

let n = parseInt(prompt("Ingrese el numero de caracteres que quiere que tenga la contraseña"));
generarContraseña(n);