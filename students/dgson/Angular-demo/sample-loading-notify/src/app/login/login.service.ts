import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
    constructor(private cookieService: CookieService, private apiService: ApiService) { }
    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post("api/login", {
                username: username,
                password: password
            }).then(res => {
                this.apiService.token = res as string;
                this.cookieService.set('auth-superdev', this.apiService.token);
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    };

    getAuthorize() {
        return new Promise((resolve, reject) => {
            this.apiService.get("api/authorize").then(user => {
                resolve(user);
            }).catch(err => {
                reject(err);
            })
        });
    };
}
