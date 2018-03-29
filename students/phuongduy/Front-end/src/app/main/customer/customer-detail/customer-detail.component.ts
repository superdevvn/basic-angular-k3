import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../../service/notification.service";

@Component({
    selector: 'app-customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

    id: number;
    customer: any = {};
    isEdit: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private cusService: CustomerService,
                private notification: NotificationService,
                private router: Router) {
    }

    ngOnInit() {
        console.log("customer begin");
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            if (this.id > 0) {
                this.cusService.getCustomer(this.id)
                    .then(res => {
                        this.customer = res;
                    })
                    .catch(err => alert(err));
            }
        })
    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    save() {
        this.cusService.saveCustomer(this.customer)
            .then((res: any) => {
                if (this.id === 0) {
                    this.router.navigate(['/main/customer-list']);
                } else {
                    this.notification.printEditSuccess();
                }
            })
    }


// .then((res: any) => {
//     //i == 0 là tạo mới
//     if (this.id === 0) {
//     this.router.navigate(['/main/role-list']);
//
// } else {// id != 0 : sửa
//     this.notification.printEditSuccess();
// }
// })
}
