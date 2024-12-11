/*
Crear una clase Avion que implemente dos métodos de objeto y
dos atributos de objeto, también, un atributo de clase(estático)
y un método de clase(estático)
*/

class Avion {
    static contadorAviones = 0;
    constructor(color, cantidadPuestos) {
        this.color = color;
        this.cantidadPuestos = cantidadPuestos;
        Avion.contadorAviones++;
    }

    static obtenerCantidadAviones() {
        return Avion.contadorAviones;
    }

    mostrarInfo() {
        console.log(`El avión es de color: ${this.color} y tiene: ${this.cantidadPuestos} puestos`);
    }

    cambiarColor(color) {
        this.color = color;
    }
}
let avionUno = new Avion("Azul", 200);
const avionDos = new Avion("Verde", 100);

avionUno.cambiarColor("Rojo");
console.log(avionUno.color);

avionDos.mostrarInfo();

console.log(Avion.obtenerCantidadAviones());