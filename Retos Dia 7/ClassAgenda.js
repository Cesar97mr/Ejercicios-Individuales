class Agenda {
    constructor(personas){
        this.personas = personas;
    }
    printPersonas(){
      for(var i = 0;i<this.personas.length;i++){
        this.personas[i].mostrarTodos()   
      }
    }
}
var array = [p1,p2];
var a1 = new Agenda(array);
module.exports = Agenda