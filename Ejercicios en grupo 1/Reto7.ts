function Nombres(nombres : string[]){
    let i:number= 0;
    let letra:string = "M"
    let nameLetra : string = "";
    let boolean : boolean = true || false;
    while(i<nombres.length){
        nameLetra = nombres[i][0];
        if(nameLetra == letra){
             boolean = true;
        }else{
             boolean = false;
        }i++;
        return boolean;
 }
 }