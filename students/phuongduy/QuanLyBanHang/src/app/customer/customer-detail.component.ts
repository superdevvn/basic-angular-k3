import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customer.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-customer',
  templateUrl: './customer-detail.component.html',
})
export class CustomerDetailComponent implements OnInit {
    Id: number;
    customer: any = {};
    routerSubscription: any;
    title: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params=>{
        this.Id = +params['Id'];
        if(this.Id > 0){
            this.customerService.getCustomer(this.Id).then(customer=>{
                this.customer = customer;
            }).catch(err=>{
                alert(err);
            });
        }
    })
  }
  save(){
    this.customerService.save(this.customer).then(res=>{
        alert("Luu thanh cong");
        this.location.back();
    })
  }
  goBack(){
      this.location.back();
  }

  
}
