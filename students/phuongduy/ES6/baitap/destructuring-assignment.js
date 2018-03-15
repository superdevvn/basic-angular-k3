// function test(){
//     var data = {
//         house : 'this is my house',
//         mouse : 'this is my mouse'
//     }

//     var house = data.house;
//     var mouse = data.mouse;

//     alert(house);

//     var {house, mouse} = data;
//     alert(mouse);

// }
//test();

function multiLine(firstName, lastName, age){
    var fullName = `This is ${lastName}, he is ${age}
and full name is: ${firstName} ${lastName}.`
    alert(fullName);
}
multiLine("Nguyen", "Duy", 23);