class student {
	constructor(fristName, lastName){
		this.fristName = firstName;
		this.lastName = lastName;
	}

	hello()
	{
		alert(`${this.firstName} ${this.lastName}`);
	}
}

(function a(){
	let student = new Student("Nghia", "Tran");
	student.hello();
})();