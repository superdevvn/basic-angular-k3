import { Employee } from "./Employee";

let emp1 = new Employee("Hau", "Le", 10, "hau@gmail.com", "123 PTT");

//Call function
emp1.empInfo();
emp1.walk(10);
emp1.read(5);
emp1.write(12);
emp1.writeEmail();