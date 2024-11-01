// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector('#titulo');
    titulo.addEventListener('mouseover', function() {
        let nombre = prompt('Cual es Tu nombre');
        
    let saludo = document.querySelector('#saludo')
    if (nombre == null) {
        saludo.innerText = 'Bienvenid@'
    } else{
        saludo.innerText = `bienvenid@ ${nombre}`
        saludo.style.textTransform = 'upperCase'
    } 
    titulo.style.display = 'none'
    let span = document.querySelector('.bienvenida span')
    span.style.display = 'inline'
    });

let span = document.querySelector('.bienvenida')

    span.addEventListener('click', function() {
        let bienvenida = document.querySelector('.bienvenida')
        bienvenida.style.display = 'none'
        let personajes = document.querySelector('.personajes')
        personajes.style.display = 'flex'
    })
 
let bart = document.querySelector('#bart')
bart.addEventListener('click', function() {
    bart.style.backgroundColor = 'yellow'
})
bart.addEventListener('mouseout', function(){
    bart.style.backgroundColor = 'none'
})

let lisa = document.querySelector('#lisa')
lisa.addEventListener('click', function() {
    lisa.style.backgroundColor = 'yellow'
})
lisa.addEventListener('mouseout', function(){
    lisa.style.backgroundColor = 'none'



 })
})