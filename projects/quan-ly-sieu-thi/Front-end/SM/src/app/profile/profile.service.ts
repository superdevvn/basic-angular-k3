import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ProfileService {

  constructor(private apiService: ApiService) { }

  saveProfile(user) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveUser/', user).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  changePassword(oldPassword: string, newPassword: string) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/changePassword/', {
        oldPassword: oldPassword,
        newPassword: newPassword
      }).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getAuthorize() {
    return new Promise((resolve, reject) => {
      this.apiService.get("api/authorize").then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  };

}
