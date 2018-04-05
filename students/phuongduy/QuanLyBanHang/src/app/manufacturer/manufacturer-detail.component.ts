import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufacturerService } from './manufacturer.service';
import {Location} from '@angular/common';
import { NotifyService } from '../services/notify.service';
@Component({
  selector: 'app-manufacturer-detail',
  templateUrl: './manufacturer-detail.component.html',
})
export class ManufacturerDetailComponent implements OnInit {
    Id: number;
    manufacturer: any = {};
    routerSubscription: any;
    title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private manufacturerService: ManufacturerService,
    private router: Router,
    private location: Location,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.manufacturerService.getManufacturerDetail(this.Id).then(manufacturer=>{
                this.manufacturer = manufacturer;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  save(){
    this.manufacturerService.save(this.manufacturer).then(res=>{
        this.notifyService.printEditSuccess();
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}
