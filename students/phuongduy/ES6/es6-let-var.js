function test(){
    let a =10;
    {
        let a = 100;
        if (true) {
            let a = 1000;
        }
    }
    alert(a);
}
test();