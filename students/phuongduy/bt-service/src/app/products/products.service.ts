import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ProductsService {

  constructor(
      private apiService : ApiService
  ) { }
  

  getProducts(){
    return new Promise((resolve, reject)=>{
        this.apiService.post("api/getProducts", {}).then(res =>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}
}
