import {Component, OnInit} from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
declare var $: any;
declare var Core: any;
@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    author: any;

    constructor(private loginService: LoginService, private router: Router) {
    }

    ngOnInit() {
        this.loginService.getAuthorize()
            .then(author => {
                this.author = author;
                console.log("author: ",this.author);
            })
            .catch(err => {
                this.router.navigate(['login']);
            })
    }

}