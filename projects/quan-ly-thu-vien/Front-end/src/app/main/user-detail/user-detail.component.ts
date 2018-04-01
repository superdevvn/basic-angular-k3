import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../service/api-service.service";
import {UserDetailService} from "./user-detail.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NotificationService} from "../../service/notification.service";
import {RoleListService} from "../role-list/role-list.service";
import {UserListService} from "../user-list/user-list.service";

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    user: any = {}
    id: number;
    isEdit = false;
    roles: any[];
    users: any[];
    loading = false;

    constructor(private userService: UserDetailService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private notification: NotificationService,
                private roleService: RoleListService,
                private userListService: UserListService) {
    }

    ngOnInit() {
        this.loading = true;
        this.activatedRoute.params.subscribe(params => {
            this.roleService.getRoles()
                .then((roles: any) => {
                    this.roles = roles;
                    console.log(this.roles);
                    if (this.id == 0) {
                        this.user.RoleId = roles[0].Id;
                    }
                });
            this.id = +params['id'];
            if (this.id > 0) {
                this.userService.getUserByID(this.id)
                    .then(res => {
                        this.user = res;
                        console.log('User by ID ', this.user);
                    })
            }
        });
        this.userListService.getUsers()
            .then((users: any) => {
                this.users = users;
                this.loading = false;
            })


    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    save() {
        this.userService.saveUser(this.user)
            .then((res: any) => {
                if (this.id === 0) {
                    this.router.navigate(['/main/user-list']);
                }
                else {
                    this.notification.printEditSuccess();
                }
            })
    }
}
