import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseService } from './warehouse.service';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-warehouse-detail',
  templateUrl: './warehouse-detail.component.html',
  styleUrls: ['./warehouse-detail.component.css']
})
export class WarehouseDetailComponent implements OnInit {
  id: number;
  wh: any = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private whService: WarehouseService,
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.whService.getWh(this.id).then(wh => {
          this.wh = wh;
          this.loadingService.stop();
        }).catch(err => {
          this.loadingService.stop();
          this.notifyService.error("Loading failed!");
        });
      };
    });
  }

  cancel() {
    this.router.navigate(['main/wh-list']);
  }

  //chưa save đc
  save() {
    this.whService.saveWh(this.wh).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/wh-detail", res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(["main/wh-list"]);
    }).catch(err => {
      this.notifyService.error("Save fail!");
    });
  }
}
