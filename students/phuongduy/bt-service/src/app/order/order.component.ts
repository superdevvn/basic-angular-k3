import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OrderService } from './order.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: any[];
  constructor(
    private cookieService: CookieService,
    private oderService: OrderService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.oderService.getOrders().then((orders: any[]) => {
      this.orders = orders;
    }).then(()=>{
      this.loadingService.stop();
    })
  }
  newOrder() {
    this.router.navigate(['main/order-detail', 0]);
  }
  detail(order){
    this.router.navigate(['main/order-detail', order.Id]);
  }

}
