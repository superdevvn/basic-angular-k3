import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class CategoryService {

  constructor(private apiService: ApiService) { }
  getCategories() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getCategories', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    })
  }

  getCategory(id: number) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getCategory/${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  saveCategory(manu) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveCategory/', manu).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteCategory(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteCategory?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
