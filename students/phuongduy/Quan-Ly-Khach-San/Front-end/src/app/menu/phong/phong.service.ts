import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class PhongService {

  constructor(private apiService: ApiService) { }

  getRooms() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getRooms', {}).then(res => {
        resolve(res.json());
        console.log(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }

}
