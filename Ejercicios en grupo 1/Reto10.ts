// Reto 10 
// 10.	Utilizando las dos funciones anteriores indicar si es par o impar la suma de los caracteres de cada uno de los siguientes arrays:
	

import { numeros } from "./Reto9"
import { numberArray } from "./Reto8";

function numeroArray(array: string[]):string{
    let arrayRespuesta: string;
    let numeroLetras: number;

        numeroLetras = numberArray(array);
        arrayRespuesta = numeros(numeroLetras)
    
return arrayRespuesta;

}
let x = ["Casa", "Coche", "Ciudad", "Cesta"];
let y = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let z = ["Venezuela", "Veneno", "Voltaje"];

console.log(numeroArray(x));
console.log(numeroArray(y));
console.log(numeroArray(z));

