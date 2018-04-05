import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { UnitService } from './unit.service';
import { Router } from '@angular/router';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';
@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  units : any[];
  constructor(
    private cookieService: CookieService,
    private unitService: UnitService,
    private router: Router,
    private notifyService: NotifyService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.unitService.getUnits().then((units: any)=>{
      this.units = units;
      this.loadingService.stop();
    }).catch(err=>{
      alert(err);
    })
  }
  
  newUnit(){
    this.router.navigate(['main/unit-detail', 0]);
  }

  detail(unit){
    this.router.navigate(['main/unit-detail', unit.Id]);
  }

  deleteUnit(Id: string){
    this.unitService.deleteUnit(Id).then(()=>{
      alert("Xoa thanh cong");
    }).catch(()=>{
      alert("xoa that bai");
    })
  }
}
