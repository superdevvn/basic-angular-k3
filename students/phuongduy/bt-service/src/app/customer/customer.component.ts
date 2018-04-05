import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { NotifyService } from '../services/notify.service';

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
    private loadingService: LoadingService,
    private notifyService: NotifyService
  ) { }

  ngOnInit() {
    this.loadingService.start();
    this.customerService.getCustomers().then((customers: any[]) => {
      this.customers = customers;
      this.loadingService.stop();
    })
    ;
  }
  newCustomer() {
    this.router.navigate(['main/customer-detail', 0]);
  }
  detail(customer){
    this.router.navigate(['main/customer-detail', customer.Id]);
  }

  delete(id: number) {
    this.notifyService.confirm("Bạn có muốn xóa không?").then(()=>{
      this.customerService.deleteCustomer(id).then(() => {
        this.customerService.getCustomers().then((customers: any[]) => {
          this.customers = customers;
        });
      });
      this.notifyService.printDeleteSuccess();
    }).catch(()=>{
    });
  }
}
