import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  name:string;
  password:string;
  email:string;
  type:boolean;
  constructor() { }

  ngOnInit() {

  }
  hello(){
    let details: string = "";
    if(this.type == true){
      details = `VIP${this.name} ${this.password} ${this.password}`;
    }else{
      details = `MemberShip${this.name} ${this.password} ${this.password}`;
      alert(details);
    }
    
    
  }

}
