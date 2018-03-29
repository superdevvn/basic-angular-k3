import {Injectable} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";

@Injectable()
export class RoleListService {

    constructor(private apiService: ApiServiceService) {
    }

    getRoles() {
        return new Promise((resolve, reject) => {
            this.apiService.post('/api/getRoles', {})
                .then(res => {
                    console.log(res.json());
                    resolve(res.json());
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                })
        })
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.apiService.delete(`/api/deleteRole?id=${id}`)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    reject(err);
                })
        });
    }

}
