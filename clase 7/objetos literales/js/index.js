let lucasFierro = {
    nombre: "Lucas",
    apellido: "Fierro",
    dni: "46917327",
    edad: 18,
    comidasFavoritas: ["pizza", "pastelDePapa", "hamburguesa"],
    saludar: function(){
        return console.log("Hola mi nombre es " + this.nombre  + " " +  this.apellido + " y tengo " + this.edad + " mi primer comida favorita es "  + this.comidasFavoritas[0])
    }
}
lucasFierro.saludar()

let auto ={
    marca: "ferrari",
    modelo: "la ferrari",
    anio: 2015,
    color: "rojo",
    posicion: 0,
    avanzar: function() {
        return console.log()
    }
}
