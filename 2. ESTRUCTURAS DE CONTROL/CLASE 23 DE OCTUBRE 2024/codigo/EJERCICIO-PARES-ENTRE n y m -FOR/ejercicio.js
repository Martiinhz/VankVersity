/*
Mostrar los números impares entre
n y m
*/
let n = parseInt(prompt("Ingrese n"));
let m = parseInt(prompt("Ingrese m"));

if(n<m){
    for (let index = n; index <=m; index++) {
        if( index%2 != 0){
            console.log(index);
        }
    }
} else{
    console.log("Ingrese n < m");
}