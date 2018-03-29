import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class ApiServiceService {
    token: string = "none";
    host: string = "http://103.232.121.69:5303";

    constructor(private http: Http, private router: Router, private cookieService: CookieService) {
        this.token = this.cookieService.check('auth-superdev') ? this.cookieService.get('auth-superdev') : "none";
    }

    post(url: string, data: any) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.post(this.host + url, data, { headers: headers })
                .toPromise()
                .then(res => {
                    if (res.status == 200 || res.status == 204) {
                        resolve(res);
                    }
                    else {
                        reject("Có lỗi xảy ra");
                    }
                }).catch(err => {
                    if (err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }

    get(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.get(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    if (err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }

    delete(url: string) {
        return new Promise<Response>((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.delete(this.host + url, { headers: headers })
                .toPromise()
                .then(res => {
                    resolve(res);
                }).catch(err => {
                    if (err.status == 401) this.router.navigate(["/login"]);
                    else reject(err);
                });
        });
    }
}
