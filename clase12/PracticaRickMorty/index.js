fetch('https://rickandmortyapi.com/api/character')
.then(function(response){
    return response.json();

})
.then(function(data){
    console.log(data)
    let nombre = document.querySelector('.characterList')
    let characters = ""
    for (let i=0; i<data.results.length;i++){
        console.log(i)
        
    }
})
.catch(function(error){

})