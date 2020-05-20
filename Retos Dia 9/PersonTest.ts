import { Person } from "./Person"
let p1:Person = new Person("Cesar",25,"Avenida de Europa");
console.log(p1.getAddress());
p1.setAddress("Avenida America")
console.log(p1.getAddress())
console.log(p1.printName());
console.log(p1.yearOfBirth(2020));