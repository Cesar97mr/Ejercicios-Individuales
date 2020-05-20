function arcoiris(array) {
    var arcoiris = ["rojo", "naranja", "amarillo", "verde", "azul", "Celeste", "violeta"];
    var colorIgual = "";
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arcoiris.length; j++) {
            if (array[i] == arcoiris[j]) {
                console.log(colorIgual = array[i] + " esta en el arcoiris");
            }
        }
    }
}
arcoiris(["negro", "rojo", "blanco", "azul"]);
