let lucasFierro = {
    nombre: "Lucas",
    apellido: "Fierro",
    dni: "46917328",
    edad: 18,
    comidasFavoritas: ["pizza", "asado", "hamburguesa"],
    saludar: function(){
        return console.log("Hola mi nombre es " + this.nombre  + " " +  this.apellido + " y tengo " + this.edad + " mi primer comida favorita es "  + this.comidasFavoritas[0])
    }
}
lucasFierro.saludar()

let auto ={
    marca: "ferrari",
    modelo: "la ferrari",
    año: 2015,
    color: "rojo",
    posicion: 0,
    avanzar: function(num) {
        this.posicion += num
        return console.log("hizo algo")
    },
    retroceder: function(num) {
        this.posicion -= num
    }
}

auto.avanzar(8)
console.log(auto.posicion)
auto.retroceder(7)
console.log(auto.posicion)


let autoNuevo ={
    marca: "ferrari",
    modelo: "la ferrari",
    año: 2015,
    color: "rojo",
    posicion: 0,
    moverse: function(num) {
        this.posicion += num
        return console.log("hizo algo")
    },
    }

    autoNuevo.moverse(-10)
    console.log(autoNuevo.posicion)


let ironMan ={
    nombre: "Iron Man",
    equipo: "Avangers",
    poderes: ["Volar", "Lanzar misiles", "Disparar laser"],
    energia: 100,
    getPoder: function(num) {
        this.energia -= 10
        return console.log("Poder Elegido de" +  " " + this.nombre + " " + this.poderes[num] +"." + " "+ "energia restante: " + this.energia)
    }
}

let hulk ={
    nombre: "Hulk",
    equipo: "Avangers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
        this.energia -= 10
        return console.log("Poder Elegido de" +  " " + this.nombre + " " + this.poderes[num] + "." +  " " +"energia restante: " + this.energia)
    }
}

console.log(ironMan.getPoder(1))
console.log(hulk.getPoder(2))
