import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private loginService: LoginService,
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }

  login(){
    this.loginService.loginUser(this.username, this.password).then((res: any)=>{
      this.apiService.post("api/getUsers", {}).then(res=>{
        console.log(res);
      }).catch(err=>{
        alert(err);
      });
    }).catch(err=>{
      alert("ko");
    });

  
  }
}
