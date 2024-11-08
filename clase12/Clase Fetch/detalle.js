let queryString = location.search
let queryStringVirgo = new URLSearchParams(queryString)
let identificador = queryStringVirgo.get('id');

fetch(`https://rickandmortyapi.com/api/character/${identificador}`)
.then (function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let nombre = document.querySelector('h1');
    nombre.innerText = data.name;
    let status = document.querySelector('#Status');
    status.innerText = data.status;
    let especie = document.querySelector('#Especie')
    especie.innerText = data.species;
    let img = document.querySelector('#img');
    img.src = data.image;

})
.catch(function(error){
    return(error)
})