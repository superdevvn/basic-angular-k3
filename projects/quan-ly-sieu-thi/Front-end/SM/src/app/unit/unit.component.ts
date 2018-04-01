import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from './unit.service';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  units: any[];
  constructor(private router: Router,
    private unitService: UnitService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.unitService.getUnits().then((units: any[]) => {
      this.units = units;
      this.loadingService.stop();
    }).catch(err => {
      this.notifyService.error("Loading failed!");
      this.loadingService.stop();
    })
  }

  newUnit() {
    this.router.navigate(['main/unit-detail', 0]);
  }

  detail(unit) {
    this.router.navigate(['main/unit-detail', unit.Id]);
  }

  delete(unit) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.unitService.deleteUnit(unit.Id).then(() => {
        this.notifyService.success("Delete successful!");
        this.unitService.getUnits().then((units: any) => {
          this.units = units;
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
