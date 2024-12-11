/*
Permite crear nuevas clases basadas en
clases existentes, heredando sus atributos y
métodos.
*/

// Clase Padre
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, soy un ${this.nombre}`);
    }
}



// Clase Hija que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre);// Llama al constructor de la clase Padre
        this.raza = raza;
    }

    ladrar() {
        console.log("¡Guau!");
    }
    //sobreescritura de métodos heredados - POLIMORFISMO
    saludar(){
        console.log(`Hola, soy un ${this.nombre} de raza ${this.raza}`);
    }
}

const miPerro = new Perro("Perro", "Bulldog");
miPerro.saludar();
// Muestra: Hola, soy un Perro
miPerro.ladrar();

