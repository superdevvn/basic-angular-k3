import { Component, OnInit } from '@angular/core';
import { RoleService } from './role.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NotifyService } from '../services/notify.service';
@Component({
    selector: 'app-role-detail',
    templateUrl: './role-detail.component.html'
})
export class RoleDetailComponent implements OnInit {
    Id: number;
    role: any = {};
    routerSubscription: any;
    title: string;
    constructor(
        private activatedRoute: ActivatedRoute,
        private roleService: RoleService,
        private router: Router,
        private location: Location,
        private notifyService: NotifyService
    ) { }

    ngOnInit() {
        
        this.activatedRoute.params.subscribe(params=>{
            this.Id = +params['Id'];
            if(this.Id > 0){
                this.roleService.getRole(this.Id).then(role=>{
                    this.role = role;
                }).catch(err=>{
                    alert(err);
                });
            }
        })
    }
    save(){
        this.roleService.saveRole(this.role).then(res=>{
            this.notifyService.printEditSuccess();
            this.goBack();
        })
    }
    
    goBack(): void{
        this.location.back();
      }
}
