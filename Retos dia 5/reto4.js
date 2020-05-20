var lista = {
    "libros" : ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"]
};
var libro1 = "Ready player one";
var libro2 = "El nombre del viento";
var libro3 = "El temor de un hombre sabio";
var libro4 = "Cien años de soledad";
var libro5 = "Origen";
var count = 0;
var textoMayor = "";
for(var i = 0;i<lista.libros.length;i++){
        count = lista.libros[i].split(" ").join("").length;
        if(count>20){
            textoMayor =lista.libros[i]+"["+count+"]"+"<br>";
            document.write(textoMayor.bold());

        }else{
        document.write(lista.libros[i]+"["+count+"]"+"<br>") 
}
}




