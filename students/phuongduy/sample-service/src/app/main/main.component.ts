import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getAuthorize().catch(err=>{
      this.router.navigate(['login']);
    });
  }

}
