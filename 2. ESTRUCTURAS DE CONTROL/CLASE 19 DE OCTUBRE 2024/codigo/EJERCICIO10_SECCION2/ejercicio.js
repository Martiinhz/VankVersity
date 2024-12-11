let numero=0; 
let suma = 0; 
for(let i=1; i<=10; i++){ 
    numero = parseInt(prompt(`ingrese el número ${i}`)); 
    suma += numero; 
}
let promedio = suma/10; 
console.log(`El promedio es ${promedio}`);
