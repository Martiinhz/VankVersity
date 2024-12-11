function esVocal(letra) {
    //se verifica si es vocal minuscula
    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return true;
    }
    //se verifica si es vocal mayúscula
    if (letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U"){
        return true;
    }
    //en esta linea ya sabemos que la letra no es vocal
    return false;
}

function hallarVocales(palabra){
    let cont=0;
    for(let i=0; i<palabra.length;i++){
        if(esVocal(palabra[i])){
            cont++;
        }
    }
    return cont;
}

let cantidadVocales = hallarVocales("Programacion");
console.log("Cantidad de vocales: ", cantidadVocales);
