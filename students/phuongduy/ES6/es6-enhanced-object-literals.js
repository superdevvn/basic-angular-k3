function test(){

var house = "My House";
var mouse = "Her mouse";
var sum = function sum(a, b){
    alert(a + b);
}
 var a = {
     house : house,
     mouse : mouse,
     sum : sum
 } 
 a.alert(a.house);
 a.alert(a.mouse);
 a.sum(1,3);
}