import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class RoleService {

    constructor(private apiService: ApiService) { }
  
    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getRoles', {}).then(roles => {
                resolve(roles);
            }).catch(err => {
                reject(err);
            });
        });
    }

    getRole(id:number) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getRole/${id}`).then(roles => {
                resolve(roles);
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveRole(id:number) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`api/saveRole/`, {}).then(roles => {
                resolve(roles);
            }).catch(err => {
                reject(err);
            });
        });
    }
}