import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class RoleDetailService {


    constructor(private apiService: ApiServiceService) {
    }

    getRoleByID(id: any) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getRole/${id}`)
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    saveRole(role) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/saveRole/`, role)
                .then(res => {
                    console.log(res.json());
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

}
