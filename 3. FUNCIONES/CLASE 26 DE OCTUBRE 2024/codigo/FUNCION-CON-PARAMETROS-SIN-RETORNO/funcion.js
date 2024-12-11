/*
Algunas funciones tienen parámetros pero no retorno,
son usadas generalmente para formatear mensajes, cambiar
estados de una varibale entre otros.
*/

function mostrarMensaje(nombre, apellido) {
    let mensaje = `Hola ${nombre} ${apellido}`;
    console.log(mensaje);
}

mostrarMensaje("Maria", "Perez");

