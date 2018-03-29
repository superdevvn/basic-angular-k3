import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class CustomerService {

  constructor(private apiService:ApiService) { }



getCustomers(){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/getCustomers/',{}).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

getCustomer(id){
  return new Promise((resolve,reject)=>{
    this.apiService.get(`/api/getCustomer/${id}`).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

saveCustomer(role){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/saveCustomer/',role).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

deleteRole(id) {
  return new Promise((resolve, reject) => {
    this.apiService.delete(`api/deleteRole?id=${id}`).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

}