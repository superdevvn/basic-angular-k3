import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router"
import { LoadingService } from '../services/loading.service';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';
import { CustomerService } from './customer.service';
@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
customers: any[];
  constructor(private customerService: CustomerService, private router:Router, private loadingService: LoadingService,
  private apiService:ApiService, private Notification:NotificationService) { }

  ngOnInit() {
    this.customerService.getCustomers().then((customer:any[])=>{
    this.customers = customer;
    this.loadingService.stop();

    }).catch(err=>{
      alert(err);
      this.loadingService.stop();
    })
    }

    detail(customer){
      alert(customer.Name);
      this.router.navigate(["/main/customer-detail",customer.Id]);
    }

    create(){
      this.router.navigate(["/main/customer-detail",0]);
    }

    delete(customer) {
      this.customerService.deleteRole(customer.Id).then(() => {
        this.customerService.getCustomers().then((customers: any[]) => {
          this.customers = customer;
        });
      });
      this.Notification.success('Deleted');
    }

    
}
