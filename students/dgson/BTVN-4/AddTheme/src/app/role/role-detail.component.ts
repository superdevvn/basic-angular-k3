import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from './role.service';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html'
})

export class RoleDetailComponent implements OnInit {
    id: number;
    role: any = {};
    constructor(
        private router: Router,
    private roleService: RoleService,
    private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params=>{
            this.id = +params['id'];
            if(this.id > 0) {
                this.roleService.getRole(this.id).then(role=>{
                    this.role = role;
                })
            }
        });
    }

    save() {
        this.roleService.saveRole(this.role);
    }
}