import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class UnitService {

  constructor(
      private apiService : ApiService,
      private cookieService: CookieService
  ) { }
  
  
  getUnits(){
      return new Promise((resolve, reject)=>{
          this.apiService.post('api/getUnits', {}).then(units=>{
              resolve(units);
          }).catch(err=>{
              reject(err);
          })
      })
  }

  getUnitDetail(id: number){
    return new Promise((resolve, reject)=>{
        this.apiService.get(`api/getUnit/${id}`).then(unit=>{
            resolve(unit);
        }).catch(err=>{
            reject(err);
        })
    })
  }

  save(unit: any){
    return new Promise((resolve, reject)=>{
        this.apiService.post("api/saveUnit", unit).then(res=>{
            resolve(res);
        }).catch(err=>{
            reject(err);
        })
    })
}

    deleteUnit(id){
        debugger
        return new Promise((resolve, reject) => {
            this.apiService.delete(`api/deleteUnit?id=${+id}`).then(res => {
            resolve(res);
            debugger
            alert("1");
            }).catch(err => {
                debugger
            reject(err);
            alert("12");
            });
        });
    }
}
