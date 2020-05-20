function arcoiris(array:string []): string{
    for(let i = 0;i<array.length;i++){
        if(array[i] == "Naranja" || "Rojo" || "Amarillo" || "Verde" || "Azul" || "Violeta"){
           return array[i] + " Pertenecen en el arcoiris"
        }else{
            return array[i] + " No pertenecen al arcoiris"
        }
    }
}
arcoiris(["Negro","Rojo","Blanco","Azul","Violeta"]);