function test(){
    this.a = "A Test";
    //OLD
    //var that=this;
    //$('#btn').click(function(){
       // alert(that.a);
   // })
//new
$("#btn").click(() =>{
    alert(this.a)
})
    
}
function test2(){
    var names = ["Quan","Duong"]
    var messsage = names.map((name)=> "Hello" + name);
    
    alert(messsage[0]);
    alert(messsage[1]);
}
var sum = (a,b) = a+b;
test2();
alert(sum(1,2));