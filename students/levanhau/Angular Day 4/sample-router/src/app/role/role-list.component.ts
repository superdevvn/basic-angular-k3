import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
    roles: any[];

    constructor(private router:Router,
        private roleService: RoleService) { }

    ngOnInit() {
        this.roleService.getList().then((roles: any[]) => {
            this.roles = roles;
        });
    }

    detail(role) {
        this.router.navigate(['main/role-detail', role.Id]);
    }

    delete(role) {

    }
}
