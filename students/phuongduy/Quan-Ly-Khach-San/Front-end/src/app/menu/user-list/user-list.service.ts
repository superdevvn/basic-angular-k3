import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class UserListService {
  constructor(private apiService: ApiService) { }
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
