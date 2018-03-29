import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private utilityService: UtilityService, private loginService: LoginService,
    private router: Router) {

  }

  ngOnInit() {


  }
  logout() {
    this.loginService.logout();
  }
}
