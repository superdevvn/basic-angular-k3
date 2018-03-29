import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from './user.service';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
    users: any[];
  constructor(
      private router: Router,
      private userService: UserService,
      private loadingService: LoadingService
  ) { }

    ngOnInit() {
        this.loadingService.star();
        this.userService.getList().then((users: any[]) => {
            this.users = users;
            this.loadingService.stop();
        })
    }

    detail(user) {
        this.router.navigate(['main/user-detail', user.Id]);
    }

    delete(user) {

    }

}
