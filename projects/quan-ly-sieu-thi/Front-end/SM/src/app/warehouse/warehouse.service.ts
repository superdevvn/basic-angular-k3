import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class WarehouseService {

  constructor(private apiService: ApiService) { }
  getWhs() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getWarehouses', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }

  getWh(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getWarehouse/${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveWh(wh) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveWarehouse/', wh).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteWh(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteWarehouse?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
