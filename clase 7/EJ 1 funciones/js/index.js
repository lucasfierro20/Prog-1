function rectangulo(a,b){
    let area= (a*b)/2
    return area
}
console.log(rectangulo(4,5))

function largoDelArray(array){
    let list= array.length
    return list
}
console.log(largoDelArray([1,2,3,4,5]))

function cantidadDeLetras(array){
    let list=array.length
    return list
}
console.log(cantidadDeLetras("holalucas"))

function dolarHoy(a){
    let dolar= (a/1500)
    return dolar
}
console.log(dolarHoy(100))

function precioFinal(a){
    let iva=(a*0,21)
    final= a + iva
    return final
}
console.log(precioFinal(100))

function mitad(a){
    let res=(a/2)
    return res
}
console.log(mitad(100))

let dias=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
function diaSegunNumero(dias, numero){
    list= dias[numero]
    return list
}
console.log(diaSegunNumero(dias, 3))

//9//

function calculadora(n1,n2,operacion){
    let operaciones = {
        suma: n1 + n2,
        resta: n1 - n2,
        multiplicacion:  n1 * n2,
        division: n1 / n2
}
return operaciones[operacion]
}
console.log(calculadora(10,5,"multiplicacion"))


//ejecutando funciones//
function anterior(num) {
    return num = num -1 ;
}
console.log(anterior(3))

function triple(num){
    return num *3;
}
console.log(triple(7))

function anteriorDelTriple(num){
    return (num*3) - 1
}
console.log(anteriorDelTriple(7))