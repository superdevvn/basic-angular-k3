import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ProductsService {

  constructor(
      private apiService : ApiService
  ) { }
  
  getProductList() {
    return new Promise((resolve,reject)=>{
      this.apiService.post("api/getProducts",{}).then(products=>{
        resolve(products);
      }).catch(err=>{
        reject(err);
      })
    })
  }

  getProduct(id:number) {
    return new Promise((resolve,reject)=>{
      this.apiService.get(`api/getProduct/${id}`).then(product=>{
        resolve(product);
      }).catch(err=>{
        reject(err);
      })
    })
  }

  saveProduct(product:any) {
    return new Promise((resolve,reject)=>{
      this.apiService.post("api/saveProduct", product).then(product=>{
        resolve(product);
      }).catch(err=>{
        reject(err);
      })
    })
  }

  deleteProduct(id){
    return new Promise((resolve,reject)=>{
      this.apiService.delete(`api/deleteProduct?id=${id}`).then(product=>{
        resolve(product);
      }).catch(err=>{
        reject(err);
      })
    })
  }

}
