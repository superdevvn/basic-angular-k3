import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-dashboard-v3',
  templateUrl: './dashboard-v3.component.html',
  styleUrls: ['./dashboard-v3.component.css']
})
export class DashboardV3Component implements OnInit {

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
  }
  loading(){
    this.loadingService.start();
  }
}
