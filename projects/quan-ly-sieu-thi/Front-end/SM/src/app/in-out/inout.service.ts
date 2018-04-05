import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class InoutService {

  constructor(private apiService: ApiService) { }

  getInOuts() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getInOuts', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }

  getInOut(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getInOut/${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveInOut(user) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveInOut/', user).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteInOut(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteInOut?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
