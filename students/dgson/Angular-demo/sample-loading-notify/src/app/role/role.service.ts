import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

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

    getRole(id: number) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getRole/${id}`).then(role => {
                resolve(role);
            }).catch(err => {
                reject(err);
            });
        });
    }

    saveRole(role: any) {
        return new Promise((resolve, reject) => {
            this.apiService.post(`api/saveRole`,role).then(role => {
                resolve(role);
            }).catch(err => {
                reject(err);
            });
        });
    }
}
