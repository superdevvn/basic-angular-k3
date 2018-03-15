function test(){
    var house = "my house";
    var mouse = "my mouse";

    var sum = function(a,b){
       alert(a + b);
    }
    sum(3,4);
    // cach viet cu
    var a = {
        house: house,
        mouse: mouse,
        sum: sum, // ham
        hello: function(){
            alert("Hello A");
        }
    }

    alert(a.mouse);
    alert(a.house);
    a.sum(1,1);
    a.hello();
    // cach viet moi trong es6
    var b = {
        house,
        mouse,
        sum,
        hello(){
            alert("Hello b");
        }
    }

    alert(b.house);
    alert(b.mouse);
    b.sum(2,3);
    b.hello();
}
test();
