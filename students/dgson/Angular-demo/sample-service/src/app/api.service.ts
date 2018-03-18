import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class ApiService {
  host:string = "http://103.232.121.69:5203/";
  token:string = "none";

  constructor(private http:Http) { }
  userInfo:any;
  findMax(a:number | string, b:number | string) {
    a = +a;
    b = +b;
    if(a>b)
    return a;
    else return b;
  }
  
  get(url:string) {
    let headers = new Headers();
    headers.append("Auth-SuperDev",this.token);
    return new Promise((resolve, reject)=> {
      this.http.get(this.host + url, {headers: headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  post(url:string, body:any) {
    let headers = new Headers();
    headers.append("Auth-SuperDev",this.token);
    return new Promise((resolve, reject)=> {
      this.http.post(this.host + url, body, {headers:headers}).toPromise().then(res=>{
        resolve(res.json());
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  sum(...args) {
    let result = 0;
    args.forEach(value=> {
      result = result+ (+value);
    });
  }

  // sum(a:number | string, b:number | string){
  //   a = +a;
  //   b = +b;
  //   return a+b;
  // }
}
