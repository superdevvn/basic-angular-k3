import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
users: any[];
constructor(private userService: UserService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.userService.getUsers().then((users:any[])=>{
    this.users = users;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(user){
      this.router.navigate(["/main/user-detail",user.Id]);
    }

    create(){
      this.router.navigate(["/main/user-detail",0]);
    }

    delete(user) {
      this.userService.deleteUser(user.Id).then(() => {
        this.userService.getUsers().then((users: any[]) => {
          this.users = users;
        });
      });
      this.Notification.success('Deleted');
    }

  }
