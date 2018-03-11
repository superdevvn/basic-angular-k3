export abstract class Person {
    firstName: string;
    lastName: string;
    fullName: string;
    age: number;
    email: string;
    address: string;
    constructor(fName:string, lName:string,
        age: number, email:string, address:string){
        this.firstName = fName;
        this.lastName = lName;
        this.fullName = `${lName} ${lName}`;
    }
}