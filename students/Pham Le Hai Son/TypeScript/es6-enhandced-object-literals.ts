export function test(){
    var house = "My House";
    var mouse = "Her Mouse";
    var sum = function(a:number, b:number){
        alert(b)
    }
   
    //new
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
    b.hello
    }

