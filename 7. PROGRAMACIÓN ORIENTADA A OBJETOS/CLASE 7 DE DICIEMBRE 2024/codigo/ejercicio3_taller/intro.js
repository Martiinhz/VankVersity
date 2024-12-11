class CuentaBancaria{
    #saldo;
    constructor(saldo){
        this.#saldo = saldo;
    }

    depositar(cantidad){
        this.#saldo = this.#saldo + cantidad;
    }

    retirar(cantidad){
        this.#saldo = this.#saldo - cantidad;
    }

    getSaldo(){
        return this.#saldo;
    }
}

const cuenta1 = new CuentaBancaria(10000);
console.log("Saldo actual ", cuenta1.getSaldo());
cuenta1.depositar(20000);
console.log("Saldo actual ", cuenta1.getSaldo());
cuenta1.retirar(5000);
console.log("Saldo actual ", cuenta1.getSaldo());


