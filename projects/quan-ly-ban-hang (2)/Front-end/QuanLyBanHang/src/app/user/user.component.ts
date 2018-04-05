import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[];
  constructor(
    private userService: UserService,
    private router: Router,
    private loadingService: LoadingService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.userService.getUser().then((users: any[])=>{
      this.users = users;
      this.loadingService.stop();
    })
  }

  detail(user){
    this.router.navigate(['main/user-detail', user.Id]);
   
  }
  newUser() {
    this.router.navigate(['main/user-detail', 0]);
  }

<<<<<<< HEAD
  delete(id: number) {
    this.notifyService.confirm("Bạn có muốn xóa không?").then(()=>{
      this.userService.deleteUser(id).then(() => {
        this.userService.getUser().then((users: any[]) => {
          this.users = users;
        });
      });
      this.notifyService.printDeleteSuccess();
    }).catch(()=>{
    });
  }
=======
  // deleteUser(user){

  // }
>>>>>>> d5c891c60fca61f77385c4f78ea06d6599fad69a
}
