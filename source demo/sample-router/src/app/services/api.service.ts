import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class ApiService {
  userInfo: any;
  constructor(private http: Http) { }

  get(url: string) {
    return new Promise((resolve, reject) => {
      this.http.get(url).toPromise().then(res => {
        resolve(res.json());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  post(url: string, body: any) {
    return new Promise((resolve, reject) => {
      this.http.post(url, body).toPromise().then(res => {
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
  // sum(a: number | string, b: number | string) {
  //   a = +a;
  //   b = +b;
  //   return a + b;
  // }
}
