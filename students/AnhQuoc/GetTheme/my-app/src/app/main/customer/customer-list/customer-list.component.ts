import {Component, OnInit, wtfLeave} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    customers: any[];

    constructor(private customerService: CustomerService, private router: Router) {
    }

    ngOnInit() {
        this.customerService.getCustomers()
            .then((res: any[]) => {
                this.customers = res;
            })
            .catch(err => {
                alert(err)
            })

    }

    create() {
        this.router.navigate(['/main/customer', 0]);
    }

}
