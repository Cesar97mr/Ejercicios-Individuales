import { Calendar } from "./Calendar";
import { Person } from './Person';
let p2:Person = new Person("Cesar",23,"Avenida de Europa");
let p3:Person = new Person("juana",25,"Avenida de america");
let p4:Person = new Person("jorge",30,"Avenida constitucion");
let a1:Calendar = new Calendar;
a1.people = [p2,p3,p4]
console.log(a1.printCalendar());
