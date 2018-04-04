import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class RoleService {

  constructor(
      private apiService : ApiService
  ) { }
  
  getRoleList(){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/getRoles", {}).then(roles =>{
              resolve(roles);
          }).catch(err=>{
              reject(err);
          })
      })
  }
  getRoleDetail(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getRole/${id}`).then(role =>{
            resolve(role);
        }).catch(err=>{
            reject(err);
        })
    })
  }
  saveRole(role: any){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/saveRole", role).then(res=>{
              resolve(res);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  deleteRole(id){
    return new Promise((resolve, reject) => {
        this.apiService.delete(`api/deleteRole?id=${id}`).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
  }
}
