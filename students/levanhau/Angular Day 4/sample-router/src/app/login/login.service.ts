import { Injectable } from "@angular/core";
import { resolve } from "url";
import { reject } from "q";
import { ApiService } from "../services/api.service";

@Injectable()
export class LoginService {
    constructor(private apiServices: ApiService) { }
    login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            this.apiServices.post("api/login", {
                username: username,
                password: password
            }).then(res => {
                this.apiServices.token = res as string;
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        });
    }
    // login(username: string, password: string) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             if (username == "James" && password == "123")
    //                 resolve({
    //                     status: "Bồ tèo login thành công lần thứ ",
    //                     number: 1
    //                 });
    //             else reject("Login fail");
    //         }, 2000);
    //     });
    // }
}