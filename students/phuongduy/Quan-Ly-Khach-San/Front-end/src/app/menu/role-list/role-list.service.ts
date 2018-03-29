import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class RoleListService {

  constructor(private apiService: ApiService) { }
  getRoles() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getRoles', {}).then(res => {
        console.log(res.json());
        resolve(res.json());
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }
  deleteRole(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteRole?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
