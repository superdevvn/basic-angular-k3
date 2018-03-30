import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class RoomDetailService {

  constructor(private apiService: ApiService) { }


  getRoom(id) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getRoom/${id}`).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
  saveRoom(room) {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/saveRoom', room).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
  getRooms() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getRooms',{}).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
}
