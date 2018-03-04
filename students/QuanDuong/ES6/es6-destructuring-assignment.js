function test(){
var data = {
    house: 'This is house',
    mouse: 'MOUSE'
}
//old
//var house = data.house;
//var mouse = data.mouse;

var{house,mouse} = data;
alert(house);
alert(mouse);
}
test();