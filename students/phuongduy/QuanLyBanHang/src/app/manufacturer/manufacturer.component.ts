import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ManufacturerService } from './manufacturer.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  manufacturers : any[];
  constructor(
    private cookieService: CookieService,
    private manufacturerService: ManufacturerService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.manufacturerService.getManufacturers().then((manufacturer: any[]) => {
      this.manufacturers = manufacturer;
    }).then(()=>{
      this.loadingService.stop();
    })
  }
  newManufacturer() {
    this.router.navigate(['main/manufacturer-detail', 0]);
  }
  detail(manufacturer){
    this.router.navigate(['main/manufacturer-detail', manufacturer.Id]);
  }
}
