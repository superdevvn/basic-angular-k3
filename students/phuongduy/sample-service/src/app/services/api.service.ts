import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { resolve } from 'q';
import { CookieService } from 'ngx-cookie-service';
@Injectable()
export class ApiService {
  host: string = "http://103.232.121.69:5203/";
  token: string = "none";
  userInfo: any;
  constructor(private http: Http, private cookieService: CookieService) {
    this.token = this.cookieService.check("cookie") ? this.cookieService.get("cookie") : "none";
  }

  get(url: string) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token)
    return new Promise((resolve, reject) => {
      this.http.get(this.host + url, { headers: headers }).toPromise().then(res => {
        resolve(res.json());
      }).catch((err) => {
        reject(err);
      });
    });

  }

  post(url: string, body) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token);

    return new Promise((resolve, reject) => {
      this.http.post(this.host + url, body, { headers: headers }).toPromise().then(res => {
        resolve(res.json());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  sum(...args) {
    let result = 0;
    args.forEach(value => {
      result = result + (+value);

    });
    return result;
  }

  // sum(a:number | string, b:number | string){
  //   a = +a;
  //   b = +b;
  //   return a + b;
  // }
}
