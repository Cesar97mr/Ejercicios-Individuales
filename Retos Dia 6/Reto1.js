function calculadora(op,num1,num2) {
    var result = 0;
    if(op === "sum"){
    result = num1+num2;
    }else if(op === "subs"){
        result = num1-num2;
    }else if(op === "mult"){
        result = num1*num2;
    }else if(op === "div"){
        result = num1/num2;
    }
    return result;
}
console.log(calculadora("div",12,4));