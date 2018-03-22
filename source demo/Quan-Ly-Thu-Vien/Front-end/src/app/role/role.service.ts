import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class RoleService {

  constructor(private apiService:ApiService) { }



getRoles(){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/getRoles/',{}).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

getRole(id){
  return new Promise((resolve,reject)=>{
    this.apiService.get(`/api/getRole/${id}`).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

saveRole(role){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/saveRole/',role).then(res=>{
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