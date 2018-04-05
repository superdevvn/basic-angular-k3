import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class CategoryService {

  constructor(
      private apiService : ApiService
  ) { }
  
  
  getCategories(){
      return new Promise((resolve, reject)=>{
          this.apiService.post('api/getCategories', {}).then(categories=>{
              resolve(categories);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  getCategory(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getCategory/${id}`).then(category=>{
            resolve(category);
        }).catch(err=>{
            reject(err);
        })
    })
  }

  save(unit: any){
    return new Promise((resolve, reject)=>{
        this.apiService.post("api/saveCategory", unit).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

deleteCategory(id){
    return new Promise((resolve, reject) => {
        this.apiService.delete(`api/deleteCategory?id=${+id}`).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
  }
}
