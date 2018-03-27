import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-layout-no2',
  templateUrl: './layout-no2.component.html',
  styleUrls: ['./layout-no2.component.css']
})
export class LayoutNo2Component implements OnInit {

  constructor(private loadingService: LoadingService,
  private notifyService:NotifyService) { }

  ngOnInit() {
  }
  showLoading(){
    this.loadingService.start();
  }

  success(){
    this.notifyService.success("Tao là Hậu");
  }

  confirm(){
    this.notifyService.confirm("Tao là Hậu").then(()=>{
      this.notifyService.success("YES");
    }).catch(()=>{
      this.notifyService.success("NO");
    });
  }
}
