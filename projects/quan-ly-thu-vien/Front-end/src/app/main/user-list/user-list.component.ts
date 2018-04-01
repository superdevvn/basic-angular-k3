import {Component, OnInit} from '@angular/core';
import {UserListService} from "./user-list.service";
import {Router} from "@angular/router";
import swal from  'sweetalert2';
import {NotificationService} from "../../service/notification.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    users: any[];
    loading = false;

    constructor(private userlistService: UserListService,
                private router: Router,
                private notification: NotificationService) {
    }

    ngOnInit() {
        this.loading = true;
        this.userlistService.getUsers()
            .then((users: any[]) => {
                this.users = users;
                console.log(this.users);
                this.loading = false;
            })
            .catch(err => {
                alert(err);
            })
    }

    createUser() {
        this.router.navigate(['/main/user/', 0]);
    }

    delete(user) {

        this.userlistService.deleteUser(user.Id).then(() => {
            this.userlistService.getUsers().then((users: any[]) => {
                this.users = users;

                console.log(" this is new userlist after hit delete", this.users);
            });
        });


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
        //         console.log("this is user of user list", user);
        //         this.userlistService.deleteUser(user.Id)
        //             .then(() => {
        //                 this.userlistService.getUsers()
        //                     .then((users: any[]) => {
        //                         this.users = users;
        //                     })
        //                 this.notification.printDeleteSuccess();
        //             })
        //     }
        // })


    }

}
