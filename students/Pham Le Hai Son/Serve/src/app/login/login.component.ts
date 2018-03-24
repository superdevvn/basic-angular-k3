import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { LoginService } from './login-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private apiService: ApiService, private loginService: LoginService) { }

  ngOnInit() {
  }
  login() {
    this.apiService.userInfo = {
      firstName: "Quan",
      lastName: "Duong"
    }
    this.loginService.login(this.username, this.password).then((res: any) => {
      this.apiService.post('api/getUsers', {}).then(res => {
        console.log(res);

      }).catch((err) => {
        alert(err);
      });

    }).catch((err) => {
      alert(err);
    });
  }
  getDistrict() {
    this.apiService.post("http://api.serverapi.host/api/v1/apiv3/GetDistricts", { "token": "TokenTest" }).then(res => {
      console.log(res);
    });
  }
}
