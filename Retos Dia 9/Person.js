"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        var anyoNacimiento = currentYear - this.age;
        return anyoNacimiento;
    };
    return Person;
}());
exports.Person = Person;
