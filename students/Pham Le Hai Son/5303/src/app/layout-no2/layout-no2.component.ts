import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

@Component({
  selector: 'app-layout-no2',
  templateUrl: './layout-no2.component.html',
  styleUrls: ['./layout-no2.component.css']
})
export class LayoutNo2Component implements OnInit {

  constructor(private loadingService:LoadingService, private notify:NotifyService) { }

  ngOnInit() {
  }
  showloading(){
    this.loadingService.star();
  }
  success(){
    this.notify.succes("hi");
  }
  confirm(){
    this.notify.confirm("hello");
  }
}
