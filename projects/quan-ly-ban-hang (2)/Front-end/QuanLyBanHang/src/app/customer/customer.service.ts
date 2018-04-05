import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class CustomerService {

  constructor(
      private apiService : ApiService
  ) { }
  
  
  getCustomers(){
      return new Promise((resolve, reject)=>{
          this.apiService.post('api/getCustomers', {}).then(customers=>{
              resolve(customers);
              console.log(customers);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  getCustomer(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getCustomer/${id}`).then(customer=>{
            resolve(customer);
        }).catch(err=>{
            reject(err);
        })
    })
  }

  save(customer: any){
    return new Promise((resolve, reject)=>{
        this.apiService.post("api/saveCustomer", customer).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

deleteCustomer(id){
    return new Promise((resolve, reject) => {
        this.apiService.delete(`api/deleteCustomer?id=${+id}`).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
  }
}
