import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ManufacturerService } from './manufacturer.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

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
    private loadingService: LoadingService,
    private notifyService: NotifyService
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

  delete(id: number) {
    this.notifyService.confirm("Bạn có muốn xóa không?").then(()=>{
      this.manufacturerService.deleteManufacturer(id).then(() => {
        this.manufacturerService.getManufacturers().then((manufacturers: any[]) => {
          this.manufacturers = manufacturers;
        });
      });
      this.notifyService.printDeleteSuccess();
    }).catch(()=>{
    });
  }
}
