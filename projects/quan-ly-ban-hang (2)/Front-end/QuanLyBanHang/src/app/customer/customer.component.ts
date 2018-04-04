import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: any[];
  constructor(
    private cookieService: CookieService,
    private customerService: CustomerService,
    private router: Router,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.customerService.getCustomers().then((customers: any[]) => {
      this.customers = customers;
      console.log(customers);
    });
  }
  newCustomer() {
    this.router.navigate(['main/customer-detail', 0]);
  }
  detail(customer){
    this.router.navigate(['main/customer-detail', customer.Id]);
  }

  delete(Id: string){
    this.customerService.delete(Id).then(()=>{
      alert("Xoa thanh cong");
    }).catch(()=>{
      alert("xoa that bai");
    })
  }
}
