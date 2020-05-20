"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        var matriz;
        matriz = new Array(n);
        for (var i = 0; i < matriz.length; i++) {
            matriz[i] = new vector_1.Vector(m, k);
        }
        this.elements = matriz;
    }
    Matrix.prototype.printMatriz = function () {
        console.log(this.elements);
    };
    Matrix.prototype.add = function (m1) {
        var matrizFinal = new Matrix(2, 10, 10);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[i].getElements().length; j++) {
                matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j] + m1.elements[i].getElements()[j];
            }
        }
        return matrizFinal;
    };
    Matrix.prototype.multNumber = function (n) {
        var matrixFinal = new Matrix(2, 10, 10);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[i].getElements().length; j++) {
                matrixFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j] * n;
            }
        }
        return matrixFinal;
    };
    Matrix.prototype.mutSpecial = function (n) {
        var matrizFinal = new Matrix(2, 10, 10);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[i].getElements().length; j++) {
                if (this.elements[i].getElements()[j] % 2 == 0) {
                    matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j] * n;
                }
                else if (this.elements[i].getElements()[j] % 2 !== 0) {
                    matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j] * (n - 1);
                }
            }
        }
        return matrizFinal;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
