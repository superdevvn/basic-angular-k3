function test(){
    this.a = "A Test";
    $('#btn').click(function(){
        alert(this.a);
    })
        
}

//OLD
// var sum = function(a,b){
//     return a +b;
// }

//New
var sum = (a,b) => a+ b;
