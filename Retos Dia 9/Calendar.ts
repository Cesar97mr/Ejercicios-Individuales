import { Person } from "./Person";
export class Calendar{
    public people : Person[];

    constructor(){
        this.people = new Array;
    }
    printCalendar(){
        console.log(this.people);
    }
}
