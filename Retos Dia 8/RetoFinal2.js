class Password{
    constructor(password, length = 8){
        this.length = length
        this.password = password
    }
    getLength(){
        return this.length;
    }
    setLength(nuevoLength){
        return this.length = nuevoLength;
    }
    getPassword(){
        return this.password;
    }
    setPassword(nuevoPassword){
        return this.password = nuevoPassword
    }
    isStrong(){
        let strong = "";
        if(this.isMayuscula()== true && this.isMayor()==true && this.isNumber()==true){
            strong = true;
        }else{
            strong = false;
        }return strong;
    }
    isMayuscula(){
        let contraseña = this.password;
        let sure;
        if(contraseña == contraseña.toUpperCase()){
            sure = false;
        }else if(contraseña == contraseña.toLowerCase()){
            sure = false;
        }else{
            sure = true;
        }
        return sure;
        }
    isMayor(){
        const mayor = this.password.length;
        let sure;
        if(mayor>=8){
             sure = true;
        }else{
             sure = false;
        }return sure;
    }
    isNumber(){
        let numero;
        for(let i =0;i<this.password.length;i++){
            if(this.password.charCodeAt(i)>= 48 && this.password.charCodeAt(i)<= 57){
                numero = true;
            }else{
                numero = false;
            }
        }return numero;  
    }
    generatePass(length){
        const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const tamaño = caracteres.length
        let password = "";
        for(let i = 0;i<length;i++){
            password += caracteres.charAt(Math.floor(Math.random() * tamaño));

        }return password;
    }
}
contraseña1 = new Password("SegURidad123");
contraseña2 = new Password()
console.log(contraseña1.isStrong());
console.log(contraseña2.generatePass(15))
