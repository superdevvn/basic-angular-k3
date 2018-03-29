import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: any;

  constructor(private  userSV : UserService) { }

  ngOnInit() {
    this.userSV.getListUser().then((data)=> this.users = data);

  }

}
