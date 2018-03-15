import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName: string = "";
  lastName: string = "";
  fullName: string = "";
  type: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  hello(){
    let fullName: string = "";
    if(this.type === true){
      fullName = `Hello ${this.firstName} ${this.lastName}`;
      alert(fullName);
    } else {
      fullName = `Hi ${this.firstName} ${this.lastName}`;
      alert(fullName);
    }
  }
  change(){
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
