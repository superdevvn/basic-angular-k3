export class test {
    house:string
    mouse:string
    kill:string
    sum = function(a:number,b:number){
        alert(a+b);
    }
    sub = function(a:number,b:number){
        alert(a-b);
    }
    constructor(house:string, mouse:string){
        this.house = house;
        this.mouse = mouse;
        this.kill = `${house} ${mouse}`;
    }
}

// //NEW
// var b = {house,mouse,sum,hello(){
//     alert("Hello B");
// }
// }
// alert(b.mouse);
// alert(b.house);
// b.sum(1,2);function test(){
// var house = "My House";
// var mouse = "Her Mouse";
// var sum = function(a,b){
//     alert(a+b);
// }
// //OLD
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
// //NEW
// var b = {
//     house,
//     mouse,
//     sum,
//     hello(){
//         alert("Hello B");
//     }
// }
// alert(b.mouse);
// alert(b.house);
// b.sum(1,2);
// b.hello();