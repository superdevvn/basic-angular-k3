import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {

  constructor(private apiService: ApiService, private cookieService: CookieService) {

  }
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/login', {
        username: username,
        password: password
      }).then(res => {
        this.apiService.token = res.json();
        this.cookieService.set('auth-superdev', this.apiService.token);
        resolve(res.json());
        // this.getAuthorize().then(user => {
        //   resolve(user);
        // }).catch(err => {
        //   reject(err);
        // })
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }
  // getAuthorize() {
  //   return new Promise((resolve, reject) => {
  //     this.apiService.get(`/api/getauthorize/${this.apiService.token}`).then(res => {
  //       resolve(res.json());
  //     }).catch(err => {
  //       reject(err);
  //     });
  //   });
  // }
}
