let healingIsDifficult = [
    'Fear',
    'Drink to Get Drunk',
    'Taken for Granted',
    'Blow It All Away',
    'Get Me',
    'Im Not Important to You',
    'Sober and Unkissed',
    'Healing Is Difficult',
    'Judge Me',
    'Little Man',
    'Insidiously'
]
let list=[]
 for(i=0; i<healingIsDifficult.length; i++){
    list.push(`${i+1} ${healingIsDifficult[i]}`)
 }
 console.log(list)

 let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
]

for(let i=0; i < got.length; i++){
    let persona = got[i];
    console.log(`"hola" ${persona.nombre} ${persona.apellido} "criatura viajera"`)

    let city = got[i]
    console.log(`"hola" ${city.nombre} ${city.apellido} "de la ciudad" ${city.ciudad}`)
}

