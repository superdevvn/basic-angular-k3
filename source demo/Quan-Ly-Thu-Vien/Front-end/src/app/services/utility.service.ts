import {Injectable} from '@angular/core';
import { Http } from '@angular/http'

@Injectable()
export class UtilityService{

    constructor(private http:Http){

    }

    fullName: string;
    hello(firstName: string, lastName: string){
        this.fullName = `${firstName} ${lastName}`;
    }

    testAsync(){
        let promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            console.log("A");
        },1000);
    })
    return promise;
        }
        
    login(username: string, password: string)
    {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                    if(username == "Sang" && password =="123")
                        resolve();
                    else
                    {
                       reject();
                    }

            },1000)
        })
    }
    login2(username: string, password: string)
    {
        let url = "http://103.232.121.69:5103/api/login"
        return this.http.post(url,{
            username: username,
            password: password
        }).toPromise();
    }
}
