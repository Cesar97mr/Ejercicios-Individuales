function Nombres(nombres) {
    var letra = "M";
    var result = true || false;
    for (var i = 0; i < nombres.length; i++) {
        if (nombres[i][0] === letra) {
            result = true;
        }
        else {
            result = false;
        }
    }
    if (result === true) {
        console.log(result);
    }
}
Nombres(["Mario", "Carcos", "Moises"]);
