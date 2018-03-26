import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class ApiService {
  host:string = "http://103.232.121.69:5203/";
  token:string = "none";
  constructor(private http:Http, private cookieService:CookieService) { 
    this.token = this.cookieService.check('cookie') ? this.cookieService.get('cookie') : 'none';
  }
  userInfo:any;

  get(url:string) {
    let headers = new Headers();
    headers.append("Auth-SuperDev",this.token);
    return new Promise((resolve,reject)=>{
      this.http.get(this.host + url, {headers:headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  post(url:string, body:any) {
    let headers = new Headers();
    headers.append("Auth-SuperDev",this.token);
    return new Promise((resolve, reject)=>{
      this.http.post(this.host+url, body, {headers:headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  
}
