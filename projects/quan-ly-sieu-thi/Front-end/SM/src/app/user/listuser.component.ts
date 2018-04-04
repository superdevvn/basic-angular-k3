import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any[];
  constructor(private router: Router,
    private userService: UserService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.userService.getUsers().then((users: any[]) => {
      this.users = users;
      this.loadingService.stop();
    }).catch(err => {
      this.notifyService.error("Undefined error!");
      this.loadingService.stop();
    });
  }

  newUser() {
    this.router.navigate(['main/user-detail', 0]);
  }

  detail(user) {
    this.router.navigate(['main/user-detail', user.Id]);
  }

  delete(user) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.userService.deleteUser(user.Id).then(() => {
        this.notifyService.success("Delete successful!");
        this.userService.getUsers().then((users: any) => {
          this.users = users;
        }).catch(err => {
          this.notifyService.error("Reloading failed!");
        });
      }).catch(err => {
        this.notifyService.error(err.message);
      })
    }).catch(err => {
      this.notifyService.error("Deleting failed!");
    });
  }

  block(user: any) {
    this.loadingService.startbtnloading('activeloading', 'activeloading');
    user.IsActived = false;
    this.userService.saveUser(user).then((res: any) => {
      this.loadingService.stopbtnloading('activeloading');
      this.notifyService.success("Block account successful!");
    }).catch(err => {
      this.loadingService.stopbtnloading('activeloading');
      this.notifyService.error("Block account fail!");
    });
  }

  active(user: any) {
    this.loadingService.startbtnloading('activeloading', 'activeloading');    
    user.IsActived = true;
    this.userService.saveUser(user).then((res: any) => {
      this.loadingService.stopbtnloading('activeloading');      
      this.notifyService.success("Active account successful!");
    }).catch(err => {
      this.loadingService.stopbtnloading('activeloading');      
      this.notifyService.error("Active account fail!");
    });
  }
}
