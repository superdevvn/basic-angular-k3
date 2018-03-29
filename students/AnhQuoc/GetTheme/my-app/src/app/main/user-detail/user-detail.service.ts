import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class UserDetailService {

    constructor(private apiService: ApiServiceService) {
    }

    getUserByID(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getUser/${id}`)
                .then(
                    res => {
                        resolve(res.json());
                    })
                .catch(err => {
                    reject(err);
                })
        })
    }

    saveUser(user) {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/saveUser/', user)
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }





}
