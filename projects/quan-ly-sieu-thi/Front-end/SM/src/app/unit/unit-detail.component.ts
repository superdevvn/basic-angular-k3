import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UnitService } from './unit.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './unit-detail.component.html',
  styleUrls: ['./unit-detail.component.css']
})
export class UnitDetailComponent implements OnInit {
  id: number;
  unit: any = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private unitService: UnitService,
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.unitService.getUnit(this.id).then(unit => {
          this.unit = unit;
          this.loadingService.stop();
        }).catch(err=>{
          this.loadingService.stop();
          this.notifyService.error("Loading failed!");
        })
      };
    });
  }

  cancel() {
    this.router.navigate(['main/unit-list']);
  }

  save() {
    this.unitService.saveUnit(this.unit).then((res: any) => {
      if (this.id == 0) this.router.navigate(['main/unit-detail', res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(['main/unit-list']);
    }).catch(err => {
      this.notifyService.error("Saving failed!");
    })
  }
}
