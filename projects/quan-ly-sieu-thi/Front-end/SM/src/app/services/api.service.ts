import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()
export class ApiService {
    host: string = "http://103.232.121.69:5304/";
    token: string = "none";

    constructor(private http: Http,
        private cookieService: CookieService,
        private router: Router) {
        this.token = this.cookieService.check('author-james') ? this.cookieService.get('author-james') : "none";
    }

    //hàm get api
    get(url: string) {
        let headers = new Headers();
        headers.append("Auth-SuperDev", this.token);
        return new Promise((resolve, reject) => {
            this.http.get(this.host + url, { headers: headers }).toPromise().then((res) => {
                resolve(res.json());
            }).catch((err) => {
                // if (err.status == 401) this.router.navigate(["/login"]);
                reject(err);
            });
        });
    }

    //hàm post api
    post(url: string, body: any) {
        let headers = new Headers();
        headers.append("Auth-SuperDev", this.token);
        return new Promise((resolve, reject) => {
            this.http.post(this.host + url, body, { headers: headers }).toPromise().then((res) => {
                resolve(res.json());
            }).catch((err) => {
                reject(err);
            });
        });
    }

    delete(url: string) {
        return new Promise((resolve, reject) => {
            let headers = new Headers();
            headers.append("Auth-SuperDev", this.token);
            this.http.delete(this.host + url, { headers: headers }).toPromise().then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

}
