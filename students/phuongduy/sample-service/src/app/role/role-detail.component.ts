import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {
    id: number;
    role: any = {};
    constructor(
        private roleService: RoleService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params =>{
            this.id = +params['Id'];
            if(this.id > 0){
                this.roleService.getRole(this.id).then(role=>{
                    this.role = role;
                })
            }
        })
    }
    save(){
        this.roleService.saveRole(this.role).then
    }
}
