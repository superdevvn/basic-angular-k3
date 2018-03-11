import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName:string;
  passWord:string;
  email:string;
  birthDate:Date;
  isActive:boolean;
  typeAcc:string = "Employee";
  salary:number;
  constructor() { }

  ngOnInit() {
  }
  save(){
    let info = `UserName: ${this.userName} \n
                Password: ${this.passWord} \n
                Email: ${this.email} \n
                Birth Date: ${this.birthDate} \n
                Active: ${this.isActive ? 'Yes' : 'No'} \n
                Type: ${this.typeAcc} \n
                alary: ${this.salary}`
    alert(info);
  }
}
