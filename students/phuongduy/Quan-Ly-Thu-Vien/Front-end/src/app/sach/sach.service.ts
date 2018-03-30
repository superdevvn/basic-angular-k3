import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class SachService {

  constructor(private apiService:ApiService) { }



getBooks(){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/getBooks/',{}).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

getBook(id){
  return new Promise((resolve,reject)=>{
    this.apiService.get(`/api/getBook/${id}`).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

saveBook(role){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/saveBook/',role).then(res=>{
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