import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class BookingService {

  constructor(private apiService:ApiService) { }



getInOuts(){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/getInOuts/',{}).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

getInOut(id){
  return new Promise((resolve,reject)=>{
    this.apiService.get(`/api/getInOut/${id}`).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

saveInOut(role){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/saveInOut/',role).then(res=>{
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