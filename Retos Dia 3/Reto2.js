function Crear_vector (n,m){
    var vector = [];
    for(var i = 0;i<n;i++){
        vector[i]= Math.round(Math.random()*m)
    }return vector;
}console.log(Crear_vector(5,10));
function Producto_vector (n,m){
    var vector = [];
    var vectorMult = [];
    for(var i = 0;i<m;i++){
        vector[i]= Math.round(Math.random()*m);
    }   for(var j = 0; j<vector.length;j++){
        vectorMult[j]= vector[j] * n;
    }return vectorMult;
}
console.log(Producto_vector(2,10));