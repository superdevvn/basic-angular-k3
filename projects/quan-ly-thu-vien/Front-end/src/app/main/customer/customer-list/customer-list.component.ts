import {Component, OnInit, wtfLeave} from '@angular/core';
import {CustomerService} from "../customer.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2'
import {NotificationService} from "../../../service/notification.service";

@Component({
    selector: 'app-customer-list',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

    customers: any[];

    constructor(private customerService: CustomerService, private router: Router, private notificationService: NotificationService) {
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

    delete(customer) {
        // swal({
        //     title: 'Are you sure?',
        //     text: "Do you want to delete this",
        //     type: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.value) {
        //         this.customerService.deleteRole(customer.Id)
        //             .then(() => {
        //                 this.customerService.getCustomers()
        //                     .then((customers: any[]) => {
        //                         this.customers = customers;
        //                     });
        //             });
        //         this.notificationService.printDeleteSuccess();
        //     }
        // })
        console.log("this is customer hit delete", customer.Id);
        this.customerService.deleteCustomer(customer.Id)
            .then(() => {
                this.customerService.getCustomers()
                    .then((customers: any[]) => {
                        this.customers = customers;
                    });
            });
    }

}
