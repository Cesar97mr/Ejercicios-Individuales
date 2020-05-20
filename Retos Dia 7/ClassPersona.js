class Persona {
    constructor(peso, altura, nombre, anyoNacimiento, aficiones){
        this.peso = peso;
        this.altura = altura;
        this.anyoNacimiento = anyoNacimiento;
        this.nombre = nombre;
        this.aficiones = aficiones;
    }getPeso(){
        return this.peso;
    }setPeso(nuevoPeso){
        return this.peso = nuevoPeso
    }getAltura(){
        return this.altura;
    }setAltura(nuevaAltura){
        return this.altura = nuevaAltura;
    }getNombre(){
        return this.nombre = nuevaAltura;
    }setNombre(nuevoNombre){
        return this.nombre = nuevoNombre;
    }getAnyoNacimiento(){
        return this.anyoNacimiento;
    }setAnyoNacimiento(nuevoAnyo){
        return this.anyoNacimiento = nuevoAnyo;
    }getAficiones(){
        return this.aficiones;
    }setAficiones(nuevaAficiones){
        return this.aficiones = nuevaAficiones;
    }

    calcularImc(){
        var imc = this.peso/(this.altura*this.altura);
        return "IMC es = "+imc;
    }
    edad(anyioActual){
    anyioActual = new Date().getFullYear();
        
        return "Edad = "+ (anyioActual-this.anyoNacimiento);
    }
    mostrarTodos(){ 
        console.log("Peso : " + this.peso);
        console.log("Altura : " + this.altura);
        console.log("Nombre: " + this.nombre);
        console.log("AnyoNacimiento: " + this.anyoNacimiento)
        console.log("Aficiones : " + this.aficiones)

    }
    mostrarAficiones(){
        return p1.aficiones;
    }
}
module.exports = Persona;
