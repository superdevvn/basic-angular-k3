import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoginService } from './login.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router,
    private apiService: ApiService,
    private loginService: LoginService,
    private notifyService: NotifyService,
    private loadingService: LoadingService,
    private userService: UserService) { }

  ngOnInit() {

  }

  Login() {
    // this.apiService.userInfo("James", "Le");
    this.loadingService.startbtnloading();
    this.loginService.login(this.username, this.password).then(() => {
      this.router.navigate(['main']);
      this.loadingService.stopbtnloading();
      this.notifyService.success("Log in successfully!");
    }).catch(() => {
      this.loadingService.stopbtnloading();
      this.notifyService.error("Log in failure! Please again!");
    });
  };
}