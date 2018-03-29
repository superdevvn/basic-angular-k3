import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListuserService } from '../user/listuser.service';
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
    private notityService: NotifyService,
    private loadingService: LoadingService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id > 0) {
        $(".hl-readonly").attr("readonly", "true");
        $(".hl-date").removeAttr("type");
        $(".hl-date").attr("type", "datetime");
        this.loadingService.start("../assets/images/gif/loading1.gif");
        this.manuService.getManu(this.id).then(manu => {
          this.manu = manu;
          this.loadingService.stop();
        });
      };
    });
  }

  cancel(){
    this.router.navigate(['main/user-list']);
  }

  //chưa save đc
  save() {
    this.manuService.saveManu(this.manu).then((res: any) => {
      if (this.id == 0) this.router.navigate(["main/user-detail", res.Id]);
      this.notityService.success("Save successful!");
      this.router.navigate(["main/user-list"]);
    }).catch(err => {
      this.notityService.error("Save failure!");
    });
  }
}
