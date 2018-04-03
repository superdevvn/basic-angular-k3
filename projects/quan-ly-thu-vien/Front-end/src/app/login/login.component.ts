import {Component, OnInit} from '@angular/core';

import {LoginService} from './login.service';
import {Router} from "@angular/router";
import {NotificationService} from "../service/notification.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;
    loading = false;

    constructor(private router: Router, private loginService: LoginService, private notification : NotificationService) {
    }

    ngOnInit() {

    }

    login() {

        this.loginService.login(this.username, this.password)
            .then(() => {

                this.router.navigate(["main/role-list"]);

            })
            .catch(err => {

                console.log(err);
                this.notification.error(err.Message);
            })
    }

}
