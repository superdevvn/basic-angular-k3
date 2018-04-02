import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
@Injectable()
export class ApiService {
  userInfo: any;
  host: string = "http://103.232.121.69:5301/";
  token: string = "none";
  constructor(private http: Http,
     private cookieService: CookieService,
     private router: Router
    ) {
    this.token = this.cookieService.check("cookie") ? this.cookieService.get("cookie") : "none";
   }

  get(url: string){
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token);

    return new Promise((resolve, reject)=>{
      this.http.get(this.host + url,{headers: headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch(res=>{
        reject(res);
      });
    });
  }

  post(url: string, body: any){
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token);

    return new Promise((resolve, reject)=>{
      this.http.post(this.host + url, body, {headers: headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch(err=>{
        reject(err);
      });
    });
  }

  delete(url: string) {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append("Auth-SuperDev", this.token);
        this.http.delete(this.host + url, { headers: headers })
            .toPromise()
            .then(res => {
                resolve(res);   
            }).catch(err => {
                if (err.status == 401) this.router.navigate(["/login"]);
            })
    })
}
}
