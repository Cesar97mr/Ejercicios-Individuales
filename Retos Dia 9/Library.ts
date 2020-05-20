import { Book } from "./Book";
export class Library{
    private books : Book[]
    private address : string
    private manager : string
    constructor(books:Book[], address:string,manager:string){
        this.books = books;
        this.address = address;
        this.manager=manager;
    }
    public getAddress():string{
        return this.address;
    }
    public setAddress(address:string){
        this.address = address;
    }
    public getManager():string{
        return this.manager;
    }
    public setManager(manager:string){
        this.manager = manager;
    }
    public toString():string{
        for(let i = 0; i < this.books.length; i++){
            console.log("Libro " + (i+1) + "\n"+ this.books[i].toString());       
        }return;
    }
    public getNumberOfBooks():number{
        let libros  = this.books.length;
        
        return libros;
    }
    public findByAuthor(author: string):Book[]{
        let coincide = [];
        for(let i = 0; i < this.books.length; i++){
                if(this.books[i].getAuthor() == author){
                    coincide.push(this.books[i]);
                }
            }return coincide;
        }
}