function zodiaco(dia,mes){
    let signo = "";
    switch(mes){
    case "Enero":
        if(dia > 19) {
            signo = "ACUARIO";
        }else{
            signo = "CAPRICORNIO";
        }break;
    case "Febrero":
        if(dia > 18){
            signo = "PISCIS";
        }else{
            signo = "ACUARIO";
        }break;
    case "Marzo":
        if(dia > 20){
            signo = "ARIES";
        }else{
            signo = "PISCIS";
        }break;
    case "Abril":
        if(dia > 19) {
            signo = "TAURO";
        }else{
            signo = "ARIES";
        }break;
    case "Mayo":
        if(dia > 20){
            signo = "GEMINIS";
        }else{
            signo = "TAURO";
        }break;
    case "Junio":
        if(dia > 20){
            signo = "CANCER";
        }else{
            signo = "GEMINIS";
        }break;
    case "Julio":
        if(dia > 22){
            signo = "LEO";
        }else{
            signo = "CANCER";
        }break;
    case "Agosto":
        if(dia > 22){
            signo = "VIRGO";
        }else{
            signo = "LEO";
        }break;
    case "Septiembre":
        if(dia > 22){
            signo = "LIBRA";
        }else{
            signo = "VIRGO";
        }break;
    case "Octubre":
        if(dia > 22){
            signo = "ESCORPION";
        }else{
            signo = "LIBRA";
        }break;
    case "Noviembre":
        if(dia > 21){
            signo = "SAGITARIO";
        }else{
            signo = "ESCORPION";
        }break;
    case "Diciembre":
        if(dia > 21){
            signo = "CAPRICORNIO";
        }else{
            signo = "SAGITARIO";
        }break;
}return signo
}
console.log(zodiaco(22,"Enero"));
