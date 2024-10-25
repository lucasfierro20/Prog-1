let nacionalidad = prompt("de que pais sos")
let profesion = prompt("de que trabajas")
let km = prompt("cuantos km caminas por dia?")

function filosofoHipster(a,b,c){
    if ((profesion=="musico") && (nacionalidad=="argentino") && (km>2)){
        return "Soy un filosofo Hipster"
    } else {
        return "Aun no soy un filosofo Hipster"
    }
}
console.log(filosofoHipster(nacionalidad,profesion,km))