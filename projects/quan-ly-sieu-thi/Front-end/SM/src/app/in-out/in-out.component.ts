import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InoutService } from './inout.service';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {
  inouts: any[];
  constructor(private router: Router,
    private inoutService: InoutService,
    private loadingService: LoadingService,
    private notifyService: NotifyService) { }

  ngOnInit() {
    this.loadingService.start("../assets/images/gif/loading1.gif");
    this.inoutService.getInOuts().then((inouts: any[]) => {
      this.inouts = inouts;
      this.loadingService.stop();
    }).catch(err => {
      this.notifyService.error("Undefined error!");
      this.loadingService.stop();
    });
  }

  newInOut() {
    this.router.navigate(['main/inout-detail', 0]);
  }

  detail(inout) {
    this.router.navigate(['main/inout-detail', inout.Id]);
  }

  delete(inout) {
    this.notifyService.confirm("Delete", "Are you sure to delete?").then(res => {
      this.inoutService.deleteInOut(inout.Id).then(() => {
        this.notifyService.success("Deleting successful!");
        this.inoutService.getInOuts().then((inouts: any) => {
          this.inouts = inouts;
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
