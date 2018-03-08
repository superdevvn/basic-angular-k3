export class Student {
    firstName: string;
    lastName: string;
    fullName: string;
    constructor(firstName:string,lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
}

