import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoginService } from '../login/login.service';

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
      firstName: "Peter",
      lastName: "Dark"
    }
    this.loginService.login(this.username, this.password).then((res) => {
      // alert(res);
      // this.router.navigate(['main/layout1']);
      this.apiService.post('api/getUsers', {}).then(res=>{
        console.log(res);
      });
    }).catch((err) => {
      alert("Sai tên đăng nhập hoặc mật khẩu");
      // alert(err);
    });


  }
  getDistricts() {
    this.apiService.post(
      "http://api.serverapi.host/api/v1/apiv3/GetDistricts", {
        "token": "TokenTest"
      }).then(res=>{
        console.log(res);
      });
  }
}
