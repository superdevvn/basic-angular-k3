import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class UserService {

  constructor(private apiService:ApiService) { }

  getUsers(){
    return new Promise((resolve,reject)=>{
      this.apiService.post('/api/getUsers/',{}).then(res=>{
        console.log(res.json());
        resolve(res.json());
  
      }).catch(err=>{
        console.error(err);
        reject(err);
      })
    })
  }
  getUser(id){
    return new Promise((resolve,reject)=>{
      this.apiService.get(`/api/getUser/${id}`).then(res=>{
        console.log(res.json());
        resolve(res.json());
  
      }).catch(err=>{
        console.error(err);
        reject(err);
      })
    })
  }
  
  
  saveUser(user){
    return new Promise((resolve,reject)=>{
      this.apiService.post('/api/saveUser/',user).then(res=>{
        console.log(res.json());
        resolve(res.json());
  
      }).catch(err=>{
        console.error(err);
        reject(err);
      })
    })
  }
  
  deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteRole?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}



