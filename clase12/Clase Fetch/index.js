fetch('https://rickandmortyapi.com/api/character')
.then (function(response){
    return response.json();
})
.then(function(data){
    let lista= document.querySelector('.characterList')
    let characters = []
    for(let i=0;i<data.results.length;i++){
        characters+=`<article><img src="${data.results[i].image}"alt=''><p>Name: <a href="./detalle.html?id=${data.results[i].id}"> ${data.results[i].name} <a></p><p>Status:${data.results[i].status}  </p></article>`

    }
    lista.innerHTML=characters

})
.catch(function(error){
    console.log(error)

})



