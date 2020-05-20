var Persona = require("./ClassPersona")
var Agenda = require("./ClassAgenda")

var persona1 = new Persona(78,1.77,"Cesar", 1997,["Cocinar","Boxar", "Correr"]);
var persona2 = new Persona(80,1.76,"Juan", 199,["Dormir","Nadar", "Correr"]);
console.log(persona1.edad());
console.log(persona2.calcularImc());
console.log(persona1.mostrarTodos());
var array = [persona1,persona2];
var a1 = new Agenda(array);
a1.printPersonas();