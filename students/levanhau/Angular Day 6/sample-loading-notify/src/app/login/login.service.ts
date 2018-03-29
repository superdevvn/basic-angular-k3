import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class LoginService {
    constructor(private cookieService: CookieService, private apiServices: ApiService) { }

    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiServices.post("api/login", {
                username: username,
                password: password
            }).then((res) => {
                this.apiServices.token = res as string;
                this.cookieService.set('author-superdev', this.apiServices.token);
                resolve(res);
            }).catch((err) => {
                reject(err);
            });
        });
    };

    getAuthorize() {
        return new Promise((resolve, reject) => {
            this.apiServices.get("api/authorize").then((res) => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    }
}