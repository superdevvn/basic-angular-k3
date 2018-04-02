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
  author: any = {};
  title: string = "Home";
  any: any;
  password: string;
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
        switch (event.url) {
          case "/main": this.title = "Home"; break;
          case "/main/user-list": this.title = "Users Management"; break;
          case "/main/role-list": this.title = "Roles Management"; break;
          case "/main/unit-list": this.title = "Units Management"; break;
          case "/main/manu-list": this.title = "Manufacturers Management"; break;
          case "/main/wh-list": this.title = "Warehouses Management"; break;
          case "/main/product-list": this.title = "Products Management"; break;
          case "/main/cate-list": this.title = "Categories Management"; break;

          case "/main/user-detail/0": this.title = "Add new User"; break;
          case "/main/role-detail/0": this.title = "Add new Role"; break;
          case "/main/unit-detail/0": this.title = "Add new Unit"; break;
          case "/main/manu-detail/0": this.title = "Add new Manufacturer"; break;
          case "/main/wh-detail/0": this.title = "Add new Warehouse"; break;
          case "/main/product-detail/0": this.title = "Add new Product"; break;
          case "/main/cate-detail/0": this.title = "Add new Category"; break;
        }
      }
    });
    this.loginService.getAuthorize().then(author => {
      this.author = author;
    }).catch(err => {
      this.router.navigate(['login']);
    });
  }

  ngAfterViewInit() {
    $.getScript('assets/javascripts/theme.js', function () {
      $.getScript('assets/javascripts/theme.init.js', function () { });
    });
  };

  newUnit() {
    this.router.navigate(['main/unit-detail', 0]);
  }

  newUser() {
    this.router.navigate(['main/user-detail', 0]);
  }

  newRole() {
    this.router.navigate(['main/role-detail', 0]);
  }

  newManu() {
    this.router.navigate(['main/manu-detail', 0]);
  }

  newWh() {
    this.router.navigate(['main/wh-detail', 0]);
  }

  getUserInfo(id: number) {
    return new Promise((resolve, reject) => {
      this.mainService.getUserInfo(id).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }

  unlock(){
    this.loginService.unlock(this.author.Username, this.password).then(res=>{
      
    })
  }

  logout() {
    this.cookieService.delete('author-james');
    this.router.navigate(['login']);
  }
}
