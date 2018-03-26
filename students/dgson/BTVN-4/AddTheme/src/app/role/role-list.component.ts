import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './role.service';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-role-list',
    templateUrl: './role-list.component.html'
})

export class RoleListComponent implements OnInit {
    roles: any[];

    constructor( 
        private router: Router,
        private roleService: RoleService,
        private loadingService: LoadingService
    ) { }

    ngOnInit() {
        this.loadingService.star();
        this.roleService.getList().then((roles:any[])=>{
            this.roles = roles;
            this.loadingService.stop();
        })
    }

    detail(role){
        this.router.navigate(['main/role-detail',role.Id]);
    }

    delete(role){

    }
}
