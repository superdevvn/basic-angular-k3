import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Location} from '@angular/common';
import { OrderService } from './order.service';
import { ProductService } from '../product/product.service';
import { CustomerService } from '../customer/customer.service';
import { NotifyService } from '../services/notify.service';
@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent implements OnInit {
    Id: number;
    order: any = {};
    routerSubscription: any;
    title: string;
    customers: any[];
    products: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private router: Router,
    private location: Location,
    private productService: ProductService,
    private customerService: CustomerService,
    private notifyService: NotifyService
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
    });

    this.customerService.getCustomers().then((customers:any[])=>{
        this.customers = customers;
    }).catch(()=>{
    });
    this.productService.getProducts().then((products:any[])=>{
        this.products = products;
    }).catch(()=>{
    });     
  }
  save(order){
    this.orderService.save(this.order).then(res=>{
       this.notifyService.printEditSuccess();
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }
}
