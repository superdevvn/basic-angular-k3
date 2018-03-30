import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userService.getUser().then((users: any[])=>{
      this.users = users;
    })
  }

  detail(user){
    this.router.navigate(['main/user-detail', user.Id]);
   
  }
  newUser() {
    this.router.navigate(['main/user-detail', 0]);
  }
}
