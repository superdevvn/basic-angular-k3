import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotifyService } from '../services/notify.service';

@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {
    id: number;
    role: any = {};
    constructor(
        private router:Router,
        private activatedRoute: ActivatedRoute,
        private roleService: RoleService,
    private notifiService: NotifyService) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params=>{
            this.id = +params['id'];
            if(this.id > 0){
                this.roleService.getRole(this.id).then(role=>{
                    this.role=role;
                })
            }
        });
    }

    save(){
        this.roleService.saveRole(this.role).then(role=>{
            this.roleService.getList().then((role :any)=>{
                this.role = role;
            })
        });
    }
}
