import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-v1',
  templateUrl: './dashboard-v1.component.html',
  styleUrls: ['./dashboard-v1.component.css']
})
export class DashboardV1Component implements OnInit {
  inputA: number;
  inputB: number;
  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

}
