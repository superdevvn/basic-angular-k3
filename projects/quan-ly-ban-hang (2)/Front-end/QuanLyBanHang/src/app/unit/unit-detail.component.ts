import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UnitService } from './unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html'
})
export class UnitDetailComponent implements OnInit {
    Id: number;
    unit : any = {};
  constructor(
    private cookieService: CookieService,
    private unitService: UnitService,
    private activatedRoute : ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.unitService.getUnitDetail(this.Id).then(unit=>{
                this.unit = unit;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  
  save(){
    this.unitService.save(this.unit).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}
