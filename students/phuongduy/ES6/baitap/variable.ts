var obj = {a : 1, b : 2, c : 3};
for (var item in obj){
    this.val += item + " = " + obj[item] + "\n";
}