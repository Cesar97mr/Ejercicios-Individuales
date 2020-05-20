// Reto 4 Reverse Array

function reverse(array:number[]):number[]{
let resultado: number[] = new Array();
let index2: number;
index2 = array.length - 1;
   for(let index = 0; index <= array.length -1; index++){
      resultado[index] = array[index2]
      index2--;
   }
   return resultado;
}

console.log(reverse([1,2,3,4,5,6,7,8,9]));
