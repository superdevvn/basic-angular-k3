function test() {
    this.a = "A Test";
//    setTimeout(function() {
//        alert(this.a);
//    },1000);
    var that = this;
    // OLD
//        $('#btn').click(function(){
//            alert(that.a);
//        })
        //NEW
        $("#btn").click(()=>{
            alert(that.a)
        })
}
function test2() {
    var names = ["Nghia", "Peter"];
    //OLD
//    var messages = names.map(function(name){
//        return "Hello" + name;
//    });
    //NEW
    var messages = names.map((name)=> "HELLO " + name);
    
    alert(messages[0]);
    alert(messages[1]);
}
var sum = (a,b) => a+b;
test();
alert(sum(1,2));