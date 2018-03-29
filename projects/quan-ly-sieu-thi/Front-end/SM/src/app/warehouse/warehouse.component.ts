import { Component, OnInit } from '@angular/core';
import { WarehouseService } from './warehouse.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  whs: any[];
  constructor(private router: Router,
    private whService: WarehouseService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.whService.getWhs().then((whs: any[]) => {
      this.whs = whs;
      console.log(whs);
      this.loadingService.stop();
    }).catch(err => {
      // console.log(err);
      // this.loadingService.stop();
    });
  }

  newWh() {
    this.router.navigate(['main/wh-detail', 0]);
  }

  detail(manu) {
    this.router.navigate(['main/wh-detail', manu.Id]);
  }
}
