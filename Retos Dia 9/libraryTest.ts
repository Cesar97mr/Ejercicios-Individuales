import { Library } from "./Library";
import { Book } from "./Book";
let libro1 :Book = new Book("Introduccion a Javascript",233,"2344433-BC23333","Joseph Smith", "Now Editions");
let libro2 :Book = new Book("Introduccion a Java",233,"2344433-BC23333","Mario Benito", "Now Editions");
let libro3 :Book = new Book("Introduccion a Type",233,"2344433-BC23333","Juan beltran", "Now Editions");
let array = [libro2,libro3,libro1];
let l1 : Library = new Library(array,"Leganes.Madrid","Marco Londra");
console.log(l1.toString());
console.log(l1.getNumberOfBooks());
console.log(l1.findByAuthor("Mario Benito"));


