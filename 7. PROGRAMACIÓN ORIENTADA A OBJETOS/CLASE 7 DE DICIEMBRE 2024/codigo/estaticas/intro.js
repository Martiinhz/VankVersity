/*
Las propiedades y métodos estáticos no pertenecen
a los objetos(no se pueden acceder desde las intancias)
son propiedades y métodos de las clases
*/

class Persona {
    // Propiedad estática
    static contadorPersonas = 0;
    // Propiedad no estática
    constructor(nombre, edad) {
        this.nombre = nombre;
        //Propiedad no estática
        this.edad = edad;
        //Propiedad no estática
        Persona.contadorPersonas++;
        //Incrementa el contador de personas al crear una nueva instancia
    }
    // Método estático
    static obtenerContador() {
        return Persona.contadorPersonas;
    }
    // Accede a// Método no estático
    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}
// Crear instancias de la clase Persona
const persona1 = new Persona("Juan", 30);
const persona2 = new Persona("Ana", 25);
const persona3 = new Persona("Carlos", 40);
// Mostrar información de las personas
persona1.mostrarInfo();

persona2.mostrarInfo();

persona3.mostrarInfo();


console.log("Número total de personas: ", Persona.obtenerContador());
