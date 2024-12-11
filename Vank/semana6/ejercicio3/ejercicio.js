function imprimeMensajeConRetraso(mensaje, callback) {
  setTimeout(() => {
    callback(mensaje);
  }, 2000);
}

const mensaje = (mensaje) => {
  console.log(mensaje);
};

console.log("Inicio del proceso");
imprimeMensajeConRetraso("Hola Mundo", mensaje);
console.log("Fin del proceso");
