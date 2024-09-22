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