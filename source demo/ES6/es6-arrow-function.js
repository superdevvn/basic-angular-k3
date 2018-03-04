function test(){
    this.a = "A Test";
    //OLD
    // var that=this;
    // $("#btn").click(function(){
    //     alert(that.a);
    // })
    //NEW
    $("#btn").click(()=>{
        alert(this.a);
    })
}

function test2(){
    var names = ["Nghia", "Peter"];
    //OLD
    // var messages = names.map(function(name){
    //     return "Hello "+ name;
    // });
    //NEW
    var messages = names.map((name)=> "Hello "+ name);

    alert(messages[0]);
    alert(messages[1]);
}

//OLD
// var sum = function(a,b){
//     return a+b;
// }

//OLD
var sum = (a,b) => a+b;
//test();
test2();
alert(sum(1,2));