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