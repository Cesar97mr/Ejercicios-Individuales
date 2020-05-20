// Reto 6 Par en el array de números 

function  esPar(Array:number[]):boolean{
    let boolean : boolean = false;   
    let i:number = 0;
    while(!boolean && i < Array.length){
      boolean = Array[i] % 2 == 0;
        i++
    }
    return boolean;
}
console.log(esPar([1,3,5,2,7]));