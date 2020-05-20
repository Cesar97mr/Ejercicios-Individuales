var array = [{
    "nombre" : "Maria",
    "apellido" : "Garcia",
    "anyoNacimiento" : 2005,
    "aficiones" : ["programar", "cocinar","leer"],
    "dni" : {"anyoExpedicion" : 2013,
             "lugarNacimiento" : "Valencia"},
    "colorPelo" : "Castaño"
},
{
    "nombre" : "Mario",
    "apellido" : "Ramos",
    "anyoNacimiento" : 1979,
    "aficiones" : ["dibujar", "natacion", "ejercitarse"],
    "dni" : {"anyoExpedicion" : 2011,
             "lugarNacimiento" : "Madrid"},
    "colorPelo" : "Rubio"
},
{   "nombre" : "Jose",
    "apellido" : "Gonzales",
    "anyoNacimiento" : 1980,
    "aficiones" : ["correr", "pintar", "boxear"],
    "dni" : {"anyoExpedicion" : 2010,
             "lugarNacimiento" : "Cadiz"},
    "colorPelo" : "Negro"
},
{
    "nombre" : "Carlos",
    "apellido" : "Gutierrez",
    "anyoNacimiento" : 1987,
    "aficiones" : ["viajar", "leer", "dormir"],
    "dni" : {"anyoExpedicion" : 2016,
             "lugarNacimiento" : "Madrid"},
    "colorPelo" : "Castaño"
}]
for(var i = 0 ; i<array.length; i++){
    if(array[i].colorPelo == "Castaño"){
         console.log("Pelo castaño : " + array[i].nombre);
    }
    if((2020 - array[i].anyoNacimiento)>30){
        console.log("Mayores de 30 años: " + array[i].nombre);
    }
    if(array[i].colorPelo == "Negro" && array[i].dni.anyoExpedicion<2011 || (2020 - array[i].anyoNacimiento)<18 && (array[i].aficiones == "comer" || array[i].aficiones == "dormir")){
        console.log(array[i].nombre + " nacio en " + array[i].dni.lugarNacimiento);
    }

}