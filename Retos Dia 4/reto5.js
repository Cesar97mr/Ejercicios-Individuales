//Apartado 1
var num = 7;
var factorial = num;
for(var i = 1; i<num; i++){
    factorial*= i;
}
console.log("El factorial con for de 7 es : "+ factorial);

var num2 = 5;
var factorial2 = num2;
var j = 1;
while(j<num2){
    factorial2*=j;
    j++;
}console.log("El factorial con while de 5 es : " + factorial2);

//Apartado 2

var array = [2,3,4,5,10,11,14];
var i = 0;
var nums = 0;
while(i<array.length){
        if(i%2==0){
            console.log(array[i]);
        }
        i++;
}

//Apartado 3

var suma = 0;
for(var i = 0; i <=100; i++){
    suma +=i;

}console.log("La suma de los 100 primeros numeros es : "+suma);

//Apartado 4

var arrayNames = ["Juana","Elois","Pepe","Francisco"];
var nombre= ""
var letra ="";
for(var z = 0; z<arrayNames.length;z++){
    nombre = arrayNames[z];
    if(nombre=="Pepe"){
        letra= nombre[0];
        console.log(letra);
    }
}
//Apartado 5

var numFinal = [];
var numFinal2 =[];
for(var final = 0; final<=100; final++){
        numFinal[final] = Math.round(Math.random()*20);     
        numFinal2[final] = Math.round(Math.random()*20);
}
console.log(numFinal);
console.log(numFinal2);
//Apartado 6
var vectorFinal = [];
for(var v = 0; v < numFinal.length; v++)
{
    vectorFinal[v] =numFinal[v] + numFinal2[v];
}console.log(vectorFinal);
    



