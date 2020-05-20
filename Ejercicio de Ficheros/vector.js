function crear_vector (n,m){
    var vector = [];
    for(var i = 0;i<n;i++){
        vector[i]= Math.round(Math.random()*m)
    }return vector;
}

function suma_vector(n,m){
    var vector = crear_vector;
    var vector2 = crear_vector;
    var vectorSum = [];
    if(vector.length===vector2.length){
        for(var x =0; x<vector.length;x++){
            vectorSum[x] = vector[x]+vector2[x];
        }
    }return vectorSum;
}

function producto_vector (n,m){
    var vector = [];
    var vectorMult = [];
    for(var i = 0;i<m;i++){
        vector[i]= Math.round(Math.random()*m);
    }   for(var j = 0; j<vector.length;j++){
        vectorMult[j]= vector[j] * n;
    }   return vectorMult;
}

function resta_vector (n,m){
    var vector = [];
    var vector2 = [];
    var vectorResta = [];
    for(var i = 0;i<n;i++){
        vector[i]= Math.round(Math.random()*m)
        vector2[i] = Math.round(Math.random()*m)
    }if(vector.length===vector2.length){
        for(var x =0; x<vector.length;x++){
            vectorResta[x] = vector[x]-vector2[x];
        }
    }return vectorResta;
}

function producto_Numvector (n,m){
    var vector = [];
    var vector2 = [];
    var vectorMult = [];
    for(var i = 0;i<n;i++){
        vector[i]= Math.round(Math.random()*m)
        vector2[i] = Math.round(Math.random()*m)
        
    }if(vector.length===vector2.length){
        for(var x =0; x<vector.length;x++){
            vectorMult[x] = vector[x]*vector2[x];
        }
    }return vectorMult;
}

module.exports = {Crear_vector, Suma_vector, Producto_vector, Resta_vector, Producto_Numvector};