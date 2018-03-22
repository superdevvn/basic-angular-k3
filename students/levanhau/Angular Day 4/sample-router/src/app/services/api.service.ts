import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ApiService {
  host:string = "http://103.232.121.69:5203/";
  token: string = "none";
  userInfor: any;
  constructor(private http: Http) { }

  // sum(a: number | string, b: number | string) {
  //   a = +a;
  //   b = +b;
  //   return a + b;
  // }

  get(url: string) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token)
    return new Promise((resovle, reject) => {
      this.http.get(this.host + url, {headers: headers}).toPromise().then((res) => {
        resovle(res.json());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  post(url: string, body: any) {
    let headers = new Headers();
    headers.append("Auth-SuperDev", this.token)
    return new Promise((resovle, reject) => {
      this.http.post(this.host + url, body, {headers: headers}).toPromise().then((res) => {
        resovle(res.json());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  sum(...args) {
    let result = 0;
    args.forEach(value => {
      result += +value;
    });
    return result;
  }

  userInfo(fname: string, lname: string) {
    let result = "FirstName: " + fname + "\n" + "LastName: " + lname;
    return result;
  }

  maxValue(...values) {
    return Math.max(...values);;
    // values.forEach(value => {
    //   Math.max.apply(Math, values.map((result) => { return result; }))
    // });
  }
}
