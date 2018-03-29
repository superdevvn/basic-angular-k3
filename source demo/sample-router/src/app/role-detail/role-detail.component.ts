import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {RoleService} from "../role-list/role.service";

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html',
    styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
    id: number;
    role: any;

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute,
                private roleSV: RoleService) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(param => {
            this.id = +param['Id'];
            if (this.id > 0) {
                this.roleSV.getRole(this.id).then(role => {
                    this.role = role;
                })
            }
        });
    }

}
