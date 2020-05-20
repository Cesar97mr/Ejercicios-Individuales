import { Vector } from "./Vector"
let v1:Vector = new Vector(10,10);
let v2:Vector = new Vector(10,10);
console.log(v1.print());
console.log(v1.add(v2));
console.log(v1.subs(v2));
console.log(v1.mult(v2));
console.log(v1.multNumber(3));