import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ManufacturerService {

  constructor(private apiService: ApiService) { }

  getManus() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getManufacturers', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }

  getManu(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getManufacturer/${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveManu(manu) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveManufacturer/', manu).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteManu(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteManufacturer?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
