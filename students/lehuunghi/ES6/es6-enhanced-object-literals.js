function test(){
    var her = "girl", him = "boy";

    var data = {
        her,
        him,
        action(){
            alert(`${this.her} love ${this.him}`);
        }
    }

    data.action();
}

test();