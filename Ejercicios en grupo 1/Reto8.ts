// Reto 8 Suma del numero de caracteres en array


export function numberArray(array: string[]):number{
    let suma = 0;
    let Letras:string;
    let numeroLetras: number;

    for(let index = 0; index <= array.length - 1; index++){
        Letras =  array[index];
        numeroLetras = Letras.length;
        suma += numeroLetras;
    }
    return suma;
}

let x = ["Casa", "Coche", "Ciudad", "Cesta"];
let y = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
let z = ["Venezuela", "Veneno", "Voltaje"];
console.log(numberArray(x));
console.log(numberArray(y));
console.log(numberArray(z));