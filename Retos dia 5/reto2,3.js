var precioProdct = 2500;
var paisProducto = "Alemania";
var precioFinal = 0;

if(paisProducto!=="España"){
    if(precioProdct>2000){
        precioFinal += precioProdct + precioProdct*(0.16 + 0.10);
    }else{
        precioFinal= precioProdct + precioProdct*(0.10+0.10);
    }
}else{
    if(pprecioProdct>2000){
        precioFinal += precioProdct + precioProdct*0.16;
    }else{
        precioFinal += precioProdct + precioProdct*0.10;
    }
}
console.log("El precio bruto final es : "+precioFinal);

//RETO 3
var num = 0;
var i = 1;
while(i<=100){
    num += i * i;
    i++;

}console.log("La suma final de los 100 primeros numeros es : "+num);