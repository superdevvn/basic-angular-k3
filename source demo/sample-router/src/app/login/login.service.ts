import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class LoginService {
    constructor(private apiService: ApiService) { }
    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiService.post("api/login", {
                username: username,
                password: password
            }).then(res => {
                this.apiService.token = res as string;
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }
}
