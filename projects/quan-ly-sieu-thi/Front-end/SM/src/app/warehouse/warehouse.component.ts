import { Component, OnInit } from '@angular/core';
import { WarehouseService } from './warehouse.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  whs: any[];
  constructor(private router: Router,
    private whService: WarehouseService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.whService.getWhs().then((whs: any[]) => {
      this.whs = whs;
      console.log(whs);
      this.loadingService.stop();
    }).catch(err => {
      this.loadingService.stop();
      this.notifyService.error("Loading failed!");
    });
  }

  newWh() {
    this.router.navigate(['main/wh-detail', 0]);
  }

  detail(wh) {
    this.router.navigate(['main/wh-detail', wh.Id]);
  }

  delete(wh) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.whService.deleteWh(wh.Id).then(() => {
        this.notifyService.success("Delete successful!");
        this.whService.getWhs().then((whs: any) => {
          this.whs = whs;
        }).catch(err => {
          this.notifyService.error("Reloading failed!");
        });
      }).catch(err => {
        this.notifyService.error(err.message);
      })
    }).catch(err => {
      this.notifyService.error("Deleting failed!");
    });
  }
}
