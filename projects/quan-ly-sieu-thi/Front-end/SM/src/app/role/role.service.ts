import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable()
export class RoleService {

  constructor(private apiService: ApiService) { }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getRoles', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getRole(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getRole/${id}`).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveRole(role){
    return new Promise((resolve, reject)=>{
      this.apiService.post('api/saveRole', role).then(res=>{
        resolve(res);
      }).catch(err=>{
        reject(err);
      });
    });
  }
}
