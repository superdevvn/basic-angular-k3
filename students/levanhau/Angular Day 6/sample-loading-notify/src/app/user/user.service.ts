import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";

@Injectable()
export class UserService {
    constructor(private apiService: ApiService) { }
    getList(){
        return new Promise((resolve, reject)=>{
            this.apiService.post('api/getUsers',{}).then(roles=>{
                resolve(roles);
            }).catch(err=>{
                reject(err);
            });
        });
    }
}