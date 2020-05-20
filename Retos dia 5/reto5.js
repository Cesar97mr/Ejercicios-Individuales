var matriz = new Array(10);
var matriz2 = new Array(10);
var matrizFinal = new Array(10);
var matrizFinal2 = new Array(10);

for (var i = 0; i < matriz.length; i++) {
  matriz[i] = new Array(10);
  matriz2[i] = new Array(10);
  matrizFinal[i]= new Array(10);
  matrizFinal2[i] = new Array(10);
  
  for(var j = 0 ; j < matriz[i].length; j++){
      matriz[i][j]=Math.round(Math.random()*50);
      matriz2[i][j] = Math.round(Math.random()*50);
  }
}
console.log("Matriz 1 :");
  console.log(matriz);
  console.log("Matriz 2 :");
  console.log(matriz2);
  for(var i = 0; i < matriz.length; i++){
      for(var j=0;j<matriz2.length;j++){
          matrizFinal[i][j] = matriz[i][j]+matriz2[i][j];
 }
}
  console.log("Matriz Final :");
  console.log(matrizFinal);

var numAleatorio = Math.round(Math.random()*10);

for(var i= 0; i < matrizFinal.length; i++){
    for(var y = 0; y < matrizFinal[i].length; y++){
        matrizFinal2[i][y] = matrizFinal[i][y]*numAleatorio;
    }
}
console.log("Matriz Multiplicada x " + numAleatorio);
console.log(matrizFinal2);



