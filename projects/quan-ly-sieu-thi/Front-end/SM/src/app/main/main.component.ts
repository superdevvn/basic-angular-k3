import { Component, OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../login/login.service';
import { ApiService } from '../services/api.service';
import { MainService } from './main.service';
import { CookieService } from 'ngx-cookie-service';
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  user: any;
  token: string = "none";
  constructor(private router: Router,
    private loginService: LoginService,
    private apiService: ApiService,
    private mainService: MainService,
    private cookieService: CookieService) {
    this.token = this.cookieService.get('author-james');
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });
    this.loginService.getAuthorize().catch(err => {
      this.router.navigate(['login']);
    });
    // this.getUserInfo().then((user: any) => {
    //   this.user = user;
    // }).catch(err => {
    //   alert(err);
    // });
  }

  newUser(){
    this.router.navigate(['main/user-detail', 0]);
  }

  newRole(){
    this.router.navigate(['main/role-detail', 0]);
  }

  newManu() {
    this.router.navigate(['main/manu-detail', 0]);
  }

  newWh() {
    this.router.navigate(['main/wh-detail', 0]);
  }


  ngAfterViewInit() {
    $.getScript('assets/javascripts/theme.js', function () {
      $.getScript('assets/javascripts/theme.init.js', function () { });
    });
  };

  getUserInfo(id: number) {
    return new Promise((resolve, reject) => {
      this.mainService.getUserInfo(id).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }

  Logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }
}
