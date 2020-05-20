// Reto 2 En que continente vivo

// Base de datos
function continente(pais: string){
  
    if(pais == "Egipto" || pais == "Angola" || pais == "Etiopía" || pais == "Senegal" || pais == "Marruecos"){
        console.log("Tu país pretenece a Africa");
    }else if(pais == "Canada" || pais == "México" || pais == "Colombia" || pais == "Argentina"  || pais == "Brasil"){
        console.log("Tu país pretenece a America");
    }else if(pais == "China" || pais == "Catar" || pais == "Japon" || pais == "Nepal" || pais == "Yemen"){
        console.log("Tu país pretenece a Asia");
    }else if(pais == "Alemania" || pais == "España"  || pais == "Francia" || pais == "Italia" || pais == "Polonia"){
        console.log("Tu país pretenece a Europa");
    }else if(pais == "Australia" || pais == "Micronesia" || pais == "Nueva Zelanda" || pais ==  "Samoa" || pais == "Fiyi"){
        console.log("Tu país pretenece a Ociania");
    }else{
        console.log("Tu país no se encuentra en la base de datos")
    }
       
   } 
    
continente("Egipto");
