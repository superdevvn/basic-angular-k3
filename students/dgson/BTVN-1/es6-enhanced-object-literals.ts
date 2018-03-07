export function test() {
    var house:string = "My House";
    var mouse:string = "Her House";
    var sum = function(a:number, b:number) {
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
        hello() {
            alert("Hello B");
        }
    }
    alert(b.mouse);
    alert(b.house);
    b.sum(1,2);
    b.hello();
}

//test();