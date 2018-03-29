import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-layout-no2',
  templateUrl: './layout-no2.component.html',
  styleUrls: ['./layout-no2.component.css']
})
export class LayoutNo2Component implements OnInit {

  constructor(private loadingService: LoadingService, private notifyService: NotifyService) { }

  ngOnInit() {
  }

  showLoading() {
    this.loadingService.start();
  }

  showSuccess() {
    this.notifyService.success("Tao là Nghĩa! Đàn em Tài chó điên!");
  }

  showError() {
    this.notifyService.error("Một mình tao chấp hết! hết! hết! hết! hết! hết! hết!");
  }

  showConfirm() {
    this.notifyService.confirm("Bạn có đồng ý không?").then(() => {
      this.notifyService.success("Success");
    }).catch(() => {
      this.notifyService.error("Error");
    });
  }
}
