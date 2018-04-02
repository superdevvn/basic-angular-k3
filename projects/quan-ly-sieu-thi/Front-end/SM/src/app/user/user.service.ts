import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  getUsers() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getUsers', {}).then(users => {
        resolve(users);
      }).catch(err => {
        reject(err);
      });
    })
  }

  getUser(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getUser/${id}`).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveUser(user) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveUser/', user).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteUser?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
