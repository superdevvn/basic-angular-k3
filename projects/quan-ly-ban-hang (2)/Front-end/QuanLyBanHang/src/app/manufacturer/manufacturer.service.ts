import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class ManufacturerService {

  constructor(
      private apiService : ApiService
  ) { }
  
  getManufacturers(){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/getManufacturers", {}).then(manufacturer =>{
              resolve(manufacturer);
              console.log(manufacturer)
          }).catch(err=>{
              reject(err);
          })
      })
  }
  getManufacturerDetail(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getManufacturer/${id}`).then(manufacturer =>{
            resolve(manufacturer);
        }).catch(err=>{
            reject(err);
        })
    })
  }
  save(manufacturer: any){
      return new Promise((resolve, reject)=>{
          this.apiService.post("api/saveManufacturer", manufacturer).then(res=>{
              resolve(res);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  delete(id){
    return new Promise((resolve, reject) => {
        this.apiService.delete(`api/deleteManufacturer?id=${id}`).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        });
      });
  }
}
