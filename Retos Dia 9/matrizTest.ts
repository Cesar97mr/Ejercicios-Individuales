import { Matrix } from './matrix';

let m1 : Matrix = new Matrix(2,10,10);
let m2 : Matrix = new Matrix(2,10,10);
let m3 : Matrix = m1.add(m2);
let m4 : Matrix = m1.multNumber(2);
let m5 : Matrix = m1.mutSpecial(3);
m1.printMatriz();
m2.printMatriz();
m3.printMatriz();
m4.printMatriz();
m5.printMatriz();


