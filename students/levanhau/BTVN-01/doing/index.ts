import * as enhanced from "./es6-enhanced-object-literals";
function callEnhanced(){
    // //OLD
    var a = new enhanced.test("Ngựa nhà", "Chuột cống");
    alert(a.mouse);
    alert(a.house);
    alert(a.kill);
    alert(a.sum(1,2));
    alert(a.sub(3,2));
}

    //OLD
    // var a = {
    //     house:house,
    //     mouse:mouse,
    //     sum:sum,
    //     hello: function(){
    //         alert("Hello A");
    //     }
    // }
    // alert(a.mouse);
    // alert(a.house);
    // a.sum(1,2);
    // a.hello();