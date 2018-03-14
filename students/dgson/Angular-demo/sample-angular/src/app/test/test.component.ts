import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName: string='';
  lastName: string='';
  type:boolean = false;
  fullName: string;
  constructor() { }

  ngOnInit() {
  }
  hello() {
    let fullName = '';
    if(this.type===true) this.fullName = `Hello ${this.firstName}  ${this.lastName}`;
    else
      this.fullName = `Hi ${this.firstName} ${this.lastName}`;
    alert(this.fullName);
  }
  change() {
    this.fullName = `${this.firstName}  ${this.lastName}`;
  }
}
