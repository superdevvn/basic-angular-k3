import { Student } from "./a1";
import * as c1 from "./c1";
function test() {
    var student = new Student("Nghia", "Tran");
    alert(student.fullName);
}
alert(c1.sum(1,2));
alert(c1.multiple(2,5));
test();