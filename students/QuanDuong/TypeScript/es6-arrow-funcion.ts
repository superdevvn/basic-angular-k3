export function test(){
    var names = ["Quan","Duong"];
    var messages = names.map((name)=> "hello" + name);
    
    alert(messages[0]);
    alert(messages[1]);
    var sum = (a:number,b:number) => a+b;
    test();
    alert(sum(1,2));
}