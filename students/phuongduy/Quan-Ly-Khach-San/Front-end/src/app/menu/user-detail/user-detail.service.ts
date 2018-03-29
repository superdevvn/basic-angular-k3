import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class UserDetailService {

  constructor(private apiService: ApiService) { }
  getUser(id) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getUser/${id}`).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
  saveUser(user) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveUser', user).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
  getUsers() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getUsers', {}).then(res => {
        resolve(res.json());
        console.log(res.json());
      }).catch(err => {
        console.log(err);
        reject(err);
      });
    });
  }
}
