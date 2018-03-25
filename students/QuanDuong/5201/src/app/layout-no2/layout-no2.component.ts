import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-layout-no2',
  templateUrl: './layout-no2.component.html',
  styleUrls: ['./layout-no2.component.css']
})
export class LayoutNo2Component implements OnInit {

  constructor(private loadingService: LoadingService, private notifyService:NotifyService) { }

  ngOnInit() {
  }
  showLoading(){
    
    this.loadingService.start();
  }
  success(){
    this.notifyService.success("hey");
  }
  confirm(){
    this.notifyService.confirm("ABC");
  }
}
