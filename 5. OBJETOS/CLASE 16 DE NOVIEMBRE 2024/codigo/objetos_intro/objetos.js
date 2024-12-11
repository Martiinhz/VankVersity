/*
Un objeto en Javascript, es una estructura de datos,
que tiene por elementos pares llave-valor, los cuales
van separados por comas(,). Esta estructura no es ordenada,
no es iterable.
*/
//inicializamos un objeto vacío
let user = {};
//incializar un objeto con pares clave-valor
let productos = { papa: 2000, arroz: 3000, leche: 4000 }
//lectura con sintaxis punto (.)
let valorPapa = productos.papa;
console.log("Valor papa: ", valorPapa);
console.log("Valor leche: ", productos.leche);
//lectura con sintaxis de corchetes
//usarla generalmente dentro de ciclos
//o cuando la propiedad es un número
let valorPapaCorchetes = productos["papa"];
console.log("Valor papa: ", valorPapaCorchetes);
//uno de sintaxis de corchetes cuando
//las propiedades son números
let numeros = { 1: "uno", 2: "dos", 3: "tres" };
//numeros.1 es un error, no está permitido
let valorPropiedad1 = numeros[1];
console.log("Valor propiedad 1: ", valorPropiedad1);
//agregar propiedas con sus valores
user.nombre = "VankVersity";
user.tema = "Programación";
user.edad = 1;
user.estado = true;
console.log("Objero user completo ", user);
//agregamos valores también con notación de
//corchetes
user["estatura"] = 180;
console.log("Objero user completo ", user);
//actualización de valores
user.tema = "Programación Javascript";
console.log("Objero user completo ", user);
//eliminación de pares clave-valor
delete user.estado;
console.log("Objero user completo ", user);
delete productos["papa"];
console.log("Objero productos completo ", productos);
//funciones(métodos) dentro de objetos
let carro = {
    color: "rojo", costo: 30000000, acelerar() {
        console.log("Acelerando");
    }
}
//acceder a la función
carro.acelerar();
//Object.keys() obtenemos las llaves
//de un objeto
//obtenemos un arreglo de llaves o propiedades
let llavesUser = Object.keys(user);
console.log("LLaves user ", llavesUser);
//Object.values() obtenemos los valores
//de un objeto
let valoresUser = Object.values(user);
console.log("Valores de user ", valoresUser);
//Object.entries() obtenemos los pares
//llave-valor del objeto, pero en arreglos

let entradasUser = Object.entries(user);
console.log("Entradas de user ", entradasUser);
//recorrido usando for-in

for (const clave in user) {
    console.log("Clave user ", clave);
    console.log("Valor de user ", user[clave]);
    console.log("----------------");
}
//recorrido usando Object.keys()
//recorremos let numeros = { 1: "uno", 2: "dos", 3: "tres" };
Object.keys(numeros).forEach(clave => {
    console.log(`Propiedad: ${clave}, Valor: ${numeros[clave]}`);
});

















