class Student {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    hello(){
        alert(`${this.firstName} ${this.lastName}`);
    }
}

(function a(){
    let student = new Student("Nghia","Tran");
    student.hello();
})();