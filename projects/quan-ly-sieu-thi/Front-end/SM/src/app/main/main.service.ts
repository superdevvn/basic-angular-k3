import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class MainService {

  constructor(private apiService: ApiService) { }

  getUserInfo(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getUser/${id}`).then(user => {
        resolve(user);
      }).catch(err => {
        reject(err);
      });
    });
  };

}
