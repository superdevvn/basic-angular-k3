import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName: string;
  lastName: string;
  fullName: string;
  type: boolean;
  sex: string = "Dan Ong";
  constructor() { }

  ngOnInit() {
  }
  hello(){
    let fName:string = "";
    if(this.type == true){
        fName = `Hello ${this.firstName} ${this.lastName}, ${this.sex}`;
    }else{
      fName = `Hi ${this.firstName} ${this.lastName}, ${this.sex}`;
    }
    alert(fName);
  }  
  getFullName(){
    this.fullName = `${this.firstName} ${this.lastName}`;
    // return this.fullName;
  }
  // getInfo(){
  //   // this.inFo = `${this.firstName} ${this.lastName} đi học ngày ${this.birthDate}`;
  //   // return this.fullName;
  // }
}
