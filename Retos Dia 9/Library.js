"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
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
        for (var i = 0; i < this.books.length; i++) {
            console.log("Libro " + (i + 1) + "\n" + this.books[i].toString());
        }
        return;
    };
    Library.prototype.getNumberOfBooks = function () {
        var libros = this.books.length;
        return libros;
    };
    Library.prototype.findByAuthor = function (author) {
        var coincide = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                coincide.push(this.books[i]);
            }
        }
        return coincide;
    };
    return Library;
}());
exports.Library = Library;
