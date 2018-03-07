function test(){
    var data = {
        house: 'this is house',
        mouse: 'this is mouse'
    }

    var {house, mouse} = data;
    alert(house);
    alert(mouse);
}

test();