import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username: string;
password: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }
  login(){
    this.loginService.login(this.username, this.password).then(()=>{
      this.router.navigate(["/main/dashboard"]);
    }).catch((err)=>{
      alert("Login Fail");
      console.error(err);
    });
  }

}
