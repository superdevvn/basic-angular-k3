import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { ManufacturerService } from './manufacturer.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {
  manus: any[];
  constructor(private router: Router,
    private manuService: ManufacturerService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.manuService.getManus().then((manus: any[]) => {
      this.manus = manus;
      console.log(manus);
      this.loadingService.stop();
    }).catch(err => {
      // console.log(err);
      // this.loadingService.stop();
    });
  }

  newManu() {
    this.router.navigate(['main/manu-detail', 0]);
  }

  detail(manu) {
    this.router.navigate(['main/manu-detail', manu.Id]);
  }

}
