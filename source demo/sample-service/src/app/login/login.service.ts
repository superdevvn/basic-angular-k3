import {Injectable} from '@angular/core';
import {ApiService} from '../services/api.service';
import {CookieService} from 'ngx-cookie-service';


@Injectable()
export class LoginService {
    constructor(private apiService: ApiService, private cookieService: CookieService) {
    }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post("api/login", {
                username: username,
                password: password
            }).then(res => {
                alert(this.apiService.token);
                this.apiService.token = res as string;
<<<<<<< HEAD
                this.cookieService.set('auth-superdev', this.apiService.token);
=======
                alert(this.apiService.token);
>>>>>>> superdev_develop
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }

    getAuthorize() {
        return new Promise((resolve, reject) => {
            this.apiService.get('api/authorize').then(user => {
                resolve(user);
            }).catch(err => {
                reject(err)
            });
        });
    }
}
