class Empleado{
    #nombre;
    #salario;
    constructor(nombre, salario){
        this.#nombre = nombre;
        this.#salario = salario;
    }

    trabajar(){
        console.log("Empleado trabajando");
    }
    //getters
    getSalario(){
        return this.#salario;
    }
    getNombre(){
        return this.#nombre;
    }
    //setters
    setSalario(nuevoSalario){
        if(nuevoSalario > 0){
            this.#salario = nuevoSalario;
        }
    }
    setNombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
}