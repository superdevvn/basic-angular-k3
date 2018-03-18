import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor() { }
  login(username:string,password:string){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(username == "Dark") resolve({
                status: 200,
                message: "Login Successful"
            });
            else reject("Login fail");
        }, 5000);
    });
  }
}
