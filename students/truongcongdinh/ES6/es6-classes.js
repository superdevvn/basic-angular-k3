class student{
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    hello() {
        alert('${this.firstname} ${this.lastname}');
    }
}

(function a(){
    let student = new Student("Nghia", "Tran");
    student.hello();
})();