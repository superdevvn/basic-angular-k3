import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class UnitService {

  constructor(private apiService: ApiService) { }
  getUnits() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getUnits', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getUnit(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getUnit/${id}`).then(unit => {
        resolve(unit);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveUnit(unit) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveUnit', unit).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteUnit(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteUnit?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
