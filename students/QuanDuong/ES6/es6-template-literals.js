function fullName(firstName, lastName) {
    // OLD
    // var fullName = firstName + " " + lastName;
    // alert(fullName);
    // ES6
    var fullName = `My name is: ${firstName} ${lastName}`;
    alert(fullName);
}
fullName("Dark","Peter");