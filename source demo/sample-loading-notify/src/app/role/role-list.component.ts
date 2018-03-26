import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html'
})
export class RoleListComponent implements OnInit {
    roles: any[];

    constructor(
        private router: Router,
        private roleService: RoleService,
        private loadingService: LoadingService) { }

    ngOnInit() {
        this.loadingService.start();
        this.roleService.getList().then((roles: any[]) => {
            this.loadingService.stop();
            this.roles = roles;
        }).catch(err => {
            this.loadingService.stop();
        });
    }

    detail(role) {
        this.router.navigate(['main/role-detail', role.Id]);
    }

    delete(role) {

    }
}
