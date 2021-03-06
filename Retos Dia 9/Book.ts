export class Book{
    private title : string
    private nPages : number
    private issn : string
    private author : string
    private editorial : string

    constructor(title:string, nPages:number, issn:string, author:string, editorial:string){
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    public getTitle():string{
        return this.title;
    }
    public setTitle(title:string){
        this.title=title;
    }
    public getNpages():number{
        return this.nPages;
    }
    public setNpages(nPages:number){
        this.nPages =nPages;
    }
    public getIssn():string{
        return this.issn;
    }
    public setIssn(issn:string){
        this.issn = issn;
    }
    public getAuthor():string{
        return this.author;
    }
    public setAuthor(author:string){
        this.author = author;
    }
    public getEditorial():string{
        return this.editorial;
    }
    public setEditorial(editorial:string){
        this.editorial=editorial;
    }
    public toString():string{
        return "Title — " + this.title +"\n"+
        "Numer of Pages — " + this.nPages +"\n"+ 
        "ISSN — " + this.issn +"\n"+ 
        "Author — " + this.author +"\n"+
        "Editorial — " + this.editorial;

    }
    
}