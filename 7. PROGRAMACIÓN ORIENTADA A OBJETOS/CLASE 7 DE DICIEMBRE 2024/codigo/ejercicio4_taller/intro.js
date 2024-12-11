class Animal{

    hacerSonido(){
        console.log("Animal haciendo sonido");
    }
}

class Gato extends Animal{

    constructor(nombre, edad){
        super();
        this.nombre = nombre;
        this.edad = edad;
    }

    hacerSonido(){
        console.log("Gato haciendo sonido");
    }
    
}

const gato1 = new Gato("Tom", 2);
gato1.hacerSonido();