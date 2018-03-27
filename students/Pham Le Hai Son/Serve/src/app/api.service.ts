import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
@Injectable()
export class ApiService {
  host: string = "http://103.232.121.69:5203/";
  userInfo: any;
  token: string = "none";
  constructor(private http: Http) { }

  get(url: string) {
    let header = new Headers();
    header.append("Auth-SuperDev", this.token);
    return new Promise((resolve, reject) => {
      this.http.get(this.host + url, { headers: header }).toPromise().then(res => {
        res.json();
      }).catch((err) => {
        reject(err);
      });
    });
  }
  //post thì có truyền data còn get thì k truyền
  post(url: string, body: any) {
    
    let header = new Headers();
    header.append("Auth-SuperDev", this.token);
    return new Promise((resolve, reject) => {
      this.http.post(this.host + url, body, {headers:header}).toPromise().then(res => {
        resolve(res.json());
      }).catch((err) => {

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

}
