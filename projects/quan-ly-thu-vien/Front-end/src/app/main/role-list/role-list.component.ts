import {Component, OnInit} from '@angular/core';
import {RoleListService} from "./role-list.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import swal from 'sweetalert2';
import {LoadingService} from "../../service/loading.service";

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

    loading: boolean = false;
    roles: any[];

    constructor(private rolesService: RoleListService,
                private router: Router,
                private notification: NotificationService,
                ) {
    }

    ngOnInit() {
        this.loading = true;
        this.rolesService.getRoles()
            .then((roles: any[]) => {
                this.roles = roles as any;
                console.log(this.roles);
                this.loading = false;
            })
    }


    create() {
        this.router.navigate(['/main/role/', 0]);
    }

    deleteRole(id: number) {
        this.notification.confirm('delete role').then(() => {
            this.rolesService.delete(id)
                .then(() => {
                    this.rolesService.getRoles()
                        .then((roles: any[]) => {
                            this.roles = roles;
                        })
                    this.notification.success('Delete success');
                });
        });
    }
}
