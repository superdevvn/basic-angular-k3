import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService,
    private location: Location,
    private loadingService: LoadingService
  ) { 
  }

  ngOnInit() {
      return new Promise((resolve, reject)=>{
        resolve();
      }).then(res=>{
        this.loadingService.start();
      }).then(()=>{
        if(this.cookieService.check("cookie") == false){
          this.location.back();
        }
      }).then(()=>{
        this.loadingService.stop();
      })
  }
  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['login']);
  }
}
