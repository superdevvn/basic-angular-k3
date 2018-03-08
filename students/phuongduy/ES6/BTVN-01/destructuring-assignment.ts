(function test(){
    var house: string;
    var mouse: string;
    var obj = {
        house: "Hello House",
        mouse: "Hello mouse"
    }
    var {house, mouse} = obj;
    alert(house);
})();