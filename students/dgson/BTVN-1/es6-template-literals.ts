export function fullName(fristName:string, lastName:string){

    //OLD
    //var fullName:string = this.fristName + " " + this.lastName;
    //alert(this.fullName);

    //ES6
    var fullName:string = `My name is: ${fristName} ${lastName}`;
    alert(fullName);
}

//fullName("Dark","Peter");
