import {Component, OnInit} from '@angular/core';
import {RoleDetailService} from "./role-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {LoadingService} from "../../service/loading.service";

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html',
    styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

    role: any = {};
    id: number;
    isEdit = false;
    loading = false;


    constructor(private roleDetailService: RoleDetailService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private notification: NotificationService,

    ) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params.subscribe(params => {
            this.id = +params['id'];
            //id > 0 lấy role theo ID
            if (this.id > 0) {
                this.roleDetailService.getRoleByID(this.id)
                    .then((res: any) => {
                        this.role = res;
                        this.loading = false;
                    })
            }
            this.loading = false;
        })
    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    save() {
        this.roleDetailService.saveRole(this.role)
            .then((res: any) => {
                //i == 0 là tạo mới
                if (this.id === 0) {
                    this.router.navigate(['/main/role-list']);

                } else {// id != 0 : sửa
                    this.notification.printEditSuccess();
                }
            })
    }

}
