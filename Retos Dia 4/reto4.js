var array2 = [{
    "nombre" : "Jorge",
    "apellido" : "Garcia",
    "anyoNacimiento" : 1999,
    "aficiones" : ["programar", "cocinar","Senderismo"],
    "dni" : {"anyoExpedicion" : 2013,
             "lugarNacimiento" : "Valencia"},
    "colorPelo" : "Castaño"
},
{
    "nombre" : "Paula",
    "apellido" : "Ramos",
    "anyoNacimiento" : 1979,
    "aficiones" : ["dibujar", "natacion", "ejercitarse"],
    "dni" : {"anyoExpedicion" : 2011,
             "lugarNacimiento" : "Madrid"},
    "colorPelo" : "Rubio"
},
{   "nombre" : "Jose",
    "apellido" : "Gonzales",
    "anyoNacimiento" : 1970,
    "aficiones" : ["correr", "pintar", "boxear"],
    "dni" : {"anyoExpedicion" : 2010,
             "lugarNacimiento" : "Cadiz"},
    "colorPelo" : "Negro"
},
{
    "nombre" : "Marlon",
    "apellido" : "Gutierrez",
    "anyoNacimiento" : 1977,
    "aficiones" : ["viajar", "leer", "dormir"],
    "dni" : {"anyoExpedicion" : 2016,
             "lugarNacimiento" : "Madrid"},
    "colorPelo" : "Castaño"
}];
//Bucle for
var personas = ""
for(var i = 0; i<array2.length; i++){
    personas = array2[i]
   console.log(personas);
}
//Bucle While
var personas2 ="";
var j = 0;
while(j < array2.length){
    personas2 = array2[j]
    j++;
    console.log(personas2);
}
//ELECCION POR EDAD CON FOR
var edades = "";
for(var x = 0; x<array2.length; x++){
    if(array2[x].anyoNacimiento >= 1978 && array2[x].anyoNacimiento <= 2000){
        edades = array2[x];
        console.log(edades);
        if(edades){
            console.log("Tu edad esta entre 20 y 40 años");
        }
    }
}

var edades2 = "";
var x = 0;
while(x < array2.length && array2[x].anyoNacimiento >= 1978 && array2[x].anyoNacimiento <= 2000){
    edades2 = array2[x]
    x++;
    console.log(edades2);
    if(edades2){
        console.log("Tu edad esta entre 40 y 20 años");
    }
}
//AGREGAR AFICION "JUGAR"
array2[0].aficiones.push("Jugar a la play");
array2[1].aficiones.push("Jugar a la play");
array2[2].aficiones.push("Jugar a la play");
array2[3].aficiones.push("Jugar a la play");
console.log(array2);