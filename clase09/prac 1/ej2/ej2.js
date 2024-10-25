let nombre = prompt("cual es tu nombre?")
console.log(nombre)
let edad = prompt("cuantos anios tenes?")
console.log(edad)
let fanDeportes = confirm("Te gustan los deportes?")
console.log(fanDeportes)
let mensaje = alert(`Muchas gracias ${nombre} por responder nuestras preguntas`)

let usuario = {
    nombre: nombre,
    edad: edad,
    deportes: fanDeportes,
    deportistaProfesional: function() {
        if (fanDeportes) {
            return ("si sy fan de los deportes")
        } else{
            return ("no soy tan fan aun de los deportes")
        }
    }
}
console.log(usuario.deportistaProfesional())

