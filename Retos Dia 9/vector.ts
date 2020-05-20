export class Vector{
    private elements : number[];

    constructor(n:number,k:number){
        let array =[];
        for(let i = 0;i<n;i++){
           array[i]= Math.round(Math.random()*k);
           this.elements = array;
        }
    }
    print(){
        console.log(this.elements);
    }
    getElements():number[]{
        return this.elements;
    }
    add(v1:Vector):Vector{
        let arraySum : Vector;
        let vectorSum = [];
        for(let i = 0;i<this.elements.length;i++){
            vectorSum[i] = this.elements[i]+v1.elements[i]; 
        }
        arraySum = new Vector(5,5)
        arraySum.elements = vectorSum;
        return arraySum;
        }
    
    subs(v1:Vector):Vector{
        let arrayResta : Vector;
        let vectorResta = []
        for(let i = 0;i<this.elements.length;i++){
            vectorResta[i] = this.elements[i]-v1.elements[i]; 
        }
        arrayResta = new Vector(5,5);
        arrayResta.elements = vectorResta;
        return arrayResta;
    
    }
    mult(v1:Vector):Vector{
        let arrayMult: Vector;
        let vectorMult = []
        for(let i = 0;i<this.elements.length;i++){
            vectorMult[i] = this.elements[i]*v1.elements[i]; 
        }
        arrayMult = new Vector(5,5);
        arrayMult.elements = vectorMult;
        return arrayMult;
    }
    multNumber(n:number):number[]{
        let vectorMult = []
        for(let i = 0; i < this.elements.length; i++){
            vectorMult[i] = this.elements[i]*n; 
        }return vectorMult;
    }
}