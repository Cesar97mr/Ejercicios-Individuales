//RETO1
function prueba(x = "No se a ingresado un Parametro"){  
    return x;
}
console.log(prueba(5));

//RETO2
multiply_arrow = (x,y)=>{return(x*y)};
console.log(multiply_arrow(5,5))

//RETO3
function suma(array){
    let suma = 0;
    if(Array.isArray(array)){
        for(let i = 0;i<array.length;i++){
            suma += array[i];
        }
    }else if(array == undefined){
        suma = 0;
    }else if(Array.isArray(array)== false){
        suma = "No has introducido un array como parametro entrada";
    }return suma;
}
console.log(suma(123));
console.log(suma(0));