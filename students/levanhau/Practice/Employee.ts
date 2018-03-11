import { Person } from "./Person";

export class Employee extends Person {
    constructor(fName:string, lName:string, 
        age: number, email:string, address:string) {
            super(fName, lName, age, email, address);
        }
        walk(meters:number = 0){
            console.log(`${this.fullName} walks ${meters}km.`);
        }
        read(numberBooks:number = 0){
            console.log(`${this.fullName} reads ${numberBooks} books.`);
        }
        write(numberLetters:number = 0){
            console.log(`${this.fullName} writes ${numberLetters} letters.`);
        }
        writeEmail(){
            console.log(`${this.fullName} wrote the letter at the age of ${this.age}`);
        }
        empInfo(){
            console.log(`${this.fullName}`);
            console.log(`${this.age}`);
            console.log(`${this.email}`);
            console.log(`${this.address}`);
        }
}