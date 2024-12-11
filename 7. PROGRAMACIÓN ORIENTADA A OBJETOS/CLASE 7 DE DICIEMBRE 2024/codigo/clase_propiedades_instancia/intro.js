class Circulo {
    
    constructor(radio) {
        this.radio = radio; //Propiedad pública
        this.pi = 3.1416; // Valoraproximado de π
    }
    // Método para calcular el área
    calcularArea() {
        return this.pi * (this.radio * this.radio);
    }
    // Método para calcular el perímetro
    calcularPerimetro() {
        return 2 * this.pi * this.radio;
    }
}
//acá circulo1 es una instancia de Circulo, 
//o un objeto Circulo
const circulo1 = new Circulo(5);
let areaCirculo = circulo1.calcularArea();
console.log("Area Circulo ", areaCirculo);
let perimetroCirculo = circulo1.calcularPerimetro();
console.log("Perímetro Círculo ", perimetroCirculo);
console.log("Radio del círculo ", circulo1.radio);
console.log("--------------------");
const circulo2 = new Circulo(2);
let areaCirculo2 = circulo2.calcularArea();
console.log("Area Circulo ", areaCirculo2);
let perimetroCirculo2 = circulo2.calcularPerimetro();
console.log("Perímetro Círculo ", perimetroCirculo2);
console.log("Radio del círculo ", circulo2.radio);



