import { Component, OnInit } from '@angular/core';
import { UserListService } from './user-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(private userListService: UserListService, private router: Router) { }

  ngOnInit() {
    this.userListService.getUsers().then((users: any) => {
      this.users = users;
    });
  }

  detail(user) {
    this.router.navigate(["/main/user-detail", user.Id]);
  }

  create() {
    this.router.navigate(["/main/user-detail", 0]);
  }
}
