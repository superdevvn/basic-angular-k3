function test(){
    var house = "My House";
    var mouse = "Her Mouse";
    var sum = function(a,b){
        alert(a+b);
    }
    //OLD
    var a = {
        house:house,
        mouse:mouse,
        sum:sum,
        hello: function(){
            alert("Hello A");
        }
    }
    alert(a.mouse);
    alert(a.house);
    a.sum(1,2);
    a.hello();
    //NEW
    var b = {
        house,
        mouse,
        sum,
        hello(){
            alert("Hello B");
        }
    }
    alert(b.mouse);
    alert(b.house);
    b.sum(1,2);
    b.hello();
}
test();
