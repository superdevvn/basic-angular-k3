import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListuserService } from './listuser.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  users: any[];
  constructor(private router: Router,
    private listUserService: ListuserService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.listUserService.getList().then((users: any[]) => {
      this.users = users;
      this.loadingService.stop();
    }).catch(err => {
      // console.log(err);
      // this.loadingService.stop();
    });
  }

  newUser(){
    this.router.navigate(['main/user-detail', 0]);
  }

  detail(user) {
    this.router.navigate(['main/user-detail', user.Id]);
  }

}
