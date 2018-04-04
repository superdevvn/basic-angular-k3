import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginService } from './login.service';
import {Router} from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(
    private apiService: ApiService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  
  }
  login(){
   
    this.loginService.login(this.username, this.password).then((res:any)=>{
      this.apiService.post("api/getUsers", {}).then(res=>{
        this.router.navigate(['main']);
      }).catch(res=>{
        alert(res);
      }).catch(res=>{
        alert(res);
      })
    })
  }

}
