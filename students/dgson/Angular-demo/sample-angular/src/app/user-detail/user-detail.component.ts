import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  username:string;
  password:string;
  email:string;
  sex:string;
  account:string;
  type:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  save() {
    // debugger
    let fullName:string='';
    if(this.account === "Admin") fullName = `Hello Admin`;
    else if(this.type==true && this.sex=="Man")
      fullName = `Hello Mr, ${this.username} your account is OK`;
    else if(this.type==true && this.sex=="Woman")
      fullName = `Hello Mrs, ${this.username} your account is OK`;
    else if(this.sex=="Man")
    alert(fullName);
  }
}
