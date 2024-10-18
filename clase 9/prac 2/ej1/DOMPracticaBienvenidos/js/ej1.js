alert("Bienvenidos a mi sitio,")

let hola = confirm("esta seguro que quiere avanzar?")

if (hola){
    let H2 = document.querySelector(".saludo")
    H2.innerText='Qué alegría que quieras continuar tu visita'
    let nombre = prompt("ingrese su nombre")
    let h1= document.querySelector("h1")
    h1.innerText=`Bienvenido ${nombre}`
    let edad = prompt('que edad tenes?')
    let divno =document.querySelector(".container-general")
    let divsi =document.querySelector("#accesoDenegado")
    if (edad>17){
        let pregunta= confirm("te gusta la programacion")
        if (pregunta){
            document.querySelector('.background-img').innerHTML = "<img src='./img/programmer.jpeg'></img>"
        } else{
            document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'></img>"
        }
    } else {
        divsi.style.display="block"
        divno.style.display="none"
    }
    
} else {
    alert("lamentamos que no quieras continuar con tu visita")
}