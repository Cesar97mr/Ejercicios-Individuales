"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        var array = [];
        for (var i = 0; i < n; i++) {
            array[i] = Math.round(Math.random() * k);
            this.elements = array;
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    Vector.prototype.add = function (v1) {
        var arraySum;
        var vectorSum = [];
        for (var i = 0; i < this.elements.length; i++) {
            vectorSum[i] = this.elements[i] + v1.elements[i];
        }
        arraySum = new Vector(5, 5);
        arraySum.elements = vectorSum;
        return arraySum;
    };
    Vector.prototype.subs = function (v1) {
        var arrayResta;
        var vectorResta = [];
        for (var i = 0; i < this.elements.length; i++) {
            vectorResta[i] = this.elements[i] - v1.elements[i];
        }
        arrayResta = new Vector(5, 5);
        arrayResta.elements = vectorResta;
        return arrayResta;
    };
    Vector.prototype.mult = function (v1) {
        var arrayMult;
        var vectorMult = [];
        for (var i = 0; i < this.elements.length; i++) {
            vectorMult[i] = this.elements[i] * v1.elements[i];
        }
        arrayMult = new Vector(5, 5);
        arrayMult.elements = vectorMult;
        return arrayMult;
    };
    Vector.prototype.multNumber = function (n) {
        var vectorMult = [];
        for (var i = 0; i < this.elements.length; i++) {
            vectorMult[i] = this.elements[i] * n;
        }
        return vectorMult;
    };
    return Vector;
}());
exports.Vector = Vector;
