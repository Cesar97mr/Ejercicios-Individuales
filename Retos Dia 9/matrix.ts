import { Vector } from "./vector"
export class Matrix{
    private elements : Vector[];

    constructor(n:number,m:number,k:number){
        let matriz :Vector[]
        matriz = new Array(n);
        for(let i = 0;i<matriz.length;i++){
            matriz[i] = new Vector(m,k);
        }this.elements = matriz;
    }
    printMatriz(){
        console.log(this.elements);
    }
    add(m1:Matrix):Matrix{
        let matrizFinal :Matrix = new Matrix(2,10,10);

        for(let i = 0; i<this.elements.length;i++){
            for(let j = 0;j<this.elements[i].getElements().length;j++){
                matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j]+m1.elements[i].getElements()[j];
            }
        }
        return matrizFinal;
    }
    multNumber(n:number):Matrix{
        let matrixFinal :Matrix = new Matrix(2,10,10);

        for(let i = 0; i<this.elements.length;i++){
            for(let j = 0;j<this.elements[i].getElements().length;j++){
                matrixFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j]*n
            }
        }
        return matrixFinal;
    }
    mutSpecial(n:number):Matrix{
        let matrizFinal :Matrix = new Matrix(2,10,10);

        for(let i = 0; i<this.elements.length;i++){
            for(let j = 0;j<this.elements[i].getElements().length;j++){
                if(this.elements[i].getElements()[j] % 2 == 0){
                    matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j]*n;
                }else if(this.elements[i].getElements()[j] % 2 !== 0){
                    matrizFinal.elements[i].getElements()[j] = this.elements[i].getElements()[j]*(n-1);
                }
            }
        }
        return matrizFinal;
    }
}