import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class LoginService {
  
  constructor(private apiService: ApiService) { }
  login(username:string, password:string) {
      return new Promise((resolve,reject)=>{
        // setTimeout(()=> {
        //     if(username == "Dark")
        //     resolve(); 
        //     // or resolve("Login successful");
        //     else reject();
        //     // or reject("login failed")
        // }, 5000);
        this.apiService.post("api/login",{
          username:username,
          password:password
        }).then(res=>{
          // resolve(res);
          this.apiService.token = res as string;
          resolve(res);
        }).catch(err=>{
          reject(err);
        })
      });
  }
}
