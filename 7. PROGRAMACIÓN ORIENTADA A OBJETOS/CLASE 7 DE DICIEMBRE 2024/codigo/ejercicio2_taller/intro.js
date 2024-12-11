class Contador{
    static cuenta = 0;

    static incrementar(){
        Contador.cuenta++;
    }
}

Contador.incrementar();
Contador.incrementar();

console.log("Valor de cuenta ", Contador.cuenta);

