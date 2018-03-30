import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class UserListService {

    constructor(private apiService: ApiServiceService) {
    }

    getUsers() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getUsers/', {})
                .then(res => {
                    resolve(res.json());
                })
                .catch(err => {
                    reject(err);
                })
        })
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteUser?id=${id}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

}
