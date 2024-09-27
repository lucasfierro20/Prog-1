let libro={
    titulo: "desconfia",
    autor: "Facundo mayor",
    ano: 2032,
}
function describirLibros (objeto){
    console.log("El libro" + " " + objeto.titulo + " " + "fue escrito por" + " ", objeto.autor  + " " +  "en el ano", objeto.ano + ".")
}
describirLibros(libro)
