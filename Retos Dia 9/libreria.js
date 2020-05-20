"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Book_1 = require("./Book");
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = new Array;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        return "Libro1: " + this.books.toString();
    };
    Library.prototype.getNumberOfBooks = function () {
        var libros = 0;
        for (var i = 0; i < this.books.length; i++) {
            libros[i] = this.books[i];
        }
        return libros;
    };
    Library.prototype.findByAuthor = function (author) {
        var devueltos = [];
        for (var i = 0; i < this.books.length; i++) {
            devueltos.push(this.books[i]);
        }
        return devueltos;
    };
    return Library;
}());
exports.Library = Library;
var p2 = new Book_1.Book("Introduccion a Javascript", 233, "2344433-BC23333", "Joseph Smith", "Now Editions");
var l1 = new Library(new Array, "europa", "cesar");
console.log(l1.toString());
