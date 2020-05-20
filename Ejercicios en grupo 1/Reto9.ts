export function numeros (n:number):string{
    if(n % 2 == 0){
         return "El numero introducido es Par";
    }else{
        return "El numero introducido es Impar";
    }
}
console.log(numeros(20));