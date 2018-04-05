import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class OrderService {

  constructor(
      private apiService : ApiService
  ) { }
  
  getOrders(){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/getOrders", {}).then(orders =>{
              resolve(orders);
          }).catch(err=>{
              reject(err);
          })
      })
  }
  getOrder(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getOrder/${id}`).then(manufacturer =>{
            resolve(manufacturer);
        }).catch(err=>{
            reject(err);
        })
    })
  }
  save(order: any){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/saveOrder", order).then(res=>{
              resolve(res);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  delete(id){
    return new Promise((resolve, reject) => {
        this.apiService.delete(`api/deleteOrder?id=${id}`).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
  }
}
