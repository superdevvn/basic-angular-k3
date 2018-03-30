import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitService } from './unit.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  units: any[];
  constructor(private router: Router,
    private unitService: UnitService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.unitService.getUnits().then((units: any[]) => {
      this.units = units;
      this.loadingService.stop();
    }).catch(err => {
      // this.loadingService.stop();
    })
  }

  newUnit() {
    this.router.navigate(['main/unit-detail', 0]);
  }

  detail(unit) {
    this.router.navigate(['main/unit-detail', unit.Id]);
  }

}
