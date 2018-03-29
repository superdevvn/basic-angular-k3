import {Component, OnInit} from '@angular/core';
import {RoleListService} from "./role-list.service";
import {Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import swal from 'sweetalert2';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html',
    styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

    roles: any[];

    constructor(private rolesService: RoleListService,
                private router: Router,
                private notification: NotificationService) {
    }

    ngOnInit() {
        this.rolesService.getRoles()
            .then((roles: any[]) => {
                this.roles = roles as any;
                console.log(this.roles);
            })
    }


    create() {
        this.router.navigate(['/main/role/', 0]);
    }

    deleteRole(id: number) {
        swal({
            title: 'Are you sure?',
            text: "Do you want to delete this",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.rolesService.delete(id)
                    .then(() => {
                        this.rolesService.getRoles()
                            .then((roles: any[]) => {
                                this.roles = roles;
                            })
                        this.notification.printDeleteSuccess();
                    })
            }
        })


    }

}
