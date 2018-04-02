import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Location} from '@angular/common';
import { OrderService } from './order.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent implements OnInit {
    Id: number;
    order: any = {};
    routerSubscription: any;
    title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.orderService.getOrder(this.Id).then(order=>{
                this.order = order;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  save(){
    this.orderService.save(this.order).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}
