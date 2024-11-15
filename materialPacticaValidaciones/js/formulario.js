let formulario = document.querySelector('form')

let nombre = document.querySelector('#fullName') 
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let password = document.querySelector('#password')
let rePassword = document.querySelector('#rePassword')

let errorNombre = document.querySelector('.fullName')
let errorEmail = document.querySelector('.email')
let errorPhone = document.querySelector('.phone')
let errorPassword = document.querySelector('.password')
let errorRePassword = document.querySelector('.rePassword')


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    if (nombre.value == ''){
        console.log('completa el campo')
        errorNombre.style.display = "block"
        errorNombre.innerHTML = "<p>completar campo</p>"
    }else if(email.value == ''){
        console.log('completa el campo')
        errorEmail.style.display = 'block'
        errorEmail.innerHTML = '<p>completa el campo</p>'
    }else if(phone.value.length < 8 ){
        console.log('completa el campo')
        errorPhone.style.display = 'block'
        errorPhone.innerHTML = '<p>ingresa al menos 8 numeros</p>'
    }else if(password.value.length <= 4){
        console.log('completa el campo')
        errorPassword.style.display = 'block'
        errorPassword.innerHTML = '<p>al menos 3 caracteres</p>'
    }else if (rePassword.value != password.value){
        console.log('completa el campo')
        errorRePassword.style.display = 'block'
        errorRePassword.innerHTML = '<p>las contrasenias tienen que coincidir</p>'
    } else {
        formulario.submit()
    }
})