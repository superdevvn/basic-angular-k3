import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from './manufacturer.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
})
export class ManufacturerDetailComponent implements OnInit {
    Id: number;
    manu: any = {};
    routerSubscription: any;
    title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private manufacturerService: ManufacturerService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.manufacturerService.getManufacturerDetail(this.Id).then(manu=>{
                this.manu = manu;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  save(){
    this.manufacturerService.save(this.manu).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}
