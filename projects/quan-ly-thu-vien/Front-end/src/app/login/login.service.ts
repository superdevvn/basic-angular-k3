import {Injectable} from '@angular/core';

import {ApiServiceService} from '../service/api-service.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class LoginService {

    constructor(private apiService: ApiServiceService, private cookieService: CookieService) {
    }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/login', {
                username: username,
                password: password
            })
                .then(res => {
                    this.apiService.token = res.json();
                    this.cookieService.set('auth-superdev', this.apiService.token);
                    resolve(res.json());
                })
                .catch(err=>{
                    console.log(err);
                })
        })
    }

}
