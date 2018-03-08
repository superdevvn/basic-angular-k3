import * as $ from "jquery";

export function test() {
    var a:string = "A Test";
    //OLD
    //var that = this;
    //$("#btn").click(function(){
    //      alert(that.a);
    //})
    
    //NEW
    $("#btn").click(()=>{
        alert(this.a);
    })
}

export function test2() {
    var names: string[] = ["Nghia", "Peter"];
    //OLD
    //var messages:string = names.map(function(this.name){
    //    return "Hello "+ name;
    //});

    //NEW
    var messages:string[] = names.map((name)=>"Hello "+ name);

    alert(messages[0]);
    alert(messages[1]);
}

//OLD
// var sum:number = function(a:number,b:number) {
//     return a+b;
// }

//OLD
export var sum = (a:number,b:number) => alert(a+b);
//test();
//test2();
//alert(sum(1,2));