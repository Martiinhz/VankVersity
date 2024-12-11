function permitirEntrada(edad, estatura, permisoParental) {
    if (edad >= 18 && estatura > 150) {
        return 'permitido';
    } else if (edad < 18 && permisoParental) {
        return 'permitido con permisos parentales';
    }
    return 'denegado';
}


console.log('Permiso de entrada al parque de atracciones: ', permitirEntrada(17, 155, true)); // Debe devolver true

