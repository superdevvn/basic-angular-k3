import * as name from './enhanced-object-literals';
(function test(){
    

   var sum = (a:number,b: number) => a + b;

   alert(sum(3,1));
})();

function test2(){
    let hoten: Array<string> = ["Nguyen", "Phuong", "Duy"];
    var message: Array<string> = hoten.map((ele)=>{return ele});
    for(var item in message){
        document.write(message[item].toUpperCase());
    }
}
name.test();