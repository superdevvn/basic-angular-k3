import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private loginSV: LoginService) { }

  ngOnInit() {
    this.loginSV.getAuthorize().catch(err=>{
      this.router.navigate(['login']);
    })
  }

}
