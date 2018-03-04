function test(){
    var data = {
        house: 'This is house',
        mouse: 'MOUSE'
    }
    // OLD
    // var house = data.house;
    // var mouse = data.mouse;
    //NEW
    var {house,mouse} = data;
    
    alert(house);
    alert(mouse);


}
test();