const objeto = {
  162544: { nombres: "Pepe", apellidos: "Perez", edad: 40 },
  4357262: { nombres: "Maria", apellidos: "Gomez", edad: 31 },
  786353: { nombres: "Raul", apellidos: "Castro", edad: 80 }
}
//recorrido cuando los valores son otros objetos

for (const llave in objeto) {
    //acá el elemento es un objeto
    let elemento = objeto[llave]
    for (const clave in elemento) {
      console.log(elemento[clave]);
    } 
}