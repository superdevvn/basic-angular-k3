import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from '../services/notify.service';
import { LoadingService } from '../services/loading.service';
import { ManufacturerService } from './manufacturer.service';

@Component({
  selector: 'app-manu-detail',
  templateUrl: './manu-detail.component.html',
  styleUrls: ['./manu-detail.component.css']
})
export class ManuDetailComponent implements OnInit {
  id: number;
  manu: any = {};
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private manuService: ManufacturerService,
    private notifyService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-id").removeAttr("hidden");
        $(".hl-readonly").attr("readonly", "true");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.manuService.getManu(this.id).then(manu => {
          this.manu = manu;
          this.loadingService.stop();
        }).catch(err=>{
          this.notifyService.error("Loading failed!");
          this.loadingService.stop();
        });
      };
    });
  }

  cancel(){
    this.router.navigate(['main/manu-list']);
  }

  //chưa save đc
  save() {
    this.manuService.saveManu(this.manu).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/manu-detail", res.Id]);
      this.notifyService.success("Save successful!");
      this.router.navigate(["main/manu-list"]);
    }).catch(err => {
      this.notifyService.error("Save failure!");
    });
  }
}
