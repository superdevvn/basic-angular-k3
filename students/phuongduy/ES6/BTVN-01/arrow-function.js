"use strict";
exports.__esModule = true;
var name = require("./enhanced-object-literals");
(function test() {
    var sum = function (a, b) { return a + b; };
    alert(sum(3, 1));
})();
function test2() {
    var hoten = ["Nguyen", "Phuong", "Duy"];
    var message = hoten.map(function (ele) { return ele; });
    for (var item in message) {
        document.write(message[item].toUpperCase());
    }
}
name.test();
