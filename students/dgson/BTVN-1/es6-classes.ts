class Student {
    fristName:string;
    lastName:string;
    constructor(fristName:string, lastName:string) {
        this.fristName = fristName;
        this.lastName = lastName;
    }
    hello() {
        alert(`${this.fristName} ${this.lastName}`);
    }
}

export function a() {
    let student = new Student("Nghia","Tran");
    student.hello();
}