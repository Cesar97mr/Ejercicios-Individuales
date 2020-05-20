"use strict";
exports.__esModule = true;
var Person_1 = require("./Person");
var p1 = new Person_1.Person("Cesar", 25, "Avenida de Europa");
console.log(p1.getAddress());
p1.setAddress("Avenida America");
console.log(p1.getAddress());
console.log(p1.printName());
console.log(p1.yearOfBirth(2020));
