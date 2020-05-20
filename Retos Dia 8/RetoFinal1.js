function cifrador(texto){ 
    let frase2 = [];
    for(var j = 0;j<texto.length;j++){
         frase2.push(texto[j].charCodeAt())   
    }return frase2.join(" "); 
}
console.log(cifrador("Codenotch and Javascript"))

//VERSION ECMASCRIPT
cifradoTexto_arrow = (texto) =>{
    let frase2 = [];
    for(let j = 0;j<texto.length;j++){
         frase2.push(texto[j].charCodeAt())   
    }return frase2.join(" ").toString();
}
console.log(cifradoTexto_arrow("Aprendiendo Javascript"))

