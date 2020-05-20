//Bucle con ciclo for
var num = "";
for(var i = 1;i<=10;i++){
    if(i % 2 == 1){
        if(i % 3==0){
    num += i + "\n";
}
}
console.log(num);

//Bucle con cliclo while
var num2 = "";
var i = 1;
while(i<=10){
    num2+= i + "\n";
    i++;
}
console.log(num2);
//Bucle Do While
var num3 = ""
var j = 1;
do{
    num3 += j + "\n";
    j++;
}while(j<=10);
console.log(num3);